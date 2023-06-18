// polygon.js에서 Polygon 클래스를 가져온다.
import { Polygon } from "./polygon.js"

class App {
    // 캔버스 크기를 조정하는 메서드
    constructor() {
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize()

        this.isDown = false;
        this.moveX = 0;
        this.offsetX = 0;

        document.addEventListener('pointerdown', this.onDown.bind(this), false);
        document.addEventListener('pointermove', this.onMove.bind(this), false);
        document.addEventListener('pointerup', this.onUp.bind(this), false);

        window.requestAnimationFrame(this.animate.bind(this));
    }

    // 캔버스의 크기롤 조정하는 메서드
    resize() {
        // 현재 창의 너비 절반을 저장. 캔버스와 다각형의 가로 크기 결정하는데 사용
        this.stageWidth = window.innerWidth;
        // 현재 창의 높이 절반을 저장. 캔버스와 다각형의 세로 크기 결정하는데 사용
        this.stageHeight = window.innerHeight;
        // 캔버스 요소의 너비를 설정. stageWidth에 pixelRatio를 곱해 고해상도 디스플레이에서도 픽셀 밀도를 유지한다.
        this.canvas.width = this.stageWidth * this.pixelRatio;
        // 캔버스 요소의 높이를 설정. 
        this.canvas.height = this.stageHeight * this.pixelRatio;
        // 캔버스 크기를 조정하여 고해상도 디스플레이에서 선명한 그래픽을 그릴 수 있음.
        this.ctx.scale(this.pixelRatio, this.pixelRatio)

        // 다각형의 초기 위치와 크기 
        this.polygon = new Polygon(
            // stageWidth를 절반으로 나눴기 때문에 가로 방향의 중앙위치
            this.stageWidth / 2,
            // 세로 방향에서 다각형이 화면 아래로 이동할 시작위치
            this.stageHeight + (this.stageHeight /5),
            // 다각형의 반지름, 다각형의 갯수
            this.stageHeight / 1,
            20
        )
    }
    // 애니메이션 처리하는 메서드. 매 프레임마다 캔버스를 지우고 Polygon 객체의 애니메이션 업데이트
    animate(ctx, moveX) {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.moveX *= 0.9;

        this.polygon.animate(this.ctx, this.moveX)
    }

    // 포인터 다운 이벤트 핸들러
    onDown(e) {
        this.isDown = true
        this.moveX = 0;
        this.offsetX = e.clientX;
    }
    // 포인터 이동 이벤트 핸들러
    onMove(e) {
        if (this.isDown) {
            this.moveX = e.clientX - this.offsetX;
            this.offsetX = e.clientX
        }
    }
    // 포인터 업 이벤트 핸들러
    onUp(e) {
        this.isDown = false
    }

}

// 페이지 로드 시 실행
window.onload = () => {
    new App();
}
// polygon.js에서 Polygon 클래스를 가져온다.
import { Polygon } from "./polygon.js";

class App {
    // 캔버스 크기를 조정하는 메서드
    constructor() {
        this.canvas = document.createElement("canvas");
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");

        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        window.addEventListener("resize", this.resize.bind(this), false);
        this.resize();

        this.isDown = false;
        this.moveX = 0;
        this.offsetX = 0;

        document.addEventListener("pointerdown", this.onDown.bind(this), false);
        document.addEventListener("pointermove", this.onMove.bind(this), false);
        document.addEventListener("pointerup", this.onUp.bind(this), false);

        window.requestAnimationFrame(this.animate.bind(this));
    }

    // 캔버스의 크기를 조정하는 메서드
    resize() {
        this.stageWidth = window.innerWidth; // 현재 창의 너비
        this.stageHeight = window.innerHeight; // 현재 창의 높이

        this.canvas.style.width = `${this.stageWidth}px`; // 캔버스 요소의 너비를 창의 너비와 동일하게 설정
        this.canvas.style.height = `${this.stageHeight}px`; // 캔버스 요소의 높이를 창의 높이와 동일하게 설정

        const scaleFactor = this.pixelRatio > 1 ? this.pixelRatio : 1; // 고해상도 디스플레이에서의 스케일 팩터 계산
        this.canvas.width = this.stageWidth * scaleFactor; // 캔버스의 너비를 스케일 팩터를 곱한 값으로 설정
        this.canvas.height = this.stageHeight * scaleFactor; // 캔버스의 높이를 스케일 팩터를 곱한 값으로 설정

        this.ctx.scale(scaleFactor, scaleFactor); // 캔버스 컨텍스트의 스케일 설정

        // 다각형의 초기 위치와 크기
        this.polygon = new Polygon(
            this.stageWidth / 2,
            this.stageHeight + this.stageHeight / 5,
            this.stageHeight / 1,
            20
        );
    }

    // 애니메이션 처리하는 메서드. 매 프레임마다 캔버스를 지우고 Polygon 객체의 애니메이션 업데이트
    animate() {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.moveX *= 0.9;

        this.polygon.animate(this.ctx, this.moveX);
    }

    // 포인터 다운 이벤트 핸들러
    onDown(e) {
        this.isDown = true;
        this.moveX = 0;
        this.offsetX = e.clientX;
    }

    // 포인터 이동 이벤트 핸들러
    onMove(e) {
        if (this.isDown) {
            this.moveX = e.clientX - this.offsetX;
            this.offsetX = e.clientX;
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
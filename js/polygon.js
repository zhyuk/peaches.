const PI2 = Math.PI * 2;

const images = [
    "img/archive_AOMG.jpg",
    "img/archive_BIBIGO.jpg",
    "img/archive_cocacola.png",
    "img/archive_casetify.png",
    "img/archive_kartrider.png",
    "img/archive_libilly.png",
    "img/archive_obey.jpg",
    "img/archive_recaro.png",
    "img/archive_uniqlo.png",
    "img/archive_nct127.png"
];

export class Polygon {
  constructor(x, y, radius, sides, rotate) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.sides = sides;
    this.rotate = 0;
  }

  animate(ctx, moveX) {
    ctx.save();

    const angle = PI2 / this.sides;
    const angle2 = PI2 / 6;

    ctx.translate(this.x, this.y);

    this.rotate -= moveX * 0.008;
    ctx.rotate(this.rotate);

    for (let i = 0; i < this.sides; i++) {
      const x = this.radius * Math.cos(angle * i);
      const y = this.radius * Math.sin(angle * i);

      ctx.save();

      // 이미지 로드 및 그리기
      const image = new Image();
      image.src = images[i % images.length];

      ctx.translate(x, y);
      ctx.rotate(((360 / this.sides) * i  + 90) * Math.PI / 180);

      ctx.drawImage(image, -50, -50, 300, 400);

      ctx.restore();
    }

    ctx.restore();
  }
}

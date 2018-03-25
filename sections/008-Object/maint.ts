class Point2 {
    x: number;
    y: number;

    draw() {
      console.log('X: '+ this.x + ', Y: '+ this.y);
    }

    getDistance(another: Point2) {

    }
}

let point: Point2 = new Point2();
point.x = 1;
point.y = 2;
point.draw();
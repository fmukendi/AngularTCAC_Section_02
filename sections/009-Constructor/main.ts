class Point3 {
    x: number;
    y: number;

    constructor(x?: number, y?:number) {
        this.x = x;
        this.y = y;
    }
    draw() {
      console.log('X: '+ this.x + ', Y: '+ this.y);
    }

    getDistance(another: Point2) {

    }
}

let p = new Point3(1, 2);
p.draw();
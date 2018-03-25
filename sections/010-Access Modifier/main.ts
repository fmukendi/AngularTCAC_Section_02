class Point4 {
    x: number;
    y: number;

    constructor(x?: number, y?:number) {
        this.x = x;
        this.y = y;
    }
    draw() {
      console.log('X: '+ this.x + ', Y: '+ this.y);
    }

    getDistance(another: Point4) {

    }
}

let p1 = new Point4(1, 2);
p1.draw();
class Point4 {
   private x: number;
   private y: number;

    constructor(x?: number, y?:number) {
        this.x = x;
        this.y = y;
    }
    public draw() {
      console.log('X: '+ this.x + ', Y: '+ this.y);
    }

    getDistance(another: Point4) {

    }
}

let p1 = new Point4(1, 2);
p1.draw();
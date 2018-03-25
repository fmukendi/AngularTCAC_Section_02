class Point5 {
 
     constructor(private x?: number,private y?:number) {
     }
     public draw() {
       console.log('X: '+ this.x + ', Y: '+ this.y);
     }
 
     getDistance(another: Point5) {
 
     }
 }
 
 let p2 = new Point5(1, 2);
 p2.draw();

/* 
let drawPoint = (x, y) => {
    // ......
}

let drawPoint = (point) => {
    // ......
} */

/* let drawPoint = (point: { x: number, y: number}) => {
    // ......
}
 */
interface Point {
    x: number,
    y: number
}

let drawPoint = (point: Point) => {
    // ......
}


drawPoint({
  x: 1,
  y: 2
});


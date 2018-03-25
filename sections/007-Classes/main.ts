
// cohesion --> be part of one unit



// bad cohesion

/* interface Point {
    x: number,
    y: number
}

let drawPoint2 = (point: Point) => {
    // ......
}

let getDistance = ( pointA: Point, pointB: Point) => {

}


drawPoint2({
  x: 1,
  y: 2
}); */


// high cohesion is good 

class Point {
    x: number;
    y: number;

    draw() {

    }

    getDistance(another: Point) {

    }


}
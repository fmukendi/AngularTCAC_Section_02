class Point6 {

    constructor(private x?: number, private y?: number) {
    }
    public draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getDistance(another: 6) {

    }

    // Methods
    getX() {
        return this.x;
    }

    setX(value: number) {
        if (value < 0)
            throw new Error('value cannot be less than 0.');
        this.x = value;
    }

    // Propertis
    get X() {
        return this.x;
    }

    set X(value: number) {
        if (value < 0)
            throw new Error('value cannot be less than 0.');
        this.x = value;
    }
}

let p3 = new Point6(1, 2);
let x = p3.getX();
p3.setX(10);
x = p3.X;
p3.X = 11;
p3.draw();
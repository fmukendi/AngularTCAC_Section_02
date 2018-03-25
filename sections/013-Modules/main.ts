export class Point6 {
    
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
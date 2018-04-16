

export class Car {
    protected horsePower:number;
    
    constructor(public color:string,
        private brand:string) {
    }

    start() {
        this.startEngine();
    }

    private startEngine() {
        console.log('vroum vroum');
    }
}

let car = new Car('red', 'lada');

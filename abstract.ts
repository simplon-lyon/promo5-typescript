

abstract class Animal {

    breath() {
        console.log('another day');
    }

    abstract growl():string;

}

class Goat extends Animal {
    growl(): string {
        return 'mêêêêêh';
    }
}

let animal:Animal = new Goat();
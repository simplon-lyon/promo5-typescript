
/**
 * Une classe abstraite est une classe qui pourra définir des méthodes
 * abstraites (des méthodes dont on ne défini que la signature, sans corps
 * ni algorithmie).
 * Elle ne peut, de ce fait, pas être instanciée,il faudra 
 * qu'elle soit héritée par une autre qui devra implémenter (définir l'algorithmie)
 * toutes les méthodes abstraites de la classe parente
 */
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
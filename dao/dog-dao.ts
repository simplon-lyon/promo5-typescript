import { Dao } from "./generic-dao";
import { SmallDog } from "../small-dog";

/**
 * Ici, on crée un Dao de chien qui hérite du Dao Générique en tant que
 * Dao<SmallDog>, le DogDao aura donc par défaut toutes les méthodes
 * de la classe Dao générique, mais avec les signatures des méthodes
 * typées SmallDog.
 * On ajoutera dans cette classe uniquement les méthodes spécifique à 
 * ce Dao, par exemple une méthode permettant de rechercher les chiens par
 * leur race
 */
export class DogDao extends Dao<SmallDog> {
    constructor() {
        super('http://localhost:8080/dog');
    }

    getByRace(race:string):Promise<SmallDog[]> {
        return fetch(this.url+'/race/'+race)
        .then(resp => resp.json());
    }
}
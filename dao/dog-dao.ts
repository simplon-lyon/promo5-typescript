import { Dao } from "./generic-dao";
import { SmallDog } from "../small-dog";


export class DogDao extends Dao<SmallDog> {
    constructor() {
        super('http://localhost:8080/dog');
    }

    getByRace(race:string):Promise<SmallDog[]> {
        return fetch(this.url+'/race/'+race)
        .then(resp => resp.json());
    }
}
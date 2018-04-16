import { SmallDog } from "./small-dog";


export interface Classic {
    repeat(count:number):string;
}


export class MaClasse implements Classic {

    repeat(count: number): string {
        return 'bloup';
    }
    
    methode() {
        console.log('bloup');
    }
}

export class Autre implements Classic, SmallDog {
    id?: number;
    name: string;
    race: string;
    birthdate: Date;
    property:string = 'bloup';
    
    repeat(count: number): string {
        console.log('doudidou');
        return 'rien';
    }
}


let instance:Classic = new Autre();
let instanceClasse:Autre = new Autre();
let instanceChien:SmallDog = new Autre();

instance.repeat(3);

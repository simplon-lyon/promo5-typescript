import { FirstInterface } from "./first-interface";
import { SmallDog } from "./small-dog";

let maVariable = 'bloup';
//On peut typer une variable pour dire qu'elle ne pourra
//contenir que le type indiqué (ici, du string)
let maString:string = 'true';

let uneVariable:number;

uneVariable = 10;
//Le type any indique que la variable peut contenir
//n'importe quel type de donnée
let maVariableRandom:any = 'bloup';
maVariableRandom = 10;
//Pour indiquer un tableau d'un type spécifique, on
//utilise la notation type[]
let tableau:boolean[] = [true, false, true];
//Une variable qui a une interface comme type doit contenir
//un objet qui correspond exactement à l'interface indiquée
//(sans props ou méthode en plus ou en moins)
let objet:FirstInterface = {
    property: "bloup"
};

let dog:SmallDog = {
    birthdate: new Date(),
    name: 'fido',
    race: 'corgi'
}


/*
 * On peut typer les paramètres d'entrée d'une fonction de la même
 * manière qu'une variable classique
 * On peut également dire le type de retour d'une fonction, une fonction
 * sans return doit être typée void (ou any si elle peut renvoyer d'autres trucs) 
 */
function maFonction(param:string, param2:boolean):number {

    return 10;
}

/*
On peut indiquer des propriétés optionnelles sur nos
interfaces en mettant un ? derrière la propriété.
L'objet ayant cette interface comme type pourra avoir
ou non la propriété en question.
*/
export interface SmallDog {
    id?:number;
    name:string;
    race:string;
    birthdate:Date;
}
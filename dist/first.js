"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var maVariable = 'bloup';
//On peut typer une variable pour dire qu'elle ne pourra
//contenir que le type indiqué (ici, du string)
var maString = 'true';
var uneVariable;
uneVariable = 10;
//Le type any indique que la variable peut contenir
//n'importe quel type de donnée
var maVariableRandom = 'bloup';
maVariableRandom = 10;
//Pour indiquer un tableau d'un type spécifique, on
//utilise la notation type[]
var tableau = [true, false, true];
//Une variable qui a une interface comme type doit contenir
//un objet qui correspond exactement à l'interface indiquée
//(sans props ou méthode en plus ou en moins)
var objet = {
    property: "bloup"
};
var dog = {
    birthdate: new Date(),
    name: 'fido',
    race: 'corgi'
};
/*
 * On peut typer les paramètres d'entrée d'une fonction de la même
 * manière qu'une variable classique
 * On peut également dire le type de retour d'une fonction, une fonction
 * sans return doit être typée void (ou any si elle peut renvoyer d'autres trucs)
 */
function maFonction(param, param2) {
    return 10;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9maXJzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQztBQUN6Qix3REFBd0Q7QUFDeEQsK0NBQStDO0FBQy9DLElBQUksUUFBUSxHQUFVLE1BQU0sQ0FBQztBQUU3QixJQUFJLFdBQWtCLENBQUM7QUFFdkIsV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUNqQixtREFBbUQ7QUFDbkQsK0JBQStCO0FBQy9CLElBQUksZ0JBQWdCLEdBQU8sT0FBTyxDQUFDO0FBQ25DLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztBQUN0QixtREFBbUQ7QUFDbkQsNEJBQTRCO0FBQzVCLElBQUksT0FBTyxHQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM1QywyREFBMkQ7QUFDM0QsMkRBQTJEO0FBQzNELDZDQUE2QztBQUM3QyxJQUFJLEtBQUssR0FBa0I7SUFDdkIsUUFBUSxFQUFFLE9BQU87Q0FDcEIsQ0FBQztBQUVGLElBQUksR0FBRyxHQUFZO0lBQ2YsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFO0lBQ3JCLElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLE9BQU87Q0FDaEIsQ0FBQTtBQUdEOzs7OztHQUtHO0FBQ0gsb0JBQW9CLEtBQVksRUFBRSxNQUFjO0lBRTVDLE9BQU8sRUFBRSxDQUFDO0FBQ2QsQ0FBQyJ9
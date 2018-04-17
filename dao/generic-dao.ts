/**
 * La généricité permet de créer une classe (ou une interface) en
 * laissant le sujet de cette classe "à définir".
 * Ici par exemple, nous faisons un Dao qui va chercher des entités sur
 * une API REST, mais au moment de l'écriture du Dao générique, on ne
 * spécifie pas l'entité exacte qui sera récupéré, on définit un placeholder
 * T qui sera remplacer par l'entité réelle lors de l'instanciation
 * de la classe.
 * (dans le cadre du typescript, la généricité ne sert que pour le typage,
 * on peut faire exactement la même chose sans généricité explicite en JS
 * natif)
 */
export class Dao<T> {

    constructor(protected url:string){}
    /**
     * La méthode getAll renvoie une Promise qui contiendra un tableau
     * d'entité T (si on instancie le Dao en tant que Dao<Person>, le
     * retour de la méthode deviendra Promise<Person[]>)
     */
    getAll(): Promise<T[]> {
        return fetch(this.url).then( resp => resp.json() );
    }
    /**
     * La méthode add renvoie une promise contenant une entité T et attend
     * en argument une entité T également. (si on instancie le Dao en tant 
     * que Dao<Person>, la méthode deviendra add(entitiy:Person):Promise<Person>)
     */
    add(entity:T): Promise<T> {
        return fetch(this.url).then( resp => resp.json() );
    }
}

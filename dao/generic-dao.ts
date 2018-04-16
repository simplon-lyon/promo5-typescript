
export class Dao<T> {

    constructor(protected url:string){}

    getAll(): Promise<T[]> {
        return fetch(this.url).then( resp => resp.json() );
    }

    add(entity:T): Promise<T> {
        return fetch(this.url).then( resp => resp.json() );
    }
}

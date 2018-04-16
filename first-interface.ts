/*
 * Les interfaces en typescript vont avoir 2 fonctionnalités :
 * - Interface conventionnelle : comme dans les autres langages objet,
 * on utiliser une interface pour indiquer des méthodes à implémenter
 * dans une classe qui implémente cette interface (voir classic-interface.ts)
 * - Interface d'objets : un comportement propre à typescript où on pourra
 * utiliser les interfaces de manière implicites, on définit dans l'interface
 * les propriétés et leur type que doivent avoir un objet. Dans notre
 * code on pourra dire qu'une variable contient un objet du type de l'interface
 * et cet objet devra alors correspondre exactement à l'interface indiquée
 */
export interface FirstInterface {
    property:string;
}
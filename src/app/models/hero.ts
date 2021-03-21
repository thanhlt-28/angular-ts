import { Spell } from './spell';
export class Hero {
    id: Number;
    name: string;
    image: string;
    details: string;
    spells: Array<Spell>;

    constructor(name: string, id: number, image: string ="", details: string, spells: Array<Spell> = []) {
        this.name = name;
        this.image = image;
        this.id = id;
        this.details = details;
        this.spells = spells;

    }
}

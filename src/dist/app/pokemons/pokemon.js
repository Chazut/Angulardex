"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pokemon {
    constructor(id = 1, name = 'name', picture = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png', description = "a description", types = ['Normal'], height = 0, weight = 0, hp = 100, attack = 50, defense = 50, speed = 50) {
        this.id = id;
        this.name = name;
        this.picture = picture;
        this.description = description;
        this.types = types;
        this.height = height;
        this.weight = weight;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
    }
}
exports.Pokemon = Pokemon;
//# sourceMappingURL=pokemon.js.map
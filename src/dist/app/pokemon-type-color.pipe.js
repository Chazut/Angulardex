"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let PokemonTypeColorPipe = class PokemonTypeColorPipe {
    transform(type) {
        let color;
        switch (type) {
            case 'Fire':
                color = 'red lighten-1';
                break;
            case 'Water':
                color = 'blue lighten-1';
                break;
            case 'Grass':
                color = 'green lighten-1';
                break;
            case 'Bug':
                color = 'brown lighten-1';
                break;
            case 'Normal':
                color = 'grey lighten-3';
                break;
            case 'Flying':
                color = 'blue lighten-3';
                break;
            case 'Poison':
                color = 'deep-purple accent-1';
                break;
            default:
                color = 'grey';
                break;
        }
        return 'chip ' + color;
    }
};
PokemonTypeColorPipe = __decorate([
    core_1.Pipe({ name: 'pokemonTypeColor' })
], PokemonTypeColorPipe);
exports.PokemonTypeColorPipe = PokemonTypeColorPipe;
//# sourceMappingURL=pokemon-type-color.pipe.js.map
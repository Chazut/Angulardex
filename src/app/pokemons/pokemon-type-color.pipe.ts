import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'pokemonTypeColor'})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(type: string): string {

    let color: string;

    switch (type) {
      case 'Fire':
        color = 'red lighten-1';
        break;
      case 'Water':
        color = 'blue lighten-1';
        break;
      case 'Grass':
        color = 'light-green lighten-1';
        break;
      case 'Bug':
        color = 'lime darken-1';
        break;
      case 'Normal':
        color = 'grey lighten-1';
        break;
      case 'Flying':
        color = 'indigo lighten-3';
        break;
      case 'Poison':
        color = 'purple darken-1';
        break;
      case 'Electric':
        color = 'yellow lighten-1'
        break;
      case 'Ice':
        color = 'light-blue lighten-3'
        break;
      case 'Fighting':
        color = 'brown lighten-1'
        break;
      case 'Ground':
        color = 'amber lighten-3'
        break;
      case 'Psychic':
        color = 'pink lighten-2'
        break;
      case 'Rock':
        color = 'orange lighten-4'
        break;
      case 'Ghost':
        color = 'deep-purple darken-3'
        break;
      case 'Dragon':
        color = 'indigo darken-2'
        break;
      case 'Dark':
        color = 'brown darken-3'
        break;
      case 'Steel':
        color = 'grey lighten-1'
        break;
      case 'Fairy':
        color = 'purple accent-1'
        break;
      default:
        color = 'grey';
        break;
    }

    return 'chip ' + color;

  }
}

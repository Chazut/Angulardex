import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'angulardex-app',
  templateUrl: `./app/app.component.html`,
})

export class AppComponent implements OnInit {
  private pokemons: Pokemon[];
  private title: string = "Angulardex";

  ngOnInit(){
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon){
    alert("You clicked on " + pokemon.name);
  }
}

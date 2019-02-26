import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'add-pokemon',
	templateUrl: './app/pokemons/add-pokemon.component.html'
})
export class AddPokemonComponent implements OnInit {

	pokemon: Pokemon = null;

	constructor(private titleService: Title) { }

	ngOnInit(): void {
		this.pokemon = new Pokemon();
	}

}

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPokemonComponent }    from './list-pokemon.component';
import { DetailPokemonComponent }  from './detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon.component';
import { AuthGuard } from '../auth-guard.service';
import { AddPokemonComponent } from './add-pokemon.component';

// les routes du module Pokémon
const pokemonsRoutes: Routes = [
	{
		path: 'pokemon',
		canActivate: [AuthGuard],
		children: [
			{ path: 'all', component: ListPokemonComponent },
			{ path: 'pokemon/add', component: AddPokemonComponent },
			{ path: 'edit/:id', component: EditPokemonComponent, canActivate: [AuthGuard]},
			{ path: ':id', component: DetailPokemonComponent }
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(pokemonsRoutes)
	],
	exports: [
		RouterModule
	]
})
export class PokemonRoutingModule { }

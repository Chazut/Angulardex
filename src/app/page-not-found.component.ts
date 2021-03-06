import { Component } from '@angular/core';

@Component({
	selector: 'page-404',
	template: `
    <div class='center'>
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"/>
      <h1>This page doesn't exist !</h1>
      <a routerLink="/pokemon/all" class="waves-effect waves-teal btn-flat">
        Back home
      </a>
    </div>
  `
})
export class PageNotFoundComponent { }

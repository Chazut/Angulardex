import { Component } from '@angular/core';
import { Pokemon } from './pokemon';

@Component({
  selector: 'angulardex-app',
  template: `<h1>Hello {{name}}</h1>`,
})

export class AppComponent  {
  name = 'Angular';
  private pokemons: Pokemon[];
}

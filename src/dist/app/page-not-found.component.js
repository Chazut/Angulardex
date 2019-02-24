"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let PageNotFoundComponent = class PageNotFoundComponent {
};
PageNotFoundComponent = __decorate([
    core_1.Component({
        selector: 'page-404',
        template: `
    <div class='center'>
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"/>
      <h1>This page doesn't exist !</h1>
      <a routerLink="/pokemons" class="waves-effect waves-teal btn-flat">
        Back home
      </a>
    </div>
  `
    })
], PageNotFoundComponent);
exports.PageNotFoundComponent = PageNotFoundComponent;
//# sourceMappingURL=page-not-found.component.js.map
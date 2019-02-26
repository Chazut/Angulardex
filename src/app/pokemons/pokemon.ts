export class Pokemon {
  id: number;
  name: string;
  description: string;
  types: Array<string>;
  height: number;
  weight: number;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  picture: string;

  constructor(
    id: number = 1,
    name: string = 'name',
    picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png',
    description: string = "a description",
    types: Array<string> = ['Normal'],
    height: number = 0,
    weight: number = 0,
		hp: number = 100,
		attack: number = 50,
    defense: number = 50,
    speed: number = 50
	) {
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

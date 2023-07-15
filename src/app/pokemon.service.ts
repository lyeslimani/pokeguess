import { Injectable } from '@angular/core';
import { pokemonList } from '../assets/pokemons';
import { Pokemon } from './shared/interfaces/pokemon';
import { delay, of } from 'rxjs';

@Injectable({
	providedIn: `root`,
})
export class PokemonService {
	getPokemons() {
		let pokemons: Pokemon[] = JSON.parse(
			localStorage.getItem(`pokemons`) ?? `[]`,
		);
		if (!pokemons || pokemons.length <= 0) {
			localStorage.setItem(`pokemons`, JSON.stringify(pokemonList));
			pokemons = pokemonList;
		}

		console.log(pokemons);
		return of(pokemons).pipe(delay(200));
	}

	savePokemonList(pokemons: Pokemon[]) {
		localStorage.setItem(`pokemons`, JSON.stringify(pokemons));
	}
}

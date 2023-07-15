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

		return of(pokemons).pipe(delay(200));
	}

	getRandomPokemon() {
		let pokemons: Pokemon[] = JSON.parse(
			localStorage.getItem(`pokemons`) ?? `[]`,
		);
		if (!pokemons || pokemons.length <= 0) {
			localStorage.setItem(`pokemons`, JSON.stringify(pokemonList));
			pokemons = pokemonList;
		}

		const randomIndex = Math.floor(Math.random() * pokemons.length);
		return pokemons[randomIndex];
	}

	savePokemonList(pokemons: Pokemon[]) {
		localStorage.setItem(`pokemons`, JSON.stringify(pokemons));
	}

	clearPokemonList() {
		localStorage.removeItem(`pokemons`);
	}
}

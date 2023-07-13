import { Action, createReducer, on } from '@ngrx/store';
import { Pokemon } from '../../shared/interfaces/pokemon';
import * as GuessActions from './guess.actions';

export interface GuessGlobalState {
	guesses: string[];
	board: {
		status: `in progress` | `paused`;
		score: number;
		end: `won` | `lost` | `in progress`;
	};
	currentPokemon?: Pokemon;
	pokemonList: Pokemon[];
	loadingPokemons: boolean;
}

export const initialState: GuessGlobalState = {
	guesses: [],
	board: {
		status: `paused`,
		score: 0,
		end: `in progress`,
	},
	currentPokemon: undefined,
	pokemonList: [],
	loadingPokemons: true,
};

export const guessReducer = createReducer(
	initialState,
	on(GuessActions.getGuess, (state) => ({
		...state,
		board: { ...state.board },
	})),
	on(GuessActions.getPokemons, (state) => ({
		...state,
		board: { ...state.board },
		loadingPokemons: true,
	})),
	on(GuessActions.getPokemonsSuccess, (state, action) => ({
		...state,
		board: { ...state.board },
		pokemonList: action.pokemons,
		loadingPokemons: false,
	})),
	on(GuessActions.deletePokemon, (state, action) => {
		const pokemonList = state.pokemonList.filter(
			(pokemon) => pokemon.number !== action.number,
		);
		return {
			...state,
			board: { ...state.board },
			pokemonList,
		};
	}),
	on(GuessActions.duplicatePokemon, (state, action) => {
		console.log(action.pokemon);
		const nextNumber =
			state.pokemonList.reduce((maxId, pokemon) => {
				return Math.max(maxId, pokemon.number);
			}, 0) + 1;

		// @ts-ignore
		const duplicatedPokemon: Pokemon = {
			...action.pokemon,
			number: nextNumber,
		};
		const pokemonList: Pokemon[] = [
			...state.pokemonList,
			duplicatedPokemon,
		];
		return {
			...state,
			board: { ...state.board },
			pokemonList,
		};
	}),
	on(GuessActions.editPokemon, (state, action) => {
		console.log(action.pokemon);
		return {
			...state,
			board: { ...state.board },
			pokemonList: state.pokemonList.map((pokemon) =>
				pokemon.number === action.pokemon.number
					? { ...pokemon, ...action.pokemon }
					: pokemon,
			),
		};
	}),
);

export function reducer(state: GuessGlobalState, action: Action) {
	return guessReducer(state, action);
}

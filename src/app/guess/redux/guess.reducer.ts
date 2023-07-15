import { Action, createReducer, on } from '@ngrx/store';
import { Pokemon } from '../../shared/interfaces/pokemon';
import * as GuessActions from './guess.actions';
import { PokemonService } from '../../pokemon.service';

export const NUMBER_OF_TRIES = 5;

export interface GuessGlobalState {
	guesses: Pokemon[];
	guessesHint: string[];
	guessesFunctions: string[];
	board: {
		status: `in progress` | `paused` | string;
		score: number;
		end: `won` | `lost` | `in progress` | string;
		tries: number;
	};
	currentPokemon: Pokemon;
	pokemonList: Pokemon[];
	loadingPokemons: boolean;
}

export const initialState: GuessGlobalState = {
	guesses: [],
	guessesHint: [],
	guessesFunctions: [],
	board: {
		status: `in progress`,
		score: 0,
		end: `in progress`,
		tries: 0,
	},
	currentPokemon: new PokemonService().getRandomPokemon(),
	pokemonList: [],
	loadingPokemons: true,
};

export const guessReducer = createReducer(
	initialState,
	on(GuessActions.restartGame, () => ({
		...initialState,
		currentPokemon: new PokemonService().getRandomPokemon(),
	})),
	on(GuessActions.guessPokemon, (state, action) => ({
		...state,
		guesses: [...state.guesses, action.pokemon],
		guessesHint: [...state.guessesHint, action.hint],
		board: {
			...state.board,
			tries: state.board.tries + 1,
		},
	})),
	on(GuessActions.finishGame, (state, action) => ({
		...state,
		board: {
			...state.board,
			status: `paused`,
			end: action.end,
		},
	})),
	on(GuessActions.initGameFinished, (state, action) => ({
		...state,
		currentPokemon: action.pokemon,
	})),
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
	on(GuessActions.reset, (state) => ({
		...state,
		board: { ...state.board },
		pokemonList: [],
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
	on(GuessActions.createPokemon, (state, action) => {
		console.log(action.pokemon);
		const nextNumber =
			state.pokemonList.reduce((maxId, pokemon) => {
				return Math.max(maxId, pokemon.number);
			}, 0) + 1;

		// @ts-ignore
		const newPokemon: Pokemon = {
			...action.pokemon,
			number: nextNumber,
		};
		const pokemonList: Pokemon[] = [...state.pokemonList, newPokemon];
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

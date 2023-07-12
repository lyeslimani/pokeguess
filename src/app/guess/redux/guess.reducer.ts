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
);

export function reducer(state: GuessGlobalState, action: Action) {
	return guessReducer(state, action);
}

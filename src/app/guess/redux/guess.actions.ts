import { createAction, props } from '@ngrx/store';
import { Pokemon } from '../../shared/interfaces/pokemon';

export const addLetter = createAction(
	`[Guess Component] add`,
	props<{ word: string }>,
);
export const removeLetter = createAction(
	`[Guess Component] remove`,
	props<{ letter: string }>,
);
export const reset = createAction(`[Guess Component] reset`);
export const getGuess = createAction(`[Guess Component] getGuess`);
export const getPokemons = createAction(`[Guess Component] getPokemons`);
export const getPokemonsSuccess = createAction(
	`[Guess Component] getPokemonsSuccess`,
	props<{ pokemons: Pokemon[] }>(),
);

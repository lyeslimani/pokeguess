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
export const guessPokemon = createAction(
	`[Guess Component] guess`,
	props<{ pokemon: Pokemon; hint: string; hintUsed: string }>(),
);
export const initGameFinished = createAction(
	`[Guess Component] initGame`,
	props<{ pokemon: Pokemon }>(),
);
export const reset = createAction(`[Guess Component] reset`);
export const getGuess = createAction(`[Guess Component] getGuess`);
export const finishGame = createAction(
	`[Guess Component] finishGame`,
	props<{ end: `won` | `lost` }>(),
);
export const restartGame = createAction(`[Guess Component] restartGame`);
export const getPokemons = createAction(`[Guess Component] getPokemons`);
export const getPokemonsSuccess = createAction(
	`[Guess Component] getPokemonsSuccess`,
	props<{ pokemons: Pokemon[] }>(),
);
export const deletePokemon = createAction(
	`[Guess Component] deletePokemon`,
	props<{ number: number }>(),
);
export const setPokemon = createAction(`[Guess Component] setPokemon`);
export const createPokemon = createAction(
	`[Guess Component] createPokemon`,
	props<{ pokemon: Partial<Pokemon> }>(),
);
export const editPokemon = createAction(
	`[Guess Component] editPokemon`,
	props<{ pokemon: Partial<Pokemon> }>(),
);
export const duplicatePokemon = createAction(
	`[Guess Component] duplicatePokemon`,
	props<{ pokemon: Partial<Pokemon> }>(),
);

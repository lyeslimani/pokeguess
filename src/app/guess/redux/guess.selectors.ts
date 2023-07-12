import { GuessGlobalState } from './guess.reducer';
import { createFeatureSelector } from '@ngrx/store';

export const selectPokemonLoadingList = (state: GuessGlobalState) =>
	state.loadingPokemons;
export const selectPokemonList = (state: GuessGlobalState) => state.pokemonList;

export const selectState = createFeatureSelector<GuessGlobalState>(`guess`);

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as GuessActions from './guess.actions';
import { map, mergeMap, Observable, withLatestFrom } from 'rxjs';
import { PokemonService } from '../../pokemon.service';
import { Store } from '@ngrx/store';
import { GuessGlobalState } from './guess.reducer';
import { selectState } from './guess.selectors';

@Injectable()
export class PokemonEffects {
	getPokemons$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(GuessActions.getPokemons),
			mergeMap(() => {
				return this.pokemonService
					.getPokemons()
					.pipe(
						map((pokemons) =>
							GuessActions.getPokemonsSuccess({ pokemons }),
						),
					);
			}),
		);
	});
	// console.log after the deletePokemon action is dispatched
	deletePokemon$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(GuessActions.deletePokemon),
			withLatestFrom(this.store.select(selectState)),
			mergeMap((action) => {
				this.pokemonService.savePokemonList(action[1].pokemonList);
				return new Observable().pipe(
					map(() => GuessActions.setPokemon()),
				);
			}),
		);
	});

	constructor(
		private actions$: Actions,
		private pokemonService: PokemonService,
		private store: Store<GuessGlobalState>,
	) {}
}

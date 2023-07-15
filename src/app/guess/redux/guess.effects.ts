import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as GuessActions from './guess.actions';
import { EMPTY, map, mergeMap, Observable, withLatestFrom } from 'rxjs';
import { PokemonService } from '../../pokemon.service';
import { Store } from '@ngrx/store';
import { GuessGlobalState, NUMBER_OF_TRIES } from './guess.reducer';
import { selectState } from './guess.selectors';

@Injectable()
export class PokemonEffects {
	reset$ = createEffect(() =>
		this.actions$.pipe(
			ofType(GuessActions.reset),
			mergeMap(() => {
				this.pokemonService.clearPokemonList();
				return this.pokemonService
					.getPokemons()
					.pipe(map(() => GuessActions.getPokemons()));
			}),
		),
	);

	onGuess$ = createEffect(() =>
		this.actions$.pipe(
			ofType(GuessActions.guessPokemon),
			withLatestFrom(this.store.select(selectState)),
			mergeMap(([, state]) => {
				if (state.board.tries === NUMBER_OF_TRIES) {
					return new Observable().pipe(
						map(() => GuessActions.finishGame({ end: `lost` })),
					);
				}
				return EMPTY;
			}),
		),
	);

	onRestart$ = createEffect(() =>
		this.actions$.pipe(
			ofType(GuessActions.restartGame),
			mergeMap(() => {
				return new Observable().pipe(
					map(() => GuessActions.getPokemons()),
				);
			}),
		),
	);

	/*
  initGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GuessActions.initGame),
      mergeMap(() => {
        return this.pokemonService
          .getRandomPokemon()
          .pipe(
            map((pokemon) =>
              GuessActions.initGameFinished({ pokemon }),
            ),
          );
      }),
    ),
  );
*/

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

	duplicatePokemon$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(GuessActions.duplicatePokemon),
			withLatestFrom(this.store.select(selectState)),
			mergeMap((action) => {
				this.pokemonService.savePokemonList(action[1].pokemonList);
				return new Observable().pipe(
					map(() => GuessActions.setPokemon()),
				);
			}),
		);
	});

	createPokemon$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(GuessActions.createPokemon),
			withLatestFrom(this.store.select(selectState)),
			mergeMap((action) => {
				this.pokemonService.savePokemonList(action[1].pokemonList);
				return new Observable().pipe(
					map(() => GuessActions.setPokemon()),
				);
			}),
		);
	});

	editPokemon$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(GuessActions.editPokemon),
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

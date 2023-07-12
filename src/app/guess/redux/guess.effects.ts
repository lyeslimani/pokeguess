import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as GuessActions from './guess.actions';
import { map, mergeMap } from 'rxjs';
import { PokemonService } from '../../pokemon.service';

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

	constructor(
		private actions$: Actions,
		private pokemonService: PokemonService,
	) {}
}

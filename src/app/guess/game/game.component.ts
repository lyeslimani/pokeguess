import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GuessGlobalState, NUMBER_OF_TRIES } from '../redux/guess.reducer';
import { selectState } from '../redux/guess.selectors';
import { Observable } from 'rxjs';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { pokemonList } from '../../../assets/pokemons';
import { getImageUrl } from '../../shared/tools/getPokemonPhotoUrl';
import {
	finishGame,
	getPokemons,
	guessPokemon,
	restartGame,
} from '../redux/guess.actions';
import { Pokemon } from '../../shared/interfaces/pokemon';
import { getHint } from './hint';
import { AppDialogDataExampleDialogComponent } from '../pokemon-item/app-pokemon-item-dialog';
import { MatDialog } from '@angular/material/dialog';
import { TranslationKeys } from '../../keys.interface';

@Component({
	selector: `app-game`,
	templateUrl: `./game.component.html`,
	styleUrls: [`./game.component.scss`],
})
export class GameComponent implements OnInit {

  translationKeys = TranslationKeys;
	guessInput = new FormControl(``, [Validators.required]);
	state$: Observable<GuessGlobalState>;
	state!: GuessGlobalState;
	heroForm!: FormGroup;
	selectedPokemon?: Pokemon;
	items: Pokemon[] = [];
	selection!: Pokemon;
	protected readonly NUMBER_OF_TRIES = NUMBER_OF_TRIES;
	protected readonly pokemonList = pokemonList;
	protected readonly getImageUrl = getImageUrl;

	constructor(
		private store: Store<GuessGlobalState>,
		private fb: FormBuilder,
		public dialog: MatDialog,
	) {
		this.state$ = store.select(selectState);
	}

	ngOnInit() {
		this.store.dispatch(getPokemons());
		this.state$.subscribe((state) => {
			this.items = state.pokemonList;
			this.state = state;
		});
		this.heroForm = this.fb.group({
			pokemonSelect: ``,
		});
	}

	onSelection() {
		console.log(`sélection`, this.selection);
	}

	handleGuess() {
		if (!this.selection) {
			alert(`Please choose a pokémon!`);
			return;
		}
		const { hint, hintUsed } = getHint(
			this.state.currentPokemon,
			this.selection,
			this.state.guessesFunctions,
		);
		this.store.dispatch(
			guessPokemon({ pokemon: this.selection, hint, hintUsed }),
		);
		if (this.state.currentPokemon?.number === this.selection.number) {
			alert(`You guessed right!`);
			this.store.dispatch(finishGame({ end: `won` }));
			return;
		}
		if (this.state.board.tries === NUMBER_OF_TRIES) {
			alert(`You lost!`);
			this.store.dispatch(finishGame({ end: `lost` }));
			return;
		}
	}

	restartGame() {
		this.store.dispatch(restartGame());
	}

	openPokemonModal(selection: Pokemon) {
		if (!selection) {
			alert(`Please choose a pokémon!`);
			return;
		}
		this.dialog.open(AppDialogDataExampleDialogComponent, {
			data: {
				pokemon: selection,
			},
		});
	}
}

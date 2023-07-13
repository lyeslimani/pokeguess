import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../shared/interfaces/pokemon';
import { MatDialog } from '@angular/material/dialog';
import { getImageUrl } from '../../shared/tools/getPokemonPhotoUrl';
import { Store } from '@ngrx/store';
import { GuessGlobalState } from '../redux/guess.reducer';
import * as GuessActions from '../redux/guess.actions';
import { ConfirmDeletionDialogComponent } from './app-confirm-deletion-dialog';
import { ConfirmDuplicationDialogComponent } from './app-confirm-duplication-dialog';
import { AppDialogDataExampleDialogComponent } from './app-pokemon-item-dialog';
import { getTypeColor } from '../../shared/tools/getTypeColor';
import { AppEditPokemonDialogComponent } from './app-edit-pokemon-dialog';

export interface PokemonDialogData {
	pokemon: Pokemon;
}

export interface ConfirmDeletionDialogData {
	deleteAction: () => void;
}

@Component({
	selector: `app-pokemon-item`,
	templateUrl: `./pokemon-item.component.html`,
	styleUrls: [`./pokemon-item.component.scss`],
})
export class PokemonItemComponent implements OnInit {
	@Input() pokemon!: Pokemon;
	imageUrl?: string;

	constructor(
		public dialog: MatDialog,
		private store: Store<GuessGlobalState>,
	) {}

	ngOnInit() {
		this.imageUrl = getImageUrl(this.pokemon);
	}

	openPokemonInfoDialog() {
		this.dialog.open(AppDialogDataExampleDialogComponent, {
			data: {
				pokemon: this.pokemon,
			},
		});
	}

	openDeletionDialog(): void {
		this.dialog.open(ConfirmDeletionDialogComponent, {
			width: `250px`,
			data: {
				deleteAction: () => this.deletePokemon(),
			},
		});
	}

	openDuplicationDialog(): void {
		this.dialog.open(ConfirmDuplicationDialogComponent, {
			width: `250px`,
			data: {
				pokemon: this.pokemon,
			},
		});
	}

	openEditDialog(): void {
		this.dialog.open(AppEditPokemonDialogComponent, {
			width: `250px`,
			data: {
				pokemon: this.pokemon,
			},
		});
	}

	deletePokemon() {
		this.store.dispatch(
			GuessActions.deletePokemon({ number: this.pokemon.number }),
		);
	}

	protected readonly getTypeColor = getTypeColor;
}

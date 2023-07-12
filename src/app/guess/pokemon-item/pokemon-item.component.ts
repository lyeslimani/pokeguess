import { Component, Inject, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../shared/interfaces/pokemon';
import {
	MAT_DIALOG_DATA,
	MatDialog,
	MatDialogModule,
	MatDialogRef,
} from '@angular/material/dialog';
import { NgIf, NgStyle } from '@angular/common';
import { getImageUrl } from '../../shared/tools/getPokemonPhotoUrl';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { getTypeColor } from '../../shared/tools/getTypeColor';
import { Store } from '@ngrx/store';
import { GuessGlobalState } from '../redux/guess.reducer';
import * as GuessActions from '../redux/guess.actions';

interface DialogData {
	pokemon: Pokemon;
}

interface ConfirmDeletionDialogData {
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

	deletePokemon() {
		this.store.dispatch(
			GuessActions.deletePokemon({ number: this.pokemon.number }),
		);
	}

	protected readonly getTypeColor = getTypeColor;
	protected readonly confirm = confirm;
}

@Component({
	selector: `app-pokemon-item-dialog`,
	templateUrl: `app-pokemon-item-dialog.html`,
	styleUrls: [`./pokemon-item.component.scss`],
	standalone: true,
	imports: [MatDialogModule, NgIf, MatButtonModule, MatChipsModule, NgStyle],
})
class AppDialogDataExampleDialogComponent {
	photoUrl = getImageUrl(this.data.pokemon);

	constructor(
		public dialogRef: MatDialogRef<AppDialogDataExampleDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: DialogData,
	) {}

	onNoClick(): void {
		this.dialogRef.close();
	}

	protected readonly getTypeColor = getTypeColor;
}

@Component({
	selector: `app-confirm-deletion-dialog`,
	templateUrl: `app-confirm-deletion-dialog.html`,
	standalone: true,
	imports: [MatDialogModule, MatButtonModule],
})
export class ConfirmDeletionDialogComponent {
	constructor(
		public dialogRef: MatDialogRef<ConfirmDeletionDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: ConfirmDeletionDialogData,
	) {}
}

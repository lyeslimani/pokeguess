import { Component, Inject } from '@angular/core';
import {
	MAT_DIALOG_DATA,
	MatDialogModule,
	MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PokemonDialogData } from './pokemon-item.component';
import * as GuessActions from '../redux/guess.actions';
import { Store } from '@ngrx/store';
import { GuessGlobalState } from '../redux/guess.reducer';
import { Pokemon } from '../../shared/interfaces/pokemon';
import { getImageUrl } from '../../shared/tools/getPokemonPhotoUrl';
import { TranslationKeys } from '../../keys.interface';
import {TranslateModule} from "@ngx-translate/core";

@Component({
	selector: `app-confirm-duplication-dialog`,
	templateUrl: `app-confirm-duplication-dialog.html`,
	standalone: true,
  imports: [MatDialogModule, MatButtonModule, TranslateModule],
})
export class ConfirmDuplicationDialogComponent {
  translationKeys = TranslationKeys;
	constructor(
		public dialogRef: MatDialogRef<ConfirmDuplicationDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: PokemonDialogData,
		private store: Store<GuessGlobalState>,
	) {}

	onNoClick(): void {
		this.dialogRef.close();
	}

	onSubmit(): void {
		const pokemon: Pokemon = JSON.parse(JSON.stringify(this.data.pokemon));
		pokemon.image = getImageUrl(pokemon);
    this.store.dispatch(
			GuessActions.duplicatePokemon({ pokemon: pokemon }),
		);
		this.dialogRef.close();
	}
}

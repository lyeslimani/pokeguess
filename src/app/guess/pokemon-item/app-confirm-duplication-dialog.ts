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

@Component({
	selector: `app-confirm-duplication-dialog`,
	templateUrl: `app-confirm-duplication-dialog.html`,
	standalone: true,
	imports: [MatDialogModule, MatButtonModule],
})
export class ConfirmDuplicationDialogComponent {
	constructor(
		public dialogRef: MatDialogRef<ConfirmDuplicationDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: PokemonDialogData,
		private store: Store<GuessGlobalState>,
	) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

	onSubmit(): void {
		const values = this.data.pokemon;
		this.store.dispatch(GuessActions.duplicatePokemon({ pokemon: values }));
		this.dialogRef.close();
	}
}

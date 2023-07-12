import { Component, Inject } from '@angular/core';
import {
	MAT_DIALOG_DATA,
	MatDialogModule,
	MatDialogRef,
} from '@angular/material/dialog';
import { NgIf, NgStyle } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { getImageUrl } from '../../shared/tools/getPokemonPhotoUrl';
import { PokemonDialogData } from './pokemon-item.component';
import { getTypeColor } from '../../shared/tools/getTypeColor';
@Component({
	selector: `app-pokemon-item-dialog`,
	templateUrl: `app-pokemon-item-dialog.html`,
	styleUrls: [`./pokemon-item.component.scss`],
	standalone: true,
	imports: [MatDialogModule, NgIf, MatButtonModule, MatChipsModule, NgStyle],
})
export class AppDialogDataExampleDialogComponent {
	photoUrl = getImageUrl(this.data.pokemon);

	constructor(
		public dialogRef: MatDialogRef<AppDialogDataExampleDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: PokemonDialogData,
	) {}

	onNoClick(): void {
		this.dialogRef.close();
	}

	protected readonly getTypeColor = getTypeColor;
}

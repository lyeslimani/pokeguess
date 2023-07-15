import { Component, Inject, OnInit } from '@angular/core';
import {
	MAT_DIALOG_DATA,
	MatDialogModule,
	MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PokemonDialogData } from './pokemon-item.component';
import { getImageUrl } from '../../shared/tools/getPokemonPhotoUrl';
import { getTypeColor } from '../../shared/tools/getTypeColor';
import { MatChipsModule } from '@angular/material/chips';
import { NgIf, NgStyle } from '@angular/common';
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Pokemon } from '../../shared/interfaces/pokemon';
import { Store } from '@ngrx/store';
import { GuessGlobalState } from '../redux/guess.reducer';
import * as GuessActions from '../redux/guess.actions';

@Component({
	selector: `app-edit-pokemon-dialog`,
	templateUrl: `app-edit-pokemon-dialog.html`,
	standalone: true,
	imports: [
		MatDialogModule,
		MatButtonModule,
		MatChipsModule,
		NgStyle,
		MatInputModule,
		ReactiveFormsModule,
		MatIconModule,
		NgIf,
	],
})
export class AppEditPokemonDialogComponent implements OnInit {
	image = getImageUrl(this.data.pokemon);
	isImageDeleted = false;

	pokemonEditForm = new FormGroup({
		name: new FormControl(this.data.pokemon.name, {
			nonNullable: true,
			validators: [Validators.required],
		}),
		image: new FormControl(this.data.pokemon.image, {
			nonNullable: true,
			validators: [Validators.required],
		}),
		height: new FormControl(this.data.pokemon.height, {
			nonNullable: true,
			validators: [Validators.required],
		}),
		weight: new FormControl(this.data.pokemon.weight, {
			nonNullable: true,
			validators: [Validators.required],
		}),
		attack: new FormControl(this.data.pokemon.attack, {
			nonNullable: true,
			validators: [Validators.required],
		}),
		defense: new FormControl(this.data.pokemon.defense, {
			nonNullable: true,
			validators: [Validators.required],
		}),
		hp: new FormControl(this.data.pokemon.hp, {
			nonNullable: true,
			validators: [Validators.required],
		}),
		speed: new FormControl(this.data.pokemon.speed, {
			nonNullable: true,
			validators: [Validators.required],
		}),
		special: new FormControl(this.data.pokemon.special, {
			nonNullable: true,
			validators: [Validators.required],
		}),
	});
	protected readonly getTypeColor = getTypeColor;

	constructor(
		public dialogRef: MatDialogRef<AppEditPokemonDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: PokemonDialogData,
		private store: Store<GuessGlobalState>,
	) {}

	ngOnInit() {
		this.pokemonEditForm.controls.image.setValue(this.image);
	}

	onNoClick(): void {
		this.dialogRef.close();
	}

	onSubmit(): void {
		const values = this.getFormValues();
		this.store.dispatch(GuessActions.editPokemon({ pokemon: values }));
		this.dialogRef.close();
	}

	getFormValues(): Partial<Pokemon> {
		return {
			...this.data.pokemon,
			name: this.pokemonEditForm.controls.name.value,
			image: this.pokemonEditForm.controls.image.value,
			height: this.pokemonEditForm.controls.height.value,
			weight: this.pokemonEditForm.controls.weight.value,
			attack: this.pokemonEditForm.controls.attack.value,
			defense: this.pokemonEditForm.controls.defense.value,
			hp: this.pokemonEditForm.controls.hp.value,
			speed: this.pokemonEditForm.controls.speed.value,
			special: this.pokemonEditForm.controls.special.value,
		};
	}
	deleteImage(): void {
		this.isImageDeleted = true;
		this.pokemonEditForm.controls.image.setValue(``);
	}

	cancelImageDeletion(): void {
		this.isImageDeleted = false;
	}
}

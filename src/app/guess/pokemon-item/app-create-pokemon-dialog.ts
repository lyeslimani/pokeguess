import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { getTypeColor } from '../../shared/tools/getTypeColor';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule, NgIf, NgStyle } from '@angular/common';
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
import { MatSelectModule } from '@angular/material/select';
import { PokemonType, pokemonTypes } from '../../shared/enums/pokemonTypes';
import { TranslationKeys } from '../../keys.interface';
import {TranslateModule} from "@ngx-translate/core";

@Component({
	selector: `app-create-pokemon-dialog`,
	templateUrl: `app-create-pokemon-dialog.html`,
	standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatChipsModule,
    NgStyle,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    NgIf,
    MatSelectModule,
    TranslateModule,
  ],
})
export class AppCreatePokemonDialogComponent {
	translationKeys = TranslationKeys;
	pokemonTypes = pokemonTypes;
	type1 = `None`;
	type2 = `None`;
	types = 1;
	photoUrl = ``;
	pokemonCreateForm = new FormGroup({
		name: new FormControl(``, {
			nonNullable: true,
			validators: [Validators.required],
		}),
		image: new FormControl(``, {
			nonNullable: true,
			validators: [Validators.required],
		}),
		height: new FormControl(``, {
			nonNullable: true,
			validators: [Validators.required],
		}),
		weight: new FormControl(``, {
			nonNullable: true,
			validators: [Validators.required],
		}),
		attack: new FormControl(``, {
			nonNullable: true,
			validators: [Validators.required],
		}),
		defense: new FormControl(``, {
			nonNullable: true,
			validators: [Validators.required],
		}),
		hp: new FormControl(``, {
			nonNullable: true,
			validators: [Validators.required],
		}),
		speed: new FormControl(``, {
			nonNullable: true,
			validators: [Validators.required],
		}),
		special: new FormControl(``, {
			nonNullable: true,
			validators: [Validators.required],
		}),
		types: new FormControl([], {
			nonNullable: true,
			validators: [Validators.required],
		}),
	});
	protected readonly getTypeColor = getTypeColor;

	constructor(
		public dialogRef: MatDialogRef<AppCreatePokemonDialogComponent>,
		private store: Store<GuessGlobalState>,
	) {}

	onNoClick(): void {
		this.dialogRef.close();
	}

	selectedTypes: PokemonType[] = [];

	addType(type: PokemonType) {
		if (
			this.selectedTypes.length < 2 &&
			!this.selectedTypes.includes(type)
		) {
			this.selectedTypes.push(type);
		}
	}

	removeType(type: PokemonType) {
		this.selectedTypes = this.selectedTypes.filter((t) => t !== type);
		// @ts-ignore
		this.pokemonCreateForm.controls.types.setValue(this.selectedTypes);
	}

	isTypeDisabled(): boolean {
		return this.selectedTypes.length >= 2;
	}

	onSubmit(): void {
		this.type1 = this.selectedTypes[0];
		if (this.selectedTypes.length > 1) {
			this.type2 = this.selectedTypes[1];
			this.types = 2;
		}
		const values = this.getFormValues();
		this.store.dispatch(GuessActions.createPokemon({ pokemon: values }));
		this.dialogRef.close();
	}

	getFormValues(): Partial<Pokemon> {
		return {
			name: this.pokemonCreateForm.controls.name.value,
			image: this.pokemonCreateForm.controls.image.value,
			height: parseFloat(this.pokemonCreateForm.controls.height.value),
			weight: parseFloat(this.pokemonCreateForm.controls.weight.value),
			type1: this.type1,
			type2: this.type2,
			types: this.types,
			attack: parseFloat(this.pokemonCreateForm.controls.attack.value),
			defense: parseFloat(this.pokemonCreateForm.controls.defense.value),
			hp: parseFloat(this.pokemonCreateForm.controls.hp.value),
			speed: parseFloat(this.pokemonCreateForm.controls.speed.value),
			special: parseFloat(this.pokemonCreateForm.controls.special.value),
		};
	}
}

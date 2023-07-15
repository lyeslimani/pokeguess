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
import { NgForOf, NgIf, NgStyle } from '@angular/common';
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
import { PokemonType, pokemonTypes } from '../../shared/enums/pokemonTypes';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

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
		NgForOf,
		MatOptionModule,
		MatSelectModule,
	],
})
export class AppEditPokemonDialogComponent implements OnInit {
	image = getImageUrl(this.data.pokemon);
	isImageDeleted = false;
	type1 = `None`;
	type2 = `None`;
	types = 1;
	selectedTypes: PokemonType[] = [];

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
		types: new FormControl([], {
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
		this.types = this.data.pokemon.types;
		this.selectedTypes.push(this.data.pokemon.type1 as PokemonType);

		if (this.data.pokemon.types > 1) {
			this.selectedTypes.push(this.data.pokemon.type2 as PokemonType);
		}
		// @ts-ignore
		this.pokemonEditForm.controls.types.setValue(this.selectedTypes);
	}

	onNoClick(): void {
		this.dialogRef.close();
	}

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
		this.pokemonEditForm.controls.types.setValue(this.selectedTypes);
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
			type1: this.type1,
			type2: this.type2,
			types: this.selectedTypes.length,
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

	protected readonly pokemonTypes = pokemonTypes;
}

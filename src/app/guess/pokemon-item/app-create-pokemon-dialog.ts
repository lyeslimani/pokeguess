import { Component, Inject } from '@angular/core';
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
import { pokemonTypes } from '../../shared/enums/pokemonTypes';

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
	],
})
export class AppCreatePokemonDialogComponent {
	pokemonTypes = pokemonTypes;
	photoUrl = ``;
	pokemonCreateForm = new FormGroup({
		name: new FormControl(``, {
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

	onSubmit(): void {
		const values = this.getFormValues();
		this.store.dispatch(GuessActions.createPokemon({ pokemon: values }));
		this.dialogRef.close();
	}

	getFormValues(): Partial<Pokemon> {
		return {
			name: this.pokemonCreateForm.controls.name.value,
			height: parseFloat(this.pokemonCreateForm.controls.height.value),
			weight: parseFloat(this.pokemonCreateForm.controls.weight.value),
			attack: parseFloat(this.pokemonCreateForm.controls.attack.value),
			defense: parseFloat(this.pokemonCreateForm.controls.defense.value),
			hp: parseFloat(this.pokemonCreateForm.controls.hp.value),
			speed: parseFloat(this.pokemonCreateForm.controls.speed.value),
			special: parseFloat(this.pokemonCreateForm.controls.special.value),
			/*baseTotal: 0,
      bugDmg: 0,
      captRate: 0,
      dragonDmg: 0,
      electricDmg: 0,
      evolutions: 0,
      expPoints: 0,
      expSpeed: "",
      femalePct: 0,
      fightDmg: 0,
      fireDmg: 0,
      flyingDmg: 0,
      ghostDmg: 0,
      grassDmg: 0,
      groundDmg: 0,
      iceDmg: 0,
      image: "",
      legendary: 0,
      malePct: 0,
      normalDmg: 0,
      number: 0,
      poisonDmg: 0,
      psychicDmg: 0,
      rockDmg: 0,
      type1: "",
      type2: "",
      types: 0,
      waterDmg: 0,*/
		};
	}
}

import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './redux/guess.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PokemonEffects } from './redux/guess.effects';
import { AdminComponent } from './admin/admin.component';
import { GuessRoutingModule } from './guess.routing.module';
import { CommonModule } from '@angular/common';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { GameComponent } from './game/game.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';

@NgModule({
	declarations: [AdminComponent, PokemonItemComponent, GameComponent],
	imports: [
		GuessRoutingModule,
		CommonModule,
		StoreModule.forFeature(`guess`, reducer),
		EffectsModule.forFeature([PokemonEffects]),
		MatChipsModule,
		MatButtonModule,
		MatIconModule,
		MatMenuModule,
		MatButtonToggleModule,
		MatInputModule,
		FormsModule,
		ReactiveFormsModule,
		NgSelectModule,
		NgOptionHighlightModule,
	],
})
export class GuessModule {}

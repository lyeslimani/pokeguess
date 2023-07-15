import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { GameComponent } from './game/game.component';

const routes: Routes = [
	{
		path: `admin`,
		component: AdminComponent,
	},
	{
		path: `game`,
		component: GameComponent,
	},
	{
		path: `**`,
		redirectTo: `admin`,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class GuessRoutingModule {}

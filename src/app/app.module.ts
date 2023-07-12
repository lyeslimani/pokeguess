import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		StoreModule.forRoot({}, {}),
		EffectsModule.forRoot([]),
		BrowserAnimationsModule,
		StoreDevtoolsModule.instrument({
			maxAge: 25, // Retains last 25 states
			logOnly: !isDevMode(), // Restrict extension to log-only mode
			autoPause: true, // Pauses recording actions and state changes when the extension window is not open
			trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
			traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
		}),
		RouterOutlet,
		AppRoutingModule,
		MatDialogModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

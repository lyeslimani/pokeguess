import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { GuessGlobalState } from '../redux/guess.reducer';
import * as GuessActions from '../redux/guess.actions';
import { selectState } from '../redux/guess.selectors';

@Component({
	selector: `app-admin`,
	templateUrl: `./admin.component.html`,
	styleUrls: [`./admin.component.scss`],
})
export class AdminComponent implements OnInit {
	guess$: Observable<GuessGlobalState>;

	constructor(private store: Store<GuessGlobalState>) {
		this.guess$ = this.store.select(selectState);
	}

	ngOnInit() {
		this.store.dispatch(GuessActions.getPokemons());
	}

	resetStore() {
		this.store.dispatch(GuessActions.reset());
		window.location.reload();
	}
}

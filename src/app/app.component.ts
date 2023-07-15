import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {TranslationKeys} from "./keys.interface";

@Component({
	selector: `app-root`,
	templateUrl: `./app.component.html`,
	styleUrls: [`./app.component.scss`],
})
export class AppComponent {
  title = `pokeguess`;
  translationKeys = TranslationKeys;
	constructor(private translate: TranslateService) {
		translate.setDefaultLang(`en`);
		translate.use(`en`);
	}

	lang(lg: string) {
		this.translate.use(lg);
	}
}

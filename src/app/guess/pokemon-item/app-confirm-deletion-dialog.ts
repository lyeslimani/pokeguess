import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmDeletionDialogData } from './pokemon-item.component';
import { TranslationKeys } from '../../keys.interface';
import { TranslateModule } from '@ngx-translate/core';

@Component({
	selector: `app-confirm-deletion-dialog`,
	templateUrl: `app-confirm-deletion-dialog.html`,
	standalone: true,
  imports: [MatDialogModule, MatButtonModule, TranslateModule],
})
export class ConfirmDeletionDialogComponent {
	translationKeys = TranslationKeys;
	constructor(
		@Inject(MAT_DIALOG_DATA) public data: ConfirmDeletionDialogData,
	) {}
}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmDeletionDialogData } from './pokemon-item.component';

@Component({
	selector: `app-confirm-deletion-dialog`,
	templateUrl: `app-confirm-deletion-dialog.html`,
	standalone: true,
	imports: [MatDialogModule, MatButtonModule],
})
export class ConfirmDeletionDialogComponent {
	constructor(
		@Inject(MAT_DIALOG_DATA) public data: ConfirmDeletionDialogData,
	) {}
}

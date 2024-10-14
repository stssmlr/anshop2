import { ChangeDetectionStrategy, Component, inject, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
<<<<<<< HEAD
=======

>>>>>>> f8de1d4221b2a5bebf4e2ba9c4b0cfad19fbde14
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { DialogData } from '../product-list/product-list.component';
<<<<<<< HEAD
=======

>>>>>>> f8de1d4221b2a5bebf4e2ba9c4b0cfad19fbde14
@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogComponent {
  readonly dialogRef = inject(MatDialogRef<ConfirmDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
<<<<<<< HEAD
=======

>>>>>>> f8de1d4221b2a5bebf4e2ba9c4b0cfad19fbde14
  readonly name = model(this.data.productName);
  readonly id = model(this.data.productId);
}
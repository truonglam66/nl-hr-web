import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

export interface PeriodicElement {
  id?: number;
  name: string;
  office: string;
  position: string;
}

@Component({
  selector: 'app-add-employee-component',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './addEmployee-component.html',
  styleUrl: './addEmployee-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEmployeeDialog {
  readonly dialogRef = inject(MatDialogRef<AddEmployeeDialog>);
  readonly data = inject<PeriodicElement>(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }
}

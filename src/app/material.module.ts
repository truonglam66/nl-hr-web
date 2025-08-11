import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatFormField,
  MatCardTitle,
  ReactiveFormsModule,
  MatListModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}

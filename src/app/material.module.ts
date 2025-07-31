import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatInputModule } from '@angular/material/input';

const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatFormField,
  MatCardTitle,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}

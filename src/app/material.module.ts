import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatFormField,
  MatCardTitle,
  ReactiveFormsModule,
  MatListModule,
  MatTableModule,
  MatPaginator,
  MatIconModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}

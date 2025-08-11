import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-layout-component',
  imports: [RouterOutlet, RouterLink, MaterialModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {
  ngOnInit(): void {}
}

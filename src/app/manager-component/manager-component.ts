import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-component',
  imports: [],
  templateUrl: './manager-component.html',
  styleUrl: './manager-component.css',
})
export class ManagerComponent implements OnInit {
  dataSource: any[] = []; // Placeholder for data source

  ngOnInit(): void {
    // Initialization logic for the manager component
    console.log('ManagerComponent initialized');
  }
}

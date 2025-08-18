import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MaterialModule } from '../material.module';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  id?: number;
  name: string;
  office: string;
  position: string;
}

const ELEMENT_DATA: Omit<PeriodicElement, 'id'>[] = [
  { name: 'Trung', position: 'Nhân viên', office: 'Kỹ thuật' },
  { name: 'Trung', position: 'Nhân viên', office: 'Kỹ thuật' },
  { name: 'Trung', position: 'Nhân viên', office: 'Kỹ thuật' },
  { name: 'Trung', position: 'Nhân viên', office: 'Kỹ thuật' },
  { name: 'Trung', position: 'Nhân viên', office: 'Kỹ thuật' },
  { name: 'Trung', position: 'Nhân viên', office: 'Kỹ thuật' },
  { name: 'Trung', position: 'Nhân viên', office: 'Kỹ thuật' },
  { name: 'Trung', position: 'Nhân viên', office: 'Kỹ thuật' },
  { name: 'Trung', position: 'Nhân viên', office: 'Kỹ thuật' },
  { name: 'Trung', position: 'Nhân viên', office: 'Kỹ thuật' },
  { name: 'Trung', position: 'Nhân viên', office: 'Kỹ thuật' },
  { name: 'Trung', position: 'Nhân viên', office: 'Kỹ thuật' },
  { name: 'Trung', position: 'Nhân viên', office: 'Kỹ thuật' },
  { name: 'Trung', position: 'Nhân viên', office: 'Kỹ thuật' },
  { name: 'Trung', position: 'Nhân viên', office: 'Kỹ thuật' },
  { name: 'Trung', position: 'Nhân viên', office: 'Kỹ thuật' },
  { name: 'Trung', position: 'Nhân viên', office: 'Kỹ thuật' },
  { name: 'Trung', position: 'Nhân viên', office: 'Kỹ thuật' },
  { name: 'Trung', position: 'Nhân viên', office: 'Kỹ thuật' },
  { name: 'Trung', position: 'Nhân viên', office: 'Kỹ thuật' },
];
@Component({
  selector: 'app-manager-component',
  imports: [MaterialModule],
  templateUrl: './manager-component.html',
  styleUrl: './manager-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagerComponent implements OnInit {
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  displayedColumns: string[] = ['STT', 'name', 'office', 'position', 'options'];

  ngOnInit(): void {
    // Initialization logic for the manager component
    console.log('ManagerComponent initialized');
    this.dataSource = new MatTableDataSource<PeriodicElement>(
      ELEMENT_DATA.map((element, index) => ({
        id: index + 1, // Gán id cho mỗi phần tử
        ...element,
      }))
    );
  }

  addEmployee(): void {
    return;
  }

  importExcel(): void {
    return;
  }

  exportExcel(): void {
    return;
  }

  editEmployee(id: string): void {
    console.log(`Editing employee with id: ${id}`);
  }

  deleteEmployee(id: string): void {
    console.log(`Deleting employee with id: ${id}`);
  }
}

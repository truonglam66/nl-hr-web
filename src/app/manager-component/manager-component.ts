import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  inject,
} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeDialog } from './addEmployee-component/addEmployee-component';
import { EditEmployeeDialog } from './editEmployee-component/editEmployee-component';
import { EmployeeService } from '../services/employee.service';

export interface PeriodicElement {
  id?: number;
  name: string;
  office: string;
  position: string;
}

@Component({
  selector: 'app-manager-component',
  standalone: true,
  imports: [MaterialModule, HttpClientModule],
  templateUrl: './manager-component.html',
  styleUrl: './manager-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagerComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  private employeeService = inject(EmployeeService);
  dataSource = new MatTableDataSource<PeriodicElement>([]);
  displayedColumns: string[] = [
    'STT',
    'name',
    'office',
    'position',
    'username',
    'options',
  ];

  ngOnInit(): void {
    // Initialization logic for the manager component
    console.log('ManagerComponent initialized');
    this.fetchEmployees();
    console.log('Employees fetched and displayed: ', this.dataSource.data);
  }

  fetchEmployees(): void {
    this.employeeService.getAllEmployees().subscribe((data) => {
      this.dataSource.data = data.map((element, index) => ({
        id: index + 1,
        name: element.name, // Đảm bảo API trả về trường name
        office: element.office, // Đảm bảo API trả về trường office
        position: element.position, // Đảm bảo API trả về trường position
        username: element.username, // Đảm bảo API trả về trường username
      }));
    });
  }

  addEmployee(): void {
    const dialogRef = this.dialog.open(AddEmployeeDialog, {
      data: { name: '', office: '', position: '', username: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Thêm nhân viên mới vào danh sách
        const newEmployee = { ...result, id: this.dataSource.data.length + 1 };
        this.dataSource.data = [...this.dataSource.data, newEmployee];
      }
    });
  }

  importExcel(): void {
    return;
  }

  exportExcel(): void {
    return;
  }

  editEmployee(index: number): void {
    const employeeData = this.dataSource.data[index];
    const dialogRef = this.dialog.open(EditEmployeeDialog, {
      data: { ...employeeData }, // Truyền một bản sao của dữ liệu
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Cập nhật thông tin nhân viên
        const data = this.dataSource.data;
        data[index] = result;
        this.dataSource.data = data;
      }
    });
  }

  deleteEmployee(index: number): void {
    console.log(`Deleting employee with index: ${index}`);
  }
}

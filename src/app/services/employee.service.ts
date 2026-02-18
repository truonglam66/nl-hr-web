import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3301/user/find-all';

  getAllEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginResponse {
  user: any; // Thay thế 'any' bằng kiểu dữ liệu phù hợp với response của bạn
  token?: string; // Nếu có token trả về, bạn có thể theo dõi nó
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://localhost:3301/auth/login'; // Đường dẫn API của bạn

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, { username, password });
  }
}

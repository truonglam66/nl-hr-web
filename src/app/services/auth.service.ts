import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

interface LoginResponse {
  user: any; // Thay thế 'any' bằng kiểu dữ liệu phù hợp với response của bạn
  token?: string; // Nếu có token trả về, bạn có thể theo dõi nó
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3301/auth/login'; // Đường dẫn API của bạn
  private http = inject(HttpClient);

  constructor() {}

  login(username: string, password: string): Observable<LoginResponse> {
    console.log('Logging in with:', { username, password });
    // Gọi API để đăng nhập
    console.log('API URL:', this.apiUrl);
    console.log('Request body:', { username, password });
    return this.http.post<LoginResponse>(this.apiUrl, {
      username,
      password,
    });
  }

  checkHealth(): Observable<any> {
    const healthCheckUrl = 'http://localhost:3301/health-check'; // Đường dẫn API kiểm tra sức khỏe
    console.log('Checking health at:', healthCheckUrl);
    return this.http.get<any>(healthCheckUrl);
  }
}

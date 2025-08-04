import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MaterialModule } from '../material.module';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login-component',
  imports: [MaterialModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup | any;

  @Input() error: string | null = null;

  @Output() submitEM = new EventEmitter();

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  submit() {
    if (this.form.valid) {
      const { username, password } = this.form.value;

      // Gọi API để đăng nhập
      this.authService.login(username, password).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          this.submitEM.emit(response.user); // Emit thông tin user (hoặc dữ liệu khác nếu cần)
        },
        error: (err) => {
          console.error('Login failed', err);
          // Xử lý lỗi (có thể hiển thị thông báo lỗi)
        },
      });

      console.log('Username:', username);
      console.log('Password:', password);
    }
  }
}

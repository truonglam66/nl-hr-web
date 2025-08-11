import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { MaterialModule } from '../material.module';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup | any;

  @Input() error: string | null = null;

  @Output() submitEM = new EventEmitter();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  submit() {
    this.error = '';

    if (!this.form.valid) {
      console.log('Form is invalid', this.form.errors);
      console.error('Form is invalid');
      this.error = 'Please fill in all required fields.';
    } else {
      const { username, password } = this.form.value;

      // Gọi API để đăng nhập
      this.authService.login(username, password).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          this.router.navigate(['/manager']); // Chuyển hướng đến trang dashboard sau khi đăng nhập thành công
          this.submitEM.emit(response.user); // Emit thông tin user (hoặc dữ liệu khác nếu cần)
        },
        error: (err) => {
          console.error(err);
          this.error = 'Login failed. Please check your credentials.'; // Cập nhật lỗi để hiển thị trong giao diện
          this.form.reset(); // Reset form sau khi đăng nhập thất bại
        },
      });
    } // Emit null or an error object if the form is invalid}
  }
}

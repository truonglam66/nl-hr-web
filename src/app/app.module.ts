import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

// Import các module khác
import { FormsModule } from '@angular/forms'; // Nếu bạn cần sử dụng forms

// Import routes
import { routes } from './app.routes'; // Đảm bảo đường dẫn đúng
import { CommonModule } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    // Các component khác của bạn
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterOutlet,
    RouterModule.forChild(routes), // Cấu hình router
  ],
  providers: [provideHttpClient(withFetch())],
})
export class AppModule {}

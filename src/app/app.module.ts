import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';

// Import các module khác
import { HttpClientModule } from '@angular/common/http'; // Nếu bạn cần làm việc với HTTP
import { FormsModule } from '@angular/forms'; // Nếu bạn cần sử dụng forms

// Import routes
import { routes } from './app.routes'; // Đảm bảo đường dẫn đúng
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    // Các component khác của bạn
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterOutlet,
    RouterModule.forRoot(routes), // Cấu hình router
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}

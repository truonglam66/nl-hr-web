import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Import các module khác
import { HttpClientModule } from '@angular/common/http'; // Nếu bạn cần làm việc với HTTP
import { FormsModule } from '@angular/forms'; // Nếu bạn cần sử dụng forms
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Nếu bạn cần animations

// Import routes
import { routes } from './app.routes'; // Đảm bảo đường dẫn đúng

@NgModule({
  declarations: [
    // Các component khác của bạn
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes), // Cấu hình router
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}

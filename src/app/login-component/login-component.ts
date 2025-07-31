import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MaterialModule } from '../material.module';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  imports: [MaterialModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent implements OnInit {
  @Input() error: string | null = null;

  @Output() submitEM = new EventEmitter();

  ngOnInit() {}

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
}

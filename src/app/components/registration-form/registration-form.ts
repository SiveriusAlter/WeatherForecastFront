import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './registration-form.html',
  styleUrl: './registration-form.scss'
})
export class RegistrationForm {
  form: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required])
  });

  onSubmit() {
    console.log(this.form.value);
  }
}

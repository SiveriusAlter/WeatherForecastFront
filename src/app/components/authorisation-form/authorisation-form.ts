import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-authorisation-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './authorisation-form.html',
  styleUrl: './authorisation-form.scss'
})
export class AuthorisationForm {
form: FormGroup = new FormGroup({
  username: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required),
});

onSubmit() {
  console.log(this.form.value);
}
}

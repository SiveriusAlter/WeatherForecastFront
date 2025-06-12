import { Component } from '@angular/core';
import {RegistrationForm} from '../../components/fields/registration-form/registration-form';

@Component({
  selector: 'app-registration-page',
  imports: [
    RegistrationForm
  ],
  templateUrl: './registration-page.html',
  styleUrl: './registration-page.scss'
})
export class RegistrationPage {

}

import { Component } from '@angular/core';
import {RegistrationForm} from '../../components/registration-form/registration-form';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-registration-page',
  imports: [
    RegistrationForm,
    NgOptimizedImage
  ],
  templateUrl: './registration-page.html',
  styleUrl: './registration-page.scss'
})
export class RegistrationPage {
  public imagePath: string = 'assets/images/weathers.jpg';
}

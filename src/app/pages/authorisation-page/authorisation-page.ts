import { Component } from '@angular/core';
import {AuthorisationForm} from '../../components/authorisation-form/authorisation-form';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-authorisation-page',
  imports: [
    AuthorisationForm,
    NgOptimizedImage
  ],
  templateUrl: './authorisation-page.html',
  styleUrl: './authorisation-page.scss'
})
export class AuthorisationPage {
  public imagePath: string = 'assets/images/weathers.jpg';
}

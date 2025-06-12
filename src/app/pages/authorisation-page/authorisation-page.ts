import { Component } from '@angular/core';
import {AuthorisationForm} from '../../components/authorisation-form/authorisation-form';

@Component({
  selector: 'app-authorisation-page',
  imports: [
    AuthorisationForm
  ],
  templateUrl: './authorisation-page.html',
  styleUrl: './authorisation-page.scss'
})
export class AuthorisationPage {

}

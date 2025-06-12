import { Routes } from '@angular/router';
import {Layouts} from './components/layouts/layouts';
import {HomePage} from './pages/home-page/home-page';
import {AuthorisationPage} from './pages/authorisation-page/authorisation-page';
import {FindweatherPage} from './pages/findweather-page/findweather-page';
import {RegistrationPage} from './pages/registration-page/registration-page';

export const routes: Routes = [
    {
        path: '', component: Layouts, children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', title: 'Home', component: HomePage},
        {path: 'registration', title: 'Registration', component: RegistrationPage},
        {path: 'authorisation', title: 'Authorisation', component: AuthorisationPage},
        {path: 'find', title: 'FindWeather', component: FindweatherPage}
      ]
    }
];

import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TopBar} from '../top-bar/top-bar';

@Component({
  selector: 'app-layouts',
  imports: [
    RouterOutlet,
    TopBar
  ],
  templateUrl: './layouts.html',
  styleUrl: './layouts.scss'
})
export class Layouts {

}

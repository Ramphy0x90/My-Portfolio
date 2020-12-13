import { Component, OnInit } from '@angular/core';
import * as Rellax from '../../../assets/libraries/rellax/rellax.min.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let rellax = new Rellax('.rellax');
  }

}

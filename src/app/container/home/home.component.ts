import {Component, OnInit} from '@angular/core';
import * as Rellax from '../../../assets/libraries/rellax/rellax.min.js';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public target;

  public options = {loop: true};

  public writer;

  constructor() {}

  ngOnInit(): void {
    let rellax = new Rellax('.rellax');

    console.log(this.target);

    this.target = document.querySelector('.tw');

    this.writer = new Typewriter(this.target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'red'
    });

    this.writer
      .type("Hi, Im Ramphy a junior developer")
      .rest(2500)
      .start()
  }

}

import {Component, OnInit} from '@angular/core';
import * as Rellax from '../../../assets/libraries/rellax/rellax.min.js';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public options = {
    loop: false,
    typeSpeed: 70,
    deleteSpeed: 80,
  };

  public homeTitle;
  public homeSubTitle;

  constructor() {}

  ngOnInit(): void {
    let parallaxAboutMeImage = new Rellax('.img-container', {
      speed: 4,
    });
    let parallaxAboutMeText = new Rellax('.txt-container', {
      speed: 1,
    });


    this.homeTitle = new Typewriter(document.querySelector('.tw-title'), this.options);
    this.homeSubTitle = new Typewriter(document.querySelector('.tw-subtitle'), this.options);

    this.typeWriterAnimations();
  }

  typeWriterAnimations(){
    this.homeTitle
      .rest(666)
      .type(", I'm Ramphy ")
      .rest(500)
      .type("a junior developer")
      .removeCursor()
      .then(this.homeSubTitle.start.bind(this.homeSubTitle))
      .start();

    this.homeSubTitle
      .type("and this is my portfolio")
      .removeCursor();
  }
}

import {Component, OnInit} from '@angular/core';

import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  public navbar: any;
  public docHeight: number;
  public navHeight: number;

  text_1: string = 'I am a highly motivated and self-taught person. I have good knowledge in Java, Php and MySql, acquired during my apprenticeship as an application developer. In addition, I have knowledge in Python, Ionic, Angular and Assembly x64 learned independently.';

  constructor() {
  }

  ngOnInit(): void {
    AOS.init();

    window.addEventListener('load', this.onLoad, true);
  }

  onLoad(){
    this.navbar = document.querySelector('#main-nav');
    this.docHeight = window.innerHeight;
    this.navHeight = this.navbar.offsetHeight;

    let mainContainer = document.getElementById("main-container");
    let padding = ((this.docHeight - this.navHeight) - mainContainer.offsetHeight) / 2;

    mainContainer.style.padding = padding + "px 0";

    console.log(padding)
  }

}

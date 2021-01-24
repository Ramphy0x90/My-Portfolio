import {Component, OnInit} from '@angular/core';

import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  text_1: string = 'I am a highly motivated and self-taught person. I have good knowledge in Java, Php and MySql, acquired during my apprenticeship as an application developer. In addition, I have knowledge in Python, Ionic, Angular and Assembly x64 learned independently.';

  constructor() {
  }

  ngOnInit(): void {
    AOS.init();
  }

}

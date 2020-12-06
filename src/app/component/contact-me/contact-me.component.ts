import { Component, OnInit } from '@angular/core';
import { NAV_OPTIONS } from '../../mock/nav-options';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  public navOptions: string[] = NAV_OPTIONS;

  constructor() { }

  ngOnInit(): void {
  }

}

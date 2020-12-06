import { Component, OnInit } from '@angular/core';
import { NAV_OPTIONS } from '../../mock/nav-options';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  public navOptions: string[] = NAV_OPTIONS;

  constructor() { }

  ngOnInit(): void {
  }

}

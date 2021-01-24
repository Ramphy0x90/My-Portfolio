import {Component, OnInit} from '@angular/core';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  public navOptions: String[];
  public sectionPositions: { [name: string]: number; } = {};

  public navbar: any;
  public docHeight: number;
  public navHeight: number;

  public activeNavItem: any;

  constructor(private dataService: DataService) {
    this.navOptions = this.dataService.getNavOptions();
  }

  ngOnInit() {
    this.navbar = document.querySelector('#main-nav');
    this.docHeight = window.innerHeight;
    this.navHeight = this.navbar.offsetHeight;

    window.addEventListener('scroll', this.onScroll, true);

    this.updatePositions();
    this.setSectionsHeight();
    this.colorLinks();
  }

  stickyMenu() {
    if (window.pageYOffset >= this.docHeight - this.navHeight) {
      this.navbar.classList.add('sticky');
    } else {
      this.navbar.classList.remove('sticky');
    }
  }

  setSectionsHeight() {
    this.navOptions.forEach(option => {
      let tempOption = document.getElementById(String(option));

      if (option !== 'contact-me') {
        tempOption.style.height = (this.docHeight - this.navHeight) + 'px';
      }
    });
  }

  updatePositions() {
    this.navOptions.forEach(option => {
      let tempOption = document.getElementById(String(option));
      let position = tempOption instanceof HTMLElement ? tempOption.offsetTop : 0;
      let newPosition = position - window.pageYOffset;

      this.sectionPositions[String(option)] = newPosition - this.navHeight;
    });
  }

  colorLinks() {
    this.navOptions.forEach((option, index) => {
      let navItem = document.getElementById('nav-item-' + index).getElementsByTagName('a')[0];
      let offsetFromNav = this.sectionPositions[String(option)];

      if (offsetFromNav <= 0 || window.pageYOffset == (document.body.scrollHeight - document.documentElement.offsetHeight)) {
        this.activeNavItem = navItem;
      }

      if (this.activeNavItem === undefined) {
        this.activeNavItem = document.querySelector('#nav-item-0').getElementsByTagName('a')[0];
      }

      navItem.classList.remove('custom-active');
    });

    this.activeNavItem.classList.add('custom-active');
  }

  onScroll = (): void => {
    this.stickyMenu();
    this.updatePositions();
    this.colorLinks();
  };

}

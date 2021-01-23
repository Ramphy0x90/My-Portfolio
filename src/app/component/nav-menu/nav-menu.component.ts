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

  constructor(private dataService: DataService) {
    this.navOptions = this.dataService.getNavOptions();
  }

  ngOnInit() {
    const docHeight = window.innerHeight;

    let navbar = document.getElementById("main-nav");
    let navHeight;

    let tempNavOptions = this.navOptions;
    let tempSectionPositions = this.sectionPositions;

    let activeNavItem;

    window.onload = function() {
      navHeight = navbar.offsetHeight;

      setSectionsHeight();
      colorLinks();
    };

    window.onscroll = function() {
      stickyMenu();
      updatePositions();
      colorLinks();

      console.log(navHeight)
    };

    function stickyMenu() {
      if (window.pageYOffset >= docHeight - navHeight) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    }

    function colorLinks() {
      tempNavOptions.forEach((option, index) => {
        let navItem = document.getElementById('nav-item-' + index).getElementsByTagName('a')[0];
        let offsetFromNav = tempSectionPositions[String(option)];

        if (offsetFromNav <= 0 || window.pageYOffset == (document.body.scrollHeight - document.documentElement.offsetHeight)) {
          activeNavItem = navItem;
        }

        if (activeNavItem === undefined) {
          activeNavItem = document.getElementById('nav-item-0').getElementsByTagName('a')[0];
        }

        navItem.classList.remove('custom-active');
      });

      activeNavItem.classList.add('custom-active');
    }

    function setSectionsHeight() {
      tempNavOptions.forEach(option => {
        let tempOption = document.getElementById(String(option));

        if (option !== 'contact-me') {
          tempOption.style.height = (docHeight - navHeight) + 'px';
        }
      });
    }

    function updatePositions() {
      tempNavOptions.forEach(option => {
        let tempOption = document.getElementById(String(option));
        let position = tempOption instanceof HTMLElement ? tempOption.offsetTop : 0;
        let newPosition = position - window.pageYOffset;

        tempSectionPositions[String(option)] = newPosition - navHeight;
      });
    }

    this.sectionPositions = tempSectionPositions;
  }

}

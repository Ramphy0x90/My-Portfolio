import {Component, OnInit} from '@angular/core';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  public navOptions: String[];

  constructor(private dataService: DataService) {
    this.navOptions = this.dataService.getNavOptions();
  }

  ngOnInit(): void {
    window.onscroll = function() {
      stickyMenu();
    };

    let navbar = document.getElementsByClassName('navbar')[0];
    let sticky = navbar instanceof HTMLElement ? navbar.offsetTop : 0;

    function stickyMenu() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    }
  }

}

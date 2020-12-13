import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void { }

}

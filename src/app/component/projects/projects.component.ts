import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects: Object[];

  public navbar: any;
  public docHeight: number;
  public docWidth: number;
  public navHeight: number;

  public dataAosOffset: number;

  constructor(private dataService: DataService) {
    this.projects = this.dataService.getProjects();
  }

  ngOnInit(): void {
    window.addEventListener('load', this.onLoad, true);
  }

  onLoad(){
    this.navbar = document.querySelector('#main-nav');
    this.navHeight = this.navbar.offsetHeight;

    this.docWidth = window.innerWidth;
    this.docHeight = window.innerHeight;

    let mainContainer = document.getElementById("main-container-p");
    let padding = ((this.docHeight - this.navHeight) - mainContainer.offsetHeight) / 2;

    mainContainer.style.padding = padding + "px 0";

    this.dataAosOffset = (this.docWidth <= 767) ?  (mainContainer.offsetTop / 10) * 8 : 0;
  }

  dataAosDirection(position: number){

  }
}

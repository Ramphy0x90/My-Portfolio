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
  public navHeight: number;

  constructor(private dataService: DataService) {
    this.projects = this.dataService.getProjects();
  }

  ngOnInit(): void {
    window.addEventListener('load', this.onLoad, true);
  }

  onLoad(){
    this.navbar = document.querySelector('#main-nav');
    this.docHeight = window.innerHeight;
    this.navHeight = this.navbar.offsetHeight;

    let mainContainer = document.getElementById("main-container-p");
    let padding = ((this.docHeight - this.navHeight) - mainContainer.offsetHeight) / 2;

    mainContainer.style.padding = padding + "px 0";

    console.log(padding)
  }
}

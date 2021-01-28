import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects: Object[];

  constructor(private dataService: DataService) {
    this.projects = this.dataService.getProjects();
  }

  ngOnInit(): void {
  }

}

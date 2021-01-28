import { Injectable } from '@angular/core';
import { NAV_OPTIONS } from '../mock/nav-options';
import { PROJECTS } from '../mock/projects';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() { }

  public getNavOptions(): String[]{
      return NAV_OPTIONS;
  }

  public getProjects(): Object[]{
    return PROJECTS;
  }
}

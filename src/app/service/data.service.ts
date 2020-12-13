import { Injectable } from '@angular/core';
import { NAV_OPTIONS } from '../mock/nav-options';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() { }

  public getNavOptions(): String[]{
      return NAV_OPTIONS;
  }
}

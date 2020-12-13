import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  public navOptions: String[];

  constructor(private dataService: DataService) {
    this.navOptions = dataService.getNavOptions();
  }

  ngOnInit(): void {}

}

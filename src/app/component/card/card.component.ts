import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardTitle: string;
  @Input() cardTech: string;
  @Input() cardDescription: string;
  @Input() cardImg: string;
  @Input() cardBg: string;

  constructor() { }

  ngOnInit(): void {
  }

}

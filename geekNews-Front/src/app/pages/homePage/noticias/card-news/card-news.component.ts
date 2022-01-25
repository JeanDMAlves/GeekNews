import { INews } from './../../../../@theme/interfaces/INews';
import { Component, Input, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.css']
})
export class CardNewsComponent implements OnInit {
  @Input() news: INews[] = []

  constructor(private primengConfig: PrimeNGConfig){}
  public ngOnInit(): void {
      this.primengConfig.ripple = true;
  }
}

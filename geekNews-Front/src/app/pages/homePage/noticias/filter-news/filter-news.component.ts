import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-news',
  templateUrl: './filter-news.component.html',
  styleUrls: ['./filter-news.component.css']
})
export class FilterNewsComponent{
  @Input() public filtro!: string;
}

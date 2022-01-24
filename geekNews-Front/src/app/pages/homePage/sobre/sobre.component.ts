import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent{

  constructor( private router: Router) {}

  public navegaNoticias(): void{
    this.router.navigate(["pages/home/Notícias"]);
  }

  public navegaContato(): void{
    this.router.navigate(["pages/home/Contato"]);
  }
}

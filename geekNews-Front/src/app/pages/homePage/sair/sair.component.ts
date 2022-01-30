import { Router } from '@angular/router';
import { LocalStorageService } from './../../../@core/services/local-storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sair',
  templateUrl: './sair.component.html',
  styleUrls: ['./sair.component.css']
})
export class SairComponent {
  constructor(private localService: LocalStorageService, private router: Router){}

  public onClick(): void{
    this.localService.deleteToken()
    this.router.navigate(['Login'])
  }

}

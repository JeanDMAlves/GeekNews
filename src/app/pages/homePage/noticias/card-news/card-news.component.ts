import { ViewChild } from '@angular/core';
import { ModalComponent } from './../../../../@theme/components/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TemplateRef } from '@angular/core';
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
  @ViewChild('modalNews') modalNews!: TemplateRef<any>
  public selectedNews!: INews;

  constructor(private primengConfig: PrimeNGConfig, private modalService: NgbModal){}

  public showNews(evento: any): void{
    this.selectedNews = evento
    this.openModals(this.modalNews, evento.titulo)
  }


  /**
     * Abre um modal
     * @param modalBody - Corpo do modal
     * @param title - Título que será exibido
     * na parte esquerda do header do modal
     */
   private openModals(modalBody: TemplateRef<any>, title?: string): void {
    const openedModal = this.modalService.open(ModalComponent, { size: "xl" });
    openedModal.componentInstance.modalBody = modalBody;
    openedModal.componentInstance.title = title;
  }

  /**
   * Fecha qualquer modal aberto nessa instância do código
   */
  public closeModal(): void {
      this.modalService.dismissAll();
  }

  public ngOnInit(): void {
      this.primengConfig.ripple = true;
  }
}

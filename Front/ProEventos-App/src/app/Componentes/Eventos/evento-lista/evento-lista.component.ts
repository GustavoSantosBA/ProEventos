import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Evento } from 'src/app/Models/Evento';
import { EventoService } from 'src/app/Services/evento.service';

@Component({
  selector: 'app-evento-lista',
  templateUrl: './evento-lista.component.html',
  styleUrls: ['./evento-lista.component.scss']
})
export class EventoListaComponent implements OnInit {
  modalRef?: BsModalRef;
  eventos : Evento[] = [];
  eventosFiltrados : Evento[] = [];

  mostrarImg : boolean = true;

  private _filtroLista: string ='';

  public get filtroLista() : string {
    return this._filtroLista;
  }

  public set filtroLista(value : string){
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.onFiltrarEventos(this.filtroLista) : this.eventos;
  }

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router
    ) { }

  onFiltrarEventos(filtrarPor : string) : Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: { tema: string; local : string}) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
                                                   evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  };

  ngOnInit() {

    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

    this.getEventos();
  }

  onShowImg(){
    this.mostrarImg = !this.mostrarImg;
  }
  public getEventos():void {

      this.eventoService.getEventos().subscribe (
        (_eventosResp: Evento[]) => {
          this.eventos = _eventosResp;
          this.eventosFiltrados = this.eventos;
        },
        error => console.log(error)
      )
  }

  openModal(template: TemplateRef<any>) : void {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.toastr.success('O Registro foi excluído com sucesso !', 'Exclusão');
    this.modalRef?.hide();
  }

  decline(): void {
    this.modalRef?.hide();
  }

  detalheEvento(id: number) : void{
    this.router.navigate([`evento/detalhe/${id}`]);
  }

}

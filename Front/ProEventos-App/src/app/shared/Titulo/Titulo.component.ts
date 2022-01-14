import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Titulo',
  templateUrl: './Titulo.component.html',
  styleUrls: ['./Titulo.component.scss']
})
export class TituloComponent implements OnInit {

  @Input() titulo?: string;
  @Input() botaoListar: boolean = false;
  @Input() iconClass = 'fa fa-user';
  @Input() subtitulo = 'Desde 2021';
  constructor(private router: Router) { }

  ngOnInit() {

  }

  listar() : void {
    this.router.navigate([`/${this.titulo?.toLocaleLowerCase()}/lista`]);
  }

}

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { NavComponent } from './shared/nav/nav.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';
import { DateTimeFormatPipe } from './helpers/DateTimeFormat.pipe';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

import { EventosComponent } from './Componentes/Eventos/Eventos.component';
import { PalestrantesComponent } from './Componentes/Palestrantes/Palestrantes.component';
import { ContatosComponent } from './Componentes/Contatos/Contatos.component';
import { DashboardComponent } from './Componentes/Dashboard/Dashboard.component';
import { PerfilComponent } from './Componentes/Perfil/Perfil.component';
import { TituloComponent } from './shared/Titulo/Titulo.component';
import { EventoListaComponent } from './Componentes/Eventos/evento-lista/evento-lista.component';
import { EventoDetalheComponent } from './Componentes/Eventos/evento-detalhe/evento-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
      EventosComponent,
      PalestrantesComponent,
      ContatosComponent,
      DashboardComponent,
      PerfilComponent,
      NavComponent,
      TituloComponent,
      DateTimeFormatPipe,
      EventoListaComponent,
      EventoDetalheComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true
    }),
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

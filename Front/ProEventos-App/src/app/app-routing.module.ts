import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './Componentes/Contatos/Contatos.component';
import { DashboardComponent } from './Componentes/Dashboard/Dashboard.component';
import { EventoDetalheComponent } from './Componentes/Eventos/evento-detalhe/evento-detalhe.component';
import { EventoListaComponent } from './Componentes/Eventos/evento-lista/evento-lista.component';
import { EventosComponent } from './Componentes/Eventos/Eventos.component';
import { PalestrantesComponent } from './Componentes/Palestrantes/Palestrantes.component';
import { PerfilComponent } from './Componentes/Perfil/Perfil.component';

const routes: Routes = [
  {path:'evento', redirectTo:'evento/lista'},
  {
    path: 'evento', component: EventosComponent,
    children: [
      { path: 'detalhe/:id', component: EventoDetalheComponent },
      {path: 'detalhe', component: EventoDetalheComponent},
      {path: 'lista', component: EventoListaComponent}
    ]
  },
  {path: 'palestrantes', component: PalestrantesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'contatos', component: ContatosComponent},
  {path: '', redirectTo: 'dashboard', pathMatch:'full'},
  {path: '**', redirectTo: 'dashboard', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

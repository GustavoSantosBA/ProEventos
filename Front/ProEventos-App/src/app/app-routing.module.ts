import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './Componentes/Dashboard/Dashboard.component';
import { PalestrantesComponent } from './Componentes/Palestrantes/Palestrantes.component';

import { EventosComponent } from './Componentes/Eventos/Eventos.component';
import { EventoDetalheComponent } from './Componentes/Eventos/evento-detalhe/evento-detalhe.component';
import { EventoListaComponent } from './Componentes/Eventos/evento-lista/evento-lista.component';

import { UserComponent } from './Componentes/user/user.component';
import { LoginComponent } from './Componentes/user/login/login.component';
import { RegistrationComponent } from './Componentes/user/registration/registration.component';
import { PerfilComponent } from './Componentes/user/Perfil/Perfil.component';

import { ContatosComponent } from './Componentes/Contatos/Contatos.component';

const routes: Routes = [
  { path: 'user', component: UserComponent,
    children:[
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent }
    ]
  },
  {path: 'user/perfil', component: PerfilComponent},
  {path: 'evento', redirectTo:'evento/lista'},
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
  {path: 'contatos', component: ContatosComponent},
  {path: '', redirectTo: 'dashboard', pathMatch:'full'},
  {path: '**', redirectTo: 'dashboard', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

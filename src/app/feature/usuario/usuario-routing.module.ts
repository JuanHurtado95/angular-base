import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListarUsuarioComponent
      },
      {
        path: 'crear',
        component: CrearUsuarioComponent
      },
      {
        path: 'editar',
        component: EditarUsuarioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsuarioRoutingModule { }

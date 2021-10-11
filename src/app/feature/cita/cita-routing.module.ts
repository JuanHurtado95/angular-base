import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { EditarCitaComponent } from './components/editar-cita/editar-cita.component';
import { ListarCitaComponent } from './components/listar-cita/listar-cita.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListarCitaComponent
      },
      {
        path: 'crear',
        component: CrearCitaComponent
      },
      {
        path: 'editar',
        component: EditarCitaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitaRoutingModule { }

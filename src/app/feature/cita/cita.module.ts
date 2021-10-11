import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitaRoutingModule } from './cita-routing.module';
import { ListarCitaComponent } from './components/listar-cita/listar-cita.component';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { EditarCitaComponent } from './components/editar-cita/editar-cita.component';
import { CitaService } from './shared/service/cita.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListarCitaComponent,
    CrearCitaComponent,
    EditarCitaComponent
  ],
  imports: [
    CommonModule,
    CitaRoutingModule,
    FormsModule,
    CommonModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [CitaService]
})
export class CitaModule { }

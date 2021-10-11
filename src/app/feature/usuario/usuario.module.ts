import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { UsuarioService } from './shared/service/usuario.service';
import { UsuarioRoutingModule } from './usuario-routing.module';

@NgModule({
  declarations: [
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    ListarUsuarioComponent
  ],
  imports: [
    UsuarioRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    SharedModule
  ],

  exports:[
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],

  providers: [UsuarioService]
})
export class UsuarioModule { }

import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class UsuarioService {

  usuario: Usuario;

  constructor(protected http:HttpService) { }

  getUsuarios(){
    return this.http.doGet<Usuario[]>(`${environment.endpoint}/usuarios`);
  }
  createUsuario(usuario:Usuario){
    return this.http.doPost<Usuario, boolean>(`${environment.endpoint}/usuarios`,usuario);
  }

  updateUsuario(usuario:Usuario){
    return this.http.doPut<Usuario, boolean>(`${environment.endpoint}/usuarios/${usuario.id}`,usuario);
  }
  deleteUsuario(usuario:Usuario){
    return this.http.doDelete<Usuario>(`${environment.endpoint}/usuarios/${usuario.id}`);
  }

}

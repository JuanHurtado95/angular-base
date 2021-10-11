import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Cita } from '../model/cita';

@Injectable()
export class CitaService {

  cita: Cita;

  constructor(protected http:HttpService) { }

  getCitas(){
    return this.http.doGet<Cita[]>(`${environment.endpoint}/citas`);
  }

  createCita(cita:Cita){
    return this.http.doPost<Cita, boolean>(`${environment.endpoint}/citas`,cita);
  }

  updateCita(cita:Cita){
    return this.http.doPut<Cita, boolean>(`${environment.endpoint}/citas/${cita.id}`,cita);
  }

  deleteCita(cita:Cita){
    return this.http.doDelete<Cita>(`${environment.endpoint}/citas/${cita.id}`);
  }  

}

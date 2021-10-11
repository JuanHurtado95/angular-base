import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Vehiculo } from '../model/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(protected http:HttpService) { }

  getVehiculos(){
    return this.http.doGet<Vehiculo[]>(`${environment.endpoint}/vehiculos`);
  }
}

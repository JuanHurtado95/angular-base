import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from '@cita/shared/model/cita';
import { SwalService } from '@core/services/swal.service';
import { Observable } from 'rxjs';
import { Vehiculo } from 'src/app/feature/vehiculo/shared/model/vehiculo';
import { VehiculoService } from 'src/app/feature/vehiculo/shared/service/vehiculo.service';

import { CitaService } from "../../shared/service/cita.service";

@Component({
  selector: "app-editar-cita",
  templateUrl: "./editar-cita.component.html",
  styleUrls: ["./editar-cita.component.css"]
})
export class EditarCitaComponent implements OnInit {
  cita: Cita = new Cita();
  public vehiculos:Observable<Vehiculo[]>;

  constructor(
    private router: Router,
    private service: CitaService,
    private vehiculoService:VehiculoService,
    protected swalService: SwalService
  ) { 
    this.cita = this.service.cita;
  }

  ngOnInit(): void {
    this.vehiculos = this.vehiculoService.getVehiculos();
  }

  actualizarCita(cita: Cita) {
    this.service.updateCita(cita).subscribe(
      () => {
        this.swalService.succes("Cita actualizada correctamente");
        this.router.navigate(["citas"]);
      },
      (error) => {
        this.swalService.danger(error.error.mensaje);
      }
    );
  }

}

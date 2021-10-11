import { Component, OnInit } from '@angular/core';
import { Cita } from '@cita/shared/model/cita';
import { Vehiculo } from 'src/app/feature/vehiculo/shared/model/vehiculo';
import { CitaService } from '@cita/shared/service/cita.service';
import { SwalService } from '@core/services/swal.service';
import { Observable } from 'rxjs';
import { VehiculoService } from 'src/app/feature/vehiculo/shared/service/vehiculo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {

  cita:Cita=new Cita();
  public vehiculos:Observable<Vehiculo[]>;

  constructor(
    private router:Router,
    private service:CitaService,
    private vehiculoService:VehiculoService,
    protected swalService: SwalService,
    ) { }

  ngOnInit(): void {
    this.vehiculos = this.vehiculoService.getVehiculos();
  }

  guardarCita(){
    this.service.createCita(this.cita).subscribe(
      () => {
        this.swalService.succes("Cita creado correctamente");
        this.router.navigate(["cita"]);
      },
      (error) => {
        this.swalService.danger(error.error.mensaje);
      }
    );
   }

}

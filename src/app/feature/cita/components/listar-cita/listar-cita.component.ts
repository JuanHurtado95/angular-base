import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from '@cita/shared/model/cita';
import { CitaService } from '@cita/shared/service/cita.service';
import { SwalService } from '@core/services/swal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-cita',
  templateUrl: './listar-cita.component.html',
  styleUrls: ['./listar-cita.component.css']
})
export class ListarCitaComponent implements OnInit {

  public citas:Observable<Cita[]>;
  constructor(private service: CitaService, private router: Router, protected swalService: SwalService) { }

  ngOnInit() {
    this.citas = this.service.getCitas();
  }

  nuevaCita(){
    this.router.navigate(["cita/crear"]);
  }

  editarCita(cita:Cita){
    this.service.cita = cita;
    this.router.navigate(["cita/editar"]);
  }

  deleteCita(cita:Cita){
    this.service.deleteCita(cita).subscribe(()=>{
    this.swalService.danger("Cita eliminada correctamente");
    this.citas = this.service.getCitas();
   })
  }

}

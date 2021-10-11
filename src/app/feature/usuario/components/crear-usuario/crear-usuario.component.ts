import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SwalService } from "@core/services/swal.service";
import { Usuario } from "src/app/feature/usuario/shared/model/Usuario";
import { UsuarioService } from "../../shared/service/usuario.service";

@Component({
  selector: "app-add",
  templateUrl: "./crear-usuario.component.html",
  styleUrls: ["./crear-usuario.component.css"],
})
export class CrearUsuarioComponent implements OnInit {
  usuario: Usuario = new Usuario();
  constructor(
    private router: Router,
    private service: UsuarioService,
    protected swalService: SwalService
  ) {}

  ngOnInit() {}

  Guardar() {
    this.service.createUsuario(this.usuario).subscribe(
      () => {
        this.swalService.succes("Usuario creado correctamente");
        this.router.navigate(["usuarios"]);
      },
      (error) => {
        this.swalService.danger(error.error.mensaje);
      }
    );
  }
}

import { by, element } from "protractor";

export class ListarCitas{

    private botonCrearCita = element.all(by.id("botonCrearCita"));
    private tablaCitas = element.all(by.className("tablaCitas"));
    private botonEditarCita = element.all(by.id("botonEditarCita"));
    private botonEliminarCita = element.all(by.id("botonEliminarCita"));
    private swal = element(by.className('swal2-title'));
  
  
    async contarCitas() {
      return this.tablaCitas.count();
    }
  
    async clickBotonCrearCita() {
      await this.botonCrearCita.click();
    }
  
    async clickBotonEditarCita() {
      await this.botonEditarCita.click();
    }
  
    async clickBotonEliminarCita() {
      await this.botonEliminarCita.click();
    }
  
    async getTextoSwal(): Promise<string> {
      return await this.swal.getText();
    }
  
  }
  
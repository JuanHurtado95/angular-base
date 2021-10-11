import { by, element } from "protractor";

export class ListarUsuarios{

  private botonCrearUsuario = element.all(by.id("botonCrearUsuario"));
  private tablaUsuarios = element.all(by.className("tablaUsuarios"));
  private botonEditarUsuario = element.all(by.id("botonEditarUsuario1"));
  private botonEliminarUsuario = element.all(by.id("botonEliminarUsuario1"));
  private swal = element(by.className('swal2-title'));


  async contarUsuarios() {
    return this.tablaUsuarios.count();
  }

  async clickBotonCrearUsuario() {
    await this.botonCrearUsuario.click();
  }

  async clickBotonEditarUsuario() {
    await this.botonEditarUsuario.click();
  }

  async clickBotonEliminarUsuario() {
    await this.botonEliminarUsuario.click();
  }

  async getTextoSwal(): Promise<string> {
    return await this.swal.getText();
  }

}

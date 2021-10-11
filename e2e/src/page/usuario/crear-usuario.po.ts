import { by, element } from "protractor";

export class CrearUsuario {

  private inputNombreUsuario = element(by.id("nombreUsuario"));
  private inputCedula = element(by.id("cedula"));
  private inputTelefono = element(by.id("telefono"));
  private botonGuardarUsuario = element(by.id("guardarUsuario"));
  private swal = element(by.className('swal2-title'));

  async clickInputNombre() {
    await this.inputNombreUsuario.click();
  }
  async clickInputCedula() {
    await this.inputCedula.click();
  }
  async clickInputTelefono() {
    await this.inputTelefono.click();
  }

  async setInputNombre(nombreUsuario: string) {
    await this.inputNombreUsuario.sendKeys(nombreUsuario);
  }

  async setInputCedula(cedula: string) {
    await this.inputCedula.sendKeys(cedula);
  }

  async setInputTelefono(telefono: string) {
    await this.inputCedula.sendKeys(telefono);
  }

  async clickBotonGuardarUsuario() {
    await this.botonGuardarUsuario.click();
  }

  async getTextoSwal(): Promise<string> {
    return await this.swal.getText();
  }

}

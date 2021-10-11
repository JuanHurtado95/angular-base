import { by, element } from "protractor";

export class EditarUsuario {
  private inputNombreUsuario = element(by.id("nombreUsuario"));
  private inputCedula = element(by.id("cedula"));
  private inputTelefono = element(by.id("telefono"));
  private botonActualizarUsuario = element(by.id("actualizarUsuario"));
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

  async limpiarInputNombre() {
    await this.inputNombreUsuario.clear();
  }

  async limpiarInputCedula() {
    await this.inputCedula.clear();
  }

  async limpiarInputTelefono() {
    await this.inputCedula.clear();
  }

  async setInputNombre(nombreUsuario: string) {
    await this.inputNombreUsuario.sendKeys(nombreUsuario);
  }

  async setInputCedula(cedula: string) {
    await this.inputCedula.sendKeys(cedula);
  }

  async setInputTelefono(telefono: string) {
    await this.inputTelefono.sendKeys(telefono);
  }

  async clickBotonActualizarUsuario() {
    await this.botonActualizarUsuario.click();
  }

  async getTextoSwal(): Promise<string> {
    return await this.swal.getText();
  }


}

import { by, element } from 'protractor';

export class CrearCita {
    private inputIdVehiculo = element(by.id("idVehiculo"));
    private seleccionVehiculo = element.all(by.id("vehiculos"));
    private inputFechaCita = element(by.id("fechaCita"));
    private botonCreaCita = element(by.id("guardarcita"));
    private swal = element(by.className('swal2-title'));

    async clickInputIdVehiculo() {
        await this.inputIdVehiculo.click();
    }

    async clickOpcionIdVehiculo() {
        await this.getOpcionIdVehiculo().click();
    }

      async setInputFechaCita(fechaCita: string) {
        await this.inputFechaCita.sendKeys(fechaCita);
    }

    getOpcionIdVehiculo() {
        return this.seleccionVehiculo.first();
    }

    async clickBotonGuardarCita() {
        await this.botonCreaCita.click();
    }

    async getTextoSwal(): Promise<string> {
        return await this.swal.getText();
    }

}
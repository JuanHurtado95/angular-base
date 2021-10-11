import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkUsuarios = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkCitas = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));

    async clickBotonUsuarios() {
        await this.linkUsuarios.click();
    }
    async clickBotonCitas() {
        await this.linkCitas.click();
      }
}

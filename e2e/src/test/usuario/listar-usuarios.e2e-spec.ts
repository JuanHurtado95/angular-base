import { NavbarPage } from "../../page/navbar/navbar.po";
import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { ListarUsuarios } from "../../page/usuario/listar-usuarios.po";


describe("Listar usuarios", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarUsuarios: ListarUsuarios;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    listarUsuarios = new ListarUsuarios();
  });

  it("Deberia listar usuarios", () => {
    //arrange
    page.navigateTo();
    //act
    navBar.clickBotonUsuarios();
    browser.sleep(500);
    //assert
    expect(3).toBe(listarUsuarios.contarUsuarios());
    browser.sleep(500);
  });
});

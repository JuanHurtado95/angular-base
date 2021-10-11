import { NavbarPage } from "../../page/navbar/navbar.po";
import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { ListarUsuarios } from "../../page/usuario/listar-usuarios.po";

describe("Crear Usuario", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarUsuarios: ListarUsuarios;
  const USUARIO_ELIMINADO = "Usuario eliminado correctamente";

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    listarUsuarios = new ListarUsuarios();
  });

  it("Debe eliminar el Usuario", () => {
  //arrange
    page.navigateTo();
    browser.sleep(500);
    navBar.clickBotonUsuarios();
    browser.sleep(500);

    //act
    listarUsuarios.clickBotonEliminarUsuario();
    browser.sleep(500);

    //assert
    //const alerta = "El usuario ha sido eliminado";
    const alerta = listarUsuarios.getTextoSwal();
    expect(alerta).toEqual(USUARIO_ELIMINADO);
    browser.sleep(500);
  });
});

import { NavbarPage } from "../../page/navbar/navbar.po";
import { AppPage } from "../../app.po";
import { ListarUsuarios } from "../../page/usuario/listar-usuarios.po";

describe("Eliminar Usuario", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarUsuarios: ListarUsuarios;
  const USUARIO_ELIMINADO = "Usuario eliminado correctamente";

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    listarUsuarios = new ListarUsuarios();
  });

  it("Debe eliminar el Usuario", async () => {
  //arrange
    await page.navigateTo();
    await navBar.clickBotonUsuarios();

    //act
    await listarUsuarios.clickBotonEliminarUsuario();

    //assert
    //const alerta = "El usuario ha sido eliminado";
    const alerta = await listarUsuarios.getTextoSwal();
    
    await expect(alerta).toEqual(USUARIO_ELIMINADO);
  });
});

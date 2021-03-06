import { NavbarPage } from "../../page/navbar/navbar.po";
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

  it("Deberia listar usuarios", async () => {
    //arrange
    await page.navigateTo();
    //act
    await navBar.clickBotonUsuarios();
    //assert
    await expect(2).toBe(listarUsuarios.contarUsuarios());
  });
});

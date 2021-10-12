import { NavbarPage } from "../../page/navbar/navbar.po";
import { AppPage } from "../../app.po";
import { ListarCitas } from "../../page/cita/listar-cita.po";


describe("Listar usuarios", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarcitas: ListarCitas;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    listarcitas = new ListarCitas();
  });

  it("Deberia listar usuarios", async () => {
    //arrange
    await page.navigateTo();
    //act
    await navBar.clickBotonCitas();
    //assert
    await expect(2).toBe(listarcitas.contarCitas());
  });
});

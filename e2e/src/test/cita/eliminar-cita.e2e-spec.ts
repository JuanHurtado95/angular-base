import { NavbarPage } from "../../page/navbar/navbar.po";
import { AppPage } from "../../app.po";
import { ListarCitas } from "../../page/cita/listar-cita.po";

describe("Eliminar Cita", () => {
    let page: AppPage;
  let navBar: NavbarPage;
  let listarCitas: ListarCitas;
  const CITA_ELIMINADA = "Cita eliminada correctamente";

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    listarCitas = new ListarCitas();
  });

  it("Debe eliminar la cita", async () => {
  //arrange
    await page.navigateTo();
    await navBar.clickBotonCitas();

    //act
    await listarCitas.clickBotonEliminarCita();

    //assert
    //const alerta = "El usuario ha sido eliminado";
    const alerta = await listarCitas.getTextoSwal();
    await expect(alerta).toEqual(CITA_ELIMINADA);
  });

});
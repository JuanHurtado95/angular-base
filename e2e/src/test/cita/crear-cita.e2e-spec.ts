import { NavbarPage } from "../../page/navbar/navbar.po";
import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { CrearCita } from "../../page/cita/crear-cita.po";
import { ListarCitas } from "../../page/cita/listar-citas.po";

describe("Crear Usuario", () => {
    
  let page: AppPage;
  let navBar: NavbarPage;
  let listarCitas: ListarCitas;
  let crearCita: CrearCita;
  const FECHA_CITA = "10-27-2021";
  const CITA_CREADA = "Cita creada correctamente";
  const FECHA_CITA_FINDE= "10-23-2021";

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    crearCita = new CrearCita();
    listarCitas = new ListarCitas();
  });

  it("Debe crear el Tiquete", () => {

    page.navigateTo();
    browser.sleep(1000);
    navBar.clickBotonCitas();
    browser.sleep(1000);
    listarCitas.clickBotonCrearCita();
    browser.sleep(1000);
    crearCita.clickInputIdVehiculo();
    browser.sleep(1000);

  });

});
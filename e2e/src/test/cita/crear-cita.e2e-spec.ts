import { NavbarPage } from "../../page/navbar/navbar.po";
import { AppPage } from "../../app.po";
import { CrearCita } from "../../page/cita/crear-cita.po";
import { ListarCitas } from "../../page/cita/listar-cita.po";

describe("Crear Cita", () => {
    
  let page: AppPage;
  let navBar: NavbarPage;
  let listarCitas: ListarCitas;
  let crearCita: CrearCita;
  const FECHA_CITA = "10-27-2021";
  const CITA_CREADA = "Cita creado correctamente";
  const FECHA_CITA_FINDE= "10-23-2021";
  const DIAS_SABADOS_DOMINGOS= "No se agenda citas los dias sabados y domingos";

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    crearCita = new CrearCita();
    listarCitas = new ListarCitas();
  });

  it("Debe crear la Cita", async () => {

    await page.navigateTo();
    await navBar.clickBotonCitas();
    await listarCitas.clickBotonCrearCita();
    await crearCita.clickInputIdVehiculo();
    await crearCita.clickOpcionIdVehiculo();
    await crearCita.clickInputFechaCita();
    await crearCita.setInputFechaCita(FECHA_CITA);

    //act
    await crearCita.clickBotonGuardarCita();

    //assert
    //const alerta = "Cita creada correctamente";
    const alerta = await crearCita.getTextoSwal();
    await expect(alerta).toEqual(CITA_CREADA);
  });

  it("Debe error dias sabado o domingo", async () => {

    await page.navigateTo();
    await navBar.clickBotonCitas();
    await listarCitas.clickBotonCrearCita();
    await crearCita.clickInputIdVehiculo();
    await crearCita.clickInputIdVehiculo();
    await crearCita.clickOpcionIdVehiculo();
    await crearCita.clickInputFechaCita();
    await crearCita.setInputFechaCita(FECHA_CITA_FINDE);
    

    //act
    await crearCita.clickBotonGuardarCita();

    //assert
    //const alerta = "No se agenda citas los dias sabados y domingos";
    const alerta = await crearCita.getTextoSwal();
    await expect(alerta).toEqual(DIAS_SABADOS_DOMINGOS);
  });

});
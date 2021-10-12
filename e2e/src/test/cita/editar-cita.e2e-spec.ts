import { NavbarPage } from "../../page/navbar/navbar.po";
import { AppPage } from "../../app.po";
import { EditarCita } from "../../page/cita/editar-cita.po";
import { ListarCitas } from "../../page/cita/listar-cita.po";

describe("Editar Cita", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarCitas: ListarCitas;
  let editarCita: EditarCita;
  const FECHA_CITA = "10-11-2021";
  const CITA_ACTUALIZADA = "Cita actualizada correctamente";
  //const FECHA_CITA_FINDE= "10-23-2021";
  //const FECHA_ACTUAL= new Date();
  //const FECHA_VENCIDA= "09-07-2021"
  //const DIAS_SABADOS_DOMINGOS= "No se agenda citas los dias sabados y domingos";
  //const CITA_NO_PUEDE_SER_ACTUALIZADA= "No puede reprogramar la cita un dia antes a la fecha";
  //const CITA_VENCIDA="No puede reprogramar una cita vencida";

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    editarCita = new EditarCita();
    listarCitas = new ListarCitas();
  });

  it("Debe editar la Cita", async () => {

    await page.navigateTo();
    await navBar.clickBotonCitas();
    await listarCitas.clickBotonEditarCita();
    await editarCita.clickInputIdVehiculo();
    await editarCita.clickOpcionIdVehiculo();
    await editarCita.clickInputFechaCita();
    await editarCita.setInputFechaCita(FECHA_CITA);

    //act
    await editarCita.clickBotonGuardarCita();

    //assert
    //const alerta = "Cita creada correctamente";
    const alerta = await editarCita.getTextoSwal();
    expect(alerta).toEqual(CITA_ACTUALIZADA);
  });
  /*
  it("Debe salir error dias sabado o domingo", async () => {

    await page.navigateTo();
    await navBar.clickBotonCitas();
    await listarCitas.clickBotonCrearCita();
    await editarCita.clickInputIdVehiculo();
    await editarCita.clickInputIdVehiculo();
    await editarCita.clickOpcionIdVehiculo();
    await editarCita.clickInputFechaCita();
    await editarCita.setInputFechaCita(FECHA_CITA_FINDE);

    //act
    await editarCita.clickBotonGuardarCita();

    //assert
    //const alerta = "No se agenda citas los dias sabados y domingos";
    const alerta = editarCita.getTextoSwal();
    await expect(alerta).toEqual(DIAS_SABADOS_DOMINGOS);
  });

  it("Debe salir error no puede actualizarse un dia antes de la cita", async () => {

    await page.navigateTo();
    await navBar.clickBotonCitas();
    await listarCitas.clickBotonCrearCita();
    await editarCita.clickInputIdVehiculo();
    await editarCita.clickInputIdVehiculo();
    await editarCita.clickOpcionIdVehiculo();
    await editarCita.clickInputFechaCita();
    await editarCita.setInputFechaCita(FECHA_CITA);

    //act
    await editarCita.clickBotonGuardarCita();

    //assert
    //const alerta = "No se agenda citas los dias sabados y domingos";
    const alerta = editarCita.getTextoSwal();
    await expect(alerta).toEqual(CITA_NO_PUEDE_SER_ACTUALIZADA);
  });

  it("Debe salir error no puede actualizarse una cita vencida", async () => {

    await page.navigateTo();
    await navBar.clickBotonCitas();
    await listarCitas.clickBotonCrearCita();
    await editarCita.clickInputIdVehiculo();
    await editarCita.clickInputIdVehiculo();
    await editarCita.clickOpcionIdVehiculo();
    await editarCita.clickInputFechaCita();
    await editarCita.setInputFechaCita(FECHA_VENCIDA);

    //act
    await editarCita.clickBotonGuardarCita();

    //assert
    //const alerta = "No se agenda citas los dias sabados y domingos";
    const alerta = editarCita.getTextoSwal();
    await expect(alerta).toEqual(CITA_VENCIDA);
  });*/

});
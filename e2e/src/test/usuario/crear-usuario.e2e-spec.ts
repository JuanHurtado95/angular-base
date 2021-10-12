import { NavbarPage } from "../../page/navbar/navbar.po";
import { AppPage } from "../../app.po";
import { CrearUsuario } from "../../page/usuario/crear-usuario.po";
import { ListarUsuarios } from "../../page/usuario/listar-usuarios.po";

describe("Crear Usuario", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarUsuarios: ListarUsuarios;
  let crearUsuario: CrearUsuario;
  const NOMBRE = 'SDFGHYT';
  const CEDULA = '45356567';
  const TELEFONO = '423554667';
  const USUARIO_CREADO = "Usuario creado correctamente";
  const USUARIO_YA_EXISTE = "El usuario ya existe en el sistema";


  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    crearUsuario = new CrearUsuario();
    listarUsuarios = new ListarUsuarios();
  });

  it("Debe crear el Usuario", async () => {
  //arrange
    await page.navigateTo();
    await navBar.clickBotonUsuarios();
    await listarUsuarios.clickBotonCrearUsuario();
    await crearUsuario.clickInputNombre();
    await crearUsuario.setInputNombre(NOMBRE);
    await crearUsuario.clickInputCedula();
    await crearUsuario.setInputCedula(CEDULA);
    await crearUsuario.clickInputCedula();
    await crearUsuario.setInputTelefono(TELEFONO);

    //act
    await crearUsuario.clickBotonGuardarUsuario();

    //assert
    //const alerta = "El usuario ha sido creado";
    const alerta = await crearUsuario.getTextoSwal();
    await expect(await alerta).toEqual(await USUARIO_CREADO);
  });

  it("Debe retornar un error que usuario ya existe ", async () => {
    //arrange
      await page.navigateTo();
      await navBar.clickBotonUsuarios();
      await listarUsuarios.clickBotonCrearUsuario();
      await crearUsuario.clickInputNombre();
      await crearUsuario.setInputNombre(NOMBRE);
      await crearUsuario.clickInputCedula();
      await crearUsuario.setInputCedula(CEDULA);
      await crearUsuario.clickInputCedula();
      await crearUsuario.setInputTelefono(TELEFONO);

      //act
      await crearUsuario.clickBotonGuardarUsuario();

      //assert
      //const alerta = "El usuario ya existe";
      const alerta = await crearUsuario.getTextoSwal();
      expect(await alerta).toEqual(await USUARIO_YA_EXISTE);
    });

});

import { NavbarPage } from "../../page/navbar/navbar.po";
import { EditarUsuario } from "../../page/usuario/editar-usuario.po";
import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { ListarUsuarios } from "../../page/usuario/listar-usuarios.po";

describe("Editar Usuario", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarUsuarios: ListarUsuarios;
  let editarUsuario: EditarUsuario
  const NOMBRE = 'test usuario';
  const CEDULA = '78901';
  const TELEFONO = '76544324';
  const USUARIO_CREADO = "Usuario actualizado correctamente";
  const USUARIO_YA_EXISTE = "La cedula ya existe en el sistema";
  const CEDULA_REPETIDA = '7634535';
  const NOMBRE_ACTUALIZAR = 'Usuario dos';


  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    editarUsuario = new EditarUsuario();
    listarUsuarios = new ListarUsuarios();
  });

  it("Debe editar el Usuario", () => {
  //arrange
    page.navigateTo();
    browser.sleep(1000);
    navBar.clickBotonUsuarios();
    browser.sleep(1000);
    listarUsuarios.clickBotonEditarUsuario();
    browser.sleep(1000);
    editarUsuario.clickInputNombre();
    editarUsuario.limpiarInputNombre();
    editarUsuario.setInputNombre(NOMBRE);
    browser.sleep(1000);
    editarUsuario.clickInputCedula();
    editarUsuario.limpiarInputCedula();
    editarUsuario.setInputCedula(CEDULA);
    browser.sleep(1000);
    editarUsuario.clickInputTelefono();
    editarUsuario.limpiarInputTelefono();
    editarUsuario.setInputTelefono(TELEFONO);
    browser.sleep(1000);

    //act
    editarUsuario.clickBotonActualizarUsuario();

    //assert
    //const alerta = "El usuario ha sido editado";
    const alerta = editarUsuario.getTextoSwal();
    expect(alerta).toEqual(USUARIO_CREADO);
    browser.sleep(300);
  });

  it("Debe retornar un error que la cedula ya existe ", () => {
    //arrange
      page.navigateTo();
      navBar.clickBotonUsuarios();
      browser.sleep(1000);
      listarUsuarios.clickBotonEditarUsuario();
      browser.sleep(1000);
      editarUsuario.clickInputNombre();
      editarUsuario.limpiarInputNombre();
      editarUsuario.setInputNombre(NOMBRE_ACTUALIZAR);
      browser.sleep(1000);
      editarUsuario.clickInputCedula();
      editarUsuario.limpiarInputCedula();
      editarUsuario.setInputCedula(CEDULA_REPETIDA);
      browser.sleep(1000);
      editarUsuario.clickInputTelefono();
      editarUsuario.limpiarInputTelefono();
      editarUsuario.setInputTelefono(TELEFONO);
      browser.sleep(1000);

      //act
      editarUsuario.clickBotonActualizarUsuario();

      //assert
      //const alerta = "La cedula ya existe";
      const alerta = editarUsuario.getTextoSwal();
      expect(alerta).toEqual(USUARIO_YA_EXISTE);
      browser.sleep(300);
    });

});

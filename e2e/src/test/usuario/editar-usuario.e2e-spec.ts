import { NavbarPage } from "../../page/navbar/navbar.po";
import { EditarUsuario } from "../../page/usuario/editar-usuario.po";
import { AppPage } from "../../app.po";
import { ListarUsuarios } from "../../page/usuario/listar-usuarios.po";

describe("Editar Usuario", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarUsuarios: ListarUsuarios;
  let editarUsuario: EditarUsuario;
  const NOMBRE = 'test usuario';
  const CEDULA = '78901';
  const TELEFONO = '76544324';
  const USUARIO_CREADO = "Usuario actualizado correctamente";
  //const USUARIO_YA_EXISTE = "La cedula ya existe en el sistema";
  //const CEDULA_REPETIDA = '7634535';
  //const NOMBRE_ACTUALIZAR = 'Usuario dos';


  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    editarUsuario = new EditarUsuario();
    listarUsuarios = new ListarUsuarios();
  });

  it("Debe editar el Usuario", async () => {
  //arrange
    await page.navigateTo();
    await navBar.clickBotonUsuarios();
    await listarUsuarios.clickBotonEditarUsuario();
    await editarUsuario.clickInputNombre();
    await editarUsuario.limpiarInputNombre();
    await editarUsuario.setInputNombre(NOMBRE);
    await editarUsuario.clickInputCedula();
    await editarUsuario.limpiarInputCedula();
    await editarUsuario.setInputCedula(CEDULA);
    await editarUsuario.clickInputTelefono();
    await editarUsuario.limpiarInputTelefono();
    await editarUsuario.setInputTelefono(TELEFONO);

    //act
    await editarUsuario.clickBotonActualizarUsuario();

    //assert
    //const alerta = "El usuario ha sido editado";
    const alerta = await editarUsuario.getTextoSwal();
    await expect(await alerta).toEqual(await USUARIO_CREADO);
  });
  /*
  it("Debe retornar un error que la cedula ya existe ", async () => {
    //arrange
      await page.navigateTo();
      await navBar.clickBotonUsuarios();
      await listarUsuarios.clickBotonEditarUsuario();
      await editarUsuario.clickInputNombre();
      await editarUsuario.limpiarInputNombre();
      await editarUsuario.setInputNombre(NOMBRE_ACTUALIZAR);
      await editarUsuario.clickInputCedula();
      await editarUsuario.limpiarInputCedula();
      await editarUsuario.setInputCedula(CEDULA_REPETIDA);
      await editarUsuario.clickInputTelefono();
      await editarUsuario.limpiarInputTelefono();
      await editarUsuario.setInputTelefono(TELEFONO);

      //act
      await editarUsuario.clickBotonActualizarUsuario();

      //assert
      //const alerta = "La cedula ya existe";
      const alerta = editarUsuario.getTextoSwal();
      await expect(alerta).toEqual(USUARIO_YA_EXISTE);
    });*/

});

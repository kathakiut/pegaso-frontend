import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ClientesServicios from "../../servicios/ClientesServicios";
import EstadosLogin from '../../enums/EstadoLogin';

const ClientesRegistro = () => {
    const { id } = useParams();
    const navigateTo = useNavigate();

    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [documento, setDocumento] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correo, setCorreo] = useState("");
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [titulo, setTitulo] = useState("");

    const revisarSesion = () => {
        if (sessionStorage.getItem("estadoLogin") != null) {
            const sesionUsuario = {
                id: sessionStorage.getItem("id"),
                nombres: sessionStorage.getItem("nombres"),
                EstadoLogin: parseInt(sessionStorage.getItem("estadoLogin"))
            }
            console.log(sesionUsuario);
            console.log(usuario);
            setUsuario(sesionUsuario);
        } else {
            setUsuario({ nombres: "", estadoLogin: EstadosLogin.NO_LOGIN });
        }
    }
    console.log(usuario);

    const guardarCliente = async (event) => {

        event.preventDefault();

        if (password === confirm) {
            try {
                const cliente = {
                    nombres: nombres,
                    apellidos: apellidos,
                    documento: documento,
                    telefono: telefono,
                    correo: correo,
                    usuario: usuario,
                    password: password
                }
                console.log(cliente);
                await ClientesServicios.guardarCliente(cliente);
                navigateTo("/");
            } catch (error) {
                setMensaje("Ocurrió un error " + error);
            }
        } else {
            setMensaje("Las contraseñas no coinciden");
        }
    }

    const cargarCliente = async () => {

        try {
            if (id != null) {
                const respuesta = await ClientesServicios.buscarClientes(id);
                if (respuesta.data != null) {
                    console.log(respuesta.data);
                    setNombres(respuesta.data.nombres);
                    setApellidos(respuesta.data.apellidos);
                    setDocumento(respuesta.data.documento);
                    setTelefono(respuesta.data.telefono);
                    setCorreo(respuesta.data.correo);
                    setUsuario(respuesta.data.usuario);
                    setPassword(respuesta.data.password);
                    setConfirm(respuesta.data.password);

                }
                setTitulo("Edición");
            }
            else {
                setTitulo("Registro");
            }

        } catch (error) {
            console.log(error);
        }

    }

    const cancelar = () => {
        if (id != null) {
            navigateTo("/clientes");
        }
        else {
            navigateTo("/");
        }
    }

    useEffect(() => {
        revisarSesion();
        cargarCliente();
      }, []);


    const cambiarNombres = (event) => {
        setNombres(event.target.value);
    }

    const cambiarApellidos = (event) => {
        setApellidos(event.target.value);
    }

    const cambiarDocumento = (event) => {
        setDocumento(event.target.value);
    }

    const cambiarTelefono = (event) => {
        setTelefono(event.target.value);
    }

    const cambiarCorreo = (event) => {
        setCorreo(event.target.value);
    }

    const cambiarUsuario = (event) => {
        setUsuario(event.target.value);
    }

    const cambiarPassword = (event) => {
        setPassword(event.target.value);
    }

    const cambiarConfirm = (event) => {
        setConfirm(event.target.value);
    }

    return (
        <body>
            <body background="https://img.freepik.com/vector-gratis/fondo-tinta-alcohol-dorado-pintura-arte-fluido-abstracto_25819-752.jpg?w=1380&t=st=1667409718~exp=1667410318~hmac=f009fb6ef3e87f66d53fc8fd9bc4898f00d01443995f0eff6625d6905c248ce2">
                <div className="container text-start ">


                    <div className="row g-lg-1 py-5">
                        <div className="col-lg-5 text-start">
                            <h1 className="display-6 fw-bold ">Empieza a usar Pegaso</h1>
                            <p className="col-lg-10 fs-4">
                                Empieza a usar hoy mismo nuestra suite completa de herramientas gratuitas, a las que siempre tendrás acceso, o solicita una demostración de todos nuestros productos prémium.
                            </p>
                        </div>

                        <div className="col">
                            <body className="p-4 p-md-5 rounded-5 shadow bg-dark text-white opacity-100">
                                <div className="col text-center fw-bold fs-3 my-0 mb-3">{titulo} de clientes</div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-control-sm" htmlFor="nombres">Nombres*</label>
                                        <input className="form-control g-1" type="text" onChange={cambiarNombres} value={nombres} name="nombres" id="nombres" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-control-sm" htmlFor="apellidos">Apellidos *</label>
                                        <input className="form-control g-1" type="text" onChange={cambiarApellidos} value={apellidos} name="apellidos" id="apellidos" required />
                                    </div>
                                </div>
                                <form className="row">
                                    <div className="col-md-6 my-4">

                                        <label className="form-control-sm" htmlFor="documento">Ingrese documento*</label>
                                        <input className="form-control g-1" type="documento" onChange={cambiarDocumento} readOnly={id != null ? true : false} value={documento} name="documento" id="documento" required />
                                    </div>
                                    <div className="col-md-6 my-4">
                                        <label for="inputEmail" className="form-control-sm">Email</label>
                                        <input className="form-control" type="email" onChange={cambiarCorreo} value={correo} name="correo" id="correo" required />
                                    </div>

                                </form>
                                <form className="row g-3">
                                    <div className="col-md-6 my-3">
                                        <label for="inputUser" className="form-control-sm">Usuario</label>
                                        <input className="form-control" type="usuario" onChange={cambiarUsuario} value={usuario} name="usuario" id="usuario" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="celular" className="form-control-sm">Celular</label>
                                        <input type="celular" className="form-control" onChange={cambiarTelefono} value={telefono} name="celular" id="celular" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="inputPassword" className="form-control-sm">Contraseña</label>
                                        <input type="password" className="form-control" onChange={cambiarPassword} value={password} name="password" id="password" required />
                                    </div>
                                    <div className="col-md-6 my-3">
                                        <label for="inputPassword" className="form-control-sm">Confirmar Contraseña</label>
                                        <input type="password" className="form-control" onChange={cambiarConfirm} value={confirm} name="password" id="password" required />
                                    </div>


                                    <div className="col-12">
                                        <button type="submit" onClick={guardarCliente} className="btn-warning btn btn-outline-white me-4" >Registrarse</button>
                                        <a href="/Registro" onClick={cancelar} className="btn btn-secondary">Cancelar</a>
                                        <div id="mensaje">{mensaje}</div>
                                    </div>

                                </form></body>
                        </div>
                    </div>
                </div>
            </body>
        </body>


    );
}

export default ClientesRegistro;
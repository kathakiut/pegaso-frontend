import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import EstadoLogin from "../../enums/EstadoLogin";
import LoginServicios from "../../servicios/LoginServicios"
import { ContextoUsuario } from "./ContextoUsuario";

const Login = () => {
    const navigateTo = useNavigate();
    const { usuario, setUsuario} = useContext(ContextoUsuario);
    const [ password, setPassword ] = useState("");
    const [ mensaje, setMensaje ] = useState("");
    const [ recordar, setRecordar ] = useState(false);


    const crearSesion = (datosPerfil) => {
        sessionStorage.setItem("nombres", datosPerfil.nombres);
        sessionStorage.setItem("estadologin", datosPerfil.estadologin);
        setUsuario(datosPerfil);
    }

    const validar = async (event) => {
        event.preventDefault();
        try {
            const credenciales = {
                usuario: usuario,
                password: password
            };
            const result = await LoginServicios.login(credenciales);
            console.log(result);
            const datosPerfil = {
                nombres: result.data.nombres,
                estadologin: result.data.es_admin ? EstadoLogin.ADMIN : EstadoLogin.CLIENTE
            }
            crearSesion(datosPerfil);
            if (datosPerfil.estadologin === EstadoLogin.ADMIN) {
                navigateTo("/dashboard");
            }
            else {
                navigateTo("/");
            }
        } catch (error) {
            if(error.response.status === 401) {
                setMensaje(error.response.data);
            }
        }
    }

    const cambiarUsuario = (event) => {
        setUsuario(event.target.value);
        setMensaje("");
    }

    const cambiarPassword = (event) => {
        setPassword(event.target.value);
        setMensaje("");
    }

    const cambiarRecordar = (event) => {
        setRecordar(event.target.checked);
    }

    return (
        <form onSubmit={validar} className="card shadow w-100 m-auto" style={{ maxWidth: "600px",  padding: "15px"}}>
            <h3 className="h3 mb-3">Ingresar</h3>
            <div className="row mb-2">
                <label htmlFor="usuario" className="form-control-sm col-3">Usuario</label>
                <div className="col-9">
                    <input type="user" className="form-control form-control-sm col-8" onChange={cambiarUsuario} value={usuario} id="usuario" name="usuario" placeholder="Usuario" required/>
                </div>
            </div>
            <div className="row mb-2">
                <label htmlFor="password" className="form-control-sm col-3">Contrase??a</label>
                <div className="col-9">
                    <input type="password" className="form-control form-control-sm" onChange={cambiarPassword} value={password} id="password" name="password" placeholder="Contrase??a" required/>
                </div>
            </div>
            <div className="checkbox mb-3">
                <label className="form-control-sm">
                    <input className="" type="checkbox" onChange={cambiarRecordar} checked={recordar} /> Recordar contrase??a
                </label>
            </div>
            <button className="btn btn-primary me-2" type="submit">Ingresar</button>
            <a href="/" className="btn btn-light me-2" type="submit">Cancelar</a> {mensaje}
        </form>
    )
}

export default Login;
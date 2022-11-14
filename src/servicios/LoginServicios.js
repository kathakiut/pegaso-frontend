import axios from "axios";


const LoginServicios = {};
const URLCliente =  "/clientes/login";
const URLPersonal =  "/personal/login"

LoginServicios.clienteLogin = (credenciales) => {
    return axios.post(URLCliente, credenciales);
}

LoginServicios.personalLogin = (credencialesPersonal) => {
    return axios.post(URLPersonal, credencialesPersonal);
}

export default LoginServicios;
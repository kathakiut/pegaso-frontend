import axios from "axios";

const ClientesServicios = {};

ClientesServicios.listarClientes=()=>{
    return axios.get("http://localhost:8080/clientes");
    }

export default ClientesServicios;
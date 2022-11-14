import React, { useEffect, useState } from 'react'
import Estados from "../../enums/Estados";
import ClientesServicios from "../../servicios/ClientesServicios";

const ListadoClientes = () => {

    const [ListadoClientes, setListadoClientes] = useState([]);
    const [estado, setEstado] = useState(Estados.CARGANDO);
    const [criterio, setCriterio] = useState("");
    const [idBorrar, setIdBorrar] = useState("");
    const [nombreBorrar, setNombreBorrar] = useState("");


	const cargarClientes = async () => {
		setEstado(Estados.CARGANDO);
		try {
			const respuesta = await ClientesServicios.listarClientes();
			if (respuesta.data.length === 0) {
				setEstado(Estados.VACIO);
			}
			else {
				setListadoClientes(respuesta.data);
				setEstado(Estados.OK)
			}
		} catch (error) {
			setEstado(Estados.ERROR);
			console.log(error);
		}
	}

    const buscarClientes = async (event) => {
        event.preventDefault();
        try {
            const respuesta = await ClientesServicios.buscarClientes(criterio);
            console.log(respuesta.data);
            if (respuesta.data.length > 0) {
                setListadoClientes(respuesta.data);
                setEstado(Estados.OK);
            }
            else {
                setEstado(Estados.VACIO);
            }
        } catch (error) {
            setEstado(Estados.ERROR);
        }
    }
    const confirmarBorrado = (id, nombres) => {
        setIdBorrar(id);
        setNombreBorrar(nombres);
    }
    const borrarCliente = async () => {
        try {
            const respuesta = await ClientesServicios.borrarCliente(idBorrar);
            cargarClientes();
        } catch (error) {
            console.log(error);

        }
    }


    useEffect(() => {
        cargarClientes();
    }, [])

    const cambiarCriterio = (event) => {
        setCriterio(event.target.value);
    }


    return (
        <div className="container">
            <h3>Lista de clientes
                <a className="btn btn-sm btn-primary mx-3 btn-warning" href="/Clientes/Registro">
                    <i className="bi bi-plus-square" /> Nuevo cliente</a></h3>
            <form action="">
                <input type="text" value={criterio} onChange={cambiarCriterio} id="criterio" name="criterio" />
                <button id="buscar" name="buscar" onClick={buscarClientes} class="btn btn-primary mx-3 btn-dark"> Buscar</button>
            </form>

            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Documento</th>
                        <th>Telefono</th>
                        <th>Correo</th>
                        <th>Usuario</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {estado === Estados.CARGANDO ? (
                        <tr><td>
                            <div className="spinner-border text-warning" role="status">
                                <span className="sr-only"></span>
                            </div>
                        </td></tr>)
                        :
                        estado === Estados.ERROR ?
                            (<tr><td>Ocurrió un error, intente más tarde</td></tr>)
                            :
                            estado === Estados.VACIO ?
                                (<tr><td>No hay datos</td></tr>)
                                :
                                ListadoClientes.map((cliente) => (
                                    <tr key={cliente._id}>
                                        <td>{cliente.nombres}</td>
                                        <td>{cliente.apellidos}</td>
                                        <td>{cliente.documento}</td>
                                        <td>{cliente.telefono}</td>
                                        <td>{cliente.correo}</td>
                                        <td>{cliente.usuario}</td>
                                        <td>{cliente.password}</td>
                                        <td>
                                            <div className="text-end">
                                                <a className="btn btn-warning me-2" href={"/Clientes/Registro/" + cliente._id}><i className="bi bi-pencil" />Editar</a>
                                                <button onClick={() => { confirmarBorrado(cliente._id, cliente.nombres + " " + cliente.apellidos) }} className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modalBorrado"><i className="bi bi-trash" />Eliminar</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                    }
                </tbody>

            </table>

            <div className="modal fade" id="modalBorrado" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Borrado de cliente</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Está seguro de borrar el cliente {nombreBorrar}?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" onClick={borrarCliente} className="btn btn-danger" data-bs-dismiss="modal">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ListadoClientes;

import TicketsServicios from "../../servicios/TicketsServicios";
import Estados from "../../enums/Estados";
import { useState, useEffect } from "react";


const ListadoTickets = () => {

    const [ListadoTickets, setListadoTickets] = useState([]);
    const [estado, setEstado] = useState(Estados.CARGANDO);
    const [criterio, setCriterio] = useState("");
    const [idBorrar, setIdBorrar] = useState("");
    const [fechaBorrar, setFechaBorrar] = useState("");

    const cargarTickets = async () => {
        try {
            const respuesta = await TicketsServicios.listarTickets();
            console.log(respuesta.data);

            if (respuesta.data.length > 0) {
                setListadoTickets(respuesta.data);
                setEstado(Estados.OK);
            }
            else {
                setEstado(Estados.VACIO);
            }
        } catch (error) {
            setEstado(Estados.ERROR)
        }
    }

    const buscarTickets = async (event) => {
        event.preventDefault();
        try {
            const respuesta = await TicketsServicios.buscarTickets(criterio);
            console.log(respuesta.data);
            if (respuesta.data.length > 0) {
                setListadoTickets(respuesta.data);
                setEstado(Estados.OK);
            }
            else {
                setEstado(Estados.VACIO);
            }
        } catch (error) {
            setEstado(Estados.ERROR);
        }
    }

    useEffect(() => {
        cargarTickets();
    }, [])

    const cambiarCriterio = (event) => {
        setCriterio(event.target.value);
    }

    const confirmarBorrado = (id, fecha) => {
        setIdBorrar(id);
        setFechaBorrar(fecha);
    }

    const borrarTicket = async () => {
        try {
            await TicketsServicios.borrarTicket(idBorrar);
            cargarTickets();
        } catch (error) {

        }
    }

    return (
        <div className="container">
            <h3 className="mt-3">Lista de Tickets
                <a className="btn btn-sm btn-primary mx-3 btn-warning" href="/Clientes/Registro"><i className="bi bi-plus-square" /> Nuevo Ticket</a></h3>
            <form action="">
                <input type="text" value={criterio} onChange={cambiarCriterio} id="criterio" name="criterio" />
                <button id="buscar" name="buscar" onClick={buscarTickets} type="editar" className="btn btn-dark mx-3"> Buscar</button>
            </form>

            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Asunto</th>
                        <th>Solicitud</th>
                    </tr>
                </thead>
                <tbody>
                    {estado === Estados.CARGANDO ?
                        (<tr><td>
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden"></span>
                            </div>
                        </td></tr>
                        )
                        :
                        estado === Estados.ERROR ?
                            (<div>Ocurrió un Error Intente mas tarde</div>)
                            :
                            estado === Estados.VACIO ?
                                (<div>No hay datos</div>)
                                :
                                ListadoTickets.map((ticket) => (
                                    <tr key={ticket._id}>
                                        <td>{ticket.fecha}</td>
                                        <td>{ticket.asunto}</td>
                                        <td>{ticket.solicitud}</td>
                                        <td>
                                            <div className="text-end">
                                                <a href={"/Tickets/Crear/" + ticket._id} type="editar" className="btn btn-warning me-2"><i className="bi bi-pencil" /> Editar</a>
                                                <button onClick={() => { confirmarBorrado(ticket._id, ticket.fecha) }} className="btn btn-sm btn-dark" data-bs-toggle="modal" data-bs-target="#modalBorrado"><i className="bi bi-trash" /> Eliminar</button>
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
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Borrado de ticket</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Está seguro de borrar el ticket {fechaBorrar}?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" onClick={borrarTicket} className="btn btn-danger" data-bs-dismiss="modal">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListadoTickets;

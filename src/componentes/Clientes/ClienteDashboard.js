
const ContenidoDashCliente = () => {
    return (<div className="container m-5">
        <div
            className="container col-12 ms-4 shadow p-3 mb-5 bg-body rounded"
            align="center"
        >
            <div className="container d-flex text-dark">
                <div className="image flex-row m-2">
                <i class="bi bi-card-text fs-5"></i>
                </div>
                <div className="text flex-row m-2">
                    <h1 style={{ color: "#4972b0", fontWeight: "900" }}>Servicios</h1>
                </div>
            </div>
            <h2
                className="ps-4 pt-2"
                align="left"
                style={{ color: "black", fontWeight: "700" }}
            >
                Apreciado cliente
            </h2>
            <p
                className="ps-4"
                align="left"
                style={{ color: "black", fontWeight: "700" }}
            >
                ¡Para nosotros es muy importante contar contigo!&nbsp;&nbsp; <br />
                Si deseas presentar un incidente, soporte&nbsp;&nbsp;o una petición
                sobre los servicios prestados por la empresa ten en cuenta los
                siguientes pasos para realizar una solicitud exitosa.
            </p>
        </div>
        <div className="container d-flex" align="center">
            <div className="container col-6 m-2" align="center">
                <div
                    className="container shadow p-3 mb-5 bg-body rounded"
                    align="center"
                >
                    <i class="bi bi-card-text fs-5"></i>
                    <br />
                    <a
                        className="btn mt-3"
                        type="button"
                        style={{
                            backgroundColor: "#4972b0",
                            color: "white",
                            fontWeight: "700",
                        }}
                        href="/ticket/crear"
                    >
                        Generar Ticket
                    </a>
                </div>
            </div>
            <div className="container col-6 ms-4 m-2" align="center">
                <div
                    className="container shadow p-3 mb-5 bg-body rounded"
                    align="center"
                >
                    <i class="bi bi-card-text fs-5"></i>
                    <br />
                    <button
                        className="btn mt-3"
                        style={{
                            backgroundColor: "#4972b0",
                            color: "white",
                            fontWeight: "700",
                        }}
                        href="/"
                    >
                        Mis Tickets
                    </button>
                </div>
            </div>
        </div>
        <div className="container" align="center">
            <img alt="" src={Imagenes.dashcliente} />
        </div>
    </div>);
}

export default ContenidoDashCliente;
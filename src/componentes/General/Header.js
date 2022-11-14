function Header() {
    return (
        <header>
        <div className="px-3 py-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap">
                    <a href="/" className="d-flex align-items-center my-2 my-sm-0 me-sm-auto">
                        <img src="https://gitlab.com/medinakaterin/pegaso-u23-09/-/raw/main/Imagenes/pegaso-icono.png" width="70" height="70" fill="currentColor" className="bi d-block mx-auto mb-1" viewBox="0 0 16 16" alt="logo"></img>
                        <img src="https://gitlab.com/medinakaterin/pegaso-u23-09/-/raw/main/Imagenes/pegaso-nombre.png" width="100" height="35" fill="currentColor" className="bi d-block mx-auto mb-1" viewBox="0 0 16 16" alt="nombre"></img>
                    </a>



                    <ul className="nav col-auto my-2 text-warning ">
                        <li>
                            <div>
                                <a href="/" className="nav-link text-white" align="center">
                                    <i className="bi bi-house-door fs-5"></i>
                                    <div className="lh-lg">Inicio</div>
                                </a>
                            </div>

                        </li>

                        <li>
                            <div>
                                <a href="/Tickets" className="nav-link text-white " align="center">
                                    <i className="bi bi-window-stack fs-5"></i>
                                    <div className="fs-0 lh-1">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown" href="/tickets" role="button" aria-expanded="false">Tickets</a>
                                            <ul className="dropdown-menu ">
                                                <li><a className="dropdown-item " href="/tickets/crear">Creación de Tickets</a></li>
                                                <li><a className="dropdown-item" href="/tickets/listado">Listado Tickets</a></li>
                                                <li><a className="dropdown-item" href="/tickets/listado">Gestion de Tickets</a></li>
                                            </ul>
                                        </li>
                                    </div>
                                </a>
                            </div>

                        </li>
                        <li>
                            <div>
                                <a href="/Clientes" className="nav-link text-white" align="center">
                                    <i className="bi bi-person-circle fs-5"></i>
                                    <div className="fs-0 lh-1">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown" href="/clientes" role="button" aria-expanded="false">Clientes</a>
                                            <ul className="dropdown-menu ">
                                                <li><a className="dropdown-item " href="/clientes/registro">Creación de Clientes</a></li>
                                                <li><a className="dropdown-item" href="/clientes/listado">Listado de Clientes</a></li>
                                                <li><a className="dropdown-item" href="/clientes">Gestion de Clientes</a></li>
                                            </ul>
                                        </li>
                                    </div>
                                </a>
                            </div>

                        </li>
                        <li>
                            <div>
                                <a href="/Tickets" className="nav-link text-white" align="center">
                                    <i className="bi bi-window-stack fs-5"></i>
                                    <div className="fs-0 lh-1">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-expanded="false">Agentes</a>
                                            <ul className="dropdown-menu ">
                                                <li><a className="dropdown-item " href="/agentes/registro">Creación de Agentes</a></li>
                                                <li><a className="dropdown-item" href="/agentes/listado">Listado de Agentes</a></li>
                                                <li><a className="dropdown-item" href="/agentes">Gestion de Agentes</a></li>
                                            </ul>
                                        </li>
                                    </div>
                                </a>
                            </div>

                        </li>
                        <li>
                        <a type="button" className="btn btn-outline-warning me-2 " href="/Ingreso" >Ingresar</a>

                        </li>
                        <li>
                        <a type="button" className="btn btn-warning" href="/Clientes/Registro" >Registrarse</a>

                        </li>

                    </ul>
                </div>
            </div>
        </div>

    </header>


    );
}
export default Header;

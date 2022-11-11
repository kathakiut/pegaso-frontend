function Header1() {
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom bg-dark">
    <a href="/" className="d-flex align-items-center my-2 my-sm-0 me-sm-auto">
        <img src="https://gitlab.com/medinakaterin/pegaso-u23-09/-/raw/main/Imagenes/pegaso-icono.png" width="100" height="100" fill="currentColor" className="bi d-block mx-auto mb-1" viewBox="0 0 16 16" alt="logo"></img>
        <img src="https://gitlab.com/medinakaterin/pegaso-u23-09/-/raw/main/Imagenes/pegaso-nombre.png" width="200" height="70" fill="currentColor" className="bi d-block mx-auto mb-1" viewBox="0 0 16 16" alt="nombre"></img>
    </a>
    <ul class="nav col-auto col-md-auto mb-2 justify-content-center mb-md-0  my-2">
        <li><a href="/" class="nav-link px-2 text-white" >Inicio</a></li>
        <li className="nav-item dropdown">
            <a className="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Tickets</a>
            <ul class="dropdown-menu ">
                <li><a className="dropdown-item " href="/tickets/registro">Creación de Tickets</a></li>
                <li><a className="dropdown-item" href="/tickets/listado">Listado Tickets</a></li>
                <li><a className="dropdown-item" href="/tickets">Gestion de Tickets</a></li>
            </ul>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Clientes</a>
            <ul class="dropdown-menu ">
                <li><a className="dropdown-item " href="/clientes/registro">Creación de Clientes</a></li>
                <li><a className="dropdown-item" href="/clientes/listado">Listado de Clientes</a></li>
                <li><a className="dropdown-item" href="/clientes">Gestion de Clientes</a></li>
            </ul>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Agentes</a>
            <ul class="dropdown-menu ">
                <li><a className="dropdown-item " href="/agentes/registro">Creación de Agentes</a></li>
                <li><a className="dropdown-item" href="/agentes/listado">Listado de Agentes</a></li>
                <li><a className="dropdown-item" href="/agentes">Gestion de Agentes</a></li>
            </ul>
        </li>

    </ul>
    <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-warning me-2" href="/Ingreso" >Ingresar</button>
        <button type="button" class="btn btn-warning" href="/ClientesRegistro" >Registrarse</button>
    </div>
</header>
/*
        <header>
        <div className="px-3 py-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap">
                    <a href="/" className="d-flex align-items-center my-2 my-sm-0 me-sm-auto">
                        <img src="https://gitlab.com/medinakaterin/pegaso-u23-09/-/raw/main/Imagenes/pegaso-icono.png" width="100" height="100" fill="currentColor" className="bi d-block mx-auto mb-1" viewBox="0 0 16 16" alt="logo"></img>
                        <img src="https://gitlab.com/medinakaterin/pegaso-u23-09/-/raw/main/Imagenes/pegaso-nombre.png" width="200" height="70" fill="currentColor" className="bi d-block mx-auto mb-1" viewBox="0 0 16 16" alt="nombre"></img>
                    </a>



                    <ul className="nav col-auto my-2 text-warning">
                        <li>
                            <div>
                                <a href="/" className="nav-link text-white" align="center">
                                    <i class="bi bi-house-door fs-3"></i>
                                    <div className="fs-6">Inicio</div>
                                </a>
                            </div>

                        </li>

                        <li>
                            <div>
                                <a href="/Tickets" className="nav-link text-white" align="center">
                                    <i class="bi bi-window-stack fs-3"></i>
                                    <div class="fs-0">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Tickets</a>
                                            <ul class="dropdown-menu ">
                                                <li><a className="dropdown-item " href="/tickets/registro">Creación de Tickets</a></li>
                                                <li><a className="dropdown-item" href="/tickets/listado">Listado Tickets</a></li>
                                                <li><a className="dropdown-item" href="/tickets">Gestion de Tickets</a></li>
                                            </ul>
                                        </li>
                                    </div>
                                </a>
                            </div>

                        </li>
                        <li>
                            <div>
                                <a href="/Clientes" className="nav-link text-white" align="center">
                                    <i class="bi bi-window-stack fs-5"></i>
                                    <div>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Clientes</a>
                                            <ul class="dropdown-menu ">
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
                                    <i class="bi bi-window-stack fs-5"></i>
                                    <div>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Agentes</a>
                                            <ul class="dropdown-menu ">
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
                            <div>
                                <a href="/" className="nav-link text-white" align="center">
                                <i class="bi bi-person-plus fs-5"></i>
                                    <div>Registrarse</div>
                                </a>
                            </div>

                        </li>
                        <li>
                            <div>
                                <a href="/" className="nav-link text-white" align="center">
                                <i class="bi bi-box-arrow-in-right fs-5"></i>
                                    <div>Acceder</div>
                                </a>
                            </div>

                        </li>

                    </ul>
                </div>
            </div>
        </div>

    </header>*/
}
export default Header1;
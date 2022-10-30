const Registro = () => {
    return (
        <body class="bg-opacity-100" background="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/03/reunion-ejecutivos-2272145.jpg">
        <div class="container text-center">
            <div class="row">
                <div class="col text-center g-5 fs-1 text-dark">
                    REGISTRO
                    <p class="col text-center fs-5 text-dark">Para ingresar a la mesa de ayuda y poder realizar solicitudes es necesario que cree una cuenta.</p>
                </div>

                
                <div class="col bg-opacity-50">
                <body class="row g-3 p-5 form-floating fw-bold page-size-150 ">
                    <div class="row g-3">
                        <div class="col">
                            <input type="text" class="form-control fw-bold" placeholder="Nombres" aria-label="Nombres"></input>
                        </div>
                        <div class="col">
                            <input type="text" class="form-control fw-bold" placeholder="Apellidos" aria-label="Apellidos"></input>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-floating row g-1 fw-bold">
                            <select class="form-select" id="floatingSelect" aria-label="Tipo de Documento ">
                                <option selected>Tipo de Documento</option>
                                <option value="1">C.C.</option>
                                <option value="2">NIT.</option>
                                <option value="3">C.E.</option>
                                <option value="3">Pasaporte</option>
                            </select>

                        </div>
                        <input type="text" class="form-control fw-bold" placeholder="Número de Documento" aria-label="Documento de identidad"></input>
                    </div>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label for="inputEmail" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4"></input>
                        </div>
                        <div className="col-md-6">
                            <label for="tel" className="form-label">Celular</label>
                            <input type="tel" className="form-control" id="tel"></input>
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="inputPassword"></input>
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword" className="form-label">Confirmar Contraseña</label>
                            <input type="password" className="form-control" id="inputPassword"></input>
                        </div>

                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck"></input>
                                <label className="form-check-label" for="gridCheck">
                                    Acepto los Terminos y Condiciones
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Registrarse</button>
                        </div>
                    </form></body>
                </div>
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div class="col-md-4 d-flex align-items-center">
                        <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                            <img src="https://gitlab.com/medinakaterin/pegaso-u23-09/-/raw/main/Imagenes/pegaso-icono.png" width="50" height="50" fill="currentColor" class="bi d-block mx-auto mb-1" viewBox="0 0 16 16" alt="..."></img>
                        </a>
                        <span class="mb-3 mb-md-0 text-muted">&copy; 2022 Pegaso.</span>
                    </div>

                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li class="ms-3"><a class="text-muted" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                        </svg></a></li>
                        <li class="ms-3"><a class="text-muted" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg></a></li>
                        <li class="ms-3"><a class="text-muted" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg></a></li>
                    </ul>
                </footer></div></div></body>
            
            );
}

            export default Registro;
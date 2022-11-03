const Registro = () => {
    return (
        <body>
            <body background="https://img.freepik.com/vector-gratis/fondo-tinta-alcohol-dorado-pintura-arte-fluido-abstracto_25819-752.jpg?w=1380&t=st=1667409718~exp=1667410318~hmac=f009fb6ef3e87f66d53fc8fd9bc4898f00d01443995f0eff6625d6905c248ce2">
                <div class="container text-start ">

                    
                        <div class="row g-lg-1 py-5">
                            <div class="col-lg-5 text-start">
                                <h1 class="display-6 fw-bold ">Empieza a usar Pegaso</h1>
                                <p class="col-lg-10 fs-4">
                                Empieza a usar hoy mismo nuestra suite completa de herramientas gratuitas, a las que siempre tendrás acceso, o solicita una demostración de todos nuestros productos prémium.
                                </p>
                            </div>

                        <div class="col">
                            <body class="p-4 p-md-5 rounded-5 shadow bg-dark text-white opacity-100">
                                <div class="col text-center fw-bold fs-3 my-0 mb-3">Registrate gratis

                                </div>
                                <div class="row g-3">


                                    <div className="col my-3">
                                        <label type="text" class="form-label" placeholder="Nombres" aria-label="Nombres">Nombres</label>
                                        <input className="form-control"></input>
                                    </div>
                                    <div className="col">
                                        <label type="text" className="form-label">Apellidos</label>
                                        <input className="form-control"></input>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="row g-1">
                                        <select class="form-select my-3" id="floatingSelect" aria-label="Tipo de Documento ">
                                            <option selected>Tipo de Documento</option>
                                            <option value="1">C.C.</option>
                                            <option value="2">NIT.</option>
                                            <option value="3">C.E.</option>
                                            <option value="3">Pasaporte</option>
                                        </select>

                                    </div>
                                    <input type="text" class="form-control my-3" placeholder="Número de Documento" aria-label="Documento de identidad"></input>
                                </div>
                                <form className="row g-3">
                                    <div className="col-md-6 my-3">
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
                                    <div className="col-md-6 my-3">
                                        <label for="inputPassword" className="form-label">Confirmar Contraseña</label>
                                        <input type="password" className="form-control" id="inputPassword"></input>
                                    </div>


                                    <div className="col-12">
                                        <button type="submit" className="btn-warning btn btn-outline-white" >Registrarse</button>
                                    </div>
                                </form></body>
                        </div></div></div></body></body>


    );
}

export default Registro;
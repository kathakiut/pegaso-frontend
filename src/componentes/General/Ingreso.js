const Ingreso = () => {
return(
    <body class="text-center">
        <main class="form-signin shadow">
            <form>
                
                    <h1 class="h3 mt-5 mb-4 fw-small">Por favor ingresa</h1>
                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Correo electrónico</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña"/>
                            <label for="floatingPassword">Contraseña</label>
                    </div>
                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"/> Recuérdame
                        </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit">Ingresar</button>
                    <p class="mt-5 mb-3 text-muted">&copy; 2022</p>
            </form>
        </main>
    </body>

)
}

export default Ingreso;
const Content = () => {
    return (
        <><div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="img-fluid carousel-inner">
                <div class="carousel-item active " data-bs-interval="10000">
                    <img src="https://www.swg.com/can/wp-content/uploads/sites/38/2016/05/Blog-Help-Desk-Self-Service-%E2%80%93-The-Key-to-FM-Productivity-banner.jpg" class="opacity-50 d-block w-100" alt="..."></img>
                    <div class="img-fluid carousel-caption d-none d-md-block">
                        <h5>Estandares</h5>
                        <p>Utilizamos tecnologías basadas en estándares que se actualizan continuamente añadiendo mejoras de seguridad.</p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="https://www.kavantic.com/wp-content/uploads/2019/11/seguridad.jpg" class="opacity-50 d-block w-100" alt="..."></img>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Atención personalizada</h5>
                        <p>Te ofrecemos una atención totalmente personal para solucionar tus requerimientos.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://hivelife.com/wp-content/uploads/2019/06/top-productivity-apps_hive-life_asia_banner.jpg" class="opacity-50 d-block w-100" alt="..."></img>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Privacidad</h5>
                        <p>Tus datos siempre estarán seguros gracias a la encriptación de todas las transferencias.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Atrás</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Siguiente</span>
            </button>
        </div><div class="container col-xxl-8 px-4 py-5">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src="https://i.blogs.es/76b8c5/printocho-2/840_560.jpg" class="d-block mx-lg-auto img-fluid opacity-50" alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
                    </div>
                    <div class="col-lg-6">
                        <h1 class="display-5 fw-bold lh-1 mb-3">Tu proyecto tecnológico a tu alcance</h1>
                        <p class="lead">Descubre hoy el futuro de los servicios y las nuevas tecnologías que potenciarán el crecimiento de tu empresa. </p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <a href="/Registro" type="button" class="btn btn-warning btn-lg px-4 me-md-2">Registrate</a>
                            <button type="button" class="btn btn-outline-warning btn-lg px-4">Inicia sesión</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
               
            </div></>

    )
}
export default Content;
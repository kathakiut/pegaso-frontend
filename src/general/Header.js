const Header = () => {
    return (
        <header ClassName="p-3 text-bg-dark">
            <div ClassName="container">
                <div ClassName="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" ClassName="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <svg ClassName="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                    </a>

                    <ul ClassName="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="/" ClassName="nav-link px-2 text-secondary">Inicio</a></li>
                        <li><a href="/" ClassName="nav-link px-2 text-white">Features</a></li>
                        <li><a href="/" ClassName="nav-link px-2 text-white">Pricing</a></li>
                        <li><a href="/" ClassName="nav-link px-2 text-white">FAQs</a></li>
                        <li><a href="/" ClassName="nav-link px-2 text-white">About</a></li>
                    </ul>

                    <form ClassName="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input type="search" ClassName="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
                    </form>

                    <div ClassName="text-end">
                        <button type="button" ClassName="btn btn-outline-light me-2">Login</button>
                        <button type="button" ClassName="btn btn-warning">Sign-up</button>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header
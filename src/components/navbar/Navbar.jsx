import { Link } from "react-router-dom";
import LogButton from "./LogButton";
import logo from "./logo.jpg"
function Navbar(props) {
    return (
        <div className="App-Navbar">
        <div className="mx-5 my-3">
            <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <a
                    href="/"
                    class="d-flex align-items-center text-white text-decoration-none"
                >
                    <img src={logo} alt="E" width="170" height="90" class="me-2" viewBox="0 0 118 94"  />
                        <title>Motorcycle Tech</title>
                    
                    <span class="fs-4">
                        <Link to={"/"}></Link>
                    </span>
                </a>

                <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <Link
                        to={"/productos"}
                        className="me-3 py-2 text-white text-decoration-none"
                    >
                        Productos
                    </Link>
                    <Link
                        to={"/categorias"}
                        className="me-3 py-2 text-white text-decoration-none"
                    >
                        Categorias
                    </Link>
                    <Link
                        to={"/usuarios"}
                        className="me-3 py-2 text-white text-decoration-none"
                    >
                        Usuarios
                    </Link>
                    <Link
                        to={"/nosotros"}
                        className="me-3 py-2 text-white text-decoration-none"
                    >
                        Nosotros
                    </Link>
                    <Link
                        to={"/ejemplos"}
                        className="me-3 py-2 text-white text-decoration-none"
                    >
                        Ejemplos
                    </Link>
                    <LogButton logged={props.logged} />
                </nav>
            </div>
        </div>
        </div>
    );
}

export default Navbar;
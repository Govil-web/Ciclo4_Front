import "./css/App.css";
//Components
import Navbar from "./components/navbar/Navbar";
import Nosotros from "./components/Nosotros";
import Home from "./components/Home";
import Footer from "./components/footer";
import CategoriasIndex from "./components/categorias";
import ProductosIndex from "./components/productos";
import UsuariosIndex from "./components/usuarios";
import CreateUsuario from "./components/usuarios/createUsuario";
import ActualizarUsuario from "./components/usuarios/actualizarUsuario";
import EliminarUsuario from "./components/usuarios/eliminarUsuario";
import LoginView from "./components/usuarios/login";

import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div>
            <div className="App">
                <Navbar logged={false} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    
                    <Route path="/productos" element={<ProductosIndex />} />
                    <Route path="/categorias" element={<CategoriasIndex />} />
                    <Route path="/usuarios" element={<UsuariosIndex />} />
                    <Route
                        path="/usuarios/create"
                        element={<CreateUsuario />}
                    />
                    <Route
                        path="/usuarios/update/:idUsuario"
                        element={<ActualizarUsuario />}
                    />
                    <Route
                        path="/usuarios/delete/:idUsuario"
                        element={<EliminarUsuario />}
                    />
                    <Route path="/login" element={<LoginView />} />
                    
                </Routes>

                <Footer />
            </div>
        </div>
    );
}

export default App;
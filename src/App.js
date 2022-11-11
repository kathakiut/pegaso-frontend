import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/General/Header";
import Content from "./componentes/General/Inicio";
import ClientesRegistro from "./componentes/Clientes/ClientesRegistro";
import Footer from "./componentes/General/Footer";
import Ingreso from "./componentes/General/Ingreso";
import ListadoClientes from "./componentes/Clientes/ListadoClientes";


const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Content />} exact></Route>
        <Route path="/Inicio" element={<Content />} exact></Route>
        <Route path="/Clientes/Registro" element={<ClientesRegistro />} exact></Route>
        <Route path="/Clientes/Listado" element={<ListadoClientes />} exact></Route>        
        <Route path="/Ingreso" element={<Ingreso />} exact></Route>
      </Routes>
      
      </BrowserRouter>
      <Footer></Footer>
    </div>

  )
}

export default App;

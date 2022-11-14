import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/General/Header";
import Content from "./componentes/General/Inicio";
import ClientesRegistro from "./componentes/Clientes/ClientesRegistro";
import Footer from "./componentes/General/Footer";
import Login from "./componentes/General/Login";
import ListadoClientes from "./componentes/Clientes/ListadoClientes";
import { ContextoUsuario } from "./componentes/General/ContextoUsuario";
import { useState } from "react";
import Dashboard from "./componentes/General/Dashboard";
import CrearTickets from "./componentes/Tickets/CrearTickets";
import ListadoTickets from "./componentes/Tickets/ListadoTickets";

const App = () => {
  const [usuario, setUsuario] = useState({nombres: "", estadologin: 0});
  return (
    <>
    <div>
      <Header />
      <BrowserRouter>
      <ContextoUsuario.Provider value={{usuario, setUsuario}}>
      <Routes>
      <Route path="/" element={<Content />} exact></Route>
        <Route path="/Inicio" element={<Content />} exact></Route>
        <Route path="/login" element={<Login />} exact />
        <Route path="/dashboard" element={<Dashboard />} exact />
        <Route path="/Clientes/Registro" element={<ClientesRegistro />} exact></Route>
        <Route path="/Clientes/Registro/:id" element={<ClientesRegistro />} exact></Route>
        <Route path="/Clientes/Listado" element={<ListadoClientes />} exact></Route>        
        <Route path="/Ingreso" element={<Login />} exact></Route>
        <Route path="/Tickets/Crear" element={<CrearTickets />} exact></Route>
        <Route path="/Tickets/Listado" element={<ListadoTickets />} exact></Route>
        <Route path="/Tickets/Crear/:id" element={<CrearTickets />} exact></Route>
      </Routes>
      </ContextoUsuario.Provider>
      </BrowserRouter>
      <Footer></Footer>
    </div>
    </>

  )
}

export default App;

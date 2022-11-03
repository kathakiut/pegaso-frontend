import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/General/Header";
import Content from "./componentes/General/Content";
import Registro from "./componentes/Clientes/Registro";
import Footer from "./componentes/General/Footer";


const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/Inicio" element={<Content />} exact></Route>
        <Route path="/Tickets" element={<Tickets />} exact></Route>
        <Route path="/Agentes" element={<Agentes />} exact></Route>
        <Route path="/Registro" element={<Registro />} exact></Route>
        <Route path="/Ingreso" element={<Ingreso />} exact></Route>
      </Routes>
      
      </BrowserRouter>
      <Footer></Footer>
    </div>

  )
}

export default App;

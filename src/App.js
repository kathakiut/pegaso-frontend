import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./general/Header";
import Content from "./general/Content";
import Registro from "./Clientes/Registro";


const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Routes>
      <Route path="/Inicio" element={<Content />} exact></Route>
        <Route path="/Registro" element={<Registro />} exact></Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>

  )
}

export default App;

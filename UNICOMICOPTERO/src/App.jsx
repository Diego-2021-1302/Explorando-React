import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Sumadora from "./pages/Sumadora";
import NumeroALetras from "./pages/NumeroALetras";
import Multiplicacion from "./pages/Multiplicacion";
import Experiencia from "./pages/Experiencia";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sumadora" element={<Sumadora />} />
        <Route path="/numero-a-letras" element={<NumeroALetras />} />
        <Route path="/multiplicacion" element={<Multiplicacion />} />
        <Route path="/experiencia" element={<Experiencia />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

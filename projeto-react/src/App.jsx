import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Explorar from "./pages/Explorar";
import Criados from "./pages/Criados";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explorar" element={<Explorar />} />
      <Route path="/criados" element={<Criados />} />
    </Routes>
  );
}

export default App;

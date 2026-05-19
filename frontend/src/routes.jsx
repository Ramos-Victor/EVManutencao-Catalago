import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/index";
import { Servicos } from "./pages/servicos/index";
import { NotFound } from "./pages/not-found/index";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Servicos" element={<Servicos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

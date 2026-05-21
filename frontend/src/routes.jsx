import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/index";
import { Servicos } from "./pages/servicos/index";
import { Produtos } from "./pages/produtos/index";
import { NotFound } from "./pages/not-found/index";

import Login from "./pages/login/index";
import AdminLayout from "./pages/admin/index";
import ProdutosCrud from "./pages/admin/ProdutosCrud";
import ServicosCrud from "./pages/admin/ServicosCrud";
import ProtectedRoute from "./components/UI/ProtectedRoute";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Servicos" element={<Servicos />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/login" element={<Login />} />

        {/* Rotas protegidas do admin */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="produtos" element={<ProdutosCrud />} />
          <Route path="servicos" element={<ServicosCrud />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

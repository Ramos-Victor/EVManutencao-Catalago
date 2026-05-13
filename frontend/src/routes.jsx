import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Home } from "./pages/home/index";
import { NotFound } from "./pages/not-found/index";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

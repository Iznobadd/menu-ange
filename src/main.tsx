import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Language from "./pages/Language";
import Home from "./pages/Home";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Language />} />
      <Route path="/menu" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

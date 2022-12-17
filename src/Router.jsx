import { BrowserRouter, Route, Routes, Link, Router } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Donative } from "./pages/Donative";
import { Receivedonation } from "./pages/Receivedonation";
import logo from "./assets/image/doe_amor.png";
import { Footer } from "./components/Footer"
import { FormReceivedonation } from "./pages/FormReceivedonation";

export function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <header>
        <img src={logo} />
        <Menu />
        <Link className="button_donate" to="/donative">Doe Agora</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donative" element={<Donative />} />
        <Route path="/receivedonation" element={<Receivedonation />} />
        <Route path="/formReceivedonation" element={<FormReceivedonation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

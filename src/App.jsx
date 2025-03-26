import React from "react";
import NotFound from "./errors/NotFound";
import Header from "./components/Header/Header";
import ProductDetail from "./components/Home/ProductDetail";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Certificate from "./pages/Certificate";
import Contacts from "./pages/Contacts";
import Branches from "./pages/Branches";
import BranchesDetail from "./components/Branches/BranchesDetail";
import Vacancy from "./pages/Vacancy";
import News from "./pages/News";
import About from "./pages/About";
import Politics from "./pages/Politics";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/branches/:id" element={<BranchesDetail />} />
        <Route path="/vacancy" element={<Vacancy />} />
        <Route path="/news" element={<News />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

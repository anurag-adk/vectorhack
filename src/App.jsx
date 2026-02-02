import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer, ScrollToTop, Background } from "./components/layout";
import { Home, Contact } from "./pages";

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;

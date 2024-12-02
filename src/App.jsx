import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { EntryPage } from "./components/EntryPage.jsx";
import { Layout } from "./components/Layout.jsx";
import { Work } from "./pages/Work.jsx";
import { About } from "./pages/About.jsx";
// import { About } from "./components/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { ProjectDetails } from "./pages/ProjectDetails.jsx";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route path="/portfolio" element={<Layout />}>
            <Route index element={<Navigate to="/portfolio/work" replace />} />
            <Route path="work" element={<Work />} />
            <Route path="work/:id" element={<ProjectDetails />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;

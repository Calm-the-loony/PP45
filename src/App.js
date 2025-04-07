// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import AboutPage from './components/AboutUsPage'; 
import ContactPage from './components/ContactPage';
import JobsPage  from './components/JobsPage';
import ProductionPage from "./components/ProductionPage";
import DocumentsPage from "./components/DocumentsPage";

const App = () => {
  return (
    <Router> 
      <Header />
      <Routes> 
        <Route path="/" element={<MainSection />} /> 
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/contact" element={<ContactPage />} /> 
        <Route path="/careers" element={< JobsPage  />} /> 
        <Route path="/production" element={<ProductionPage />} />
        <Route path="/licenses" element={<DocumentsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

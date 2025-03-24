// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Импортируем Routes вместо Switch
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import ServicesPage from './components/ServicesPage'; 
import AboutPage from './components/AboutUsPage'; 
import ContactPage from './components/ContactPage';
import ObjectsPage from './components/ObjectsPage';
import NewsPage from './components/NewsPage';
import JobsPage  from './components/JobsPage';

const App = () => {
  return (
    <Router> {/* Оборачиваем в Router для маршрутизации */}
      <Header />
      <Routes> {/* Заменяем Switch на Routes */}
        <Route path="/" element={<MainSection />} /> {/* Главная страница */}
        <Route path="/services" element={<ServicesPage />} /> {/* Страница Услуг */}
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/contact" element={<ContactPage />} /> 
        <Route path="/projects" element={<ObjectsPage />} /> 
        <Route path="/news" element={< NewsPage />} /> 
        <Route path="/careers" element={< JobsPage  />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

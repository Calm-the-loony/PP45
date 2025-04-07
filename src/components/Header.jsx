import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlane } from 'react-icons/fa'; // ← иконка самолёта
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <FaPlane className="logo-icon" /> {/* ← Иконка вместо изображения */}
        <span className="logo-text">РОЙ-АЭРО</span>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Главная</Link></li>
          <li><Link to="/about" className="nav-link">О компании</Link></li>
          <li><Link to="/production" className="nav-link">Производство</Link></li>
          <li><Link to="/licenses" className="nav-link">Документы</Link></li>
          <li><Link to="/careers" className="nav-link">Карьера</Link></li>
          <li><Link to="/contact" className="nav-link">Контакты</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

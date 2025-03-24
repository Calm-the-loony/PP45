import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/6139080-200.svg'; // Импортируем логотип
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src={logo} // Используем импортированный логотип
          alt="Логотип"
          className="logo-image"
        />
        <span className="logo-text">ARCHITECTORVISION</span>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Главная</Link></li>
          <li><Link to="/about" className="nav-link">О компании</Link></li>
          <li><Link to="/services" className="nav-link">Услуги</Link></li> 
          <li><Link to="/projects" className="nav-link">Наши объекты</Link></li>
          <li><Link to="/news" className="nav-link">Новости</Link></li>
          <li><Link to="/careers" className="nav-link">Вакансии</Link></li>
          <li><Link to="/contact" className="nav-link">Контакты</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import "../styles/Footer.css"; // Импортируем стили
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Импортируем иконки из библиотеки

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <nav className="footer-navigation">
          <ul>
            <li><a href="#privacy">Политика конфиденциальности</a></li>
            <li><a href="#terms">Условия использования</a></li>
            <li><a href="#contact">Контакты</a></li>
          </ul>
        </nav>
        <div className="footer-contact">
          <span>&copy; 2025 Все права защищены.</span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#" className="social-icon">
            <FaFacebookF className="social-image" />
          </a>
          <a href="#" className="social-icon">
            <FaTwitter className="social-image" />
          </a>
          <a href="#" className="social-icon">
            <FaInstagram className="social-image" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

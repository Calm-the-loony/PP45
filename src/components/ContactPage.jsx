import React from 'react';
import '../styles/ContactPage.css'; // Подключаем стили

const ContactPage = () => {
  return (
    <div className="container">
      <h1>Контакты</h1>
      <div className="contact-info">
        <p><strong>ООО "Ростовгипрошахт"</strong></p>
        <p>344000, г. Ростов-на-Дону, пр. Театральный, 89</p>
        <p>Тел.: (863) 207-50-50</p>
        <p>E-mail: <a href="mailto:rgsh@rgsh.org">rgsh@rgsh.org</a></p>
        <p>Веб-сайт: <a href="http://www.rostovgiproshaht.com" target="_blank" rel="noopener noreferrer">www.rostovgiproshaht.com</a></p>
      </div>
      <div className="map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.4469206632746!2d39.70244281564122!3d47.22295797916044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b83b0f73759b%3A0x3ba6f5c1ff9b8394!2z0KHRgtGA0LDQstC70LDRhtC60L7QstGB0LrQuNC5INCz0L7RgdGC0YDQvtCy0LDQudGB0LrQuNC5INGD0YDQvtGC0YAg0LrQsNGA0YHQutC40Lkg0KHQvdC10LrRgdC60LjQuSDQvdCwINGC0LXRgdC60L7QstC40Y8g0LrQu9C40LrRgtC10L3RgtGMLg!5e0!3m2!1sru!2sru!4v1686080571040!5m2!1sru!2sru&markers=icon:https://maps.google.com/mapfiles/ms/icons/red-dot.png%7C47.22295797916044,39.70244281564122"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;

import React, { useState } from "react";
import "../styles/styles.css"; // Подключение стилей

// Импортируем иконки
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer, faBuilding, faTools, faShieldAlt, faLeaf, faHardHat, faChartLine, faBuildingColumns, faUserCog } from '@fortawesome/free-solid-svg-icons';

// Компонент ServicesPage
const ServicesPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для открытия модального окна

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно обработать отправку данных, например, отправить на сервер
    console.log("Форма отправлена", formData);
    // Очистить форму
    setFormData({
      name: "",
      email: "",
      service: "",
      message: ""
    });
    setIsModalOpen(false); // Закрыть модальное окно
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Переключить состояние модального окна
  };

  return (
    <section className="services-page">
      <h2>Наши Услуги</h2>
      <div className="services-container">
        <div className="service-item">
          <FontAwesomeIcon icon={faBuilding} size="3x" />
          <h3>Проектирование</h3>
          <p>Мы разрабатываем проектную документацию для жилых, коммерческих и инфраструктурных объектов, учитывая все стандарты и требования.</p>
        </div>
        <div className="service-item">
          <FontAwesomeIcon icon={faTools} size="3x" />
          <h3>Обследование технических состояний зданий и сооружений</h3>
          <p>Проводим комплексное обследование объектов для определения их текущего состояния и разработки рекомендаций по ремонту или реконструкции.</p>
        </div>
        <div className="service-item">
          <FontAwesomeIcon icon={faHardHat} size="3x" />
          <h3>Инженерные изыскания для строительства</h3>
          <p>Проводим все необходимые инженерные изыскания: геологические, геодезические, экологические исследования для точности проектирования и безопасности строительства.</p>
        </div>
        <div className="service-item">
          <FontAwesomeIcon icon={faLeaf} size="3x" />
          <h3>Охрана окружающей среды</h3>
          <p>Обеспечиваем экологическую безопасность всех этапов строительства, включая соблюдение стандартов по охране окружающей среды и минимизации вредных воздействий.</p>
        </div>
        <div className="service-item">
          <FontAwesomeIcon icon={faChartLine} size="3x" />
          <h3>Горно-геологическое обоснование для строительства</h3>
          <p>Проводим горно-геологические исследования для обоснования выбора места строительства и определения его безопасности и целесообразности.</p>
        </div>
        <div className="service-item">
          <FontAwesomeIcon icon={faHammer} size="3x" />
          <h3>Промышленное и гражданское строительство</h3>
          <p>Выполняем работы по строительству промышленных объектов и жилых комплексов, гарантируя высокое качество и соблюдение всех стандартов.</p>
        </div>
        <div className="service-item">
          <FontAwesomeIcon icon={faBuildingColumns} size="3x" />
          <h3>Выполнение функций заказчика-застройщика</h3>
          <p>Предоставляем полный спектр услуг, связанных с управлением проектом, включая организацию и контроль всех этапов строительства и сдачи объектов в эксплуатацию.</p>
        </div>
        <div className="service-item">
          <FontAwesomeIcon icon={faUserCog} size="3x" />
          <h3>Инжиниринговый консалтинг</h3>
          <p>Предлагаем услуги инжинирингового консалтинга, включая технические консультации, анализ рисков и оптимизацию процессов в строительстве.</p>
        </div>
        <div className="service-item">
          <FontAwesomeIcon icon={faShieldAlt} size="3x" />
          <h3>Безопасность строительства</h3>
          <p>Обеспечиваем комплексную безопасность на строительных объектах, включая защиту персонала, строительных материалов и соблюдение норм безопасности.</p>
        </div>
      </div>

      {/* Кнопка для открытия модального окна */}
      <button onClick={toggleModal}>Оставить заявку</button>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="modal active">
          <div className="modal-content">
            <span className="close-btn" onClick={toggleModal}>&times;</span>
            <h2>Оставьте заявку на услугу</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Ваше имя</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Выберите услугу</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Выберите услугу</option>
                  <option value="Проектирование">Проектирование</option>
                  <option value="Обследование технических состояний зданий и сооружений">Обследование технических состояний зданий и сооружений</option>
                  <option value="Инженерные изыскания для строительства">Инженерные изыскания для строительства</option>
                  <option value="Охрана окружающей среды">Охрана окружающей среды</option>
                  <option value="Горно-геологическое обоснование для строительства">Горно-геологическое обоснование для строительства</option>
                  <option value="Промышленное и гражданское строительство">Промышленное и гражданское строительство</option>
                  <option value="Выполнение функций заказчика-застройщика">Выполнение функций заказчика-застройщика</option>
                  <option value="Инжиниринговый консалтинг">Инжиниринговый консалтинг</option>
                  <option value="Безопасность строительства">Безопасность строительства</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Сообщение</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit">Отправить заявку</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesPage;

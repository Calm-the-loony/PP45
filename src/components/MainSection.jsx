import React from "react";
import { Link } from "react-router-dom"; // Добавляем импорт Link
import "../styles/styles.css";

// Импортируем изображения
import reliabilityIcon from "../images/free-icon-smiley-142310.png";
import qualityIcon from "../images/free-icon-thumb-up-like-13578170.png";
import speedIcon from "../images/free-icon-airplane-31069.png";
import guaranteesIcon from "../images/free-icon-dollar-symbol-126179.png";
import fly from "../images/aa.jpg";

// Компонент PartsSearch
const PartsSearch = () => {
  return (
    <section className="parts-search">
      <div className="background-image">
        <div className="content">
          <h2>Мы помогаем <span className="highlight">строить</span> будущее!</h2>
          <p className="sub-text">Инновационные решения в сфере авиации и высоких технологий.</p>
          <Link to="/production">
            <button className="cta-button">Узнать больше</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Компонент WhyChooseUs
const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Почему выбирают нас?</h2>
      <div className="reasons-container">
        <div className="reason-item">
          <div className="reason-icon">
            <img src={speedIcon} alt="Технологичность" />
          </div>
          <div className="reason-text">
            <h3>Технологичность</h3>
            <p>Мы применяем новейшие технологии в производстве летательных аппаратов и пластмассовых изделий, что позволяет нам быть лидерами в отрасли.</p>
          </div>
        </div>
        <div className="reason-item">
          <div className="reason-icon">
            <img src={reliabilityIcon} alt="Опыт и надежность" />
          </div>
          <div className="reason-text">
            <h3>Опыт и надежность</h3>
            <p>Наш опыт работы на рынке позволяет гарантировать надежность наших изделий и услуг, обеспечивая безопасность и долговечность.</p>
          </div>
        </div>
        <div className="reason-item">
          <div className="reason-icon">
            <img src={qualityIcon} alt="Качество" />
          </div>
          <div className="reason-text">
            <h3>Качество</h3>
            <p>Мы следим за качеством на каждом этапе производства, используя только сертифицированные материалы и современные процессы.</p>
          </div>
        </div>
        <div className="reason-item">
          <div className="reason-icon">
            <img src={guaranteesIcon} alt="Гарантии" />
          </div>
          <div className="reason-text">
            <h3>Гарантии</h3>
            <p>Каждый наш проект обеспечен гарантией, мы уверены в качестве нашей работы и всегда готовы оперативно решать любые вопросы.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Компонент WorkStages
const WorkStages = () => {
  return (
    <section className="work-stages">
      <h2>Этапы работы с нами</h2>
      <div className="stages-container">
        <div className="stage-item">
          <div className="stage-icon">🔍</div>
          <div className="stage-text">
            <h3>Оценка потребностей</h3>
            <p>На этом этапе мы изучаем ваши требования и особенности проекта для точной проработки всех деталей.</p>
          </div>
        </div>
        <div className="stage-item">
          <div className="stage-icon">📝</div>
          <div className="stage-text">
            <h3>Разработка технического задания</h3>
            <p>Создаем детализированное техническое задание для обеспечения точного выполнения проекта с учётом всех требований.</p>
          </div>
        </div>
        <div className="stage-item">
          <div className="stage-icon">🏭</div>
          <div className="stage-text">
            <h3>Производственный процесс</h3>
            <p>Процесс производства летательных аппаратов и изделий из пластмасс с использованием передовых технологий и материалов.</p>
          </div>
        </div>
        <div className="stage-item">
          <div className="stage-icon">🔧</div>
          <div className="stage-text">
            <h3>Ремонт и обслуживание</h3>
            <p>Мы также предоставляем услуги по ремонту и техническому обслуживанию летательных аппаратов и других видов оборудования.</p>
          </div>
        </div>
        <div className="stage-item">
          <div className="stage-icon">✔️</div>
          <div className="stage-text">
            <h3>Контроль качества</h3>
            <p>Проведение завершающих проверок на соответствие стандартам качества, безопасности и долговечности.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Основной компонент MainSection, который включает все остальные
const MainSection = () => {
  return (
    <main>
      <PartsSearch />
      <WhyChooseUs />
      <WorkStages />
    </main>
  );
};

export default MainSection;

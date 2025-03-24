import React from "react";
import "../styles/styles.css";

// Импортируем изображения
import newsImage from "../images/news.jpg";
import newsImage1 from "../images/news1.jpg";
import newsImage2 from "../images/news2.jpg";
import newsImage3 from "../images/news3.jpg";
import reliabilityIcon from "../images/free-icon-smiley-142310.png";
import qualityIcon from "../images/free-icon-thumb-up-like-13578170.png";
import speedIcon from "../images/free-icon-airplane-31069.png";
import guaranteesIcon from "../images/free-icon-dollar-symbol-126179.png";
import stageImage from "../images/stage.avif";
import stageImage1 from "../images/stage1.jpg";
import stageImage2 from "../images/stage2.webp";
import stageImage3 from "../images/stage3.jpg";
import stageImage4 from "../images/stage4.avif";

// Компонент PartsSearch
const PartsSearch = () => {
  return (
    <section className="parts-search">
      <div className="background-image">
        <div className="content">
          <h2>Мы помогаем <span className="highlight">строить</span> будущее!</h2>
        </div>
      </div>
    </section>
  );
};

// Компонент FeaturedProducts
const FeaturedProducts = () => {
  const products = [
    { id: 1, image: newsImage, title: "Началось строительство нового жилого комплекса в центре города" },
    { id: 2, image: newsImage1, title: "Запущен проект по строительству школы в пригороде" },
    { id: 3, image: newsImage2, title: "Планируется возведение нового торгового центра на востоке города" },
    { id: 4, image: newsImage3, title: "Городские власти объявили о строительстве парка отдыха" }
  ];

  return (
    <section className="featured-products">
      <h2>Наши новые объекты</h2>
      <div className="red-line"></div>
      <div className="carousel">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={`Product ${product.id}`} />
            <div className="details">
              <p className="name">{product.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


// Компонент WhyChooseUs
const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Почему именно наша компания?</h2>
      <div className="reasons-container">
        <div className="reason-item">
          <img src={reliabilityIcon} alt="Надежность" />
          <div className="reason-text">
            <h3>100% Надежность</h3>
            <p>Более 1000 довольных клиентов подтверждают нашу репутацию.</p>
          </div>
        </div>
        <div className="reason-item">
          <img src={qualityIcon} alt="Качество" />
          <div className="reason-text">
            <h3>Высокое качество</h3>
            <p>Мы используем только лучшие материалы и технологии.</p>
          </div>
        </div>
        <div className="reason-item">
          <img src={speedIcon} alt="Скорость" />
          <div className="reason-text">
            <h3>Быстрая реализация</h3>
            <p>Наши проекты сдаются в срок благодаря четкому планированию.</p>
          </div>
        </div>
        <div className="reason-item">
          <img src={guaranteesIcon} alt="Гарантии" />
          <div className="reason-text">
            <h3>Гарантии</h3>
            <p>Мы предлагаем 14 дней на переделку в случае любых проблем.</p>
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
      <h2>Этапы нашей работы</h2>
      <div className="progress-container">
        <div className="progress-bar" id="progress-bar"></div>
      </div>
      <div className="stages-container">
        <div className="stage-item">
          <img src={stageImage} alt="Знакомство" />
          <div className="stage-text">
            <h3>Знакомство</h3>
            <p>Первичный контакт с клиентом для определения потребностей и ожиданий.</p>
          </div>
        </div>
        <div className="stage-item">
          <img src={stageImage1} alt="Встреча" />
          <div className="stage-text">
            <h3>Встреча</h3>
            <p>Личная встреча для обсуждения деталей проекта и дальнейших шагов.</p>
          </div>
        </div>
        <div className="stage-item">
          <img src={stageImage2} alt="Обеспечение проекта" />
          <div className="stage-text">
            <h3>Обеспечение проекта</h3>
            <p>Организация всех необходимых ресурсов и документации для начала проекта.</p>
          </div>
        </div>
        <div className="stage-item">
          <img src={stageImage3} alt="Подбор участка" />
          <div className="stage-text">
            <h3>Подбор участка</h3>
            <p>Поиск и выбор оптимального участка для строительства.</p>
          </div>
        </div>
        <div className="stage-item">
          <img src={stageImage4} alt="Строительство" />
          <div className="stage-text">
            <h3>Строительство</h3>
            <p>Непосредственное возведение объекта согласно проектной документации.</p>
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
      <FeaturedProducts />
      <WhyChooseUs />
      <WorkStages />
    </main>
  );
};

export default MainSection;

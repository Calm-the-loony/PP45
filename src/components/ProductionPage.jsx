import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Production.css'; 

const ProductionPage = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const activities = [
    { code: '22.29', description: 'Производство прочих пластмассовых изделий', details: 'Процесс создания разнообразных изделий из пластмасс, не входящих в другие категории. Включает в себя изготовление деталей для различных отраслей промышленности, бытовых предметов и других изделий.' },
    { code: '22.29.2', description: 'Производство прочих изделий из пластмасс, не включенных в другие группировки, кроме устройств пломбировочных из пластика', details: 'Изготовление пластиковых изделий, не входящих в другие классификации. Это могут быть различные компоненты и аксессуары для различных отраслей.' },
    { code: '22.29.3', description: 'Производство устройств пломбировочных из пластика', details: 'Процесс создания устройств для пломбирования, используемых для обеспечения сохранности и защиты товаров, грузов и других объектов.' },
    { code: '22.29.9', description: 'Предоставление услуг в области производства прочих пластмассовых изделий', details: 'Услуги, связанные с производством различных пластмассовых изделий, включая проектирование, изготовление и тестирование продукции.' },
    { code: '30.11', description: 'Строительство кораблей, судов и плавучих конструкций', details: 'Процесс проектирования и строительства различных типов водных судов, включая коммерческие, военные и специальные суда.' },
    { code: '30.12', description: 'Строительство прогулочных и спортивных судов', details: 'Изготовление судов, предназначенных для отдыха, спорта и развлечений, включая яхты, катера и другие плавсредства.' },
    { code: '30.30.31', description: 'Производство вертолетов', details: 'Процесс создания вертолетов, включая проектирование, сборку и тестирование летательных аппаратов для различных целей.' },
    { code: '30.30.39', description: 'Производство прочих летательных аппаратов', details: 'Изготовление других типов летательных аппаратов, не входящих в предыдущие категории, включая беспилотные летательные аппараты и аэростаты.' },
    { code: '33.11', description: 'Ремонт металлоизделий', details: 'Услуги по восстановлению и ремонту изделий из металла, включая детали машин, оборудования и конструкций.' },
    { code: '33.12', description: 'Ремонт машин и оборудования', details: 'Обслуживание и восстановление функциональности различных машин и оборудования, используемых в промышленности и других сферах.' },
    { code: '33.13', description: 'Ремонт электронного и оптического оборудования', details: 'Услуги по ремонту и обслуживанию электронных устройств и оптических систем, включая приборы и инструменты.' },
    { code: '33.14', description: 'Ремонт электрического оборудования', details: 'Процедуры по восстановлению и обслуживанию электрических устройств и систем, включая электродвигатели, трансформаторы и другое оборудование.' },
    { code: '33.15', description: 'Ремонт и техническое обслуживание судов и лодок', details: 'Услуги по ремонту, обслуживанию и модернизации различных типов судов и лодок, включая маломерные суда и большие корабли.' },
    { code: '33.16', description: 'Ремонт и техническое обслуживание летательных аппаратов, включая космические', details: 'Процессы по обслуживанию, ремонту и модернизации летательных аппаратов, включая самолеты, вертолеты и космические корабли.' },
    { code: '33.17', description: 'Ремонт и техническое обслуживание прочих транспортных средств и оборудования', details: 'Услуги по ремонту и обслуживанию различных транспортных средств и связанного с ними оборудования, не включенных в другие категории.' },
    { code: '33.19', description: 'Ремонт прочего оборудования', details: 'Обслуживание и восстановление функциональности различного оборудования, не охваченного другими категориями, включая специализированные устройства и инструменты.' },
  ];

  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
  };

  const closeModal = () => {
    setSelectedActivity(null);
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section className="production-page">
      <h2>Производственные виды деятельности</h2>

      <ul className="production-list">
        {activities.map((activity) => (
          <li key={activity.code} onClick={() => handleActivityClick(activity)}>
            <strong>{activity.code}</strong> — {activity.description}
          </li>
        ))}
      </ul>

      {selectedActivity && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h3>{selectedActivity.code} — {selectedActivity.description}</h3>
            <p>{selectedActivity.details}</p>
          </div>
        </div>
      )}

    </section>
  );
};

export default ProductionPage;

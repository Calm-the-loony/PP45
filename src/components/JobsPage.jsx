import React, { useState } from "react";
import "../styles/Jobs.css";

const jobData = [
  {
    id: 1,
    title: "Главный инженер по разработке летательных аппаратов",
    experience: "От 5 лет",
    education: "Высшее техническое образование, опыт в авиационной или аэрокосмической отрасли",
    duties: [
      "Руководство проектированием летательных аппаратов и их систем.",
      "Контроль соблюдения проектных решений на всех этапах разработки.",
      "Взаимодействие с производственными и тестировочными подразделениями для внедрения и оптимизации разработки."
    ],
    payment: "Оплата сдельная. Трудоустройство по ТК РФ.",
  },
  {
    id: 2,
    title: "Инженер-конструктор по пластиковым изделиям",
    experience: "От 3 лет",
    education: "Высшее техническое образование, знание материаловедения",
    duties: [
      "Проектирование и разработка пластиковых компонентов для авиационной и аэрокосмической техники.",
      "Моделирование, анализ и тестирование конструкций.",
      "Взаимодействие с производственными и сборочными цехами."
    ],
    payment: "Оплата сдельная. Трудоустройство по ТК РФ.",
  },
  {
    id: 3,
    title: "Инженер-испытатель летательных аппаратов",
    experience: "От 3 лет",
    education: "Высшее техническое образование в области авиации или космонавтики",
    duties: [
      "Проведение испытаний летательных аппаратов и их систем.",
      "Анализ полученных данных и подготовка отчетности.",
      "Рекомендации по улучшению конструктивных особенностей летательных аппаратов."
    ],
    payment: "Оплата сдельная. Трудоустройство по ТК РФ.",
  },
  {
    id: 4,
    title: "Специалист по сертификации авиационной техники",
    experience: "От 3 лет",
    education: "Высшее образование в области авиации и сертификации",
    duties: [
      "Подготовка и сопровождение процесса сертификации летательных аппаратов.",
      "Взаимодействие с сертификационными органами и организациями.",
      "Контроль за выполнением сертификационных требований на всех этапах разработки."
    ],
    payment: "Оплата сдельная. Трудоустройство по ТК РФ.",
  },
  {
    id: 5,
    title: "Менеджер по закупкам материалов для авиационной промышленности",
    experience: "От 3 лет",
    education: "Высшее образование в области экономики или логистики",
    duties: [
      "Планирование и организация закупок материалов и комплектующих для производства летательных аппаратов.",
      "Мониторинг и анализ рынка поставок.",
      "Работа с поставщиками и организация логистики для своевременного обеспечения производства."
    ],
    payment: "Оплата сдельная. Трудоустройство по ТК РФ.",
  },
  {
    id: 6,
    title: "Технический директор по разработке и производству",
    experience: "От 5 лет",
    education: "Высшее техническое образование, опыт в управлении производственными процессами в авиационной сфере",
    duties: [
      "Руководство производственным процессом на всех этапах: от разработки до выпуска готовой продукции.",
      "Контроль за качеством продукции и соблюдением сроков.",
      "Оптимизация процессов производства и улучшение производственных мощностей."
    ],
    payment: "Оплата сдельная. Трудоустройство по ТК РФ.",
  },
];

const JobsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const openModal = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "applyModal") {
      closeModal();
    }
  };

  return (
    <div className="jobs-container">
      <h1 className="title">Вакансии на предприятии</h1>
      <div className="jobs-list">
        {jobData.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p><strong>Требуемый опыт работы:</strong> {job.experience}</p>
            <p><strong>Образование:</strong> {job.education}</p>
            <p><strong>Должностные обязанности:</strong></p>
            <ul>
              {job.duties.map((duty, index) => (
                <li key={index}>{duty}</li>
              ))}
            </ul>
            <p>{job.payment}</p>
            <button className="apply-button" onClick={() => openModal(job)}>Откликнуться на вакансию</button>
          </div>
        ))}
      </div>

      {showModal && selectedJob && (
        <div id="applyModal" className="modal" onClick={handleOutsideClick}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Откликнуться на вакансию: {selectedJob.title}</h2>
            <form>
              <label htmlFor="name">Имя:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="resume">Резюме:</label>
              <textarea id="resume" name="resume" rows="4" required></textarea>

              <button type="submit">Отправить</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobsPage;

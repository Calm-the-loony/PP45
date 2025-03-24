import React, { useState } from "react";
import "../styles/Jobs.css";

const jobData = [
  {
    id: 1,
    title: "Главный инженер проекта",
    experience: "От 5 лет",
    education: "Высшее техническое образование",
    duties: [
      "Руководство проектным подразделением по подготовке проектной или рабочей документации.",
      "Контроль соблюдения утвержденных проектных решений при выполнении строительно-монтажных работ.",
      "Согласование проектной документации и защита проектных решений."
    ],
    payment: "Оплата сдельная. Трудоустройство по ТК РФ.",
  },
  {
    id: 2,
    title: "Специалист в области расчета и проектирования бетонных конструкций",
    experience: "От 3 лет",
    education: "Высшее техническое образование",
    duties: [
      "Подготовка текстовой и графической частей рабочей или проектной документации.",
      "Выполнение расчетов бетонных конструкций.",
      "Выполнение чертежей монолитных конструкций."
    ],
    payment: "Оплата сдельная. Трудоустройство по ТК РФ.",
  },
  {
    id: 3,
    title: "Инженер-проектировщик (Архитектор)",
    experience: "От 1 года",
    education: "Высшее архитектурное или инженерно-техническое образование",
    duties: [
      "Разработка архитектурного раздела проектной документации.",
      "Расчет технико-экономических показателей вариантов архитектурных решений.",
      "Согласование архитектурных решений с другими разделами проектной документации."
    ],
    payment: "Оплата сдельная. Трудоустройство по ТК РФ.",
  },
  {
    id: 4,
    title: "Инженер по авторскому надзору",
    experience: "От 3 лет",
    education: "Высшее техническое образование",
    duties: [
      "Проведение авторского надзора за соблюдением проектной документации в процессе строительства.",
      "Контроль выполнения проектных решений на строительных площадках.",
      "Работа с исполнительной документацией и согласование изменений в проект."
    ],
    payment: "Оплата сдельная. Трудоустройство по ТК РФ.",
  },
  // Можно добавить еще вакансии по аналогии
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

  return (
    <div className="jobs-container">
      <h1 className="title">Вакансии</h1>
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
        <div id="applyModal" className="modal">
          <div className="modal-content">
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

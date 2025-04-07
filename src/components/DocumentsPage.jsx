import React from 'react';
import '../styles/DocumentsPage.css'; 

const DocumentsPage = () => {
  return (
    <div className="container">
      <h1>Документы</h1>
      <p>На этой странице вы можете ознакомиться с основными документами нашей компании:</p>
      <ul className="documents-list">
        <li>
          <a href="/documents/ustav.pdf" download="ustav.pdf">
            Устав компании
          </a>
        </li>
        <li>
          <a href="/documents/licenziya.pdf" download="licenziya.pdf">
            Лицензия на производство летательных аппаратов
          </a>
        </li>
        <li>
          <a href="/documents/sertifikat_kachestva.pdf" download="sertifikat_kachestva.pdf">
            Сертификат качества продукции
          </a>
        </li>
        <li>
          <a href="/documents/otchet_2024.pdf" download="otchet_2024.pdf">
            Финансовый отчет за 2024 год
          </a>
        </li>
        <li>
          <a href="/documents/instruktsiya_po_oxrane_truda.pdf" download="instruktsiya_po_oxrane_truda.pdf">
            Инструкция по охране труда
          </a>
        </li>
        <li>
          <a href="/documents/patent.pdf" download="patent.pdf">
            Патент на технологию производства летательных аппаратов
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DocumentsPage;

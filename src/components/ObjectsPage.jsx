import { useState } from "react";
import { FaHome, FaSchool, FaChild, FaHospital, FaDumbbell, FaTrophy, FaTools, FaIndustry } from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/ObjectsPage.css";

import dom1 from "../images/dom.jpg";
import dom2 from "../images/dom2.jpg";
import school from "../images/school.jpeg";

const categories = [
  { id: "residential", name: "Жилые дома", icon: <FaHome /> },
  { id: "schools", name: "Образовательные учреждения", icon: <FaSchool /> },
  { id: "kindergartens", name: "Дошкольные учреждения", icon: <FaChild /> },
  { id: "healthcare", name: "Объекты здравоохранения", icon: <FaHospital /> },
  { id: "sports", name: "Спортивные сооружения", icon: <FaDumbbell /> },
  { id: "olympic", name: "Олимпийские объекты", icon: <FaTrophy /> },
  { id: "utility", name: "Коммунальное хозяйство", icon: <FaTools /> },
  { id: "industrial", name: "Промышленные предприятия", icon: <FaIndustry /> }
];

const objectsData = {
  residential: [
    { name: "Жилой дом №1", address: "ул. Ленина, 1", image: dom1 },
    { name: "Жилой дом №2", address: "ул. Пушкина, 2", image: dom2 }
  ],
  schools: [
    { name: "Школа №1", address: "ул. Гагарина, 10", image: school }
  ]
};

const ObjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="container-objects">
      <h1 className="title">Наши объекты</h1>
      <div className="icon-container">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            className="icon"
            whileHover={{ scale: 1.1 }}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.icon}
            <span>{category.name}</span>
          </motion.div>
        ))}
      </div>

      <div className="category-container">
        {activeCategory && objectsData[activeCategory]?.map((item, index) => (
          <motion.div
            key={index}
            className="object-item"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img src={item.image} alt={item.name} />
            <div className="object-details">
              <h3>{item.name}</h3>
              <p>{item.address}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ObjectsPage;

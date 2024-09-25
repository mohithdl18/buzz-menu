import React from "react";
import './Categories.css';

const Categories = ({ categories, filterItems, activeCategory }) => {
  return (
    <div className="scrollable-tabs-container">
      <ul>
        {categories.map((category, index) => {
          return (
            <li key={index}>
              <button
                type="button"
                className={`${activeCategory === category ? "filter-btn active" : "filter-btn"
                  }`}
                onClick={() => filterItems(category)}
              >
                {category}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;

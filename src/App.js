import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import Navbar from "./Navbar";

const allCategories = [...new Set(items.map((item) => item.category))];

const App = () => {
  const [activeCategory, setActiveCategory] = useState(allCategories[0]);
  const [menuItems, setMenuItems] = useState(
    items.filter((item) => item.category === activeCategory)
  );
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="container">
        <Navbar />
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;

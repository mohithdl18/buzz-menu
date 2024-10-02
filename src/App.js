import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import Navbar from "./Navbar";
import Splash from "./Splash";
import Footer from "./Footer";

const allCategories = [...new Set(items.map((item) => item.category))];

const App = () => {
  const [activeCategory, setActiveCategory] = useState(allCategories[0]);
  const [menuItems, setMenuItems] = useState(
    items.filter((item) => item.category === activeCategory)
  );
  const [categories] = useState(allCategories); // Remove setCategories to prevent warning
  const [loading, setLoading] = useState(true); // State for splash screen

  const filterItems = (category) => {
    setActiveCategory(category);
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  const handleSplashLoaded = () => {
    setLoading(false); // Hide splash screen after loading
  };

  return (
    <>
      {loading ? (
        <Splash onLoaded={handleSplashLoaded} />
      ) : (
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
          <Footer />
        </main>
      )}
    </>
  );
};

export default App;

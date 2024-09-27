import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import Navbar from "./Navbar";
import SplashScreen from "./SplashScreen"; // Import the splash screen

const allCategories = [...new Set(items.map((item) => item.category))];

const App = () => {
  // States for splash screen control
  const [showSplash, setShowSplash] = useState(true);

  // States for menu and categories
  const [activeCategory, setActiveCategory] = useState(allCategories[0]);
  const [menuItems, setMenuItems] = useState(
    items.filter((item) => item.category === activeCategory)
  );
  const categories = allCategories; // No need for setCategories

  // Function to hide the splash screen after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // 2 seconds for the splash screen

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  // Function to filter items by category
  const filterItems = (category) => {
    setActiveCategory(category);
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <section className="container">
          <Navbar />
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            filterItems={filterItems}
          />
          <Menu items={menuItems} />
        </section>
      )}
    </main>
  );
};

export default App;

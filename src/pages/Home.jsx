import React, { useRef } from 'react';
import Card from '../components/Card';
import { propertyCategories } from '../data/properties';
import './Home.css';

const Home = () => {
  const categories = Object.values(propertyCategories);
  
  // Create refs for each category (we know there are 4 categories)
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);
  const scrollRef4 = useRef(null);
  const scrollRefs = [scrollRef1, scrollRef2, scrollRef3, scrollRef4];

  const scrollLeft = (scrollContainer) => {
    scrollContainer.current.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  };

  const scrollRight = (scrollContainer) => {
    scrollContainer.current.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  };

  return (
    <div className="home-page">
      {categories.map((category, index) => {
        return (
          <section key={index} className="category-section">
            <div className="category-header">
              <h2 className="category-title">{category.title}</h2>
              <span className="category-arrow">›</span>
            </div>
            
            <div className="properties-container">
              <button 
                className="scroll-arrow left-arrow"
                onClick={() => scrollLeft(scrollRefs[index])}
              >
                ‹
              </button>
              <div className="properties-scroll" ref={scrollRefs[index]}>
                {category.properties.map((property) => (
                  <Card key={property.id} property={property} />
                ))}
              </div>
              <button 
                className="scroll-arrow right-arrow"
                onClick={() => scrollRight(scrollRefs[index])}
              >
                ›
              </button>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Home;

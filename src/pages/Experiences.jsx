import React, { useRef } from 'react';
import './Experiences.css';

const Experiences = () => {
  const experienceCategories = {
    foodTours: {
      title: "Food & Culinary Experiences",
      experiences: [
        {
          id: 1,
          title: "Food Tours in Cebu",
          location: "Cebu City, Philippines",
          price: "From ₱1,200 per person",
          rating: "4.9",
          image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
          duration: "3 hours"
        },
        {
          id: 2,
          title: "Cooking Class with Locals",
          location: "Bacolod, Philippines",
          price: "From ₱1,500 per person",
          rating: "4.9",
          image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
          duration: "4 hours"
        },
        {
          id: 3,
          title: "Street Food Adventure",
          location: "Manila, Philippines",
          price: "From ₱800 per person",
          rating: "4.8",
          image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
          duration: "2 hours"
        },
        {
          id: 4,
          title: "Farm to Table Experience",
          location: "Tagaytay, Philippines",
          price: "From ₱2,000 per person",
          rating: "4.7",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
          duration: "5 hours"
        },
        {
          id: 5,
          title: "Seafood Market Tour",
          location: "Davao, Philippines",
          price: "From ₱1,800 per person",
          rating: "4.6",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
          duration: "3 hours"
        },
        {
          id: 6,
          title: "Coffee Farm Visit",
          location: "Sagada, Philippines",
          price: "From ₱1,500 per person",
          rating: "4.8",
          image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
          duration: "4 hours"
        },
        {
          id: 7,
          title: "Wine Tasting Experience",
          location: "Baguio, Philippines",
          price: "From ₱2,500 per person",
          rating: "4.9",
          image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop",
          duration: "2 hours"
        }
      ]
    },
    adventure: {
      title: "Adventure & Outdoor Activities",
      experiences: [
        {
          id: 8,
          title: "Island Hopping Adventure",
          location: "Mactan Island, Philippines",
          price: "From ₱2,500 per person",
          rating: "4.8",
          image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
          duration: "Full day"
        },
        {
          id: 9,
          title: "Mountain Hiking Experience",
          location: "Baguio, Philippines",
          price: "From ₱2,200 per person",
          rating: "4.6",
          image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop",
          duration: "6 hours"
        },
        {
          id: 10,
          title: "Diving with Whale Sharks",
          location: "Oslob, Philippines",
          price: "From ₱3,000 per person",
          rating: "4.9",
          image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
          duration: "Full day"
        },
        {
          id: 11,
          title: "Zip Line Adventure",
          location: "Bohol, Philippines",
          price: "From ₱1,800 per person",
          rating: "4.7",
          image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
          duration: "3 hours"
        },
        {
          id: 12,
          title: "Kayaking in Mangroves",
          location: "Palawan, Philippines",
          price: "From ₱2,000 per person",
          rating: "4.8",
          image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
          duration: "4 hours"
        },
        {
          id: 13,
          title: "Rock Climbing Experience",
          location: "Rizal, Philippines",
          price: "From ₱2,500 per person",
          rating: "4.5",
          image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop",
          duration: "5 hours"
        },
        {
          id: 14,
          title: "Sunset Sailing Tour",
          location: "Boracay, Philippines",
          price: "From ₱3,500 per person",
          rating: "4.9",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
          duration: "3 hours"
        }
      ]
    },
    culture: {
      title: "Cultural & Heritage Experiences",
      experiences: [
        {
          id: 15,
          title: "Cultural Heritage Walk",
          location: "Intramuros, Manila",
          price: "From ₱800 per person",
          rating: "4.7",
          image: "https://images.unsplash.com/photo-1524654458049-e36be0721fa2?w=400&h=300&fit=crop",
          duration: "2 hours"
        },
        {
          id: 16,
          title: "Artisan Workshop",
          location: "Vigan, Philippines",
          price: "From ₱1,000 per person",
          rating: "4.7",
          image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
          duration: "3 hours"
        },
        {
          id: 17,
          title: "Traditional Dance Class",
          location: "Cebu City, Philippines",
          price: "From ₱1,200 per person",
          rating: "4.6",
          image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
          duration: "2 hours"
        },
        {
          id: 18,
          title: "Pottery Making Workshop",
          location: "Pampanga, Philippines",
          price: "From ₱1,500 per person",
          rating: "4.8",
          image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
          duration: "4 hours"
        },
        {
          id: 19,
          title: "Historical Site Tour",
          location: "Corregidor, Philippines",
          price: "From ₱2,000 per person",
          rating: "4.9",
          image: "https://images.unsplash.com/photo-1524654458049-e36be0721fa2?w=400&h=300&fit=crop",
          duration: "Full day"
        },
        {
          id: 20,
          title: "Weaving Demonstration",
          location: "Ilocos, Philippines",
          price: "From ₱1,300 per person",
          rating: "4.5",
          image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
          duration: "3 hours"
        },
        {
          id: 21,
          title: "Museum Guided Tour",
          location: "Manila, Philippines",
          price: "From ₱900 per person",
          rating: "4.4",
          image: "https://images.unsplash.com/photo-1524654458049-e36be0721fa2?w=400&h=300&fit=crop",
          duration: "2 hours"
        }
      ]
    },
    photography: {
      title: "Photography & Creative Experiences",
      experiences: [
        {
          id: 22,
          title: "Sunset Photography Tour",
          location: "Boracay, Philippines",
          price: "From ₱1,800 per person",
          rating: "4.8",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
          duration: "2 hours"
        },
        {
          id: 23,
          title: "Underwater Photography",
          location: "Anilao, Philippines",
          price: "From ₱3,000 per person",
          rating: "4.9",
          image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
          duration: "4 hours"
        },
        {
          id: 24,
          title: "Street Photography Walk",
          location: "Manila, Philippines",
          price: "From ₱1,500 per person",
          rating: "4.7",
          image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
          duration: "3 hours"
        },
        {
          id: 25,
          title: "Aerial Drone Photography",
          location: "Batanes, Philippines",
          price: "From ₱4,000 per person",
          rating: "4.8",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
          duration: "3 hours"
        },
        {
          id: 26,
          title: "Portrait Photography Session",
          location: "Makati, Philippines",
          price: "From ₱2,500 per person",
          rating: "4.6",
          image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
          duration: "2 hours"
        },
        {
          id: 27,
          title: "Nature Photography Workshop",
          location: "Sagada, Philippines",
          price: "From ₱2,200 per person",
          rating: "4.7",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
          duration: "5 hours"
        },
        {
          id: 28,
          title: "Food Photography Class",
          location: "Quezon City, Philippines",
          price: "From ₱1,800 per person",
          rating: "4.5",
          image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
          duration: "3 hours"
        }
      ]
    }
  };

  const categories = Object.values(experienceCategories);
  
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
    <div className="experiences-page">
      <div className="experiences-header">
        <h1>Experiences</h1>
        <p>Discover unique activities led by local hosts</p>
      </div>
      
      {categories.map((category, index) => (
        <section key={index} className="category-section">
          <div className="category-header">
            <h2 className="category-title">{category.title}</h2>
            <span className="category-arrow">›</span>
          </div>
          
          <div className="experiences-container">
            <button 
              className="scroll-arrow left-arrow"
              onClick={() => scrollLeft(scrollRefs[index])}
            >
              ‹
            </button>
            <div className="experiences-scroll" ref={scrollRefs[index]}>
              {category.experiences.map((experience) => (
                <div key={experience.id} className="experience-card">
                  <div className="experience-image-container">
                    <img src={experience.image} alt={experience.title} className="experience-image" />
                    <div className="experience-duration">{experience.duration}</div>
                  </div>
                  <div className="experience-content">
                    <h3 className="experience-title">{experience.title}</h3>
                    <p className="experience-location">{experience.location}</p>
                    <p className="experience-price">{experience.price}</p>
                    <div className="experience-rating">
                      <span className="star">★</span>
                      <span>{experience.rating}</span>
                    </div>
                  </div>
                </div>
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
      ))}
    </div>
  );
};

export default Experiences;

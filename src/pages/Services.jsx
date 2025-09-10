import React, { useRef } from 'react';
import './Services.css';

const Services = () => {
  const serviceCategories = {
    maintenance: {
      title: "Maintenance & Cleaning Services",
      services: [
        {
          id: 1,
          title: "Cleaning Services",
          description: "Professional cleaning for your property",
          price: "From ₱500 per visit",
          rating: "4.8",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
          category: "Maintenance"
        },
        {
          id: 2,
          title: "Maintenance Repairs",
          description: "Quick and reliable repair services",
          price: "From ₱800 per call",
          rating: "4.6",
          image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
          category: "Maintenance"
        },
        {
          id: 3,
          title: "Pool Maintenance",
          description: "Regular pool cleaning and maintenance",
          price: "From ₱1,200 per month",
          rating: "4.7",
          image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
          category: "Maintenance"
        },
        {
          id: 4,
          title: "Garden Landscaping",
          description: "Professional garden and lawn care",
          price: "From ₱1,500 per visit",
          rating: "4.9",
          image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
          category: "Maintenance"
        },
        {
          id: 5,
          title: "Appliance Repair",
          description: "Fix and maintain all home appliances",
          price: "From ₱1,000 per call",
          rating: "4.5",
          image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
          category: "Maintenance"
        },
        {
          id: 6,
          title: "HVAC Services",
          description: "Heating, ventilation, and air conditioning",
          price: "From ₱2,000 per service",
          rating: "4.8",
          image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
          category: "Maintenance"
        },
        {
          id: 7,
          title: "Pest Control",
          description: "Professional pest management services",
          price: "From ₱800 per treatment",
          rating: "4.6",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
          category: "Maintenance"
        }
      ]
    },
    management: {
      title: "Property Management Services",
      services: [
        {
          id: 8,
          title: "Property Management",
          description: "Complete property management solutions",
          price: "From ₱2,000 per month",
          rating: "4.9",
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
          category: "Management"
        },
        {
          id: 9,
          title: "Guest Check-in Service",
          description: "Professional guest welcome and check-in",
          price: "From ₱500 per guest",
          rating: "4.8",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
          category: "Management"
        },
        {
          id: 10,
          title: "Concierge Services",
          description: "24/7 concierge and guest assistance",
          price: "From ₱1,500 per month",
          rating: "4.9",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
          category: "Management"
        },
        {
          id: 11,
          title: "Key Exchange Service",
          description: "Secure key management and handover",
          price: "From ₱300 per exchange",
          rating: "4.7",
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
          category: "Management"
        },
        {
          id: 12,
          title: "Inventory Management",
          description: "Track and manage property inventory",
          price: "From ₱800 per month",
          rating: "4.6",
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
          category: "Management"
        },
        {
          id: 13,
          title: "Revenue Optimization",
          description: "Maximize your property's earning potential",
          price: "From ₱1,200 per month",
          rating: "4.8",
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
          category: "Management"
        },
        {
          id: 14,
          title: "Booking Management",
          description: "Handle all guest bookings and communications",
          price: "From ₱1,000 per month",
          rating: "4.7",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
          category: "Management"
        }
      ]
    },
    marketing: {
      title: "Marketing & Photography Services",
      services: [
        {
          id: 15,
          title: "Photography Services",
          description: "Professional property photography",
          price: "From ₱1,500 per session",
          rating: "4.7",
          image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
          category: "Marketing"
        },
        {
          id: 16,
          title: "Marketing Support",
          description: "Boost your property's visibility",
          price: "From ₱3,000 per month",
          rating: "4.8",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
          category: "Marketing"
        },
        {
          id: 17,
          title: "Virtual Tour Creation",
          description: "Create immersive virtual property tours",
          price: "From ₱2,500 per tour",
          rating: "4.9",
          image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
          category: "Marketing"
        },
        {
          id: 18,
          title: "Listing Optimization",
          description: "Optimize your property listings for better visibility",
          price: "From ₱1,200 per listing",
          rating: "4.6",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
          category: "Marketing"
        },
        {
          id: 19,
          title: "Social Media Management",
          description: "Manage your property's social media presence",
          price: "From ₱2,000 per month",
          rating: "4.7",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
          category: "Marketing"
        },
        {
          id: 20,
          title: "Content Creation",
          description: "Create engaging content for your property",
          price: "From ₱1,800 per month",
          rating: "4.5",
          image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
          category: "Marketing"
        },
        {
          id: 21,
          title: "Aerial Photography",
          description: "Stunning aerial shots of your property",
          price: "From ₱3,500 per session",
          rating: "4.8",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
          category: "Marketing"
        }
      ]
    },
    support: {
      title: "Support & Legal Services",
      services: [
        {
          id: 22,
          title: "Guest Support",
          description: "24/7 guest support and assistance",
          price: "From ₱1,000 per month",
          rating: "4.9",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
          category: "Support"
        },
        {
          id: 23,
          title: "Legal Consultation",
          description: "Property law and compliance advice",
          price: "From ₱2,500 per hour",
          rating: "4.9",
          image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
          category: "Legal"
        },
        {
          id: 24,
          title: "Insurance Services",
          description: "Property and liability insurance guidance",
          price: "From ₱1,500 per consultation",
          rating: "4.7",
          image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
          category: "Legal"
        },
        {
          id: 25,
          title: "Tax Preparation",
          description: "Help with property tax and income reporting",
          price: "From ₱2,000 per year",
          rating: "4.8",
          image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
          category: "Legal"
        },
        {
          id: 26,
          title: "Emergency Response",
          description: "24/7 emergency support for your property",
          price: "From ₱500 per incident",
          rating: "4.9",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
          category: "Support"
        },
        {
          id: 27,
          title: "Guest Communication",
          description: "Handle all guest inquiries and issues",
          price: "From ₱800 per month",
          rating: "4.6",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
          category: "Support"
        },
        {
          id: 28,
          title: "Compliance Monitoring",
          description: "Ensure your property meets all regulations",
          price: "From ₱1,200 per month",
          rating: "4.7",
          image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
          category: "Legal"
        }
      ]
    }
  };

  const categories = Object.values(serviceCategories);
  
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
    <div className="services-page">
      <div className="services-header">
        <h1>Services</h1>
        <p>Professional services to help you succeed as a host</p>
      </div>
      
      {categories.map((category, index) => (
        <section key={index} className="category-section">
          <div className="category-header">
            <h2 className="category-title">{category.title}</h2>
            <span className="category-arrow">›</span>
          </div>
          
          <div className="services-container">
            <button 
              className="scroll-arrow left-arrow"
              onClick={() => scrollLeft(scrollRefs[index])}
            >
              ‹
            </button>
            <div className="services-scroll" ref={scrollRefs[index]}>
              {category.services.map((service) => (
                <div key={service.id} className="service-card">
                  <div className="service-image-container">
                    <img src={service.image} alt={service.title} className="service-image" />
                    <div className="service-category">{service.category}</div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <p className="service-price">{service.price}</p>
                    <div className="service-rating">
                      <span className="star">★</span>
                      <span>{service.rating}</span>
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

export default Services;

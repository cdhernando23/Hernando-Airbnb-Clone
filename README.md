# Airbnb Clone

A modern React-based clone of the Airbnb website built with Vite, featuring a clean UI and modular component structure.

## Features

- **Responsive Design**: Mobile-first approach with responsive layouts
- **Modular Components**: Well-organized component structure
- **Navigation**: Three main sections (Homes, Experiences, Services)
- **Property Listings**: 4 categories with 7+ properties each
- **Search Functionality**: Interactive search bar (Homes page)
- **Modern UI**: Clean, Airbnb-inspired design

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar with tabs
│   ├── SearchBar.jsx       # Search functionality
│   ├── Card.jsx            # Property listing cards
│   └── Footer.jsx          # Footer component
├── pages/
│   ├── Home.jsx            # Main homes page
│   ├── Experiences.jsx     # Experiences page
│   └── Services.jsx        # Services page
├── data/
│   └── properties.js       # Sample property data
├── assets/
│   └── images/             # Image assets
├── App.jsx                 # Main app component
└── main.jsx               # Entry point
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Technologies Used

- **React 19** - Frontend framework
- **Vite** - Build tool and development server
- **CSS3** - Styling with modern CSS features
- **ES6+** - Modern JavaScript features

## Features Implemented

### Navigation
- Fixed navigation bar with logo
- Three main navigation tabs (Homes, Experiences, Services)
- User action buttons (Become a host, Globe, Menu)

### Search Bar
- Multi-field search interface
- Responsive design
- Only visible on Homes page

### Property Listings
- 4 categories of properties
- 7+ properties per category
- Property cards with images, titles, prices, and ratings
- "Guest favorite" badges
- Heart icon for favorites

### Pages
- **Homes**: Property listings with search functionality
- **Experiences**: Activity and experience listings
- **Services**: Host services and support

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interface

## Sample Data

The application includes sample property data for:
- Popular homes in Cebu City
- Available in Bacolod this weekend
- Stay in Lapu-Lapu City
- Available next month in Barangay 76

Each category contains 7 properties with realistic data including images, descriptions, prices, and ratings.

## Styling

- Clean, modern design inspired by Airbnb
- Consistent color scheme
- Smooth transitions and hover effects
- Responsive grid layouts
- Professional typography

## Future Enhancements

- State management with Redux or Context API
- Backend integration
- User authentication
- Real-time search
- Booking functionality
- Payment integration
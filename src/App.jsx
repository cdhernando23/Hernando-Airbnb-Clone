import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Services from './pages/Services';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('homes');

  const renderContent = () => {
    switch (activeTab) {
      case 'homes':
        return <Home />;
      case 'experiences':
        return <Experiences />;
      case 'services':
        return <Services />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'homes' && <SearchBar />}
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;
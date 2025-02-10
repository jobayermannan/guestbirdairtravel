import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import HeroSection_ImageGallery from './HeroSection_ImageGallery';
import Contact from './Contact'; // Contact Page Component

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection_ImageGallery />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

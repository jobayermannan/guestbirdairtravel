import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import HeroSection_ImageGallery from './HeroSection_ImageGallery';
import Layout from './Layout';  // Ensure Layout is imported correctly
import Contact from './Contact'; // Contact Page Component

function App() {
  return (
    <BrowserRouter>
     {/* Ensure Layout is rendered here */}
      <Routes>
      <Route path="/" element={<Layout />} /> 
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

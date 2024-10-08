import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Contact from './pages/Contact';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <Router>
      <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
      </ThemeProvider>
    </Router>
  );
}

const MainApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default MainApp;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Contact from './pages/Contact';
import { ThemeProvider, useTheme } from './ThemeContext'; // Import ThemeContext

function App() {
  const { isDarkMode } = useTheme(); // Get isDarkMode from ThemeContext

  return (
    <Router>
      <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark' : 'light'}`}>
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
    </Router>
  );
}

const MainApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default MainApp;

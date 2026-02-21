import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import CompanyDetails from './pages/CompanyDetails';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Home />
        <About />
        <Services />
        <Projects />
        <CompanyDetails />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

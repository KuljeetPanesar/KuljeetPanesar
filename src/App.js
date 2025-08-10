import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      
    <Header />

    <ScrollToTop />
    <Router basename="/KuljeetPanesar">
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about-me" element={<AboutMe/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>

    <Footer />

    </div>
  );
}

export default App;

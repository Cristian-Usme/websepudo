import '../public/styles/App.css';
import NavBar from './components/NavBar';
import ParticleBg from './components/ParticleBg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import JoinUs from './views/JoinUs';
import Events from './views/Events';

function App() {
  return (
    <div>
      <ParticleBg />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/JoinUs" element={<JoinUs />} />
          <Route path="/Events" element={<Events />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

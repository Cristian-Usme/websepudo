import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import JoinUs from './views/JoinUs';
import Events from './views/Events';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/JoinUs" element={<JoinUs />} />
            <Route path="/Events" element={<Events />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  )
}

export default App

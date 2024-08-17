import React, { useState } from 'react'; // Import useState from React
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ap from './pages/Ap';
import Home from './home/Home';
import About from './About/About';
import Seervices from './Services/Seervices';
function App() {
  const [count, setCount] = useState(0);   return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Ap />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={< Seervices/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/templates/Navbar'
import Footer from './components/templates/Footer'

import Home from './components/pages/Home'
import Certificados  from './components/pages/Certificados'
import Portfolio from './components/pages/Portfolio'
import Contato from './components/pages/Contato'
import Servicos from './components/pages/Servicos'

import 'aos/dist/aos.css'

function App() {
  
  return (

    <Router>

      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} > </Route>
          <Route path="/certificados" element={<Certificados />} > </Route>
          <Route path="/portfolio" element={<Portfolio />} > </Route>
          <Route path="/contato" element={<Contato />} > </Route>
          <Route path="/servicos" element={<Servicos />} > </Route>

        </Routes>

      <Footer />
      
    </Router>

  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalogue from './components/Catalogue';
import Contact from './components/Contact';

function App() {
  return (

    <Router>
      <div>
        <Navbar />
        <Routes>

          <Route path='/Catalogo' Component={Catalogue} />
          <Route path='/Contacto' Component={Contact} />
          <Route path='/' Component={Home} />

        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;

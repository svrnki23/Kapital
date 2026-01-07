//react imports
import React,{ useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Book from './components/book';
import Why from './components/why';
import Footer from './components/Footer';

//placeholder for next pages to be built
import Fleet from './pages/fleet';
import Checkin from './pages/checkin';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <Routes>
        {/* HOME PAGE: has everything i have built so far */}
        <Route path="/" element={
          <>
            <Hero />
            <Book />
            <Why />
          </>
        } />

        {/* SEPARATE PAGES: These load separately when clicked in Sidebar */}
        <Route path="/garage" element={<Fleet />} />
        <Route path="/checkin" element={<Checkin />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

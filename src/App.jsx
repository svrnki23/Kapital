// import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Book from './components/book';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div>
      {/* adding components iteratively as i build them */}
      <Navbar /> 
      <Hero />
      {/* /*placeholder to just visualize things, booking section below video isn't implemented yet */}
      <Book /> 
    </div>
    </>
  );
}

export default App

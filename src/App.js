import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homecarouselone from './components/Homecarouselone';
import HomeOffcanvas from './components/HomeOffcanvas';
import { useState } from 'react';
import ColumnDetails from './components/ColumnDetails';

function App() {

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleAllServiceClick = () => {
    setShowOffcanvas(true);

  }
  const handleClose = () => {
    setShowOffcanvas(false);
  }

  return (
    <>
      <HomeOffcanvas showOffcanvas={showOffcanvas} setShowOffcanvas={setShowOffcanvas} handleClose={handleClose}/>
      <Navbar title="Laststop" handleAllServiceClick={handleAllServiceClick}  />
      <Homecarouselone />
      <ColumnDetails/>
    </>
  );
}

export default App;


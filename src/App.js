import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar'
import MainApp from './MainApp';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import { useEffect, useState } from 'react';


function App() {
  return (
    <Router>
     <Navbar />
     <MainApp/>
     <Footer/>
    </Router>
  );
}

export default App;

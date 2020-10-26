import React from 'react';
import Nav from './components/Nav'
import './App.css';
import Resume from './components/Resume';
import Header from './components/Header';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>

  );
}

export default App;

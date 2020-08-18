import React, {Fragment} from 'react';
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import BlogPost from './pages/BlogPost'
import EditPost from './pages/EditPost'
import './App.css';

function App() {
  return (
    <Fragment>
      <Home />
      <About />
      <Projects />
      <Contact />
      <BlogPost />
      <EditPost />
    </Fragment>
  );
}

export default App;

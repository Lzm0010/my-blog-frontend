import React from 'react';
import {Router} from '@reach/router';
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import BlogPost from './pages/BlogPost'
import AddPost from './pages/AddPost'
import EditPost from './pages/EditPost'
import './App.css';

const NotFound = () => (
  <div>Sorry, nothing here.</div>
)

function App() {
  return (
    <Router>
      <Home path="/" />
      <About path="about" />
      <Projects path="projects" />
      <Contact path="contact" />
      <BlogPost path="post/:postId" />
      <AddPost path="newpost" />
      <EditPost path="editpost/:postId" />
      <NotFound default />
    </Router>
  );
}

export default App;

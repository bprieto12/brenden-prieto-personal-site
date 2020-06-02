import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from '../pages/Home/Home';
import Header from '../components/Header/Header';
import About from '../pages/About/About';
// import Blog from '../pages/Blog/Blog';
import ProjectsHome from '../pages/Projects/ProjectsHome';
import Contact from '../pages/Contact/Contact';
// import Footer from '../components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/projects" exact component={ProjectsHome} />
      {/* <Route path="/blog" exact component={Blog} /> */}
      <Route path="/contact" exact component={Contact} />
    </div>
  );
}

export default App;

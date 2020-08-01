import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from '../pages/Home/Home';
import Header from '../components/Header/Header';
import About from '../pages/About/About';
// import Blog from '../pages/Blog/Blog';
import ProjectsHome from '../pages/Projects/ProjectsHome';
import Contact from '../pages/Contact/Contact';
import ProjectDetails  from '../pages/Projects/ProjectDetails/ProjectDetails';
// import Footer from '../components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/projects" exact component={ProjectsHome} />
        <Route path="/projects/:project_name" component={ProjectDetails} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </div>
  );
}

export default App;

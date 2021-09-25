import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={About}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/resume" component={Resume}/>
        </Switch>
        <Footer />
      </div>
    </Router>  
  );
}

export default App;
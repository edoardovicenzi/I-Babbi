import './App.css';
import React from 'react';
import About from './About';
import Home from './Home';
import {Routes, Route, Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <div>
            <nav>
              <ul id="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
            <Routes>
            <Route exact path="/" component={Home}>
            </Route>
            <Route path="/about" component={About}>
            </Route>
          </Routes>
          </div>
    )
  }
}

export default App;

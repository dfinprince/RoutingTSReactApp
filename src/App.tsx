// See alphabetized imports below
import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import About from './About';
import './App.css';
import Home from './Home';
import logo from './logo.svg';
import Topics from './Topics';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>

                    <hr />
                    <Route exact={true} path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/topics" component={Topics} />
                </div>
            </Router>
        </header>
      </div>
    );
  }
}

export default App;

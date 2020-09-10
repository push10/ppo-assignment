import React from 'react';
import {BrowserRouter as Router,  Route , Link,  Switch} from 'react-router-dom';
import './App.css';
import Home from './Home';
import SearchDetails from './SearchDetails';


const App = () => {
    return (
        <Router>
        <div>
          
          {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/ppo-assignment'} className="nav-link"> Home </Link></li>
          </ul>
          </nav>
          <hr /> */}
          <Switch>
              <Route exact path='/ppo-assignment' component={Home} />
          </Switch>
        </div>
      </Router>
    )
}

export default App;
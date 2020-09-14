import React from 'react';
import { Router,  Route , Link,  Switch} from 'react-router-dom';
import './App.css';
import Home from './Home';
import SearchDetails from './SearchDetails';
import history from '../history';


const App = () => {
    return (
        <Router history={history}>
        <div>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route  path='/search' exact component={SearchDetails} />

          </Switch>
        </div>
      </Router>
    )
}

export default App;
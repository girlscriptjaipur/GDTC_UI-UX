import React from 'react';
import Navigation from './components/Navigation';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  return (
  <Router>
    <div className="App">
        <Navbar />
         <Switch>
            <Route exact path="/" component={Feed} />
            <Route exact path="/Navigation" component={Navigation} />
         </Switch>
    </div>
  </Router>
  );
};

export default App;

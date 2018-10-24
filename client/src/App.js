import React, {
  Component
} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppNavBar from './components/navBar';
import AppFooter from './components/footer';

import Home from './components/Home/Home';
import Teams from './components/Teams';
// import About from './components/body';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <AppNavBar />
         
            <Route exact path="/" component={Home} />
            {/* <Route path="/team" component={Teams} /> */}
        {/* <Route path="/news" component={News} /> */}
        <AppFooter/>
      </div>
    </Router>
    );
  }
}
export default App;
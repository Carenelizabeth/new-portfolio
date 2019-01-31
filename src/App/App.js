import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory';
import Header from '../Header/header.jsx';
import About from '../About/about.jsx';
import Projects from '../Projects/projects.jsx';
import Experience from '../Experience/experience.jsx';
import Contact from '../Contact/contact.jsx';
import Home from './home.jsx';


const history = createHistory();
history.listen(location => {
  ReactGA.set({page: location.pathname})
  ReactGA.pageview(location.pathname)
});

class App extends Component {
  componentDidMount(){
    ReactGA.pageview(window.location.pathname)
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About}/>
              <Route exact path='/projects' component={Projects}/>
              <Route exact path='/experience' component={Experience}/>
              <Route exact path='/contact' component={Contact}/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

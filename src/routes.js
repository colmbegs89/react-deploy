// src/routes.js
import React from 'react';
// import { Router, Route, Switch } from 'react-router'
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom'
// import  BrowserRouter from 'react-router-dom'

import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App';
import GettingHere from './components/about/GettingHere.js'
import GettingAround from './components/about/GettingAround.js'
import Headline from './components/whatsOn/Headline.js'
import Artists from './components/whatsOn/Artists.js'
import Glance from './components/whatsOn/Glance.js'
import Education from './components/whatsOn/Education.js'
import Trail from './components/jazzTrail/Trail.js'
import Evolved from './components/yourVisit/Evolved.js'
import Gallery from './components/yourVisit/Gallery.js'
import Nostalgia from './components/yourVisit/Nostalgia.js'
import Started from './components/yourVisit/Started.js'
import NotFound from './components/NotFound.js'
import Generic from './components/Generic.js'

const Routes = (props) => (
  
  
  <Router>
      <div>
        <Switch>
            <Route  path="/" exact component={App} />
            <Route  path="/headline" exact component={Headline} />
            <Route  path="/artists" exact component={Artists} />
            <Route  path="/glance" exact component={Glance} />
            <Route  path="/education" exact component={Education} />
            <Route  path="/trail" exact component={Trail} />
            <Route  path="/gettinghere" exact component={GettingHere} />
            <Route  path="/gettingaround" exact component={GettingAround} />
            <Route  path="/started" exact component={Started} />
            <Route  path="/evolved" exact component={Evolved} />
            <Route  path="/gallery" exact component={Gallery} />
            <Route  path="/nostalgia" exact component={Nostalgia} /> */}
            <Route component={NotFound} />
          </ Switch>
      </div>
  </Router>
);

export default Routes;
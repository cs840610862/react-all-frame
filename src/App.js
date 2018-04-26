import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';

// cps
import Page1 from './cps/Page1'
import Page2 from './cps/Page2'

const routers = [
  {
    path: '/page1',
    cp: Page1,
    exact: true,
  },
  {
    path: '/page2',
    cp: Page2,
    exact: true,
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter basename="/cs">
          <Switch>
            {
              routers.map((item, i) => (
                <Route
                  key={i}
                  exact={item.exact}
                  path={item.path}
                  component={item.cp}
                />
              ))
            }
            <Redirect to="/page1"/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

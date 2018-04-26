import React, { Component } from 'react';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from "redux";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import DefautLayout from "./layout/DefaultLayout";
import MainPage from "./pages/MainPage";
import reducers from './reducers'
import './assets/styles/reset.less';


const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <DefautLayout exact path="/students" component={MainPage}/>
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;

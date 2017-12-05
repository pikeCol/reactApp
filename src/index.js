import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter, Link, Route, Redirect, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducer'
import './index.css'

import Login from './container/login/login'
import Register from './container/register/register'
import BossInfo from './container/bossinfo/bossinfo'
import GeniusInfo from './container/geniusinfo/geniusinfo'
import Dashboard from './container/dashboard/dashboard'
import Chat from './component/chat/chat'
import Auth from './component/auth/auth'
import './config'

const store = createStore( reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
  )
)

// import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <div>
        <Auth></Auth>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/geniusinfo" component={GeniusInfo}></Route>
          <Route path="/bossinfo" component={BossInfo}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/chat/:user" component={Chat}></Route>
          <Route component={Dashboard}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>), document.getElementById('root'));
// registerServiceWorker();

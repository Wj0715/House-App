import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Nav from './pages/Nav/nav.js'
import Login from './pages/Login.js'
import Reg from './pages/Reg/Reg.js'
import SelecyCity from './pages/SelectCity.js'
import Error from './pages/Error.js'
import ForgetPwd from './pages/ForgetPwd.js'
import Map from './pages/Map.js'
import Chart from './pages/Nav/Chart.js'
import store from './store.js'
import { Provider } from 'react-redux'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path='/' exact component={Nav}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/reg' component={Reg}></Route>
            <Route path='/selectcity' component={SelecyCity}></Route>
            <Route path='/forgetpwd' component={ForgetPwd}></Route>
            <Route path='/map' component={Map}></Route>
            <Route path='/chart' component={Chart}></Route>
            <Route component={Error}></Route>
          </Switch>
        </HashRouter>
      </Provider>

    )
  }
}


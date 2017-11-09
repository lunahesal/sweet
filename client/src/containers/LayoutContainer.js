import React, { Component } from 'react'
import LoginContainer from './LoginContainer'
import SignupContainer from './SignupContainer'
import DishContainer from './DishContainer'
import NotFound from '../components/NotFound'
import Layout from '../components/Layout/Layout'
import {
  Switch,
  Route
} from 'react-router-dom'

class LayoutContainer extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/login' component={LoginContainer} />
            <Route path='/signup' component={SignupContainer} />
            <Route path='/dish' component={DishContainer} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </div>
    )
  }
}
export default LayoutContainer

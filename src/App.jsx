import React from 'react'
import Home from './views/Home/Home'
import Layout from './views/Layout/Layout'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Auth from './components/Auth/Auth'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"

export default function App() {
  return (
    <Router>
    <Layout>
      <Switch>
        <Route path="/login">
          <Auth />
        </Route>
        <PrivateRoute path="/">  
          <Home />
        </PrivateRoute>
      </Switch>
    </Layout>
    </Router>
  )
}

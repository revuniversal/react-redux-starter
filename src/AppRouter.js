// @flow
import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import App from './components/App'
import Home from './components/Home'

interface Props {
  history: any
}

const AppRouter = ({
  history
}: Props) => (
  
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
)

export default AppRouter
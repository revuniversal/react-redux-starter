// @flow
import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import App from './routes/App'
import {Home} from './routes/Home'
import {Admin} from './routes/Admin'

interface Props {
  history: any
}

const AppRouter = ({
  history
}: Props) => (
  
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="admin" component={Admin}>
      </Route>
    </Route>
  </Router>
)

export default AppRouter
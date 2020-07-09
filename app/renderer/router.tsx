import * as React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Root from './pages/root'
import Start from './pages/start'
import Signin from './pages/signin'

export default () => {
  return (
    <HashRouter hashType='noslash'>
      <Switch>
        <Route exact path='/' component={Root} />
        <Route exact path='/start' component={Start} />
        <Route exact path='/signin' component={Signin} />
        <Route component={() => <h1>204 No Content</h1>} />
      </Switch>
    </HashRouter>
  )
}

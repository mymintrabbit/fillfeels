import { Route } from 'react-router-dom'
import React from 'react'
import UpdateStepOnePage from './pages/update-step-1'

export const pathRoutes = {
  UpdateStepOne: {
    path: '/update-step-1',
    component: UpdateStepOnePage,
  },
}

export const Routes = Object.values(pathRoutes).map(route => (
  <Route key={`route-${route.path}`} {...route} />
))

Routes.push(<Route key={'Landing-1'} path="/" exact component={UpdateStepOnePage} />)
Routes.push(<Route key="NotFound" render={() => <div>404 Page not found.</div>} />)

export default Routes

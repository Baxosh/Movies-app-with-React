import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { getJwt } from '../../services/authService'

export const ProtectRoute = ({ component: Component, path }) => {
  return (
    <>
      <Route
        path={path}
        render={(props) => {
          if (!getJwt())
            return (
              <Redirect
                exact
                to={{
                  pathname: '/login',
                  state: { from: props.location.pathname },
                }}
              />
            )
          return <Component {...props} />
        }}
      />
    </>
  )
}

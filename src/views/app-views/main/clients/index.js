import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import Groups from "./groups"
import UserList from "./list"


const Clients = (props) => {
  const { match } = props
  return (
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/list`} />
      <Route path={`${match.url}/client-groups`} component={Groups} />
      <Route path={`${match.url}/client-list`} component={UserList} />
    </Switch>
  )
}

export default Clients

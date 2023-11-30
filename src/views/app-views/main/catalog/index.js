import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import Items from "./items"
import Collections from "./collections"
import Combo from "./combo"
import Categories from "./categories"



const Catalog = (props) => {
  const { match } = props
  return (
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/items`} />
      <Route path={`${match.url}/items`} component={Items} />
      <Route path={`${match.url}/collections`} component={Collections} />
      <Route path={`${match.url}/combo`} component={Combo} />
      <Route path={`${match.url}/categories`} component={Categories} />
    </Switch>
  )
}

export default Catalog

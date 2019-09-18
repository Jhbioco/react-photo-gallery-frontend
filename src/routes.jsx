import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/main/main";
import PhotoDetails from "./components/details/photoDetails";
import PhotoCategory from "./components/category/photoCategory";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main}></Route>
      <Route path="/category/:name" component={PhotoCategory}></Route>
      <Route path="/:id" component={PhotoDetails}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;

import React from "react";
import {Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Test from "./components/test/Test"

const Routes = () => (
    <Router>
        <Switch>
            <Route component={Test} />
        </Switch>
    </Router>
)

export default Routes;
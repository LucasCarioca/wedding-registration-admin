import {Route, Switch} from "react-router-dom";
import React from "react";
import Invitation from "./components/Invitation";
import Home from "./components/Home";
import Invitations from "./components/Invitations";

function Routes() {
    return (
        <Switch>
            <Route path="/invitations/:id">
                <Invitation/>
            </Route>
            <Route path="/invitations">
                <Invitations/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    )
}

export default Routes;
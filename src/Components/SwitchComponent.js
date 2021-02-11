import React from "react";
import {Switch, Route} from 'react-router-dom';
import Home from "../Pages/Home";
import ToWatch from "../Pages/ToWatch";
import Favorites from "../Pages/Favorites";

const SwicthComponent = () =>{
    return(
        <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route exact path="/Home">
                <Home></Home>
            </Route>
            <Route path="/ToWatch">
                <ToWatch></ToWatch>
            </Route>
            <Route path="/Favorites">
                <Favorites></Favorites>
            </Route>
            <Route path="/Search">
                <Home></Home>
            </Route>
        </Switch>
    )
}

export default SwicthComponent;
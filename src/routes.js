import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ChatItem from "./components/chatItem";
import ChatItemNew from "./components/chatItemnew";

function RoutesItem() {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/john_show" />
            </Route>
            {/*<Route path='/pedro'  component={() => ChatItemNew({name: 'pedro'})} />*/}
            <Route path='/john_show'  component={() => ChatItemNew({name: 'john_show'})} />
            <Route path='/martin' component={() => ChatItemNew({name: 'martin'})} />
            <Route path='/sherlock' component={() => ChatItemNew({name: 'sherlock'})} />
            <Route path='/monica' component={() => ChatItemNew({name: 'monica'})} />
            <Route path='/dallas' component={() => ChatItemNew({name: 'dallas'})} />
        </Switch>
    )
}

export default RoutesItem
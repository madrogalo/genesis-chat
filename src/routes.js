import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ChatItem from "./components/chatItem";

function RoutesItem() {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/john_show" />
            </Route>
            <Route path='/john_show'  component={() => ChatItem({name: 'john_show'})} />
            <Route path='/martin' component={() => ChatItem({name: 'martin'})} />
            <Route path='/sherlock' component={() => ChatItem({name: 'sherlock'})} />
            <Route path='/monica' component={() => ChatItem({name: 'monica'})} />
            <Route path='/dallas' component={() => ChatItem({name: 'dallas'})} />
        </Switch>
    )
}

export default RoutesItem
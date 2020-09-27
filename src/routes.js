import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ChatItem from "./components/chatItem";
import ChatItemNew from "./components/chatItemnew";

function RoutesItem() {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/pedro" />
            </Route>
            <Route path='/pedro'  component={() => ChatItemNew({name: 'pedro'})} />
            <Route path='/john_show'  component={() => ChatItem({name: 'john_show'})} />
            <Route path='/martin' component={() => ChatItem({name: 'martin'})} />
            <Route path='/sherlock' component={() => ChatItem({name: 'sherlock'})} />
            <Route path='/monica' component={() => ChatItem({name: 'monica'})} />
            <Route path='/dallas' component={() => ChatItem({name: 'dallas'})} />
        </Switch>
    )
}

export default RoutesItem
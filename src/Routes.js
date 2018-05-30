import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {LoginPage, HomePage, SignUpPage} from './components'; 
import { TaskList } from './components/TaskList';
import { ClusterList } from './components/ClusterList';

export const Routes = () => {
    return(
        <Switch>
            <Route path="/login" component={LoginPage} /> 
            <Route exact path="/" component={HomePage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/tasklist" component={TaskList} />
            <Route path="/clusterlist" component={ClusterList} />

        </Switch>
    );
}
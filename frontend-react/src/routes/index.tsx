import React from 'react';

import { Switch, Route } from 'react-router-dom';

import JsonPage from '../pages/JsonPage'


const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={JsonPage} />
    </Switch>
);


export default Routes;
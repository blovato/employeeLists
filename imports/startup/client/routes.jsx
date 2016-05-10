import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import { App } from '../../layouts/App.jsx';
import ListPage from '../../ui/pages/ListPage.jsx';
import NewEmployeePage from '../../ui/pages/NewEmployeePage.jsx';
import Error404 from '../../ui/pages/Error404.jsx';

export const renderRoutes = () => (  
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="list" component={ListPage}/>
      <Route path="new" component={NewEmployeePage}/>
      <Route path="*" component={Error404}/>
    </Route>
  </Router>
);
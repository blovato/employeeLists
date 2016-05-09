import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import { App } from '../../layouts/App.jsx';
import ListPage from '../../ui/pages/ListPage.jsx';
import NewEmployeePage from '../../ui/pages/NewEmployeePage.jsx';
import error404 from '../../ui/pages/error404.jsx';

export const renderRoutes = () => (  
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="list" component={ListPage}/>
      <Route path="new" component={NewEmployeePage}/>
      <Route path="*" component={error404}/>
    </Route>
  </Router>
);
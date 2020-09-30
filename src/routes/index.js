import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';

export default function index() {
  return (
    <BrowserRouter>
      <Switch>
        {
          routes.map(({component, path}, index) => (
            <Route 
              key = {index} 
              exact 
              path={path} 
              component={component} 
              />
            ))
        }
      </Switch>
    </BrowserRouter>
  );
}
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { home } from 'Globals/urls';
import Home from 'Home/Home';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={home} component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;

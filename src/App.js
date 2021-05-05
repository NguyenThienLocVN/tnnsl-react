import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/page/Home';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/page/Home';
import QuanLyCapPhep from './components/page/QuanLyCapPhep/QuanLyCapPhep';
import BaoCaoBieuMau from './components/page/BaoCaoBieuMau/BaoCaoBieuMau';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />

          {/* Quan ly cap phep */}
          <Route exact path="/quan-ly-cap-phep" component={QuanLyCapPhep} />
          <Route exact path="/bao-cao-bieu-mau" component={BaoCaoBieuMau} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;

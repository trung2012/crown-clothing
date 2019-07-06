import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';

import ShopPage from './pages/shop/shop.component';

const App = () =>  {
  return (
    <div className="App">
      <div>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </div>
    </div>
  );
}

export default App;

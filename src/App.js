import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage.component';

const HatsPage = () => {
	return(
		<div>
			<h1>HATS PAGE</h1>
		</div>
	)
};

const App = () =>  {
  return (
    <div className="App">
      <div>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop/hats' component={HatsPage}/>
      </div>
    </div>
  );
}

export default App;

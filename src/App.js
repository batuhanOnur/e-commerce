import React from 'react';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component';
import ShopPage from '../src/pages/shop/shop.component';
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div>

      <Switch>
       <Route        //exact olmazsa / ile başlayan tüm sayfalar renderlanır.
       exact        
       path='/' 
       component={HomePage} />

       <Route        
       path='/shop' 
       component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

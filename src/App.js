import React from 'react';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component';
import ShopPage from '../src/pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Header />      
      <Switch>
       <Route        //exact olmazsa / ile başlayan tüm sayfalar renderlanır.
       exact        
       path='/' 
       component={HomePage} />

       <Route        
       path='/shop' 
       component={ShopPage} />

       <Route        
       path='/signin' 
       component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;

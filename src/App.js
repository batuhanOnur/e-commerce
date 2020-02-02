import React from 'react';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component';
import ShopPage from '../src/pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Switch, Route } from 'react-router-dom'

import { auth,createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null
    }
  }

  unsbscribeFromAuth = null

  componentDidMount(){  // uygulamaya giriş yaptığımızda user session'ı tut.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
      }
        this.setState({ currentUser: userAuth})
    });
  }

  componentWillUnmount(){  // session takibi.
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div>
      <Header currentUser = {this.state.currentUser}/>      
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
}

export default App;

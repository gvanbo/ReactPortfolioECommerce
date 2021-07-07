import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { createStructuredSelector } from 'reselect';


import './App.css';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({          
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      }

      setCurrentUser({ userAuth });
    });
  }
   
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => 
            this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInUpPage />
            )} 
          />
        </Switch>
      </div>
    );
    }
}

//get access to this.props.currentUser
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

//dispatch tells redux that any object passed will be a reducer
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
import '@fontsource/roboto';
import { Route, Redirect, Switch } from 'react-router-dom';
import { useState, useEffect } from "react";
import { auth } from './firebase/firebase';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import SearchPage from './components/search-page/SearchPage';

function App() {

  const [loggedUser, setLoggedUser] = useState(null);


  useEffect(() => {
    auth.onAuthStateChanged(setLoggedUser)
  }, []);


  const authInfo = {
    isAuthenticated: Boolean(loggedUser),
    user: loggedUser?.email
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/search' component={SearchPage} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/logout'
                  render={props => {
                    auth.signOut();
                    return (<Redirect to='/' />)
                  }} />
      </Switch>
    </div>
  );
}

export default App;

import '@fontsource/roboto';
import { Route, Redirect, Switch } from 'react-router-dom';
import { useState, useEffect } from "react";
import { auth } from './firebase/firebase';
import * as authService from './services/authService';
import * as movieService from './services/movieService';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Details from './components/details/Details';
import Login from './components/login/Login';
import SearchPage from './components/search-page/SearchPage';
import CollectionContext from './contexts/collectionContext';
import AuthContext from './contexts/authContext';
import './App.css';

function App() {

  const [loggedUser, setLoggedUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState();

  useEffect(() => {
    auth.onAuthStateChanged(setLoggedUser);

    authService.getOneUser(loggedUser?.email)
      .then(res => setUserData(res));

    movieService.getAll()
      .then(res => {
        setMovies(res);
      }).catch(err => {
        console.log(err);
      });
      
  }, [loggedUser]);

  const authInfo = {
    isAuthenticated: Boolean(loggedUser),
    user: loggedUser?.email,
    userData
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {console.log('App -> ' + favorites)}
        <CollectionContext.Provider value={{ movies: movies, setMovies: setMovies, favorites: favorites, setFavorites: setFavorites }}>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/search' component={SearchPage} />
            <Route path='/movies/:_id' exact component={Details} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/logout'
              render={props => {
                auth.signOut();
                return (<Redirect to='/' />)
              }} />
          </Switch>
        </CollectionContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;

import '@fontsource/roboto';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Fragment } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import SearchPage from './components/search-page/SearchPage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/search' component={SearchPage} />
      </Switch>
    </div>
  );
}

export default App;

import '@fontsource/roboto';
import { Fragment } from 'react';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero-section/Hero';

function App() {
  return (
    <Fragment>
    <Header/>
    <Hero/>
    </Fragment>
  );
}

export default App;

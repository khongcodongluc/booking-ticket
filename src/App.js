import React, { useState } from 'react'
import './App.css';
import Menu from './components/Menu';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Login from './components/Login';
import Poster from './components/Poster';
import ScrollToTop from './ScrollToTop';
import Seat from './components/Seat';

function App() {
  const [seat, setSeat]= useState(1);
  const onClick = (val) =>{
    setSeat(val);
  }

  const location = useLocation()

  return (
    <div className="mainContainer">
      <ScrollToTop />
      <Menu />
      <Poster />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
            <Route exact path="/" render={() =><MainContainer click={onClick}/>}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/seat" component={() => <Seat seat={seat}/> }/>
            {/* <Route exact path="/information" component={Information}/> */}
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;

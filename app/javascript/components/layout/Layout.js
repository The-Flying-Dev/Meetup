import React from 'react';
import MainNavigation from "./MainNavigation";
import classes from './Layout.module.css'; //module stylesheet

//stateless function becomes a wrapper for the whole app - wraps around <Routes /> in App.js
function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
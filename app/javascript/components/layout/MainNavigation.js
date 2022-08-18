import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module'; //module stylesheet

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups App</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/meetups'>All Meetups</Link>
          </li>
          <li>
            <Link to='/new-meetup'>New Meetup</Link>
          </li>          
        </ul>
      </nav>

    </header>

  );
}

export default MainNavigation;
import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <h1>View All Meetups</h1>
      <Link to='/meetups' role='button'>View</Link>
    </div>
  );
}

export default Home;
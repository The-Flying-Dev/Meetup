import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from '../pages/Home';
import AllMeetups from '../pages/AllMeetups'; 
import Meetup from '../pages/Meetup';
import NewMeetup from '../pages/NewMeetup'; 

function App() {
  return (    
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/meetups' element={<AllMeetups />} />      
          <Route path='/new-meetup' element={<NewMeetup />} />
          <Route path='/meetups/:id' element={<Meetup />} />
        </Routes>
      </Layout>    
  );
}

export default App;

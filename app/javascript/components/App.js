import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Layout from './layout/Layout';
import Home from '../pages/Home';
import AllMeetups from '../pages/AllMeetups'; 
import Meetup from '../pages/Meetup';
import NewMeetup from '../pages/NewMeetup'; 

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/meetups' element={<AllMeetups />} />      
          <Route path='/new-meetup' element={<NewMeetup />} />
          <Route path='/meetup' element={<Meetup />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

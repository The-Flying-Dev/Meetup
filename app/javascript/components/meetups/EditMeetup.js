import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
//import classes from './EditMeetup.module.css';
import classes from './NewMeetupForm.module.css';
import Card from "../ui/Card";

function EditMeetup() {
  const [singleMeetup, setSingleMeetup] = useState([]);
  const { id } = useParams();  
  const history = useNavigate();

  useEffect(async () => {
    let result = await fetch(`/api/v1/meetups/${id}`);
    result = await result.json();
    setSingleMeetup(result);
  }, [])

  
    function updateMeetupHandler(e) {
      e.preventDefault();
      const apiUrl = `/api/v1/meetups/${id}`;
      fetch(apiUrl,     
        {
          method: 'PUT',           
          headers: {
            'Content-Type': 'application/json'
          }      
        }
      ).then(() => {
        window.alert('Meetup Updated!');
        history("/meetups");
      });    
    }
  

  return (
    <Card>
      <form className={classes.form} onSubmit={updateMeetupHandler}>

        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' defaultValue={singleMeetup.title}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' defaultValue={singleMeetup.url} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' defaultValue={singleMeetup.address} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            defaultValue={singleMeetup.description}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Submit</button>
          <Link to='/meetups'><button>Back</button></Link>
        </div>
      </form>
    </Card>
  );
}

export default EditMeetup;
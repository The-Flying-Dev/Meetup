import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import Card from "../components/ui/Card";
import classes from "../components/meetups/MeetupItem.module.css";


function Meetup() {

  //initial states
  const [isLoading, setIsLoading] = useState(true);
  const [singleMeetup, setSingleMeetup] = useState({});
  const { id } = useParams();  
  

  //after data is fetched using Rails meetups_controller.rb as the api, set isLoading to false 
  useEffect(() => {
    setIsLoading(true);
    const apiUrl = `/api/v1/meetups/${id}`;
    fetch(apiUrl)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok");
      })
      .then(data => setSingleMeetup(data));
      setIsLoading(false);
  }, [id]);


  //this will load momentarily while the data is being fetched

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  //pass the data as attribute
  return (
    <div>
      <ul>
        <li className={classes.item}>
          <Card>
            <div className={classes.image}>
              <img src={singleMeetup.image} alt={singleMeetup.title} />
            </div>
            <div className={classes.content}>
              <h3>{singleMeetup.title}</h3>
              <address>{singleMeetup.address}</address>
              <p>{singleMeetup.description}</p>        
            </div>    
          </Card>          
        </li>
      </ul>
      <Link to='/meetups'>Back to meetups</Link>
    </div>
  );
}

export default Meetup;
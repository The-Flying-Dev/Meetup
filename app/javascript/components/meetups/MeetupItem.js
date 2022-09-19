import React from "react";
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css'

//wrap each item in the Card component
function MeetupItem(props) {
   

  return (
    <li key={props.id} className={classes.item} style={{width: "150px"}} >
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} style={{width: "150px"}} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>       
      </Card>
      <Link to={`/meetups/${props.id}`}>View Details</Link>
    </li>
  );
}

export default MeetupItem;
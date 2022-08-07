import React from "react";
import MeetupItem from "./MeetupItem";
import classes from './MeetupList.module.css';

//access the data via props
//map through each item and pass each item to the MeetupItem Component
function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
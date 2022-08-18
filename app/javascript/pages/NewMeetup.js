import React from "react";
import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {

  const history = useNavigate();
   
  //Post request to create new meetup, this function gets passed as prop to NewMeetupForm
  function addMeetupHandler(meetupData) {
    const apiUrl = "/api/v1/meetups";
    fetch(apiUrl,
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      history("/meetups");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      {/* attribute points to above function, when used in the form will only need to pass in the argument*/}
      {/* since the attribute can now do what the function can do */}
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetup;



import React, { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetups() {

  //initial states
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  //after data is fetched using Rails meetups_controller.rb as the api, set isLoading to false 
  useEffect(() => {
    setIsLoading(true);
    const apiUrl = "/api/v1/meetups";
    fetch(apiUrl)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok");
      })
      .then(data => setLoadedMeetups(data));
      setIsLoading(false);
  }, []);


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
    <div><MeetupList meetups={loadedMeetups} /></div>
  );
}

export default AllMeetups;
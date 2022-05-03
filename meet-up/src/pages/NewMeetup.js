import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function onAddMeetupHandler(meetupData) {
    // for sending the http request we can use the fetch function it is a built in js function not a react. it allows to send a http request. We can also use axios but it is third party package fro sending http request
    // fetch is a get request
    fetch(
      "https://react-getting-started-6e664-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        // body should be in json format
        body: JSON.stringify(meetupData),
        headers: {
          // to add extra meta data to clear that this contain json
          "Content-Type": "application/json",
        },
      }
    );

    // most api stores fetch req so to store a post req to we add another paramter in fetch
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      {/* onAddMeetup is a props which is passing a function onAddMEetupHandler where this funtion has paramter of meetupData */}
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;

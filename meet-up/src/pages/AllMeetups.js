import MeetupList from "../components/meetups/MeetupItem";
const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meet Ups</h1>
      {/* list to jsx */}
      {/* {[<li>Item 1</li>, <li>Item 2</li>]} */}
      {/* use map for rendering each element */}

      {/* <ul> */}
      {/* {[
          // we need to give id because otherwise it will give error
          DUMMY_DATA.map((meetup) => {
            return <li id={meetup.id}> {meetup.title}</li>;
            // <img src={meetup.image} alt="none" />;
          }),
        ]} */}
      {/* </ul> */}
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;

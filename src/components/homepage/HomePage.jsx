import { useEffect, useState } from "react";
import { addEvent, fetchAllEvents } from "../../services/events/eventsService";

const HomePage = () => {
  const [eventName, setName] = useState("");
  const [eventDesc, setDesc] = useState("");
  const [eventDate, setDate] = useState("");
  const [eventLocation, setLocation] = useState("");
  const [events, setEvents] = useState([]);

  const handleEventSubmit = (e) => {
    e.preventDefault();
    console.log({ eventName, eventDate, eventDesc, eventLocation });
    addEvent({
      event_name: eventName,
      event_date: eventDate,
      event_description: eventDesc,
      location: eventLocation,
    });
    setName("");
    setLocation("");
    setDesc("");
    setDate("");
  };

  const getEvents = async () => {
    try {
      const eventsAllData = await fetchAllEvents();
      setEvents(eventsAllData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div>
      <form onSubmit={handleEventSubmit}>
        <label>Event name</label>
        <br />
        <input
          type="text"
          placeholder="event title"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Event Description</label>
        <br />
        <input
          type="text"
          placeholder="event title"
          onChange={(e) => setDesc(e.target.value)}
        />
        <br />
        <label>Event Date</label>
        <br />
        <input
          type="date"
          placeholder="event title"
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <label>Event Location</label>
        <br />
        <input
          type="text"
          placeholder="event title"
          onChange={(e) => setLocation(e.target.value)}
        />
        <br />
        <button type="submit" value="add event" name="add Event">
          {" "}
          Add Event
        </button>
      </form>

      <div>
        All events are here
        {events?.map((el) => (
          <div key={el.eventDate}>
            <h3>{el.event_name}</h3>
            <p>{el.event_description}</p>
            <div>{el.event_date}</div>
            <i>{el.location}</i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

import getRooms from "../lib/getRooms";

export default function Rooms({ rooms }) {
  return (
    <div>
      <h3 className="">
        👋 Press the card to schedule it
      </h3>
      <div className="grid">
        {rooms.map((room) => (
          <a href={room.fields.URL} className="cardOfEvent" target="_blank">
            <p className="timeOfClub">{room.fields.Time}</p>
            <h3>{room.fields.Name}</h3>
            <p>{room.fields.Description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const rooms = await getRooms();
  return {
    props: {
      rooms,
    },
  };
}

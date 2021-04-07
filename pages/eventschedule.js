import Nav from './nav'

export default function EventSchedule() {
  return (
    <div id="content">
      <h1>0424</h1>
      <Nav/>
      <ul className="timeline">
        <li className="event" data-date="7:00am - 07:45am">
          <h3>Lighting</h3>
          <h6 className = 'my-2'>Yankov Wong</h6>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi nibh, efficitur at ante sit amet, hendrerit gravida metus. Fusce ipsum diam, auctor vitae vestibulum id, interdum vitae velit. In auctor dictum magna, vitae pretium ex commodo id.
          </p>
        </li>
        <li className="event" data-date="7:00am - 07:45am">
          <h3>Color Grading</h3>
          <h6 className = 'my-2'>Charlie Kayi</h6>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi nibh, efficitur at ante sit amet, hendrerit gravida metus.
          </p>
        </li>
        <li className="event" data-date="7:00am - 07:45am">
          <h3>Color Grading</h3>
          <h6 className = 'my-2'>Charlie Kayi</h6>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi nibh, efficitur at ante sit amet, hendrerit gravida metus.
          </p>
        </li>
        <li className="event" data-date="7:00am - 07:45am">
          <h3>Color Grading</h3>
          <h6 className = 'my-2'>Charlie Kayi</h6>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi nibh, efficitur at ante sit amet, hendrerit gravida metus.
          </p>
        </li>
      </ul>
    </div>
  );
}
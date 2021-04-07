import Nav from "./nav";

export default function EventSchedule() {
  return (
    <div>
      <div className="inline-block lg:hidden w-screen text-center">
        <h1 className="text-4xl m-6">0424 Event</h1>
        <Nav />
        <p>In Progress... Use web to see the schedule</p>

        <div className="grid grid-cols-3 p-6 m-6 text-left">
          <div className="left">
            <div className="time">
              <p>07:00 - 07:45</p>
            </div>
            <div className="speaker">
              <p>Yankov Wong</p>
            </div>
          </div>

          <div className="right col-span-2">
            <div className="text-left">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi
                nibh, efficitur at ante sit amet, hendrerit gravida metus. Fusce
                ipsum diam, auctor vitae vestibulum id, interdum vitae velit. In
                auctor dictum magna, vitae pretium ex commodo id.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 p-6 m-6 text-left">
          <div className="left">
            <div className="time">
              <p>07:00 - 07:45</p>
            </div>
            <div className="speaker">
              <p>Yankov Wong</p>
            </div>
          </div>

          <div className="right col-span-2">
            <div className="text-left">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi
                nibh, efficitur at ante sit amet, hendrerit gravida metus. Fusce
                ipsum diam, auctor vitae vestibulum id, interdum vitae velit. In
                auctor dictum magna, vitae pretium ex commodo id.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 p-6 m-6 text-left">
          <div className="left">
            <div className="time">
              <p>07:00 - 07:45</p>
            </div>
            <div className="speaker">
              <p>Yankov Wong</p>
            </div>
          </div>

          <div className="right col-span-2">
            <div className="text-left">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi
                nibh, efficitur at ante sit amet, hendrerit gravida metus. Fusce
                ipsum diam, auctor vitae vestibulum id, interdum vitae velit. In
                auctor dictum magna, vitae pretium ex commodo id.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 p-6 m-6 text-left">
          <div className="left">
            <div className="time">
              <p>07:00 - 07:45</p>
            </div>
            <div className="speaker">
              <p>Yankov Wong</p>
            </div>
          </div>

          <div className="right col-span-2">
            <div className="text-left">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi
                nibh, efficitur at ante sit amet, hendrerit gravida metus. Fusce
                ipsum diam, auctor vitae vestibulum id, interdum vitae velit. In
                auctor dictum magna, vitae pretium ex commodo id.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="content" className="hidden lg:inline-block">
        <h1 className="text-4xl">0424 交配gogogo</h1>
        <Nav />
        <ul className="timeline">
          <li className="event" data-date="7:00am - 07:45am">
            <h3>Lighting</h3>
            <h6 className="my-2">Yankov Wong</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi
              nibh, efficitur at ante sit amet, hendrerit gravida metus. Fusce
              ipsum diam, auctor vitae vestibulum id, interdum vitae velit. In
              auctor dictum magna, vitae pretium ex commodo id.
            </p>
          </li>
          <li className="event" data-date="7:00am - 07:45am">
            <h3>Color Grading</h3>
            <h6 className="my-2">Charlie Kayi</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi
              nibh, efficitur at ante sit amet, hendrerit gravida metus.
            </p>
          </li>
          <li className="event" data-date="7:00am - 07:45am">
            <h3>Color Grading</h3>
            <h6 className="my-2">Charlie Kayi</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi
              nibh, efficitur at ante sit amet, hendrerit gravida metus.
            </p>
          </li>
          <li className="event" data-date="7:00am - 07:45am">
            <h3>Color Grading</h3>
            <h6 className="my-2">Charlie Kayi</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi
              nibh, efficitur at ante sit amet, hendrerit gravida metus.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

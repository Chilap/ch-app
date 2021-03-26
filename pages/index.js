import Head from 'next/head'
import getRooms from '../lib/getRooms'
import Header from './index_Header'
import ContributingSection from './index_ContributingSection'
import TopSpeakerSection from './index_TopSpeakerSection'
// import WeeklySchedule from './index_WeeklySchedule'
import Rooms from './index_Rooms'
import Presentation from './index_Slides'
import SponsorSection from './index_sponsorSection'
import Footer from './index_Footer'

export default function Home({rooms}) {
  return (
    <div className="container">
      <Head>
        <title>📸 攝影吹</title>
      </Head>

      <main>
        <Header/>
        <ContributingSection/>
        <TopSpeakerSection/>
        {/* <WeeklySchedule/> */}
        {/* <Rooms/> */}
        <div>
          <h3 className="description grid-description">👋 Press the card to schedule it </h3>
          <div className="grid">
            {rooms.map(room => (
              <a href={room.fields.URL} className="cardOfEvent" target="_blank">
                <p className="timeOfClub">
                  {room.fields.Time}
                </p>
                <h3>{room.fields.Name}</h3>
                <p>{room.fields.Description}</p>
              </a>
            ))}
          </div>
        </div>
          <Presentation/>
          <SponsorSection/>
      </main>
      <Footer/>
      <style jsx>{``}</style>
    </div>
  )
}


export async function getServerSideProps() {
  const rooms = await getRooms();
  return {
    props: {
      rooms,
    },
  };
}

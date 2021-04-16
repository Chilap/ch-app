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
    <div className="containery">
      <Head>
        <title>📸 攝影吹</title>
      </Head>
      
      {/* <div className = "bg-clubhouse w-screen p-6 md:px-40 lg:px-60"> */}
      <main>
        <Header/>
        <ContributingSection/>
        <TopSpeakerSection/>
        {/* <WeeklySchedule/> */}
        {/* <Rooms/> */}
        <div>
          <h3 className="text-center mt-4 text-xl p-4 font-bold">👋 Press the card to schedule it </h3>
          <div className="grid auto-rows-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3">
            {rooms.sort()
              .map(room => (
              <a href={room.fields.URL} className="cardOfEvent m-6 p-6 text-left bg-white no-underline rounded-2xl border border-gray-200 border-solid duration-200 hover:shadow-lg active:shadow-lg w-80 md:w-80 lg:w-96 " target="_blank">
                <p className="text-gray-500 text-sm">
                {room.fields.Time}
                </p>
                <h3 className = 'mb-3 text-xl font-medium'>{room.fields.Name}</h3>
                <p className = 'm-0 text-base leading-7'>{room.fields.Description}</p>
              </a>
            ))}
          </div>
        </div>
          <Presentation/>



          {/* <SponsorSection/> */}
      </main>
      {/* </div> */}
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

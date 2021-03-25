import Head from 'next/head'
import Image from 'next/image'
import getRooms from '../lib/getRooms'

export default function Home({rooms}) {
  return (
    <div className="container">
      <Head>
        <title>📸 攝影吹</title>
      </Head>

      <main>
        <h1 className="title">
          📸  攝影吹
        </h1>
        <p className="description">
        The arts, the tech, the gears, the business.... ALL about photography.<br/>關於攝影，無所不談；無所不吹。 <br/> 不論你係專業攝影師，定係攝影愛好者，入嚟吹吓攝影！
        </p>
        <row className = 'contributing-row'>
          <a className = 'contributing-btn' href='https://forms.gle/qoL5Kx8sG8hneozh9' target="_blank">🙋‍♂️ Contribute as an Expert Speaker</a>
          <a className = 'contributing-btn ' href='https://forms.gle/s5Td6AwUujQTMj6D7' target="_blank">✳️ Contribute as a Moderator</a>
          <a className = 'contributing-btn contributing-btn-color' href='https://forms.gle/qRm7hw1d5B6CvnXQA' target="_blank">💬 Request a Topic</a>
        </row>
        
        
        <h3><a 
          href="https://www.joinclubhouse.com/club/%E3%80%8C%E6%94%9D%E5%BD%B1%E3%80%8D%E5%90%B9" 
          target="_blank" 
        >
          <span>
            <Image src="/home-icon.svg" width='12px' height='12px'/>
          </span> &nbsp;
          攝影吹 's Top Speaker
        </a>

        

        </h3>
        <div class="cards">
          <div class="card">
            <Image 
              className = 'topSpeakerIcon'
              src='/images/Yankov_icon.png' 
              width = {50} 
              height = {50}
            />
            <h2><a href="https://www.instagram.com/yankovwong/" target = '_blank'>Yankov Wong</a></h2>
            <p>Commercial Photographer</p>
          </div>
          <div class="card">
            <Image 
              className = 'topSpeakerIcon'
              src='/images/Eddie_icon.png' 
              width = {50} 
              height = {50}
            />
            <h2><a href="https://www.instagram.com/eddie_huynh/" target = '_blank'>Eddie Huynh</a></h2>
            <p>🇭🇰 Photographer</p>
          </div>
          <div class="card">
            <Image 
              className = 'topSpeakerIcon'
              src='/images/Roger_icon.png' 
              width = {50} 
              height = {50}
            />
            <h2><a href="https://www.instagram.com/rogertanphotography/" target = '_blank'>Roger Tan</a></h2>
            <p>Top Wedding Photographer</p>
          </div>
          <div class="card">
            <Image 
              className = 'topSpeakerIcon'
              src='/images/Daniel_icon.png' 
              width = {50} 
              height = {50}
            />
            <h2><a href="https://www.instagram.com/danieltamig/" target = '_blank'>Daniel Tam</a></h2>
            <p>Top 10 Wedding Photographer</p>
          </div>
          <div class="card">
            <Image 
              className = 'topSpeakerIcon'
              src='/images/Billy_icon.png' 
              width = {50} 
              height = {50}
            />
            <h2><a href="https://www.instagram.com/billyiu/" target = '_blank'>Billy Yiu</a></h2>
            <p>Member of HKIPP</p>
          </div>
          
        </div>
        
        {/* <div className = "weeklySchedule">
          <h3>🗓 Weekly Schedule</h3>
          <div className="dayBlock">
              <h3 className ="sundayhaha">Sunday</h3>
              <p>🦅 Free Talk</p>
          </div>
          <div className="dayBlock">
            <h3>Monday</h3>
            <p>🛠 Techinal Talk</p>
          </div>
          <div className="dayBlock">
            <h3>Tuesday</h3>
            <p>📁 Business</p>
          </div>
          <div className="dayBlock">
            <h3>Wednesday</h3>
            <p>👁‍🗨 Portfolio Review</p>
          </div>
          <div className="dayBlock">
            <h3>Thursday</h3>
            <p>💬 Guest Sharing</p>
          </div>
          <div className="dayBlock">
            <h3>Friday</h3>
            <p>🛠 Techincal Friday</p>
          </div>
          <div className="dayBlock">
            <h3>Saturday</h3>
            <p>🦅 Free Talk</p>
          </div>
        </div> */}

        <div>
          <br/>
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
          <div className="presentation">
            <h3><em>"Today's Title"</em> Slides</h3>
            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR8neJVMHjwZwyDbMGGAd_u5j6IY9VkRRbVgfA8FxQ09b1plvjMDJLHA6EFaSS09MVl234idSS4QTkw/embed?start=false&loop=false&delayms=3000" 
              className = "presentationSlides"
              frameborder="0" 
              width="960" height="569" 
              allowfullscreen="true" 
              mozallowfullscreen="true" 
              webkitallowfullscreen="true"
            />
          </div>
          <div className = 'sponsorSection'>
            <h3>Support us</h3>
            {/* <div className = "sponsorColumn">
              <a href="https://www.buymeacoffee.com/imytdotio" target="_blank">
                <img 
                  src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" 
                  alt="Buy Me A Coffee" 
                  className = 'sponsorship-btn'
                />
              </a>
              <p>🌱 Dev of the site</p>
            </div> */}
            <div className = "sponsorColumn">
              <a href="https://www.buymeacoffee.com/imytdotio" target="_blank">
                <img 
                  src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" 
                  alt="Buy Me A Coffee" 
                  className = 'sponsorship-btn'
                />
              </a>
              <p>📸 Photoblow</p>
            </div>
            <div className = "sponsorColumn">
              <a href="https://www.buymeacoffee.com/imytdotio" target="_blank">
                <img 
                  src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" 
                  alt="Buy Me A Coffee" 
                  className = 'sponsorship-btn'
                />
              </a>
              <p>📸 Photoblow</p>
            </div>
          </div>
          
       </main>

      <div className='footer'>
        <a href="https://web.telegram.org/" target="_blank" className="socialMediaIcon">
          <Image src= "/images/telegram-app.png" width="20px" height="20px"/>
        </a>
        <a href="https://www.instagram.com" target="_blank" className="socialMediaIcon">
          <Image src= "/images/Instagram_icon.png" width="20px" height="20px"/>
        </a>
        <br/>
        <a href="https://www.telegram.me/imytdotio">
          <p className = "siteBuiltBy">Site built by YT.</p>
        </a>
      </div>

      <style jsx>{`
        
      `}</style>
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

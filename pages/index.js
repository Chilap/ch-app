import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
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
          </div>
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
        
        <div className = "weeklySchedule">
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
          
        </div>

        <div>
          <br/>
          <h3 className="description grid-description">👋 Press the card to schedule it </h3>
          <div className="grid">
            <a href="https://www.joinclubhouse.com/event/PNRJ40AR" className="cardOfEvent" target="_blank">
              <p className="timeOfClub">
                THU, 21 March, 22:00 (HKT)
              </p>
              <h3>一句得罪攝影師的說話</h3>
              <p>攝影路上見得多煩客，入嚟吹吓攝影，吹吓水。</p>
            </a>

            <a href="https://www.joinclubhouse.com/event/PNRJ40AR" className="cardOfEvent" target="_blank">
              <p className="timeOfClub">
                THU, 21 March, 22:00 (HKT)
              </p>
              <h3>乜真係有人鐘意影死物嘅咩？唔悶㗎？</h3>
              <p>影product會唔會悶，product photography 真係咁好玩？</p>
            </a>
            
            <a href="https://www.joinclubhouse.com/event/PNRJ40AR" className="cardOfEvent" target="_blank">
              <p className="timeOfClub">
                THU, 21 March, 22:00 (HKT)
              </p>
              <h3>有冇人試過Big Day 做 Live</h3>
              <p>咩叫BigDay, wedding? </p>
            </a>
            
            
            <a
              href="https://www.joinclubhouse.com/event/PNRJ40AR"
              className="cardOfEvent" target="_blank"
            >
              <p className="timeOfClub">
                THU, 21 March, 22:00 (HKT)
              </p>
              <h3>每個人都有個價，你呢？</h3>
              <p>我淨係值3蚊</p>
            </a>
            <a href="https://www.joinclubhouse.com/event/PNRJ40AR" className="cardOfEvent" target="_blank">
              <p className="timeOfClub">
                THU, 21 March, 22:00 (HKT)
              </p>
              <h3>乜真係有人鐘意影死物嘅咩？唔悶㗎？</h3>
              <p>影product會唔會悶，product photography 真係咁好玩？</p>
            </a>
            <a
              href="https://www.joinclubhouse.com/event/PNRJ40AR"
              className="cardOfEvent" target="_blank"
            >
              <p className="timeOfClub">
                THU, 21 March, 22:00 (HKT)
              </p>
              <h3>Hello, devs</h3>
              <p>唔知呢個網對攝影吹有冇用呢？ </p>
            </a>
          </div>
        
          </div>
          <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR8neJVMHjwZwyDbMGGAd_u5j6IY9VkRRbVgfA8FxQ09b1plvjMDJLHA6EFaSS09MVl234idSS4QTkw/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
       </main>

      <div className='footer'>
        <a href="https://web.telegram.org/" target="_blank" className="socialMediaIcon">
          <Image src= "/images/telegram-app.png" width="20px" height="20px"/>
        </a>
        <a href="https://www.instagram.com" target="_blank" className="socialMediaIcon">
          <Image src= "/images/Instagram_icon.png" width="20px" height="20px"/>
        </a>
        <br/>
        <a href="https://www.instagram.com/imyt_space/">
          <p className = "siteBuiltBy">Site built by YT.</p>
        </a>
      </div>

      <style jsx>{`
        
      `}</style>
    </div>
  )
}

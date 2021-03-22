import Head from 'next/head'
import styles from '../styles/Home.module.css'

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
          <a className = 'contributing-btn' href='https://forms.gle/qoL5Kx8sG8hneozh9' target="_blank">Contribute as a Speaker</a>
          <a className = 'contributing-btn ' href='https://forms.gle/s5Td6AwUujQTMj6D7' target="_blank">Contribute as a Moderator</a>
          <a className = 'contributing-btn contributing-btn-color' href='https://forms.gle/qRm7hw1d5B6CvnXQA' target="_blank">Request a Topic</a>
        </row>
        <div>
          <h3 className="description grid-description">Press the card to schedule it &#8594;</h3>
        <div className="grid">
          <a href="https://ios.joinclubhouse.com/event/MOGrvjO0" className="cardOfEvent" target="_blank">
            <p className="timeOfClub">
              THU, 21 March, 22:00 (HKT)
            </p>
            <h3>一句得罪攝影師的說話</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://ios.joinclubhouse.com/event/MOGrvjO0" className="cardOfEvent" target="_blank">
          <p className="timeOfClub">
              THU, 21 March, 22:00 (HKT)
            </p>
            <h3>乜真係有人鐘意影死物嘅咩？唔悶㗎？</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
          <a href="https://ios.joinclubhouse.com/event/MOGrvjO0" className="cardOfEvent" target="_blank">
          <p className="timeOfClub">
              THU, 21 March, 22:00 (HKT)
            </p>
            <h3>有冇人試過Big Day 做 Live</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a><a href="https://ios.joinclubhouse.com/event/MOGrvjO0" className="cardOfEvent" target="_blank">
          <p className="timeOfClub">
              THU, 21 March, 22:00 (HKT)
            </p>
            <h3>乜真係有人鐘意影死物嘅咩？唔悶㗎？</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a><a href="https://ios.joinclubhouse.com/event/MOGrvjO0" className="cardOfEvent" target="_blank">
          <p className="timeOfClub">
              THU, 21 March, 22:00 (HKT)
            </p>
            <h3>乜真係有人鐘意影死物嘅咩？唔悶㗎？</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a><a href="https://ios.joinclubhouse.com/event/MOGrvjO0" className="cardOfEvent" target="_blank">
          <p className="timeOfClub">
              THU, 21 March, 22:00 (HKT)
            </p>
            <h3>乜真係有人鐘意影死物嘅咩？唔悶㗎？</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
          <a
            href="https://ios.joinclubhouse.com/event/MOGrvjO0"
            className="cardOfEvent" target="_blank"
          >
            <p className="timeOfClub">
              THU, 21 March, 22:00 (HKT)
            </p>
            <h3>每個人都有個價，你呢？</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://www.joinclubhouse.com/event/M84NGJXA"
            className="cardOfEvent" target="_blank"
          >
            <p className="timeOfClub">
              THU, 21 March, 22:00 (HKT)
            </p>
            <h3>haha</h3>
            <p>
              呢個係testing嚟咋
            </p>
          </a>
        </div>
      
        </div>
       </main>

      <footer className='footer'>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          (Going to Link.tree directing people to facebook / instagram)
        </a>
      </footer>

      <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #f2efe4 !important;
          font-family: "nunito";
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
.contributing-row{
  margin: 50px;
}

        .contributing-btn{
          background-color: #ffffff;
          margin: 10px;
          padding: 10px 20px;
          border-radius: 20px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          
        }

        .contributing-btn-color{
          background-color:#208f8f;
          color: #ffffff;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid-description{
          color: #333333;
          font-size: 18px;
        }

        // code {
        //   background: #fafafa;
        //   border-radius: 5px;
        //   padding: 0.75rem;
        //   font-size: 1.1rem;
        //   font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
        //     DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        // }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .cardOfEvent {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          background: #ffffff;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .cardOfEvent:hover,
        .cardOfEvent:focus,
        .cardOfEvent:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .cardOfEvent h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .cardOfEvent p {
          margin: 0;
          font-size: 16px;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        .timeOfClub{
          color: #999999;
          font-size: 14px !important;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

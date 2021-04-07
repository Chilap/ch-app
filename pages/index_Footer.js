import Image from 'next/image'

export default function Footer() {
    return(
        <div className='footer'>
        <a href="https://www.joinclubhouse.com/club/%E3%80%8C%E6%94%9D%E5%BD%B1%E3%80%8D%E5%90%B9" target="_blank" className="socialMediaIcon">
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
    )
}
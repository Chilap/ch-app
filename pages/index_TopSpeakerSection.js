import Image from "next/image";

export default function TopSpeakerSection() {
  return (
    <div className="hidden lg:block m-6">
      <h3 className="text-center m-4 text-xl p-4 font-bold">
        <a
          href="https://www.joinclubhouse.com/club/%E3%80%8C%E6%94%9D%E5%BD%B1%E3%80%8D%E5%90%B9"
          target="_blank"
        >
          <span>
            <Image src="/home-icon.svg" width="12px" height="12px" />
          </span>{" "}
          &nbsp; 攝影吹 's Top Speaker
        </a>
      </h3>

      <div class="flex">
        <div class="bg-white rounded-2xl p-4 shadow-2xl duration-200 CPcard">
          <Image
            className="inline-block"
            src="/images/Yankov_icon.png"
            width={75}
            height={75}
          />
          <h2>
            <a href="https://www.instagram.com/yankovwong/" target="_blank">
              Yankov Wong
            </a>
          </h2>
          <p>Commercial Photographer</p>
        </div>
        
        <div class="bg-white rounded-2xl p-4 shadow-2xl duration-200 CPcard">
          <Image
            className="inline-block"
            src="/images/Charlie_icon.png"
            width={75}
            height={75}
          />
          <h2>
            <a href="https://www.instagram.com/charliekayi/" target="_blank">
              Charlie Kayi
            </a>
          </h2>
          <p>EntrepreNerd, Life Design</p>
        </div>
        <div class="bg-white rounded-2xl p-4 shadow-2xl duration-200 CPcard">
          <Image
            className="inline-block"
            src="/images/Eddie_icon.png"
            width={75}
            height={75}
          />
          <h2>
            <a href="https://www.instagram.com/eddie_huynh/" target="_blank">
              Eddie Huynh
            </a>
          </h2>
          <p>🇭🇰 Photographer</p>
        </div>
        <div class="bg-white rounded-2xl p-4 shadow-2xl duration-200 CPcard">
          <Image
            className="inline-block"
            src="/images/Daniel_icon.png"
            width={75}
            height={75}
          />
          <h2>
            <a href="https://www.instagram.com/danieltamig/" target="_blank">
              Daniel Tam
            </a>
          </h2>
          <p>Top 10 Wedding Photographer</p>
        </div>
        <div class="bg-white rounded-2xl p-4 shadow-2xl duration-200 CPcard">
          <Image
            className="inline-block"
            src="/images/Billy_icon.png"
            width={75}
            height={75}
          />
          <h2>
            <a href="https://www.instagram.com/billyiu/" target="_blank">
              Billy Yiu
            </a>
          </h2>
          <p>Member of HKIPP</p>
        </div>
      </div>
    </div>
  );
}

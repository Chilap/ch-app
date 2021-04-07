import Nav from "./nav";
import Image from "next/image";
import Footer from './index_Footer'


export default function EventSchedule() {
  return (
    <div>
      {/* -------------------------- Phone -------------------------- */}
      <div className="w-screen text-center p-6 md:px-40 lg:px-60">
        <h1 className="text-4xl m-6">0424 交配gogogo</h1>
        <Nav />
        <div className="mt-12">
          {/* ------------- Section ------------- */}
          <div className="grid  p-6 m-6 text-left bg-white rounded-2xl shadow duration-150 hover:shadow-lg">
            {/* ------------- Top ------------- */}
            <div>
              <p className="text-gray-400 mb-3">⏱ THU, 21 March, 07:00 (HKT)</p>
            </div>

            <div className="grid grid-cols-3">
              {/* ------------- Left ------------- */}
              <div className="">
                <div className="speaker">
                  <p>✳️ Yankov Wong</p>
                  <Image
                    className="topSpeakerIcon"
                    src="/images/Yankov_icon.png"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              {/* ------------- Right ------------- */}
              <div className="col-span-2">
                <div className="text-left">
                  <h1 className="text-2xl mb-3">💡 Lighting</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    mi nibh, efficitur at ante sit amet, hendrerit gravida
                    metus. Fusce ipsum diam, auctor vitae vestibulum id,
                    interdum vitae velit. In auctor dictum magna, vitae pretium
                    ex commodo id.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid  p-6 m-6 text-left bg-white rounded-2xl shadow duration-150 hover:shadow-lg">
            {/* ------------- Top ------------- */}
            <div>
              <p className="text-gray-400 mb-3">⏱ THU, 21 March, 07:00 (HKT)</p>
            </div>

            <div className="grid grid-cols-3">
              {/* ------------- Left ------------- */}
              <div className="">
                <div className="speaker">
                  <p>✳️ Charlie Kayi</p>
                  <Image
                    className="topSpeakerIcon"
                    src="/images/Charlie_icon.png"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              {/* ------------- Right ------------- */}
              <div className="col-span-2">
                <div className="text-left">
                  <h1 className="text-2xl mb-3">💡 Lighting</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    mi nibh, efficitur at ante sit amet, hendrerit gravida
                    metus. Fusce ipsum diam, auctor vitae vestibulum id,
                    interdum vitae velit. In auctor dictum magna, vitae pretium
                    ex commodo id.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid  p-6 m-6 text-left bg-white rounded-2xl shadow duration-150 hover:shadow-lg">
            {/* ------------- Top ------------- */}
            <div>
              <p className="text-gray-400 mb-3">⏱ THU, 21 March, 07:00 (HKT)</p>
            </div>

            <div className="grid grid-cols-3">
              {/* ------------- Left ------------- */}
              <div className="">
                <div className="speaker">
                  <p>✳️ Seaons Wong</p>
                  <Image
                    className="topSpeakerIcon"
                    src="/images/Yankov_icon.png"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              {/* ------------- Right ------------- */}
              <div className="col-span-2">
                <div className="text-left">
                  <h1 className="text-2xl mb-3">💡 Lighting</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    mi nibh, efficitur at ante sit amet, hendrerit gravida
                    metus. Fusce ipsum diam, auctor vitae vestibulum id,
                    interdum vitae velit. In auctor dictum magna, vitae pretium
                    ex commodo id.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid  p-6 m-6 text-left bg-white rounded-2xl shadow duration-150 hover:shadow-lg">
            {/* ------------- Top ------------- */}
            <div>
              <p className="text-gray-400 mb-3">⏱ THU, 21 March, 07:00 (HKT)</p>
            </div>

            <div className="grid grid-cols-3">
              {/* ------------- Left ------------- */}
              <div className="">
                <div className="speaker">
                  <p>✳️ Yankov Wong</p>
                  <Image
                    className="topSpeakerIcon"
                    src="/images/Yankov_icon.png"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              {/* ------------- Right ------------- */}
              <div className="col-span-2">
                <div className="text-left">
                  <h1 className="text-2xl mb-3">💡 Lighting</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    mi nibh, efficitur at ante sit amet, hendrerit gravida
                    metus. Fusce ipsum diam, auctor vitae vestibulum id,
                    interdum vitae velit. In auctor dictum magna, vitae pretium
                    ex commodo id.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}
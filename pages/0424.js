import Nav from "./nav";
import Image from "next/image";
import Footer from "./index_Footer";
import Header from "./index_Header";

export default function E0424() {
  return (
    <div>
      {/* -------------------------- Phone -------------------------- */}
      <div className="bg-clubhouse w-screen p-6 md:px-40 lg:px-60">
        <Header />

        <h1 className="text-4xl m-6 text-center">0424 交配gogogo</h1>
        <div className="text-center"></div>

        <div className="mt-12">
          <p className="my-12">
            ⏱ 12:30(PM) ~ 20:00(PM) <br />
            🏠 地點：柴灣工業城2期18樓1809室 <br />
            <br />
            <br />
            👋 See you online!
          </p>
          {/* ------------- Section ------------- */}
          <h1 className="text-center text-3xl">🗓 Timetable</h1>
          <div className="grid p-6 mt-3 my-6 text-left bg-white rounded-2xl shadow-md duration-150 ">
            {/* ------------- Top ------------- */}
            <div>
              <p className="text-gray-400 mb-1.5">
                ⏱ THU, 21 March, 07:00 (HKT)
              </p>
            </div>

            <div className="grid grid-cols-3">
              {/* ------------- Left ------------- */}
              <div className="">
                <div className="speaker">
                  <p>
                    ✳️ Yankov <span className="hidden md:inline">Wong</span>
                  </p>
                  <Image
                    className="inline-block"
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
                    🎯 Inverse-square law <br />
                    🎯 hello
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid p-6 mt-3 my-6 text-left bg-white rounded-2xl shadow-md duration-150 ">
            {/* ------------- Top ------------- */}
            <div>
              <p className="text-gray-400  mb-1.5">
                ⏱ THU, 21 March, 07:00 (HKT)
              </p>
            </div>

            <div className="grid grid-cols-3">
              {/* ------------- Left ------------- */}
              <div className="">
                <div className="speaker">
                  <p>✳️ Charlie Kayi</p>
                  <Image
                    className="inline-block "
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
          <div className="grid p-6 mt-3 my-6 text-left bg-white rounded-2xl shadow-md duration-150 ">
            {/* ------------- Top ------------- */}
            <div>
              <p className="text-gray-400  mb-1.5">
                ⏱ THU, 21 March, 07:00 (HKT)
              </p>
            </div>

            <div className="grid grid-cols-3">
              {/* ------------- Left ------------- */}
              <div className="">
                <div className="speaker">
                  <p>
                    ✳️ Season <span className="hidden md:inline">Wong</span>
                  </p>
                  <Image
                    className="inline-block"
                    src="/images/Season_icon.png"
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
          <div className="grid p-6 mt-3 my-6 text-left bg-white rounded-2xl shadow-md duration-150 ">
            {/* ------------- Top ------------- */}
            <div>
              <p className="text-gray-400 mb-1.5">
                ⏱ THU, 21 March, 07:00 (HKT)
              </p>
            </div>

            <div className="grid grid-cols-3">
              {/* ------------- Left ------------- */}
              <div className="">
                <div className="speaker">
                  <p>✳️ Yankov Wong</p>
                  <Image
                    className="inline-block"
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

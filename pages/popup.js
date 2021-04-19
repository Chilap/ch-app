import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { useTimeoutFn } from "react-use";

export default function Popup() {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef();

  // This code makes the demo automatically show on initial render
  let [clear, resetIsShowing] = useTimeoutFn(() => setOpen(true), 750);
  useEffect(() => {
    clear();
    setOpen(true);
  }, []);

  function closeModal() {
    setOpen(false);
    resetIsShowing();
  }

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        id="modal"
        className="fixed inset-0 z-10 overflow-y-auto"
        initialFocus={cancelButtonRef}
        static
        open={open}
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center ml-2 mr-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                🎉 24 April Event
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-600 leading-6">
                  📸攝影吹🗣新舊攝影師交配計劃1.0🤝(尚有少量名額，請即付款報名/候補){" "}
                  <br />
                  <span className="font-bold">✳️新舊攝影師交流配對計劃1.0</span>
                  <br />
                  目的：促進本地資深與新晉攝影師/創意工作者互動，提升業界技術及知識。
                  <br />
                  活動內容： <br />
                  🤵🏻 YANKOV 💡燈與光 <br />
                  🤵🏻 SEASON 🛠創作與製作 <br />
                  🤵🏻 DAVE &nbsp; &nbsp; &nbsp; 🎨顯示與印刷 <br />
                  👩 SHIRLEY 💃🏻女攝與女模 <br />
                  <hr className="my-3" />
                  📅：24-04-2021｜⌚️：12:30-20:30｜📍：港島東區 <br />
                  費用：HKD300｜收費聯絡人: &nbsp;
                  <a
                    href="https://www.instagram.com/danieltamig"
                    className="text-blue-700"
                    target = '_blank'
                  >
                    IG @danieltamig
                  </a>
                  <br />
                  <a
                    href="https://www.joinclubhouse.com/event/MOGbGGRL"
                    className="text-blue-700"
                    target = '_blank'
                  >
                    {" "}
                    🔗 Clubhouse link
                  </a>
                </p>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="mr-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={closeModal}
                >
                  <a href="0424">👍 GO! </a>
                </button>
                <button
                  type="button"
                  className="mx-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                  onClick={closeModal}
                >
                  😫 Nah..
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

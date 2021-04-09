import Nav from "./nav";
import Image from "next/image";
import Footer from "./index_Footer";
import Header from "./index_Header";

export default function Notes() {
  return (
    <div className="bg-clubhouse h-screen w-screen p-6 md:px-40 lg:px-60">
      <Header />
      <p className='text-center text-xl font-black'>🚧 This place is under construction 🚧</p>
    </div>
  );
}

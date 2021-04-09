import Link from "next/link";

export default function Nav() {
  return (
    <ul className="m-8 text-center border-2 rounded-full p-3 border-gray-800">
      <li className='inline-block px-3 underline'>
        <Link href="/">
          <a>🏠 Home</a>
        </Link>
      </li>

      <br className='inline-block md:hidden'/>
			<li className='inline-block  px-3 underline'>
        <Link href="/eventschedule">
          <a>🎫 24April Event</a>
        </Link>
      </li>

      <br className='inline-block md:hidden'/>
      <li className='inline-block px-3 underline'>
        <Link href="/notes">
          <a>📝 Clubhouse Notes</a>
        </Link>
      </li>
    </ul>
  );
}

import Link from "next/link";

export default function Nav() {
  return (
    <ul className="m-8 text-center">
      <li className='inline-block px-3 underline'>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
			<li className='inline-block  px-3 underline'>
        <Link href="/eventschedule">
          <a>24April Event</a>
        </Link>
      </li>
      <li className='inline-block px-3 underline'>
        <Link href="/notes">
          <a>Clubhouse Notes</a>
        </Link>
      </li>
    </ul>
  );
}

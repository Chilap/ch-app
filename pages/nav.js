import Link from "next/link";

export default function Nav() {
  return (
    <ul className="m-6">
      <li className='inline-block px-3'>
        <Link href="/">
          <a>Home </a>
        </Link>
      </li>
			<li className='inline-block  px-3'>
        <Link href="/eventschedule">
          <a>24April Event</a>
        </Link>
      </li>
    </ul>
  );
}

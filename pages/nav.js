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
        <Link href="/schedule">
          <a>Event</a>
        </Link>
      </li>
    </ul>
  );
}

import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      <nav>
        <h1>Shanaka Prince</h1>
        <Link href="/">Dasboard</Link>
        <Link href="/tickets">Tickets</Link>
      </nav>
    </div>
  );
}

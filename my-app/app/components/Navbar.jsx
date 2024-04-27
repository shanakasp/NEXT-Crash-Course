import Image from "next/image";
import Link from "next/link";
import logo from "./user.png";

export default function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center space-x-4">
          <Image
            src={logo}
            alt="Logo"
            width={70}
            height={70}
            quality={100}
            placeholder="blur"
          />

          <h1 className="text-lg font-bold">Shanaka Prince</h1>
        </div>

        <div className="flex space-x-4">
          <Link href="/" passHref>
            Dashboard
          </Link>
          <Link href="/tickets" passHref>
            Tickets
          </Link>
        </div>
      </nav>
    </div>
  );
}

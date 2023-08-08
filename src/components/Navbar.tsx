import Link from "next/link";
import { getServerSession } from "next-auth";
import ipul from "../assets/logo-horizontal-flat.a542d6.svg";

async function Navbar() {
  const session = await getServerSession();

  return (
    <nav className="bg-sky-600 p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="flex">
          <img src={ipul} className="w-10 h-auto"/>
          <h1 className="font-bold text-xl">IPUL</h1>
        </Link>

        <ul className="flex gap-x-2">
          {session ? (
            <>
              <li className="px-3 py-1">
                <Link href="/dashboard/profile">Perfil</Link>
              </li>
            </>
          ) : (
            <>
              <li className="px-3 py-1">
                <Link href="/about">About</Link>
              </li>
              <li className="bg-stone-500 px-3 py-1">
                <Link href="/">Login</Link>
              </li>
              <li className="bg-indigo-700 px-3 py-1">
                <Link href="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
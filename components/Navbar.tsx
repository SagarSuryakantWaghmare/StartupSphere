"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut, signIn } from "next-auth/react"; 
import { useSession } from "next-auth/react";
const Navbar = () => {
  const { data: session } = useSession(); 
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={150} height={100} />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session && session.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <button onClick={() => signOut()} className="bg-red-500 text-white px-3 py-1 rounded">
                Logout
              </button>
              <Link href={`/user/${session.user.id}`}>
                <span>{session.user.name}</span>
              </Link>
            </>
          ) : (
            <button onClick={() => signIn("github")} className=" text-black px-3 py-1 rounded">
              Login 
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

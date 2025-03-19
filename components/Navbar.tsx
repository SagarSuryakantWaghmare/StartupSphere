"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut, signIn } from "next-auth/react"; 
import { useSession } from "next-auth/react";
import { LogIn, LogOut } from "lucide-react";

const Navbar = () => {
  const { data: session } = useSession(); 

  return (
    <header className="px-5 py-3 bg-white shadow-md">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={150} height={100} />
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center gap-4 text-black">
          {session?.user ? (
            <>
              <Link href="/startup/create" className="hidden md:block">
                <span>Create</span>
              </Link>

              {/* Logout icon for mobile, text button for desktop */}
              <button onClick={() => signOut()} className="text-red-500">
                <LogOut className="w-6 h-6 md:hidden" />
                <span className="hidden md:inline bg-red-500 text-white px-3 py-1 rounded">
                  Logout
                </span>
              </button>

              {/* Avatar on mobile, username on desktop */}
              <Link href={`/user/${session.user.id}`}>
                {session.user.image ? (
                  <Image 
                    src={session.user.image} 
                    alt="User Avatar" 
                    width={35} 
                    height={35} 
                    className="rounded-full md:hidden"
                  />
                ) : (
                  <span className="hidden md:block">{session.user.name}</span>
                )}
              </Link>
            </>
          ) : (
            <button 
              onClick={() => signIn("github")} 
              className="text-black"
            >
              <LogIn className="w-6 h-6 md:hidden" />
              <span className="hidden md:inline bg-blue-500 text-white px-3 py-1 rounded">
                Login
              </span>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

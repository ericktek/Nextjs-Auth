'use client'
import React from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";

const NavLinks = () => {
    const pathname = usePathname();
  return (
    <div className="flex bg-white rounded-md shadow-lg lg:mx-24 sm:mx-auto items-center justify-center gap-10 mt-6 py-2">
      <Link
        href="login"
        className={`w-1/3 py-2 ${
          pathname === "/login"
            ? "bg-blue-400  border-blue-500 dark:border-blue-400 rounded-md text-white"
            : "text-gray-500 dark:text-gray-500 "
        } font-medium text-center  capitalize  `}
      >
        sign in
      </Link>

      <Link
        href="register"
        className={`w-1/3 py-2 font-medium text-center ${
          pathname === "/register"
            ? "bg-blue-400 text-white border-b-2 rounded-md border-blue-500 dark:border-blue-400 "
            : "text-gray-500 dark:text-gray-500 "
        } capitalize `}
      >
        sign up
      </Link>
    </div>
  );
};

export default NavLinks;

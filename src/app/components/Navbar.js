"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center space-x-5 p-4">
      <Link
        href="/mostWanted"
        className={`text-4xl ${
          pathname === "/mostWanted" ? "text-red-800" : ""
        }`}
      >
        Most Wanted
      </Link>
      <Link
        href="/artCrimes"
        className={`text-4xl ${
          pathname === "/artCrimes" ? "text-red-800" : ""
        }`}
      >
        Art Crimes
      </Link>
    </nav>
  );
};

export default Navbar;

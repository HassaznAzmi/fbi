"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import useScreenSize from "hooks/useScreenSize";
import MenuIcon from "utils/images/menu";

const Navbar = () => {
  const [navModalVisible, setNavModalVisible] = useState(false);
  const screenSize = useScreenSize();

  const pathname = usePathname();

  useEffect(() => {
    if (document) {
      document.body.style.overflow = navModalVisible ? "hidden" : "auto";
    }
  }, [navModalVisible]);

  if (screenSize?.width > 555)
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

  return (
    <nav className="flex justify-start  py-4 w-full">
      <button className="pl-3" onClick={() => setNavModalVisible(true)}>
        <MenuIcon />
      </button>
      <AnimatePresence>
        {navModalVisible ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex flex-col fixed  w-screen items-start  left-0 bottom-0 bg-white dark:bg-black z-50  p-4`}
            style={{ height: "100dvh" }}
          >
            <button
              className="text-2xl mb-4"
              onClick={() => setNavModalVisible(false)}
            >
              ✖
            </button>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="my-4"
            >
              <Link
                onClick={() => setNavModalVisible(false)}
                href="/mostWanted"
                className={`text-3xl  ${
                  pathname === "/mostWanted" ? "text-red-800" : ""
                }`}
              >
                Most Wanted
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                onClick={() => setNavModalVisible(false)}
                href="/artCrimes"
                className={`text-3xl ${
                  pathname === "/artCrimes" ? "text-red-800" : ""
                }`}
              >
                Art Crimes
              </Link>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

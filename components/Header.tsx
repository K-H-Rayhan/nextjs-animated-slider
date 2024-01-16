import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter
import { motion } from "framer-motion";
import { IoIosGlobe, IoMdSearch, IoMdPerson } from "react-icons/io";
import Head from "next/head";

function Header() {
  const router = useRouter(); // Use the useRouter hook
  const [active, setActive] = useState('');

  useEffect(() => {
    // Convert the current pathname to the format used in the menus array
    // '/feedback' will become 'Feedback'
    const path = router.pathname === '/' ? 'Home' : router.pathname.substring(1);
    setActive(path.charAt(0).toUpperCase() + path.slice(1).replace('-', ' '));
  }, [router.pathname]); // Run this effect when the pathname changes

  return (
    <div className="absolute mt-5 flex w-full flex-wrap items-center justify-between gap-2 px-5 text-xs font-medium uppercase opacity-90 md:px-10">
      <Head>
        <title>Cool Project</title>
      </Head>
      <div className="flex items-center gap-2 font-medium tracking-[4px]">
        <IoIosGlobe className="text-xl" />
        Assassin's Creed Code SEA
      </div>
      <ul className="flex flex-wrap items-center gap-3 text-[11px] md:gap-10">
        {menus.map((menu) => {
          const path = menu.toLowerCase().replace(/\s+/g, '-');
          return (
            <Link href={path === 'home' ? '/' : `/${path}`} key={menu}>
              <motion.li
                layout
                className={`${active === menu ? "border-b-2 border-b-yellow-500" : ""} inline-block cursor-pointer transition duration-300 ease-in-out hover:border-b-2 hover:text-white`}
              >
                {menu}
              </motion.li>
            </Link>
          );
        })}
        <div className="flex items-center gap-6">
          <IoMdSearch className="text-lg" />
          <IoMdPerson className="text-lg" />
        </div>
      </ul>
    </div>
  );
}

export default Header;

const menus = [
  "Home",
  "Feedback",
  "Storyline",
  "Merchandise",
  "Join the team",
  "Contacts",
];

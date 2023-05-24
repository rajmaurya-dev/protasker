import Link from "next/link";
import React from "react";
import styles from "./styles";
import { LogoutBtn } from "../components/Clinets";
const Header = () => {
  return (
    <>
      <header className="h-16 flex justify-between items-center px-5 bg-black text-white">
        <div className="hover:bg-cyan-100 bg-opacity-20 px-8 py-2 rounded-md">
          <Link
            href={"/"}
            className="font-semibold text-cyan-300 hover:text-cyan-800 text-2xl"
          >
            protasker
          </Link>
        </div>
        <nav className="flex gap-16 mr-10">
          <Link className={`${styles.navlink}`} href={"/"}>
            Home
          </Link>
          <Link className={`${styles.navlink}`} href={"/about"}>
            About
          </Link>

          <LogoutBtn />
        </nav>
      </header>
    </>
  );
};

export default Header;

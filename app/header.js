import Link from "next/link";
import React from "react";
import { AiFillCrown } from "react-icons/ai";
import { LogoutBtn } from "../components/Clinets";
const Header = () => {
  return (
    <>
      <header className="h-16 flex justify-between items-center px-5 bg-black text-white">
        <div className="hover:bg-cyan-100 bg-opacity-20 px-8 py-2 rounded-md">
          <h2 className="font-semibold text-cyan-300 text-2xl">protasker</h2>
        </div>
        <article className="flex gap-16 mr-10">
          <Link
            className="hover:bg-white bg-opacity-80 hover:text-black px-4 py-1 rounded-xl"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="hover:bg-white bg-opacity-80 hover:text-black px-4 py-1 rounded-xl"
            href={"/about"}
          >
            About
          </Link>
          <Link
            className="hover:bg-white bg-opacity-80 hover:text-black px-4 py-1 rounded-xl"
            href={"/login"}
          >
            Login
          </Link>
        </article>
      </header>
    </>
  );
};

export default Header;

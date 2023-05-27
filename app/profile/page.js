"use client";
import { Context } from "@/components/Clinets";
import { redirect } from "next/navigation";
import { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Page = () => {
  const { user } = useContext(Context);

  if (!user._id) return redirect("/login");
  return (
    <div className="h-[calc(100vh_-_80px)] md:h-[calc(100vh_-_64px)] flex justify-center items-center bg-gray-900">
      <div className="flex flex-col  items-baseline justify-center glass w-[80%] glass px-4 py-6 rounded-lg">
        <div className="flex gap-2 items-center">
          <FaUserAlt />
          <h1 className="text-white font-semibold text-2xl">{user.name}</h1>
        </div>
        <div className="flex gap-2 items-center">
          <MdEmail />
          <p className="font-normal text-gray-400 ">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;

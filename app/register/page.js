"use client";
import Link from "next/link";
import styles, { layout } from "../styles";
import { useContext, useState } from "react";
import { Context } from "@/components/Clinets";
import { toast } from "react-hot-toast";
import { redirect } from "next/navigation";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(Context);
  const registerHandler = async (e) => {
    // e.preventDefault();
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();
      if (!data.success) return toast.error(data.message);
      if (data.success) {
        setUser(data.user);
        toast.success(data.message);
      }
    } catch (error) {
      return toast.error(error);
    }
  };
  if (user._id) return redirect("/");

  return (
    <div className={`${layout.centerCardContainer} bg-slate-500`}>
      <div className="flex flex-col justify-center px-6 bg-slate-900 h-[500px] rounded-lg">
        <h2 className="text-white font-semibold text-4xl">Welcome back</h2>
        <p className="mb-6 text-lg text-white">
          Wecome back! Please enter your details
        </p>
        <form onSubmit={registerHandler} className="flex flex-col gap-3">
          <input
            className={`${styles.input}`}
            type="text"
            placeholder="John Doe"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            className={`${styles.input}`}
            type="email"
            placeholder="johndoe@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            className={`${styles.input}`}
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className={`${styles.loginBtn}`} type="submit">
            Register
          </button>
          <Link className="text-gray-400 text-center" href={"/login"}>
            Already have an account?
            <span className="text-blue-400"> Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Page;

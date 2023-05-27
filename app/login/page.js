"use client";
import Link from "next/link";
import styles, { layout } from "../styles";
import { useContext, useState } from "react";
import { Context } from "@/components/Clinets";
import { redirect } from "next/navigation";
import { toast } from "react-hot-toast";
const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(Context);
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
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
  console.log(email, password);
  return (
    <div className={`${layout.centerCardContainer} bg-slate-500`}>
      <div className="flex flex-col justify-center px-6 bg-slate-900 h-[500px] rounded-lg">
        <h2 className="text-white font-semibold text-4xl">Welcome back</h2>
        <p className="mb-6 text-lg text-white">
          Wecome back! Please enter your details
        </p>
        <form onSubmit={loginHandler} className="flex flex-col gap-3">
          <input
            className={`${styles.input}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="johndoe@gmail.com"
          />
          <input
            className={`${styles.input}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <button className={`${styles.loginBtn}`} type="submit">
            Login
          </button>
          <Link className="text-gray-400 text-center" href={"/register"}>
            Don't have an account?{" "}
            <span className="text-blue-400">Sign up</span>{" "}
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Page;

"use client";
import Link from "next/link";
import styles, { layout } from "../styles";
const page = () => {
  return (
    <div className={`${layout.centerCardContainer} bg-slate-500`}>
      <div className="flex flex-col justify-center px-6 bg-slate-900 h-[500px] rounded-lg">
        <h2 className="text-white font-semibold text-4xl">Welcome back</h2>
        <p className="mb-6 text-lg text-white">
          Wecome back! Please enter your details
        </p>
        <form
          action="
            "
          className="flex flex-col gap-3"
        >
          <input
            className={`${styles.input}`}
            type="text"
            placeholder="John Doe"
          />
          <input
            className={`${styles.input}`}
            type="email"
            placeholder="johndoe@gmail.com"
          />
          <input
            className={`${styles.input}`}
            type="password"
            placeholder="password"
          />
          <button className={`${styles.loginBtn}`} type="submit">
            Register
          </button>
          <Link className="text-gray-400 text-center" href={"/login"}>
            Already have an account?
            <span className="text-blue-400">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default page;

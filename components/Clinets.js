"use client";
import styles from "@/app/styles";
import Link from "next/link";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
export const Context = createContext({ user: {} });
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setUser(data.user);
      });
  }, []);
  return (
    <Context.Provider value={{ user, setUser }}>
      {children}
      <Toaster />
    </Context.Provider>
  );
};

export const LogoutBtn = () => {
  const { user, setUser } = useContext(Context);
  const LogoutHandler = async () => {
    try {
      const res = await fetch("/api/auth/logout");
      const data = await res.json();
      if (!data.message) return toast.error(data.message);
      setUser({});
      toast.success(data.message);
    } catch (error) {
      return toast.error(data.message);
    }
  };
  return user._id ? (
    <button className={`${styles.logoutBtn}`} onClick={LogoutHandler}>
      Logout
    </button>
  ) : (
    <Link className={`${styles.navlink}`} href={"/login"}>
      Login
    </Link>
  );
};

export const TaskBtn = ({ id, completed }) => {
  const deleteHandler = (id) => {
    alert(`Deleting ${id}`);
  };
  return (
    <div className="flex flex-col justify-center gap-2">
      <input checked={completed} type="checkbox" />

      <button
        onClick={() => deleteHandler(id)}
        className={`${styles.loginBtn} text-red-700`}
      >
        Delete
      </button>
    </div>
  );
};

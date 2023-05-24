"use client";
import styles from "@/app/styles";
import Link from "next/link";
import { createContext, useContext, useState } from "react";
const Context = createContext({ user: {} });
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

export const LogoutBtn = () => {
  const LogoutHandler = () => {
    return alert("clicked");
  };
  const { user } = useContext(Context);
  return user.id ? (
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

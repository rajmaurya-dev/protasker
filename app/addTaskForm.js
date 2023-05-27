"use client";
import { useContext, useState } from "react";
import styles from "./styles";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Context } from "@/components/Clinets";
import { redirect } from "next/navigation";

const AddTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useContext(Context);
  const router = useRouter();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/newtask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });
      const data = await res.json();
      if (!data.success) return toast.error(data.message);

      toast.success(data.message);
      router.refresh();
      setTitle("");
      setDescription("");
    } catch (error) {
      return toast.error(error);
    }
  };
  if (!user._id) return redirect("/login");

  return (
    <div>
      <form onSubmit={submitHandler} className="flex flex-col gap-1">
        <input
          className={`${styles.input}`}
          type="task"
          placeholder="Task title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          className={`${styles.input}`}
          type="text"
          placeholder="Task Desc."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button className={`${styles.loginBtn}`} type="submit">
          +
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;

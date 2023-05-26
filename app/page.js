import Form from "./addTaskForm";
import { TaskItem } from "@/components/ServerComponents";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const fetchTodo = async (token) => {
  try {
    const res = await fetch(`${process.env.URL}/api/mytask`, {
      cache: "no-cache",
      headers: {
        cookie: `token=${token}`,
      },
    });
    const data = await res.json();
    if (!data.success) return [];
    return data.tasks;
  } catch (error) {
    return [];
  }
};

const page = async () => {
  const token = cookies().get("token")?.value;
  console.log(token);
  const tasks = await fetchTodo(token);
  console.log(tasks);
  return (
    <main className="bg-gray-900 h-[calc(100vh_-_64px)]">
      <div className="px-10 rounded-b-xl py-6 bg-slate-900 w-[500px] mx-auto bg">
        <Form />
      </div>

      <section className="grid grid-cols-3 place-content-center place-items-center gap-5 ">
        {tasks?.map((i) => {
          return (
            <TaskItem
              title={i.title}
              desc={i.description}
              id={i._id}
              key={i._id}
              completed={i.isCompleted}
            />
          );
        })}
      </section>
    </main>
  );
};

export default page;

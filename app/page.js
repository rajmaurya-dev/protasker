import Form from "./addTaskForm";
import { TaskItem } from "@/components/ServerComponents";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";
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

const Page = async () => {
  const token = cookies().get("token")?.value;
  console.log(token);
  const tasks = await fetchTodo(token);
  console.log(tasks);
  return (
    <main className="bg-gray-900 h-90px min-h-[calc(100vh_-_64px)]">
      <div className="px-10 rounded-b-xl py-6 bg-slate-900 w-[80%] md:w-[500px] mx-auto bg">
        <Form />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <section className="grid grid-cols-1 md:grid-cols-3 place-content-center place-items-center gap-5 ">
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
      </Suspense>
    </main>
  );
};

export default Page;

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { TaskItem } from "@/components/ServerComponents";
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

const Tasks = async () => {
  const token = cookies().get("token")?.value;
  console.log(token);
  const tasks = await fetchTodo(token);
  return (
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
  );
};

export default Tasks;

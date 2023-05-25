import Form from "./addTaskForm";
import { TaskItem } from "@/components/ServerComponents";
export default function Home() {
  return (
    <>
      <main className="bg-gray-900 h-[calc(100vh_-_64px)]">
        <div className="px-10 rounded-b-xl py-6 bg-slate-900 w-[500px] mx-auto bg">
          <Form />
        </div>

        <section>
          <TaskItem
            title={"Complete"}
            desc={"Prostasker project"}
            id={"sampleId"}
            completed={true}
          />
        </section>
      </main>
    </>
  );
}

import { TaskBtn } from "./Clinets";

export const TaskItem = ({ title, desc, id, completed }) => {
  return (
    <div className="bg-slate-900 flex justify-between w-72  px-4 py-2 mx-2 rounded-md shadow-sm shadow-cyan-400">
      <div className="">
        <h4 className="font-bold text-white">{title}</h4>
        <p className="text-white">{desc}</p>
      </div>
      <div>
        <TaskBtn id={id} completed={completed} />
      </div>
    </div>
  );
};

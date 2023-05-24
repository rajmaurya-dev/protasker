import styles from "./styles";

const addTaskForm = () => {
  return (
    <div>
      <form
        action="
            "
        className="flex flex-col gap-1"
      >
        <input
          className={`${styles.input}`}
          type="task"
          placeholder="Task title"
        />
        <input
          className={`${styles.input}`}
          type="text"
          placeholder="Task Desc."
        />
        <button className={`${styles.loginBtn}`} type="submit">
          +
        </button>
      </form>
    </div>
  );
};

export default addTaskForm;

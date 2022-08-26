const TdList = ({ tasks, handleDelete }) => {

  const taskComponent = (task) => {
    let color = "orange";
    if (task.taskStatus === "In progress") {
      color = "orange";
    } else if (task.taskStatus === "Completed") {
      color = "green";
    }
    return (
      <div className="task-preview" key={task.taskId}>
        <h3>{task.taskName}</h3>
        <p>{task.dueDate}</p>
        <p style={{color}}>{task.taskStatus}</p>
        <button
          onClick={() => {
            handleDelete(task.taskId);
          }}
        >
          Remove Task from List
        </button>
      </div>
    );
  };

  return (
    <div className="tdlist">
      {tasks.map((task) => {
        return taskComponent(task);
      })}
    </div>
  );
};

export default TdList;

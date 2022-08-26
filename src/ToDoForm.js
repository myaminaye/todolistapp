import { useState } from "react";

const ToDoForm = ({tasks, setTasks}) => {

    const [taskName, setTaskName]= useState('');
    const [dueDate, setDueDate]= useState('');
    const [taskStatus, setTaskStatus] = useState('Completed');
    var taskId = tasks.length +1;

    const handleSubmit=(e)=>{
        e.preventDefault();
        const task = {taskName, dueDate, taskStatus, taskId};

        console.log(task);
        console.log(tasks);
        const newTasks = [...tasks, task];
        setTasks(newTasks);
        console.log(newTasks);
        
        setTaskName("");
        setDueDate("");
        setTaskStatus("");
    }

    return ( 
        <div className="todoform">
            <h2>You can add new task here</h2>
            <form onSubmit={handleSubmit}>
                <label>Task Name:</label>
                <input 
                    type="text" 
                    required 
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />

                <label>Due Date:</label>
                <input 
                    type="text" 
                    required 
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />

                <label>Task Status:</label>
                <select
                    value={taskStatus}
                    onChange={(e) => setTaskStatus(e.target.value)}
                >
                    <option value="In progress">In progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <button>Add Task</button>
            </form>
        </div>
     );
}
 
export default ToDoForm;
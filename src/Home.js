import TdList from "./TdList";
import { useState } from "react";
import ToDoForm from "./ToDoForm";

const Home = () => {
    const [tasks, setTasks] = useState([
        {taskName : 'Study React', dueDate : '23 September 2022', taskStatus: 'Orange', taskId : 1},
        {taskName : 'Website development', dueDate : '17 August 2022', taskStatus: 'Green', taskId : 2},
        {taskName : 'Write Report', dueDate : '12 September 2022', taskStatus: 'Orange', taskId : 3}
    ])

    const handleDelete = (taskId) =>{
        const newTasks = tasks.filter((task) => task.taskId !== taskId);
        setTasks(newTasks);
    }

    const handleAddTask = (taskId) =>{
        const addedTasks = tasks.
        set
    }

    return ( 
        <div className="home">
            <div className="leftcolumn">
                <TdList tasks={tasks} handleDelete={handleDelete} />
            </div>
            <div className="rightcolumn">
                <ToDoForm tasks={tasks} handleAddTask={handleAddTask} />
            </div>
            
        </div>
     );
}
 
export default Home;
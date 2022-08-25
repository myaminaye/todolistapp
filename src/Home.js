import TdList from "./TdList";
import { useState } from "react";
import ToDoForm from "./ToDoForm";

const Home = () => {
    const [tasks, setTasks] = useState([
        {taskName : 'Study React', dueDate : '23 September 2022', taskStatus: 'In Progress', taskId : 1},
        {taskName : 'Website development', dueDate : '17 August 2022', taskStatus: 'Completed', taskId : 2},
        {taskName : 'Write Report', dueDate : '12 September 2022', taskStatus: 'In Progress', taskId : 3}
    ])

    const handleDelete = (taskId) =>{
        const newTasks = tasks.filter((task) => task.taskId !== taskId);
        setTasks(newTasks);
    }

    return ( 
        <div className="home">
            <div className="col-6">
                <TdList tasks={tasks} handleDelete={handleDelete}/>
            </div>
            <div className="col-6">
                <ToDoForm tasks={tasks} setTasks={setTasks}/>
            </div>
            
        </div>
     );
}
 
export default Home;
const TdList = ({tasks, handleDelete}) => {
    return ( 
        <div className="tdlist">
            {tasks.map((task)=>(
                <div className="task-preview" key={task.taskId}>
                    <h3>{task.taskName}</h3>
                    <p>{ task.dueDate }</p>
                    <p>{ task.taskStatus}</p>
                    <button onClick={()=>{handleDelete(task.taskId)}}>Remove Task from List</button>
                </div>
            ))}
        </div>
     );
}
 
export default TdList;
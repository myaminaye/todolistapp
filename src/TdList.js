const TdList = ({tasks, handleDelete}) => {
    const isCompleted = true;
    
    return ( 
        <div className="tdlist">
            {tasks.map((task)=>(
                <div className="task-preview" key={task.taskId}>
                    <h3>{task.taskName}</h3>
                    <p>{ task.dueDate }</p>
                    
                   {/* {
                        if({task.taskStatus} === 'In Progress'){
                            <p style={{ color: 'orange'}}>{ task.taskStatus}</p>
                        }
                        else if({task.taskStatus} === 'Completed'){
                            <p style={{ color: 'green'}}>{ task.taskStatus}</p>
                        }
                    } */}


                    <p>{task.taskStatus}</p>

                    <button onClick={()=>{handleDelete(task.taskId)}}>Remove Task from List</button>
                </div>
            ))}
        </div>
     );
}
 
export default TdList;
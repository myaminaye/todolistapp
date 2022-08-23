const ToDoForm = (tasks, handleAddTask) => {
    return ( 
        <div className="todoform">
            <h2>You can add new task here</h2>
            <form>
                <label for="newtask">Task name: </label>
                <input type="text" id="newtask" name="newtask"></input><br/><br/>
                
                <label for="newduedate">Due Date: </label>
                <input type="text" id="newduedate" name="duedate"></input><br/><br/>

                <label for="newstatus">Choose a status: </label>
                <select name="newstatus" id="newstatus">
                    <option value="Green">Finish</option>
                    <option value="Orange">Pending</option>
                </select> <br/><br/>

                <button onClick={()=>{handleAddTask()}}>Add Task</button>
            </form>
        </div>
     );
}
 
export default ToDoForm;
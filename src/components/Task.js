const Task = ({ task }) => {

    return ( 
        <div className={`task  ${task.reminder ? "reminder" : ""}`} >
            <div className="content">
                <h3> {task.title} </h3>
                <p> {task.date} </p>

            </div>
            <i class="fas fa-trash"></i>
        </div>
     );
}
 
export default Task;
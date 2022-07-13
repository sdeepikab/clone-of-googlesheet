import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const TaskList = () => {
let {data:tasks , pending, error}= useFetch("http://localhost:6051/tasks");

let handleDelete=(id)=>{
    fetch("http://localhost:6051/tasks/" + id,{method:"DELETE"})
}

    return ( 
        <div className="task-list">
            <h1>List of All the Task</h1>
            {error && tasks==null && <h1> {error} </h1>}

            {pending && <h1> Loading..... </h1>}

            {tasks && <div>
                <table border="2px" bordercolor="white">
                    <thead>
                    <tr>
                        <th>SL.No</th>
                        <th>Name</th>
                        <th>Task Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                        {tasks.map((task,i)=> (
                            <tr key={task.id}>
                                <td>{i+1}</td>
                                <td>{task.userName}</td>
                                <td>{task.taskName}</td>
                                <td>{task.startDate}</td>
                                <td>{task.endDate}</td>
                                <td>{task.status}</td>
                        {(task.status==="Completed") &&<td><button onClick={()=>{handleDelete(task.id)}}>Delete</button></td>}
                        {(task.status!=="Completed") &&<td><Link to={`/edittask${task.id}`}><button>edit</button></Link></td>}
                            </tr>

                        ))}
                    </tbody>
                </table>
                <Link to="/addtask">
                    <button className="btn">Click to add new task</button>
                </Link>
                </div>
            }

        </div>
     );
}
 
export default TaskList;
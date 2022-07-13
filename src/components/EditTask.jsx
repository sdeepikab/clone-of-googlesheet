import { useRef } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";

const EditTask = () => {

    let history = useHistory();

    const { id } = useParams();

    let { data: task, pending } = useFetch("http://localhost:6051/tasks/" + id)
const [uName,setuName]=useState()
const [uTaskName,setuTaskName]=useState("")
const [uTaskDetail,setuTaskDetail]=useState("")
const [uStartDate,setuStartDate]=useState("")
const [uEndDate,setuEndDate]=useState("")


    // let uName = useRef("");        //const [uName,setuName]=useState("")
    // let uTaskName = useRef("");
    // let uTaskDetail = useRef("");
    // let uStartDate = useRef("");
    // let uEndDate = useRef("");

    const handleEdit = (e) => {
        e.preventDefault();

        let currentDate = new Date();
        let startDate = new Date()
        let endDate = new Date();
        let status = "";

        // let currentDate = new Date();
        // let startDate = new Date(uStartDate.current.value);      // let startDate = new Date
        // let endDate = new Date(uEndDate.current.value);
        // let status = "";

        if (currentDate < startDate) {
            status = "Pending";
        }
        else if (currentDate >= startDate && currentDate <= endDate) {
            status = "Ongoing"
        }
        else {
            status = "completed";
        }

        const newTask =
        {

            uName,uTaskName,uTaskDetail,uStartDate,uEndDate
            // userName: uName.current.value,            //const newTask={uName,---}
            // taskName: uTaskName.current.value,
            // taskDetail: uTaskDetail.current.value,
            // startDate: uStartDate.current.value,
            // endDate: uEndDate.current.value,
            // status
        }
        // console.log(newTask);

        fetch("http://localhost:6051/tasks/" + id,
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newTask)
            }
        ).then(() => {
            alert("task edited successfully")
            history.push("/tasklist")
        })

    }



    return (
        <div className="edit-task">
            <h1>Edit a Task</h1>

            {task && <div>
                <form onSubmit={handleEdit}>

                    <label>User Name</label> <input type="text" defaultValue={task.uName} onChange={(e)=>{setuName(e.target.value)}} />   

                    <label>Task Name</label> <input type="text" defaultValue={task.uTaskName} onChange={(e)=>{setuTaskName(e.target.value)}} />

                    <label>Task Detail</label> <textarea  defaultValue={task.uTaskDetail} onChange={(e)=>{setuTaskDetail(e.target.value)}} />

                    <label>Start Date</label> <input type="date"  defaultValue={task.uStartDate} onChange={(e)=>{setuStartDate(e.target.value)}} />

                    <label>End Date</label> <input type="date"  defaultValue={task.uEndDate} onChange={(e)=>{setuEndDate(e.target.value)}} />

                    <input type="submit" value="edittask" />

                </form>

                <Link to="/tasklist">
                    <button className="btn">click to view all the task details</button>
                </Link>
            </div>}
        </div>
    );
}

export default EditTask;
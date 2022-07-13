import { useState } from "react";
import { Link, useHistory } from "react-router-dom";


const Login = () => {


    const[userVal, setUser]=useState("")
    const[userpassword, setuserpassword]=useState("");
    const history=useHistory()

    //   const[users, setusers]=useState(null)

      const handleLogin=(e)=>{
        e.preventDefault()
        fetch("http://localhost:4000/users")
        .then ((res)=>{return res.json()})
        .then((data)=>{
           let [user]=data.filter(user=>(user.name===userVal || user.email===userVal))
           
             if(user!=undefined && user.password===userpassword){
                alert("login successfully");
                history.push("/addtask")
             }
             else if(user!==undefined && user.password!==userpassword){
                alert("wrong password enter valid password")
             }
             else{
                alert("user not found")
             }
            })
        }



    return (
        <div className="login">
            <div className="login-box">
            <h1>LOGIN</h1>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="enter user name" value={userVal} onChange={(e)=>{setUser(e.target.value)}}/>
                <input type="text" placeholder="password" value={userpassword} onChange={(e)=>{setuserpassword(e.target.value)}}/>
                <input type="submit" value="login"/>

            </form>
            <span>dont have an accout?</span>
            <Link to="/signup"><span>signup</span></Link>
            </div>

        </div>


    );
}

export default Login;
//npm install router dom@
//check in package.json---11
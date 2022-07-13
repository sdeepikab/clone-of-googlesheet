import {useState, useRef} from "react"
import { useHistory } from "react-router-dom";
const Singnup = () => {

    let history = useHistory();

// const [name,setname]=useState("")
    let uname=useRef("")
    const [email,setemail]=useState("deepz@gmail.com")
    const [password,setpassword]=useState("")
    const [gender,setgender]=useState("")

const handleSubmit=(e)=>{
    e.preventDefault()
    let name=uname.current.value;
    // alert("its working")
    let newUser={name,email,password,gender}      //instead of name uname.current.value


   fetch("http://localhost:4000/users",
    {
       method:"POST",
       headers:{"Content-Type":"application/json"},
       body:JSON.stringify(newUser)})
   .then(()=>{
    alert("data has been added")
    history.push("/login")
   })
}


return (
        <div className="signup-content">
            <h1>CREATING NEW ACCOUNT</h1>
            <form id="first" onSubmit={handleSubmit}>
                <input id="one" type="text" placeholder="Enter your name"ref={uname}/>
                <input id="two" type="email"  placeholder="Enter your email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                <input  id="three" type="password" placeholder="Enter your password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>


                <fieldset id="field">
                    <legend>Enter your gender</legend>

                    <input type="radio" value="male" id="m" name="gender" onClick={(e)=>{setgender(e.target.value)}}/>  <label For="m">male</label>
                    <input type="radio" value="Female" id="f"  name="gender" onClick={(e)=>{setgender(e.target.value)}} />  <label For="f">Female</label>
                    <input type="radio" value="others" id="o"  name="gender" onClick={(e)=>{setgender(e.target.value)}}/>  <label For="o">others</label>

                </fieldset>
                <input type="submit" value="submit" />
                
            </form>


        </div>

    );
}

export default Singnup;
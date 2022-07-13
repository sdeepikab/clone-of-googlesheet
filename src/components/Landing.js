import {Link} from "react-router-dom"

const Landing = () => {


    return ( 
    <div className="landing">

        <Link to="/login"><button>login to your account</button></Link>
         <h2>dont have any account</h2>
         <Link to="/signup"><button>signup</button></Link>


    </div>
        
     );
}
 
export default Landing ;
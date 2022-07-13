import { useEffect, useState } from "react";

const useFetch = (request) => {

    const[data,setdata]=useState(null);
    const[pending,setpending]=useState(true);
    const[error,seterror]=useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch(request)
            .then((res)=>{
                if(res.ok==false)
                {
                    throw Error("Data not found, please try for different data");
                }
                return res.json()})
            .then((receveddata)=>{setdata(receveddata); setpending(false)})
            .catch((error)=>{seterror(error.message); setpending(false)})
            
        },2000)
        },[data])      //data---avoind the reloading during deleting task

    return ( {data,pending,error});
        
}
 
export default useFetch;

// //useFetch --- u should be small becoz its not acomponent its a hook
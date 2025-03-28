import { useRouteError } from "react-router";
export const Error =()=>{
    const err=useRouteError();
    console.log(err);
    return(<> <h1>its a ERROR</h1>
        <h2>{err.data}</h2></>
    )
   
}
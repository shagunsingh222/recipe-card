
import React, { Children } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./component/Header";
import { Body } from "./component/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router";
import { Contact } from "./component/contacts";
import { lazy ,Suspense} from "react";
import { Error } from "./component/error";
import Footer from "./component/Footer";



const About=lazy( ()=>import("./component/about"));
// const Footer=lazy( ()=>import("./component/"));

const Applayout =() =>{
  return(
    <>
  <Header></Header>

  <Outlet></Outlet>


  <Footer></Footer>
</>)
}
const Router=createBrowserRouter([{ path:"/",element:<Applayout></Applayout>,errorElement:<Error></Error>,
  children:[
    {path:'/' , element:<Body></Body>},
    {path:'/about', element:<Suspense  fallback={<div>Loading...</div>}><About></About></Suspense>},
  {path:'/contacts',element:<Contact></Contact>}]

}])
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router}></RouterProvider>);

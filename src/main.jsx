import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  "./index.css";
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import About from "./components/about";
import Resume from "./components/resume";
import Projects from "./components/projects";
import Contact from "./components/contacts";
import Home from './components/Home.jsx';



const router = createBrowserRouter([
  {path:"/Portfolio",element:<App/>,children:[                   //created single object and pass children there
    {path:"",element:<Home/>},
    {path:"about",element:<About/>},
    {path:"resume",element:<Resume/>},
    {path:"projects",element:<Projects/>},
    {path:"contact",element:<Contact/>}
  ]}, {
    basename: "/Portfolio"
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
      <RouterProvider router={router} />                {/* adding react router */}
  </React.StrictMode>
)

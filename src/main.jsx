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
    {path:"/Portfolio/",element:<Home/>},
    {path:"/Portfolio/about",element:<About/>},
    {path:"/Portfolio/resume",element:<Resume/>},
    {path:"/Portfolio/projects",element:<Projects/>},
    {path:"/Portfolio/contact",element:<Contact/>}
  ]}
])


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
      <RouterProvider router={router} />                {/* adding react router */}
  </React.StrictMode>
)

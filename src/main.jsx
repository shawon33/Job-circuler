import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Component/Header/Header';
import Main from './Component/Main/Main';
import Home from './Component/Home/Home';
import Statistices from './Component/Statistics/Statistices';
import Blog from './Component/Blog/Blog';
import './../public/Data.json'
import JobDetails from './Component/JobDetails/JobDetails';
import ErrorPage from './Component/Errorpage/ErrorPage';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('Data.json')
      },
      {
         path:"job/:jobId",
         element:<JobDetails></JobDetails>,
         loader:({params}) =>fetch(`http://localhost:5173/jobId/${params.id}`)
      },
      {
        path:'statistics',
        element:<Statistices></Statistices>,
        loader:({params})=> fetch('/Job.json')
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

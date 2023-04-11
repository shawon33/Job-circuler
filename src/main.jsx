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
import AppliedJob from './Component/Applied-Job/AppliedJob';



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
         loader: ()=> fetch('Job.json'),
      },
      {
        path:"appliedJob",
        element:<AppliedJob></AppliedJob>,
      },
      {
        path:'statistics',
        element:<Statistices></Statistices>,
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

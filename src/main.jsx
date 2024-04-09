import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Pages/Root/Root';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
      path: "/",
    element: <Home></Home>,
  },
      {
      path: "/login",
    element: <Login></Login>,
  },
      {
      path: "/register",
    element: <Register></Register>,
  },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

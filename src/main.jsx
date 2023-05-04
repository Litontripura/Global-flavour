import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Blog from './components/blog/Blog';
import ChefPage from './components/chefPage/ChefPage';
import AuthProvider from './components/Provider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import RecipiesPage from './components/Recipies/RecipiesPage';
import SingleRecipies from './components/Recipies/SingleRecipies';

import ErrorPage from './components/Error/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path:'/chefs',
        element:<ChefPage></ChefPage>,
       
      },
      {
        path:'chefs', 
        element:<PrivateRoute><RecipiesPage></RecipiesPage></PrivateRoute>,
        children:[
          {
            path:':id', 
            element:<RecipiesPage></RecipiesPage>,
            loader:({params})=>fetch(`https://assignment-10-server-litontripura.vercel.app/chefs/${params.id}`)
          
            
          }
        ]
       
      },
     
    
    ]
  },
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

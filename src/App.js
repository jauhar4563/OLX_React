import React,{useEffect,useContext} from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Login from './Pages/Login'
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'
import {AuthContext, FirebaseContext} from './store/firebaseContext'
import Post from './store/postContext';
import './App.css';

// Define routes
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      { path: 'home', element: <Home /> },
    ],
  },
  { path: 'signup', element: <Signup /> },
  { path: 'login', element: <Login /> },
  { path: 'create', element: <Create /> },
  { path: 'viewPost', element: <ViewPost /> },

]);

const AppLayout = () => {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <Post>
      <RouterProvider router={routes}>
        <Outlet />
      </RouterProvider>
    </Post>
    );
};

export default AppLayout;

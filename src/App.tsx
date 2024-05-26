import React from 'react';
import './App.css';
import Usersfetch from './Components/Usersfetch';
import SingleUserID from './Components/SingleUserID';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

interface userDetails {
  img: string,
  firstname: string,
  lastname: string,
  email: string

}

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Usersfetch />,
    },
    {
      path: "/:id",
      element:<SingleUserID />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

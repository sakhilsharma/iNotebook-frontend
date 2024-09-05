import { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from '../components/Home.jsx';
import './App.css';
import Navbar from '../components/Navbar.jsx';
function App() {
  /*const router = createBrowserRouter([
    {
      path: "/Home",
      element: <Home />
    },
    {
      path: "/About",
      element: <About />
    },

  ])*/
  return (
    <>
    <div className="content">
      <h1>Hello World</h1>
      < RouterProvider router={router} />
      </div>
    </>
  )
}

export default App

import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; //need to use latest version of react-router-dom
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import About from '../components/About';
import NoteState from '../context/notes/NoteState';
import Alert from '../components/Alert.jsx';
function App() {
  let router = createBrowserRouter([
    {
      path: "/Home" ,
      element: <><Navbar /> <Alert message="This is amazing developing"/>< Home /></>
    },
    {
      path: "/" ,
      element: <><Navbar />< Home /></>
    },
    {
      path: "/About",
      element: <><Navbar />< About /></>
    }
  ])
  return (
    <>
      <NoteState>
        <RouterProvider router={router} />
      </NoteState>
    </>
  )
}

export default App

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import HomeWrapper from "./wrappers/HomeWrapper";

/*
  http://localhost:5173/ => HomeWrapper.jsx
  http://localhost:5173/ => HomeWrapper.jsx
                              => 
*/

const App = () => {

  // 1. create a browser router object
  // root route: http://localhost:5173/ 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeWrapper />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "register",
          element: <Register />
        },
        {
          path: "login",
          element: <Login />
        }
      ]
    },
  ]);

  // 2. provide the router object as props to the component

  return (
    <RouterProvider
      router={router}
    />
  )
}

export default App;
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import HomeWrapper from "./wrappers/HomeWrapper";
import { ToastContainer } from "react-toastify";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard";
import Stats from "./pages/Stats";
import Todos from "./pages/Todos";
import Todo from "./components/Todo";
import todosLoader from "./loaders/unit/todos";
import todoLoader from "./loaders/unit/todo";

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
      ],
      errorElement: <ErrorPage />
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          index: true,
          element: <Stats />
        },
        {
          path: "todos",
          element: <Todos />,
          loader: todosLoader,
          hydrateFallbackElement: <p className="text-xl">Loading todos...</p>,
          children: [
            {
              path: "todo",
              element: <Todo />,
              loader: todoLoader,
              hydrateFallbackElement: <p className="text-xl">Loading todo...</p>,
            }
          ]
        }
      ]
    }
  ]);

  // 2. provide the router object as props to the component

  return (
    <>
      <ToastContainer
        hideProgressBar={true}
        autoClose={2500}
      />
      <RouterProvider
        router={router}
      />
    </>
  )
}

export default App;
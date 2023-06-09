import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AddUser from "./components/AddUser";
import Home from "./components/Home";
import Update from "./components/Update";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: () => fetch(`https://node-server-taupe.vercel.app/users`),
    },
    {
      path: "/users/add",
      element: <AddUser />,
    },
    {
      path: "/update/:id",
      element: <Update />,
      loader: ({ params }) =>
        fetch(`https://node-server-taupe.vercel.app/users/${params.id}`),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

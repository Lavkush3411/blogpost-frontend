import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./pages/home/Home";
import CreatePost from "./pages/createpost/CreatePost";
import EditPost from "./pages/editpost/EditPost";
import Register from "./pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      { path: "", element: <Navigate to={"home"} /> },
      { path: "home", element: <Home /> },
      { path: "createpost", element: <CreatePost /> },
      { path: "editpost/:id", element: <EditPost /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

export default router;

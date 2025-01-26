import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import SingleBlog from "../pages/SingleBlog.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Dashboard from "../pages/admin/Dashboard.jsx";
import AddPost from "../pages/admin/AddPost.jsx";
import ManagePost from "../pages/admin/ManagePost.jsx";
import Users from "../pages/admin/Users.jsx";
import PrivateRouter from "./PrivateRouter.jsx";
import UpdatePost from "../pages/admin/UpdatePost.jsx";
import About from '../pages/About.jsx'
import PrivacyPolicy from '../pages/PrivacyPolicies.jsx'
import ContactUs from '../pages/ContactUs.jsx'
import AdminLayOut from '../pages/admin/AdminLayOut.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children :[
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/about-us",
        element : <About/>
      },
      {
        path : "/privacy-policy",
        element : <PrivacyPolicy/>
      },
      {
        path : "/contact-us",
        element : <ContactUs/>
      },
      {
        path : "/blogs/:id",
        element : <SingleBlog/>
      },
      {
        path : "/login",
        element : <Login/>
      },
      {
        path : "/register",
        element : <Register/>
      },
      {
        path : "dashboard",
        element : <PrivateRouter><AdminLayOut/></PrivateRouter>,
        children : [
          {
            path : '',
            element : <Dashboard/>
          },
          {
            path : "add-new-post",
            element : <AddPost/>
          },
          {
            path : "manage-items",
            element : <ManagePost/>
          },
          {
            path : "users",
            element : <Users/>
          },
          {
            path : "update-items/:id",
            element : <UpdatePost/>
          },
      
        ]
      }
    ]
  },
]);

export default router;
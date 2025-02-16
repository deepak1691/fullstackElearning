import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import AppLayout from './components/AppLayout';
import Contact from './components/contact/Contact';
// import {registrationData} from './components/signup/Signup';
import Error from './components/Error';
import Logout from './components/Logout';
import AdminLayout from './components/Admin/AdminLayout';
import ContactAdmin from './components/Admin/ContactAdmin';
import Users from './components/Admin/Users';
import EdithAdmin from './components/Admin/EdithAdmin';
import { getId } from './components/api/Apidata';

function App() {

const router=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"services",
        element:<Services/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"signup",
        element:<Signup/>,
        // action:registrationData
      },
      {
        path:"logout",
        element:<Logout/>
      },
      {
        path:"admin",
        element:<AdminLayout/>,
        children:[
          {
          path:"users",
          element:<Users/>
        },
        {
          path:"contacts",
          element:<ContactAdmin/>
        },
        {
          path:"contacts/:id",
          element:<ContactAdmin/>,
          // loader:getAdminContacts
        },
        {
          path:"edit/:id",
          element:<EdithAdmin/>,
          loader:getId,
        },

      ]
      },
      
      {
        path:"*",
        element:<Error/>
      },
      
    ]
  },
  
]);


 return<RouterProvider router={router} />
}

export default App

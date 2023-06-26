import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom"
import Navbar from './components/navbar/Navbar';
import Announcement from './pages/announcement/Announcement';
import Directory from './pages/directory/Directory'
import Election from './pages/election/Election'
import Feedback from './pages/feedback/Feedback'
import Dashboard from './pages/dashboard/Dashboard'
import SingleAnnouncement from './components/singleannouncement/SingleAnnouncement';
import ElectionProfile from './pages/electionprofile/ElectionProfile';
import Home from './pages/Home/Home';


function App() {

  const currentUser = true;

  const Layout = () => {
    return (
      <div className="theme-light">
        <Navbar />
        <div >
          <Outlet />
        </div>
      </div>
    )
  }

  const ProtectRoutes = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectRoutes>
        <Layout />
      </ProtectRoutes>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/Dashboard",
          element: <Dashboard />
        },
        {
          path: "/directory",
          element: <Directory />
        },
        {
          path: "/election",
          element: <Election />
        },
        {
          path: "/feedback",
          element: <Feedback />
        },
        {
          path: "/announcement",
          element: <Announcement />
        },
        {
          path: "/singleannouncement/:id",
          element: <SingleAnnouncement />
        },
      ]
    },

    // {
    //   path: "/login",
    //   element: <Login />
    // },
    // {
    //   path: "/register",
    //   element: <Register />,
    // },
  ]
  )

  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

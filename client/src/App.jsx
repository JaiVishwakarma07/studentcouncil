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
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import AddAnnounce from './pages/addannounce/AddAnnounce';


function App() {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const queryClient = new QueryClient()

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div>
          <Navbar />
          <div >
            <Outlet />
          </div>
        </div>
      </QueryClientProvider>
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
        {
          path: "/addanouncement",
          element: <AddAnnounce />
        },
      ]
    },

    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]
  )

  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

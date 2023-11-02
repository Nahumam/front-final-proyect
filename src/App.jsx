
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StylishCollection from './components/StylishCollection'
// import LastTrends from './components/LastTrends.jsx'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },

    {
      path: "/about",
      element: <About />
    },

    {
      path: "/contact",
      element: <Contact />
    },

    {
      path: "/login",
      element: <Login />
    },

    {
      path: "/register",
      element: <Register />
    },

  ])

  return (
    <>
      <div className="navbar-in">
        <Navbar />
      </div>
      <RouterProvider router={router} />
      <div className="footer-in">
        <Footer />
      </div>
    </>
  );
}

export default App;

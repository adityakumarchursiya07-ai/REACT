import { useState } from 'react'
import './App.css'
import { Outlet, Route, Routes, Link } from "react-router-dom"
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function Home() {
  return <h1>Home</h1>
}
function ProductPage() {
  return <h1>Product Page</h1>
}
function AboutUs() {
  return <h1>About Us</h1>
}

function Navbar() {
  return (<>
    <ul>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/about-us"}>AboutUs</Link>
      <br />
      <Link to={"/product-page"}>productPage</Link>
      <br />
      <Link to={"/login"}>Login</Link>

    </ul>
    <Outlet />
  </>)
}

// {page == "home" && <Home />}
// {page == "productPage" && <productPage />}
// {page == "aboutUs" && <AboutUs />} 
function App() {
  const [page, setPage] = useState("home")
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<h1>Page Not Found</h1>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App;

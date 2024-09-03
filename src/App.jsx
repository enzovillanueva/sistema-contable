import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { ViewPage } from "./pages/ViewPage"
import { HomePage } from "./pages/HomePage"
import { useState } from "react"

function ProtectedRoute({ element, isAuthenticated }) {
  if (isAuthenticated)
    return element;
  alert("Ruta protegida. Tienes que iniciar sesión");
  return <Navigate to={"/login"}/>
}

export const App = () => {

  const [isAuthenticated, setIsAuthenticate] = useState(false)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ViewPage/>}/>
          <Route path="/login" element={<Login setIsAuthenticate={setIsAuthenticate}/>}/>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/home" element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<HomePage/>}/>}></Route>
        </Routes>
      </Router>
    </>
  )
}
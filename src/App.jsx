import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Preview } from "./pages/Preview"
import { Home } from "./pages/Home"
import { UserProvider } from "./context/UserProvider"
import { useAuth } from "./hooks/useAuth"
import { ProtectedRoute } from "./components/ProtectedRoute"

export const App = () => {

  const { isAuthenticated, login, logout } = useAuth();

  return (
    <>
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Preview/>}/>
          <Route path="/login" element={<Login onLogin={login}/>}/>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/home" element={<ProtectedRoute isAuthentication={isAuthenticated} element={<Home onLogout={logout}/>}/>}></Route>
        </Routes>
      </Router>
    </UserProvider>
    </>
  )
}
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { ViewPage } from "./pages/ViewPage"
import { HomePage } from "./pages/HomePage"

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ViewPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/home" element={<HomePage/>}></Route>
        </Routes>
      </Router>
    </>
  )
}
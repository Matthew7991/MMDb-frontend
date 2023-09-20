import "./App.css"
import { Routes, Route } from "react-router-dom"
import NavMain from "./components/shared/NavMain"
import Footer from "./components/shared/Footer"

function App() {
  return (
    <>
      <NavMain />
      <Routes>
        <Route
          path="/"
          element={<h1 className="font-bold text-green">Test</h1>}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App

import { Navigate, Route, Routes } from "react-router-dom";
import "./index.css"

import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";

export default function App() {

  return (
    <div className="font-regular">

      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  )
}
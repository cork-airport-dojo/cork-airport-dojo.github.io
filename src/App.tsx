import {  Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Team from "../pages/Team";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";




const App = () => {

  return (

      <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
      </div>
  )
}

 export default App;
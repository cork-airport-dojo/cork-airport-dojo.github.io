import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/custom/Navbar/Navbar";
import NavSideBar from "./components/custom/Navbar/NavSideBar";
import Footer from "./components/custom/Footer/Footer";

const App = () => {

  return (

      <div className="">
      <Navbar />
      <NavSideBar />
      <main className={`min-h-screen transition-all duration-500  bg-gray-50 text-gray-900`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
      </div>
  )
}

export default App;
import Navbar from "../components/Navbar/Navbar";
import NavSideBar from "../components/Navbar/NavSideBar";
import Footer from "../components/Footer/Footer.tsx";


const AboutUs = () => {
  return (
    <div className={`min-h-screen transition-all duration-500  bg-gray-50 text-gray-900`}>
      <Navbar/>
      <NavSideBar />
      <Footer />
    </div>
  )
}


export default AboutUs;
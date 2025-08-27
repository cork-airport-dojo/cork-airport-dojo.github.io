
import Navbar from "../components/Navbar/Navbar";
import NavSideBar from "../components/Navbar/NavSideBar";
import OurTeam from "../components/OurTeam/OurTeam";
import Footer from "../components/Footer/Footer";


const Team = () => {
  return (
    <div className={`min-h-screen transition-all duration-500  bg-gray-50 text-gray-900`}>
      <Navbar/>
      <NavSideBar />
      <OurTeam />
      <Footer />
    </div>
  )
}

export default Team;
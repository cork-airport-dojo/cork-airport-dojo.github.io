import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import NavSideBar from "../components/Navbar/NavSideBar";
import Footer from "../components/Footer/Footer";
import CoursesSection from "../components/Courses/CoursesSection";


const Home = () => {
  return (
    <div className={`min-h-screen transition-all duration-500  bg-gray-50 text-gray-900`}>
        <Navbar/>
        <NavSideBar />
        <Hero />
        <CoursesSection />
        <Footer />
    </div>
  )
}

export default Home;
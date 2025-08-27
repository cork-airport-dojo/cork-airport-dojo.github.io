import Navbar from "../components/Navbar/Navbar";
import NavSideBar from "../components/Navbar/NavSideBar";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";


const ContactUs = () => {
  return (
    <div className={`min-h-screen transition-all duration-500  bg-gray-50 text-gray-900`}>
      <Navbar/>
      <NavSideBar />
      <ContactForm />
      <Footer />
    </div>
  )
}


export default ContactUs;

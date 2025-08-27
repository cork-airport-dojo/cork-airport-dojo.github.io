import { IoLogoWhatsapp } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoLinkedin,IoLogoGithub } from "react-icons/io5";
import { SiGoogleforms } from "react-icons/si";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-blue-500 pt-12 pb-8 text-white">
      <div className="flex items-center justify-center relative px-6">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pb-2 gap-8">
           {/* Information */}
            <div className="space-y-6">
              <h1 className="text-3xl fon-bold uppercase">Cork Airport Code Club</h1>
              <p className="text-sm max-w-[300px]">
                Cork Airport Code Club is a vibrant and welcoming community where children and young adults can explore
                the exciting world of technology! Every Saturday,
              </p>
              <div>
                <p className="flex items-center gap-2">
                  <TfiEmail />
                  thomas.daniel.galligan@ibm.com
                </p>
                <p className="flex items-center gap-2 mt-2">
                  <GrMapLocation /> 6700 Avenue 6000 Cork, County Cork
                </p>
              </div>
            </div>
            {/*Quick Links*/}
            {/* Change out with a Component */}
            <div className="space-y-6">
              <div className="text-3xl font-bold">
                Quick Links
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <ul className="space-y-2">
                    <li><Link to="/" className="block">Home</Link></li>
                    <li><Link to="/about" className="block">About Us</Link></li>
                    <li><Link to="/contact" className="block">Contact Us</Link></li>
                    <li><Link to="/team" className="block">Team</Link></li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li><Link to="/safeguarding" className="block">Safeguarding</Link></li>
                    <li><Link to="/blog" className="block">Blog</Link></li>
                    <li><Link to="/grading" className="block">Grading</Link></li>
                    <li><Link to="/register" className="block">Register</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            {/*{ Social Links}*/}
            <div className="space-y-6">
                <h1 className="text-3xl font-bold"> Follow Us</h1>
                <div className="flex items-center gap-3">
                  <IoLogoWhatsapp className="text-3xl hover:scale-105 duration-300" />
                  <SiGoogleforms className="text-3xl hover:scale-105 duration-300" />
                  <IoLogoLinkedin className="text-3xl hover:scale-105 duration-300" />
                  <IoLogoGithub className="text-3xl hover:scale-105 duration-300" />
                </div>
            </div>
        </div>
        <p className="text-white text-center mt8 pt-8 border-t-1">
          Copyright &copy; 2025 Cork Airport Code Club. All
          rights reserved.
        </p>
      </div>
      </div>
    </div>
  )
}

export default Footer;
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import header_icon from '@assets/logo.png';

import  Socials  from '../Socials/Socials';

const Navbar = () => {


  return (
    <motion.nav
    style={{opacity: 1}}
    className={`fixed top-0 w-full z-50 px-6 py-4 bg-gray-50/80 backdrop-blur-md border-b border-gray-200`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="block m-0 p-0">
        <motion.div
          whileHover={{ scale: 1.45 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2">
          <motion.img src={header_icon} className="m6-2" width={60} height={60} alt="Code Club" />
        </motion.div>
        </Link>
       <Socials />
      </div>

    </motion.nav>
  )
}

export default Navbar;
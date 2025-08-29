import { IoLogoLinkedin,IoLogoGithub } from "react-icons/io5";
import { SiGoogleforms } from "react-icons/si";
import { motion } from "framer-motion";

const Socials = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      <motion.a href={'https://www.linkedin.com/company/cork-airport-code-club'}
         className='group inline-flex items-center gap-2 px-4 py-2 rounded-xl transition-colors
                  hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-500
                  text-base md:text-lg lg:text-xl'
         whileHover={{ scale: 1.15 }}
         whileTap={{ scale: 0.95 }}
         target="_blank"
         rel="noopener noreferrer"
         aria-label="LinkedIn">
        <IoLogoLinkedin className="text-xl md:text-2xl sm:text-xl transition-transform duration-300"/>
      </motion.a>
      <motion.a href={'https://github.com/cork-airport-dojo'}
            className='group inline-flex items-center gap-2 px-4 py-2 rounded-xl transition-colors
                  hover:bg-gradient-to-r hover:from-gray-500-100 hover:to-black
                  text-base md:text-lg lg:text-xl'
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github">
        <IoLogoGithub className="text-xl md:text-2xl sm:text-xl transition-transform duration-300"/>
      </motion.a>

      {/* <motion.a href={'https://forms.office.com/r/eXfdztgLqX'}
            className='group inline-flex items-center gap-2 px-4 py-2 rounded-xl transition-colors
                  hover:bg-gradient-to-r hover:from-purple-300 hover:to-purple-500
                  text-base md:text-lg lg:text-xl'
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Register">
        <SiGoogleforms className="text-xl md:text-2xl sm:text-xl transition-transform duration-300"/>
      </motion.a> */}
    </div>
    )
}

export default Socials;
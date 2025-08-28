import { motion } from "framer-motion";
import LOGO from '@assets/logo.png';
import { Link } from 'react-router-dom';


import { containerVariants, itemsVariants} from "@/utils/helper.tsx";

const Hero_3 =()=> {

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5
      }
    }
  }
  // @ts-ignore
  return (
    <div className={`min-h-screen transition-all duration-500 bg-gray-50 text-gray-900`}>
      <motion.section
        id="home"
        className="min-h-screen flex items-center justify-center relative px-6 pt-10"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 bg-blue-500
          `}
          />

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 bg-purple-500`}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full z-10 mt-20">
          <div className="block lg:hidden">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center"
            >

              <motion.div variants={imageVariants} className="mb-8">
                <div className="w-32 h-32 mx-auto relative">
                  <motion.div
                  whileHover={{scale: 1.05}}
                  className={`w-full h-32 rounded-2xl overflow-hidden border-gray-300`}
                  >
                  <img
                    src={LOGO}
                    alt={"Logo"}
                    className="w-full h-full object-cover"
                  />
                  </motion.div>

                  {/*Decorative*/}
                  <motion.div
                    animate={{rotate: 360}}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute -inset-2 rounded-2xl border border-blue-500/30"
                  />

                </div>
              </motion.div>

              {/*Content*/}
              <motion.div
              variants={textVariants}
              className={`text-sm uppercase tracking-widest text-gray-600
              mb-4`}
              >
                Cork Airport Code Club
              </motion.div>


              <motion.h1
                variants={itemsVariants}
                className="text-3xl md:text-5xl font-light mb-6 leading-tight"
              >
                <span className={`text-gray-900`}>
                Code it
                </span>
                <span className="text-blue-500 font-medium ml-2">
                Break it
                </span>
                <br />
                {/*<span className={`${isDarkMode ? "text-white": "text-gray-900"}`}>*/}
                <span className={`text-gray-900`}>
                Build it better
                </span>
              </motion.h1>

              <motion.p
              variants={itemsVariants}
              className={`text-base md:text-lg text-gray-600
               mb-8 max-w-xl mx-auto font-light leading-relaxed`}
              >
                Cork Airport Code Club is a vibrant and welcoming community where children and young adults can explore
                the exciting world of technology! Every Saturday, we provide hands-on coding sessions covering a wide
                range of skills, from the fundamentals of HTML and Javascript to cutting-edge topics like AI and graphic
                design.  More than just learning to code, Code Club is a safe and supportive space for young people to be
                themselves, connect with like-minded peers, and grow their tech skills in a fun and engaging environment.
              </motion.p>

              <motion.div
                variants={itemsVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              >
                <Link to="/team" className="block m-0 p-0">
                  <motion.button
                    whileHover={{ y: -2}}
                    whileTap={{ scale: 0.98}}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                  >
                    View Team
                  </motion.button>
                </Link>
                <Link to="/contact" className="block m-0 p-0">
                  <motion.button
                    whileHover={{ y: -2}}
                    whileTap={{ scale: 0.98}}
                    className={`border border-gray-300 hover:border-gray-400 text-gray-700
                    px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}
                  >
                    Get in Contact
                </motion.button>
                </Link>
              </motion.div>


            </motion.div>
          </div>

          {/*Desktop View*/}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-left"
            >
              <motion.div
                variants={textVariants}
                className={`text-sm uppercase tracking-widest text-gray-600
                mb-6`}
              >
                Cork Airport Code Club
              </motion.div>


              <motion.h1
                variants={itemsVariants}
                className="text-5xl xl:text-7xl font-light mb-8 leading-tight"
              >
                <span className={`text-gray-900`}>
                Code it,
                </span>
                <span className="text-blue-500 font-medium">
                Break it,
                </span>
                <br />
                <span className={`text-gray-900`}>
                Build it better
                </span>
              </motion.h1>

              <motion.p
                variants={itemsVariants}
                className={`text-xl text-gray-600
                 mb-12 font-light leading-relaxed max-w-lg`}
              >
                Cork Airport Code Club is a vibrant and welcoming community where children and young adults can explore
                the exciting world of technology! Every Saturday, we provide hands-on coding sessions covering a wide
                range of skills, from the fundamentals of HTML and Javascript to cutting-edge topics like AI and graphic
                design.  More than just learning to code, Code Club is a safe and supportive space for young people to be
                themselves, connect with like-minded peers, and grow their tech skills in a fun and engaging environment.
              </motion.p>

              <motion.div
                variants={itemsVariants}
                className="flex gap-6 mb-8"
              >
                <Link to="/team" className="block m-0 p-0">
                <motion.button
                  whileHover={{ y: -2}}
                  whileTap={{ scale: 0.98}}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                >
                  View Team
                </motion.button>
                </Link>
                <Link to="/contact" className="block m-0 p-0">
                <motion.button
                  whileHover={{y: -2}}
                  whileTap={{ scale: 0.98}}
                  /*onClick={() => scrollToSection("contact")}*/
                  className={`border border-gray-300 hover:border-gray-400 text-gray-700
                  px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}
                >
                  Get in Contact
                </motion.button>
                </Link>
              </motion.div>

            </motion.div>

            <>{/*Right Column*/}</>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              className="flex justify-center lg:justify-end"
            >
            <div className="relative">

              <motion.div
                whileHover={{scale: 1.02}}
                className={`w-100 h-96 rounded-3xl overflow-hidden border-gray-300`}
              >
                <img
                  src={LOGO}
                  alt={"Logo"}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                animate={{ rotate: 360}}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -inset-4 rounded-3xl border border-purple-500/30 "
              />

              <motion.div
                animate={{ rotate: -360}}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -inset-8 rounded-3xl border border-blue-500/20"
              />

            </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Hero_3
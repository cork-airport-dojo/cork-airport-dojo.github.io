import { motion, useInView, useScroll, useTransform } from "framer-motion";

import { containerVariants, itemsVariants, textVariants } from "@/utils/helper.tsx";
import { useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);


  return (
    <section
      id="about"
      ref={sectionRef}
      className='min-h-screen relative flex items-center justify-center px-6 pt-30'
    >
      <motion.div
        style={{ y }}
        className=""
      >
        <div className='absolute top-40 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-5 bg-blue-400' />
        <div className='absolute bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-5 bg-purple-400' />
      </motion.div>

      <div className="max-w-7xl w-[60%] mx-auto top-22 right-20 inset-0 flex items-center justify-center">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className=" mb-20"
        >
          <motion.div
            variants={itemsVariants}
            className={`text-center text-sm uppercase tracking-widest text-gray-600
                mb-4`}
          >
            Get to know more
          </motion.div>
          <motion.h2
            variants={itemsVariants}
            className="text-center text-3xl md:text-5xl font-light mb-12"
          >
            About
            <span className="text-blue-500 font-medium"> Us</span>
          </motion.h2>
          
          <motion.p className="text-lg text-gray-700" variants={textVariants}>
            Cork Airport Code Club takes place on IBM premises in the Red Hat building
            in the Cork Airport Business Park. You will see lots of Red Hat branding,
            but don't worry, you're in the right place. The bottom floor is for
            IBM offices, where we will host classes. The office is just down the
            road from the Cork International Hotel.
          </motion.p>

          <motion.h3 className="text-2xl mt-8" variants={textVariants}>
            What you need to bring
          </motion.h3>

          <motion.ul className="text-lg text-gray-700" variants={textVariants}>
            <motion.li>a laptop</motion.li>
            <motion.li>a lunch if you like</motion.li>
            <motion.li>a parent</motion.li>
          </motion.ul>

          <motion.p className="text-lg text-gray-700" variants={textVariants}>
            <strong>If your child is younger than 13, you (the parent / guardian) 
            will need to stay in the building during their class(es).</strong>
            There is a kitchen where you can relax and have a tea or coffee and 
            chat with other parents while you wait. Alternatively, you can sit 
            in with the kids and take part in the class with them.
          </motion.p>

          <motion.p className="text-lg text-gray-700" variants={textVariants}>
            Please ensure that if the laptop is using Windows, that the version
            is not version S, as this is a locked-down version of Windows, that
            doesn't allow one to install any software outside of the Windows Store.
          </motion.p>

          <motion.h3 id='safeguarding' className="text-2xl mt-8" variants={textVariants}>
            Safeguarding
          </motion.h3>

          <motion.p className="text-lg text-gray-700" variants={textVariants}>
            Code Club's safeguarding policy aims to protect protect children, 
            young people, and vulnerable adults who take part in Code Club activities.
          </motion.p>

          <motion.p className="text-lg text-gray-700" variants={textVariants}>
            All Cork Airport Dojo mentors will have completed Code Club's 
            safeguarding module, which covers the following topics;
          </motion.p>

          <motion.ul className="text-lg text-gray-700" variants={textVariants}>
            <motion.li>code of behavior</motion.li>
            <motion.li>child disclosures</motion.li>
            <motion.li>online safety</motion.li>
          </motion.ul>
          
          <motion.p className="text-lg text-gray-700" variants={textVariants}>
            To see more information about Code Club's policies on safeguarding 
            and child safety, <a href='https://help.coderdojo.com/cdkb/s/article/Safeguarding-Policy'>click here</a>.
          </motion.p>

        </motion.div>
        

      </div>
    </section>
  )
}

export default AboutSection;
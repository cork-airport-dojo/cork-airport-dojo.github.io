import {motion, useInView, useScroll, useTransform} from "framer-motion";

import { containerVariants, itemsVariants} from "../../utils/helper.tsx";
import { useRef } from "react";

const AboutUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px"});

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);


  return (
    <section
    id="about"
    ref={sectionRef}
    className={`py-24 px-6 bg-white text-gray-900
    relative overflow-hidden`}
    >
    <motion.div
    style={{y}}
    className="absolute inset-0 overflow-hidden"
    >
      <div className={`absolute top-40 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-5 bg-blue-400
      `}/>
      <div className={`absolute bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-5 bg-purple-400
      `}/>
    </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
              className="text-center mb-20"
            >
              <motion.div
                variants={itemsVariants}
                className={`text-sm uppercase tracking-widest text-gray-600
                mb-4`}
              >
                Get to Know Us.
              </motion.div>
              <motion.h2
                variants={itemsVariants}
                className="text-3xl md:text-5xl font-light mb-6"
              >
                About
                <span className="text-blue-500 font-medium"> Us</span>
              </motion.h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
               initial="hideen"
               animate={isInView ? "visible": "hidden"}
               variants={containerVariants}
               className="space-y-8"
              >

                <motion.div
                  variants={itemsVariants}
                  className={`p-8 rounded-2xl border bg-gray-50/80 border-gray-200 backdrop-blur-sm
                  `}
                >
                  <h3 className="text-2xl font-medium mb-6">Our Mission</h3>
                  <p className={`text-lg leading-relaxed mb-6 text-gray-700
                  `}>
                    Cork Airport Code Club provides a welcoming and supportive community where children and young adults
                    learn essential coding skills – from fundamentals to cutting-edge technologies – and develop their confidence and creativity in
                    a fun, engaging environment.
                  </p>
                </motion.div>
              </motion.div>

            </div>
      </div>
    </section>
  )
}

export default AboutUs;
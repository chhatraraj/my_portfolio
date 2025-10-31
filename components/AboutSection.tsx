import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full py-16 md:py-24 lg:py-32 bg-black text-white relative overflow-hidden"
    >
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-gray-800/10 to-transparent blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-red-500 via-pink-400 to-gray-200 text-transparent bg-clip-text drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hello everyone, I am Chhatra Neupane, currently pursuing my final year bachelor's degree in CSE. I am a passionate Backend developer, machine learning and deep learning enthusiast, and an avid problem solver. Dedicated to crafting elegant and efficient solutions, I enjoy working in teams and continuously exploring new technologies and frameworks to stay at the forefront of innovation
          </motion.p>

          {/* Highlight Cards */}
          <motion.div
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <div className="p-6 rounded-2xl bg-gray-900/40 backdrop-blur-md border border-gray-700 hover:border-red-500 transition-all duration-300 shadow-lg hover:scale-105">
  <h3 className="text-xl font-semibold text-red-400 mb-2">Experience</h3>
  <p className="text-gray-400 text-sm">
    2+ years of hands-on experience in full-stack web development, delivering
    responsive, scalable, and performance-driven applications. Built and deployed
    diverse projects including an NLP-based sentiment analysis tool for Devanagari
    text using SVM, a job portal platform, an e-commerce website, an employee
    management system, Chrome extensions, and network simulations. Skilled in
    designing robust backends, crafting modern UIs, and integrating secure APIs.
  </p>
</div>

            <div className="p-6 rounded-2xl bg-gray-900/40 backdrop-blur-md border border-gray-700 hover:border-red-500 transition-all duration-300 shadow-lg hover:scale-105">
              <h3 className="text-xl font-semibold text-red-400 mb-2">Expertise</h3>
              <p className="text-gray-400 text-sm">
  Full-Stack Developer specializing in React, Tailwind, Three.js, shadcn, and Framer Motion for modern UIs, 
  with strong backend expertise in Django, Node.js, Express, MongoDB, authentication systems, API development, and integration.
</p>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

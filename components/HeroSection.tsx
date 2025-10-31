import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section id="home" className="w-full py-16 md:py-24 lg:py-32 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-red-600 to-gray-300 text-transparent bg-clip-text">
                Chhatra Neupane
              </span>
            </h1>

            {/* Animated Roles */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
              <TypeAnimation
                sequence={[
                  
                  "ML Learning Enthusiast ",
                  1200,
                  "Full Stack Engineer",
                  1200,
              
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-red-600"
              />
            </h2>

            {/* Description */}
            <p className="text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm a passionate <span className="text-red-500 font-medium">Backend Developer</span> and 
              <span className="text-red-500 font-medium"> ML Learning Engineer</span> with a creative mindset and 
              a strong eye for detail. I specialize in building scalable APIs, 
              managing databases efficiently, and crafting secure backend systems.  
              Currently, I'm diving deeper into Machine Learning to explore how 
              data-driven solutions can make web applications smarter and more intuitive.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com/chhatraraj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
              >
                <FaGithub className="mr-2 h-5 w-5" />
                GitHub
              </a>
              <a
                href="/my_cv.pdf"
                download
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium  text-black shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right Section - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full h-[450px] rounded-lg overflow-hidden shadow-lg shadow-red-600/20">
              {/* Profile Image */}
              <img
                src="/profile2.jpg"
                alt="Chhatra Neupane"
                className="w-full h-full object-cover max-w-[100%] mx-auto transition-transform duration-500 hover:scale-105"
                loading="eager"
              />

              {/* Overlay Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-700/20 to-gray-900/20 backdrop-blur-[1px]" />

              {/* Floating Code Snippets */}
              <div className="absolute inset-0 pointer-events-none hidden md:block">
                <div className="absolute top-4 left-4 text-xs text-red-300/90 font-mono animate-float bg-black/40 p-2 rounded">
                  <span className="text-gray-300">const</span> backendDev ={" "}
                  <span className="text-green-300">true</span>;
                </div>
                <div className="absolute top-14 left-4 text-xs text-red-300/90 font-mono animate-float-delay-1 bg-black/40 p-2 rounded">
                  <span className="text-blue-300">skills</span> = ["Node.js", "Express", "SQL", "Python ML"];
                </div>
                <div className="absolute bottom-12 right-4 text-xs text-red-300/90 font-mono animate-float-delay-2 bg-black/40 p-2 rounded">
                  <span className="text-purple-300">async</span> function{" "}
                  <span className="text-yellow-300">optimize</span>() {"{"}
                </div>
                <div className="absolute bottom-4 right-4 text-xs text-red-300/90 font-mono animate-float-delay-3 bg-black/40 p-2 rounded">
                  return <span className="text-green-300">'scalable_solutions'</span>;
                </div>
              </div>

              {/* Glow Border */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent transition-all duration-500 shadow-[0_0_25px_rgba(220,38,38,0.35)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

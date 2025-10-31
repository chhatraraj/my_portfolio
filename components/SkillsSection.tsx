import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { FaReact, FaNodeJs, FaAward, FaClock, FaProjectDiagram, FaGitAlt, FaDocker, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiPostman, SiGithub } from "react-icons/si";
import Starfield from "./Starfield";

const skillsData = [
  {
    title: "Frontend Development",
    icon: <FaReact className="text-4xl text-cyan-400" />,
    iconBg: "bg-cyan-500/20",
    experience: "2+ Years",
    expertise: 50,
    items: [
      { name: "React.js", level: 65, projects: 5 },
      { name: "Next.js", level: 53, projects: 1 },
      { name: "JavaScript ES6+", level: 67, projects: 7 },
      { name: "ShadCn", level: 49, projects: 1},
      { name: "Tailwind CSS", level: 77, projects: 7}
    ],
    achievements: [
      "React 30 day Certification ",
      "3+ React Apps Deployed",
    ]
  },
  {
    title: "Backend Development",
    icon: <FaNodeJs className="text-4xl text-green-400" />,
    iconBg: "bg-green-500/20",
    experience: "1+ Years",
    
    expertise: 65,
    items: [
      { name: "Node.js", level: 65, projects: 3 },
      { name: "Django", level: 61, projects: 2 },
      { name: "Express.js", level: 78, projects: 3 },
      { name: "MongoDB", level: 75, projects: 3 },
      { name: "PostgreSQL", level: 52, projects: 3 },
      { name: "RESTful APIs", level: 77, projects: 5 }
    ],
    achievements: [
      "Scalable Architecture Design",
      "High-Performance APIs",
    ]
  },
  {
    title: "Development Tools",
    icon: <FaGitAlt className="text-4xl text-orange-400" />,
    iconBg: "bg-orange-500/20",
    experience: "2+ Years",
    projectCount: "All Projects",
    expertise: 60,
    items: [
      { name: "Git & GitHub", level: 69, projects: 15 },
      { name: "Docker", level: 61, projects: 2 },
      { name: "Postman", level: 55, projects: 2 },
      { name: "Figma", level: 75, projects: 5 },
    ],
    achievements: [
      "CI/CD Pipeline Implementation",
      "Version Control Best Practices",
      "API Testing & Documentation"
    ]
  }
];

// Removed busy stats/UI to keep the section clean

const SkillsSection = () => {
  const [activeCard, setActiveCard] = React.useState<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = React.useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.3 
      } 
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      } 
    },
  };

  // width animation handled inline for simplicity

  return (
    <section
      id="skills"
      className="relative w-full py-16 md:py-24 lg:py-28 overflow-hidden bg-black"
    >
      {/* Subtle background */}
      <Starfield className="pointer-events-none absolute inset-0 -z-10" starCount={300} depth={300} opacity={0.2} parallax={false} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header (clean) */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
            <FaAward className="text-yellow-400" />
            <span>Skills</span>
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">Technical Skills</h2>
          <p className="mt-2 text-sm md:text-base text-gray-400">A concise overview of my core technologies and tools.</p>
        </div>

        {/* Skill Cards - Simplified grid without complex animations */}
        <div className="mx-auto grid grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {skillsData.map((skill, idx) => (
            <div
              key={idx}
              className="h-full group"
              onMouseEnter={() => setActiveCard(idx)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <Card className="skill-card bg-gradient-to-br from-gray-900/95 to-gray-800/95 border border-white/15 backdrop-blur-xl text-white transition-all duration-300 h-full min-h-[380px] hover:scale-[1.02] hover:border-white/30 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.iconBg.replace('/20', '/5')} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardHeader className="flex items-start gap-4 pb-4 px-6 pt-6 relative z-10">
                  <div className={`p-4 rounded-xl ${skill.iconBg} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <FaClock className="text-xs" />
                        {skill.experience}
                      </span>
                      {skill.projectCount && (
                        <span className="flex items-center gap-1">
                          <FaProjectDiagram className="text-xs" />
                          {skill.projectCount}
                        </span>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-6 relative z-10">
                  {/* Expertise Level */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-300">Expertise Level</span>
                      <span className="text-sm font-bold text-cyan-400">{skill.expertise}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.iconBg.includes('cyan') ? 'from-cyan-500 to-blue-500' : 
                          skill.iconBg.includes('green') ? 'from-green-500 to-emerald-500' :
                          skill.iconBg.includes('orange') ? 'from-orange-500 to-red-500' :
                          'from-cyan-500 to-blue-500'} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.expertise}%` }}
                        transition={{ duration: 1.2, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">
                      {idx === 2 ? "Tools & Platforms" : "Core Technologies"}
                    </h4>
                    {skill.items.map((item, i) => (
                      <motion.div
                        key={i}
                        className="skill-item group/skill cursor-default"
                        onMouseEnter={() => setHoveredSkill(`${idx}-${i}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        whileHover={{ x: 0 }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium group-hover/skill:text-white transition-colors">
                            {item.name}
                          </span>
                          <span className="text-xs text-gray-400">{item.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${skill.iconBg.includes('cyan') ? 'from-cyan-500 to-blue-500' : 
                              skill.iconBg.includes('green') ? 'from-green-500 to-emerald-500' :
                              skill.iconBg.includes('orange') ? 'from-orange-500 to-red-500' :
                          'from-cyan-500 to-blue-500'}`}
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: `${item.level}%`, opacity: 1 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                          />
                        </div>

                        {false}
                      </motion.div>
                    ))}
                  </div>

                  {false}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
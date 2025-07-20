import { motion } from 'framer-motion'
import { FaCode, FaLaptopCode, FaRobot, FaServer } from 'react-icons/fa'

const Second = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 50 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }),
    hover: {
      scale: 1.05,
      y: -10,
      transition: { duration: 0.3 }
    }
  }

  const skills = [
    {
      icon: FaLaptopCode,
      image: "images/img1.png",
      title: "Frontend Developer",
      description: "Skilled in creating responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and modern frameworks like React. I focus on delivering visually appealing and optimized designs for seamless user experiences.",
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      icon: FaServer,
      image: "images/img2.png",
      title: "Backend Developer",
      description: "Experienced in building secure, scalable, and efficient server-side applications. Proficient in languages like Node.js, Python, or PHP, with expertise in databases and APIs to ensure seamless functionality.",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-500/10 to-teal-500/10"
    },
    {
      icon: FaCode,
      image: "images/img5.png",
      title: "Coding Skills",
      description: "Familiar with Java fundamentals, including syntax, object-oriented programming concepts, loops, conditional statements, and basic exception handling. Capable of writing efficient programs.",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10"
    },
    {
      icon: FaRobot,
      image: "images/img4.png",
      title: "Robotic Engineering",
      description: "Experienced in designing and programming robotic systems using embedded systems and IoT technologies. Skilled in integrating sensors, actuators, and microcontrollers to create intelligent and connected automation solutions.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10"
    }
  ]

  return (
    <motion.section 
      id="skills"
      className="py-12 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs */}
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-green-500/15 to-teal-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.3],
            rotate: [0, -360],
            x: [0, -60, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Additional animated orbs */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-60 h-60 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.5],
            rotate: [360, 0, -180],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Moving geometric shapes like in About section */}
        <motion.div
          animate={{
            rotate: 360,
            x: [0, 200, -100, 0],
            y: [0, -150, 100, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-16 h-16 border border-blue-400/30 rotate-45"
        />

        <motion.div
          animate={{
            rotate: -360,
            x: [0, -150, 200, 0],
            y: [0, 100, -80, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-sm"
        />

        {/* Ripple effects */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [0, 4],
            opacity: [0.5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeOut"
          }}
        >
          <div className="w-32 h-32 border border-blue-500/20 rounded-full" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [0, 3],
            opacity: [0.3, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1,
            ease: "easeOut"
          }}
        >
          <div className="w-24 h-24 border border-purple-500/20 rounded-full" />
        </motion.div>

        {/* Shooting stars */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-cyan-300 rounded-full"
            animate={{
              x: [-100, typeof window !== 'undefined' ? window.innerWidth + 100 : 1000],
              y: [Math.random() * 200, Math.random() * 200 + 100],
              opacity: [0, 1, 0],
              scale: [0, 2, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 3,
              ease: "easeOut"
            }}
            style={{
              top: `${20 + i * 20}%`,
              boxShadow: "0 0 10px #67e8f9, 0 0 20px #67e8f9, 0 0 30px #67e8f9"
            }}
          />
        ))}

        {/* Enhanced floating particles */}
        {Array.from({ length: 25 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            animate={{
              x: [0, Math.random() * 500 - 250],
              y: [0, Math.random() * 500 - 250],
              opacity: [0, 1, 0],
              scale: [0, 2, 0]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}

        {/* Floating hexagons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`hex-${i}`}
            className="absolute w-6 h-6 border border-purple-400/20"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6">
            <FaCode className="text-blue-400" />
            <span>Technical Expertise</span>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
            }}
          >
            MY SKILLS
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            What I have mastered through dedication and continuous learning
          </motion.p>

          <motion.div 
            className="w-20 sm:w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-8 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
          />
        </motion.div>

        {/* Enhanced Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
              custom={index}
              whileHover="hover"
            >
              {/* Card Container */}
              <motion.div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-2xl hover:shadow-lg transition-all duration-500 h-full overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Animated Background Effects */}
                <motion.div
                  className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r ${skill.gradient} opacity-10 rounded-full blur-2xl`}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                />
                
                <motion.div
                  className={`absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r ${skill.gradient} opacity-10 rounded-full blur-2xl`}
                  animate={{
                    scale: [1.2, 1, 1.3],
                    rotate: [360, 180, 0],
                    opacity: [0.15, 0.05, 0.15]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                />

                {/* Floating particles for each card */}
                {Array.from({ length: 3 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/30 rounded-full"
                    animate={{
                      x: [0, Math.random() * 60 - 30],
                      y: [0, Math.random() * 60 - 30],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: Math.random() * 4 + 4,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: "easeInOut"
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`
                    }}
                  />
                ))}
                
                {/* Icon and Image Container */}
                <motion.div className="relative z-10 flex flex-col items-center mb-6">
                  {/* Icons arranged side by side */}
                  <div className="flex items-center justify-center gap-4 mb-4">
                    {/* Animated Icon */}
                    <motion.div 
                      className={`p-3 bg-gradient-to-r ${skill.gradient} rounded-xl`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <skill.icon className="text-xl text-white" />
                    </motion.div>
                    
                    {/* Project Image - More Visible */}
                    <motion.div 
                      className="w-14 h-14 rounded-xl overflow-hidden border-2 border-slate-500 group-hover:border-white/50 transition-all duration-300 bg-white/10 backdrop-blur-sm"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                    >
                      <img 
                        src={skill.image} 
                        alt={skill.title}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10 text-center space-y-4">
                  <motion.h3 
                    className={`text-xl font-bold bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {skill.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-300 text-sm leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {skill.description}
                  </motion.p>
                </div>

                {/* Hover Effect Border */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${skill.gradient} p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  style={{ zIndex: -1 }}
                >
                  <div className="w-full h-full rounded-2xl bg-slate-900" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.p 
            className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto"
          >
            Ready to bring your ideas to life with cutting-edge technology and creative solutions.
          </motion.p>
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-blue-300 font-medium"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.2)",
                "0 0 40px rgba(139, 92, 246, 0.4)",
                "0 0 20px rgba(59, 130, 246, 0.2)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span>🌟</span>
            <span>Always Learning, Always Growing</span>
            <span>🌟</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Second
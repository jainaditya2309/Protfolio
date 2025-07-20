import { motion } from 'framer-motion'

const About = () => {
  // Animation variants
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

  const headingVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        delay: 0.2
      }
    }
  }

  const imageVariants = {
    hidden: { x: 100, opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.8
      }
    },
    hover: {
      scale: 1.05,
      rotate: [0, -2, 2, 0],
      transition: { duration: 0.6 }
    }
  }

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.3 + 0.5,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    })
  }

  const skillsVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 1.2,
        type: "spring",
        stiffness: 150
      }
    }),
    hover: {
      scale: 1.1,
      y: -5,
      transition: { type: "spring", stiffness: 300 }
    }
  }

  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js", 
    "NextJS", "Express", "Tailwind CSS", "MongoDB", "IoT", "Embedded Systems"
  ]

  return (
    <motion.section 
      id="about"
      className="min-h-screen py-16 px-6 lg:px-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-900 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large animated gradient orbs */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-32 -right-32 w-72 h-72 bg-gradient-to-r from-purple-300/15 to-pink-300/15 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.5, 1.2],
            x: [0, -80, 0],
            y: [0, 100, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-r from-violet-300/15 to-purple-300/15 rounded-full blur-3xl"
        />

        {/* Additional floating orbs */}
        <motion.div
          animate={{
            rotate: 180,
            scale: [1, 1.4, 1],
            x: [0, -120, 0],
            y: [0, -80, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full blur-2xl"
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/40 rounded-full"
            animate={{
              x: [0, Math.random() * 300 - 150],
              y: [0, Math.random() * 300 - 150],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}

        {/* Moving geometric shapes */}
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
          className="absolute top-1/4 left-1/4 w-16 h-16 border border-purple-400/20 rotate-45"
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
          className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-gradient-to-r from-pink-400/15 to-purple-400/15 rounded-full blur-sm"
        />

        {/* Animated grid pattern */}
        <motion.div
          className="absolute inset-0 opacity-[0.02]"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `
              linear-gradient(90deg, #8b5cf6 1px, transparent 1px),
              linear-gradient(0deg, #8b5cf6 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px"
          }}
        />

        {/* Ripple effects */}
        <motion.div
          className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [0, 3],
            opacity: [0.4, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeOut"
          }}
        >
          <div className="w-32 h-32 border border-purple-400/20 rounded-full" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 right-1/3 transform translate-x-1/2 translate-y-1/2"
          animate={{
            scale: [0, 2.5],
            opacity: [0.3, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 2,
            ease: "easeOut"
          }}
        >
          <div className="w-24 h-24 border border-pink-400/20 rounded-full" />
        </motion.div>

        {/* Shooting stars */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white/60 rounded-full"
            animate={{
              x: [-100, typeof window !== 'undefined' ? window.innerWidth + 100 : 1200],
              y: [Math.random() * 200, Math.random() * 200 + 100],
              opacity: [0, 1, 0],
              scale: [0, 2, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 5,
              ease: "easeOut"
            }}
            style={{
              top: `${15 + i * 25}%`,
              boxShadow: "0 0 8px #ffffff, 0 0 16px #ffffff"
            }}
          />
        ))}

        {/* Floating shapes */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/3 w-6 h-6 bg-gradient-to-r from-violet-400/30 to-purple-400/30 rounded-full"
        />

        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [0, -360],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-gradient-to-r from-pink-400/25 to-violet-400/25 rounded-full blur-sm"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Section - Content */}
          <motion.div 
            className="w-full lg:w-3/5 space-y-8"
            variants={itemVariants}
          >
            {/* Heading */}
            <motion.div 
              className="text-center lg:text-left"
              variants={headingVariants}
            >
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4"
                whileHover={{
                  scale: 1.05,
                  color: "#8b5cf6",
                  transition: { duration: 0.3 }
                }}
              >
                About{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                  Me
                </span>
              </motion.h1>
              <motion.div 
                className="h-1 w-24 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto lg:mx-0 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.div>

            {/* Introduction Paragraph */}
            <motion.div 
              className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
              variants={textVariants}
              custom={0}
            >
              <motion.p 
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-200/20"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(139, 92, 246, 0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                Hello! <span className="font-semibold text-purple-600 dark:text-purple-400">Aditya Jain</span> here. A technology fanatic! 
                Currently, I am enrolled in the Department of <span className="font-medium text-violet-600">Electronics and Communication Engineering</span> at 
                Lakshmi Narain College of Technology, BHOPAL (M.P). My early education was completed from Young Scholars' Academy Shikohabad (U.P).
              </motion.p>

              <motion.p 
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-200/20"
                variants={textVariants}
                custom={1}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(139, 92, 246, 0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                I am a passionate and driven developer with expertise in both <span className="font-medium text-purple-600">front-end and back-end technologies</span>. 
                My journey in the world of technology has allowed me to gain proficiency in modern web development technologies and frameworks.
              </motion.p>

              <motion.p 
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-200/20"
                variants={textVariants}
                custom={2}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(139, 92, 246, 0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                I also have hands-on experience in database management using <span className="font-medium text-violet-600">MongoDB</span>, enabling me to create scalable and efficient web applications. 
                Beyond software development, I specialize in <span className="font-medium text-pink-600">Embedded Systems and IoT</span>, showcasing my versatility in blending software with hardware.
              </motion.p>

              <motion.p 
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-200/20"
                variants={textVariants}
                custom={3}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(139, 92, 246, 0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                As someone deeply committed to <span className="font-medium text-purple-600">continuous learning and problem-solving</span>, I thrive on tackling challenges and bringing creative ideas to life. 
                Feel free to explore my work and reach out—I'd love to collaborate on exciting projects!
              </motion.p>
            </motion.div>

            {/* Skills Section */}
            <motion.div 
              className="mt-12"
              variants={itemVariants}
            >
              <motion.h3 
                className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center lg:text-left"
                variants={headingVariants}
              >
                Technical Skills
              </motion.h3>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-full text-sm font-medium cursor-pointer shadow-lg"
                    variants={skillsVariants}
                    custom={index}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - Image */}
          <motion.div 
            className="w-full lg:w-2/5 flex justify-center"
            variants={imageVariants}
          >
            <motion.div 
              className="relative group"
              whileHover="hover"
            >
              {/* Background decoration */}
              <motion.div 
                className="absolute -inset-6 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition duration-500"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Main image */}
              <motion.div className="relative">
                <motion.img 
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl border-4 border-white/20" 
                  src="images/img6.jpg" 
                  alt="Aditya Jain - Web Developer"
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 5,
                    transition: { duration: 0.4 }
                  }}
                />
                
                {/* Floating elements around image */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-violet-400 rounded-full shadow-lg shadow-violet-400/50"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50"
                  animate={{
                    x: [0, -15, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: 1
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About

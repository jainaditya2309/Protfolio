import { motion } from 'framer-motion';
import { FaGithub, FaRocket } from "react-icons/fa";

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

  const projectVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.15,
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

  return (
    <motion.div 
      id="projects"
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Enhanced Background Effects - Like About Page */}
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
        {[...Array(15)].map((_, i) => (
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

        {/* Additional complex shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-2/3 right-1/4 w-10 h-10"
          style={{
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            background: "linear-gradient(45deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))"
          }}
        />

        {/* More animated particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`extra-${i}`}
            className="absolute w-3 h-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-sm"
            animate={{
              x: [0, Math.random() * 400 - 200],
              y: [0, Math.random() * 400 - 200],
              opacity: [0, 0.6, 0],
              scale: [0, 1.8, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: Math.random() * 15 + 12,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
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
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-6">
            <FaRocket className="text-purple-400" />
            <span>Featured Work</span>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 30px rgba(139, 92, 246, 0.5)"
            }}
          >
            MY PROJECTS
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            A showcase of innovative solutions built with modern technologies
          </motion.p>

          <motion.div 
            className="w-20 sm:w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto mt-8 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
          />
        </motion.div>

        {/* Enhanced Projects Timeline */}
        <motion.div 
          className="relative"
          variants={itemVariants}
        >
          {/* Central Timeline */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 rounded-full origin-top hidden lg:block"
            style={{ height: "800px" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Mobile Timeline */}
          <motion.div 
            className="absolute left-8 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 rounded-full origin-top lg:hidden"
            style={{ height: "1200px" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 relative">
            {/* Project 1 - Chai-Express */}
            <motion.div
              className="relative group"
              variants={projectVariants}
              custom={0}
              whileHover="hover"
            >
              {/* Timeline Node */}
              <motion.div 
                className="absolute -left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full border-4 border-slate-900 z-20"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 ml-8 lg:ml-0">
                <motion.div className="relative mb-6 overflow-hidden rounded-xl group-hover:scale-105 transition-transform duration-500">
                  <motion.a href="https://github.com/ADITYA9456/chai-Express.git" target="_blank" rel="noopener noreferrer">
                    <motion.img 
                      width={280} 
                      height={160} 
                      src="gif/chai.gif" 
                      alt="Chai-Express"
                      className="w-full h-40 object-cover rounded-xl"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.a>
                  
                  {/* Hover Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"
                  >
                    <motion.a
                      href="https://github.com/ADITYA9456/chai-Express.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gradient-to-r from-slate-800 to-black border-2 border-slate-600 text-white rounded-xl font-medium hover:border-orange-500/50 transition-all flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="text-lg" />
                      <span>View Code</span>
                    </motion.a>
                  </motion.div>
                </motion.div>

                <div className="space-y-4">
                  <motion.h3 
                    className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.02 }}
                  >
                    Chai-Express
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-300 text-sm leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    A modern web platform that enables creators to receive financial support from their audience through small contributions. Features GitHub OAuth, dashboards, and Razorpay integration.
                  </motion.p>

                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "MongoDB", "OAuth"].map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-slate-800/80 border border-slate-600 text-slate-300 rounded-lg text-xs font-medium"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * index + 0.5 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Project 2 - MultiMantra */}
            <motion.div
              className="relative group"
              variants={projectVariants}
              custom={1}
              whileHover="hover"
            >
              {/* Timeline Node */}
              <motion.div 
                className="absolute -left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900 z-20"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 ml-8 lg:ml-0">
                <motion.div className="relative mb-6 overflow-hidden rounded-xl group-hover:scale-105 transition-transform duration-500">
                  <motion.a href="https://github.com/ADITYA9456/MultiMantra.git" target="_blank" rel="noopener noreferrer">
                    <motion.img 
                      width={280} 
                      height={160} 
                      src="gif/multimantra.gif" 
                      alt="MultiMantra"
                      className="w-full h-40 object-cover rounded-xl"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.a>
                  
                  {/* Hover Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"
                  >
                    <motion.a
                      href="https://github.com/ADITYA9456/MultiMantra.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gradient-to-r from-slate-800 to-black border-2 border-slate-600 text-white rounded-xl font-medium hover:border-blue-500/50 transition-all flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="text-lg" />
                      <span>View Code</span>
                    </motion.a>
                  </motion.div>
                </motion.div>

                <div className="space-y-4">
                  <motion.h3 
                    className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.02 }}
                  >
                    MultiMantra
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-300 text-sm leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    MultiMantra is an advanced digital platform offering blog creation, secure online donations, a customizable linktree-style hub, powerful URL shortening, and an intelligent rule-based chatbot. Built with Next.js, MongoDB, Tailwind CSS, and Razorpay, it delivers a seamless, interactive user experience.
                  </motion.p>

                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "Node", "Express", "Tailwind", "MongoDB", "Razorpay", "Auth", "Chatbot (Rule-based)"].map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-slate-800/80 border border-slate-600 text-slate-300 rounded-lg text-xs font-medium"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * index + 0.5 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Project 3 - BuildupX */}
            <motion.div
              className="relative group"
              variants={projectVariants}
              custom={2}
              whileHover="hover"
            >
              {/* Timeline Node */}
              <motion.div 
                className="absolute -left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full border-4 border-slate-900 z-20"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 ml-8 lg:ml-0">
                <motion.div className="relative mb-6 overflow-hidden rounded-xl group-hover:scale-105 transition-transform duration-500">
                  <motion.a href="https://github.com/ADITYA9456/BuildupX.git" target="_blank" rel="noopener noreferrer">
                    <motion.img 
                      width={280} 
                      height={160} 
                      src="gif/build.gif" 
                      alt="BuildupX"
                      className="w-full h-40 object-cover rounded-xl"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.a>
                  
                  {/* Hover Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"
                  >
                    <motion.a
                      href="https://github.com/ADITYA9456/BuildupX.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gradient-to-r from-slate-800 to-black border-2 border-slate-600 text-white rounded-xl font-medium hover:border-green-500/50 transition-all flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="text-lg" />
                      <span>View Code</span>
                    </motion.a>
                  </motion.div>
                </motion.div>

                <div className="space-y-4">
                  <motion.h3 
                    className="text-2xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.02 }}
                  >
                    BuildupX
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-300 text-sm leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    BuildupX is a modern fitness tracking and membership platform that empowers users to achieve their wellness goals. The app combines gym membership management, personalized diet planning, calorie tracking, and meal logging with an intuitive interface. Users can purchase membership plans, track nutrition, generate customized meal plans, and monitor their fitness progress—all in one seamless mobile-ready PWA.
                  </motion.p>

                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "Tailwind", "Mongo Atlas", "Gemini API", "Auth", "JWT", "Web Manifest", "PWA"].map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-slate-800/80 border border-slate-600 text-slate-300 rounded-lg text-xs font-medium"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * index + 0.5 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Project 4 - VaultX */}
            <motion.div
              className="relative group"
              variants={projectVariants}
              custom={3}
              whileHover="hover"
            >
              {/* Timeline Node */}
              <motion.div 
                className="absolute -left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full border-4 border-slate-900 z-20"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 ml-8 lg:ml-0">
                <motion.div className="relative mb-6 overflow-hidden rounded-xl group-hover:scale-105 transition-transform duration-500">
                  <motion.a href="https://github.com/ADITYA9456/VaultX.git" target="_blank" rel="noopener noreferrer">
                    <motion.img 
                      width={280} 
                      height={160} 
                      src="gif/vaultx.gif" 
                      alt="VaultX"
                      className="w-full h-40 object-cover rounded-xl"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.a>
                  
                  {/* Hover Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"
                  >
                    <motion.a
                      href="https://github.com/ADITYA9456/VaultX.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gradient-to-r from-slate-800 to-black border-2 border-slate-600 text-white rounded-xl font-medium hover:border-purple-500/50 transition-all flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="text-lg" />
                      <span>View Code</span>
                    </motion.a>
                  </motion.div>
                </motion.div>

                <div className="space-y-4">
                  <motion.h3 
                    className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.02 }}
                  >
                    VaultX
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-300 text-sm leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    A sleek, secure password manager built with ReactJS, Tailwind CSS and MongoDB. Manage all your credentials in one organized place with advanced security.
                  </motion.p>

                  <div className="flex flex-wrap gap-2">
                    {["React", "Tailwind", "MongoDB", "Security"].map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-slate-800/80 border border-slate-600 text-slate-300 rounded-lg text-xs font-medium"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * index + 0.5 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        {/* 🔥 SPECIAL BLOCK - Your Upcoming Website Showcase 🔥 */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Block - Project Showcase Website */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.div className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm border-2 border-gradient-to-r border-yellow-500/30 rounded-3xl p-6 lg:p-8 relative overflow-hidden h-full">
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-orange-500/10 to-red-500/5" />
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 360],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <div className="relative z-10 text-center space-y-4">
                <motion.h3 
                  className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.02 }}
                >
                  Project Showcase Website
                </motion.h3>
                
                <motion.p 
                  className="text-sm lg:text-base text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  🎬 A dedicated website featuring <strong>video demos</strong>, <strong>live previews</strong>, <strong>source code</strong>, and detailed documentation for all my projects.
                </motion.p>

                {/* Feature highlights */}
                <motion.div className="flex flex-wrap justify-center gap-2 my-4">
                  {["📹 Videos", "🔗 Links", "💻 Code"].map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-full text-slate-300 text-xs"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index + 0.4 }}
                    >
                      {feature}
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Visit Showcase Website Link */}
                <motion.a
                  href="https://aditya9456.github.io/My-projects/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 border-2 border-yellow-500/50 text-white rounded-xl font-bold text-sm inline-flex items-center gap-2"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "rgba(251, 191, 36, 0.8)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-lg">�</span>
                  <span>Visit Showcase</span>
                  <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Block - GitHub CTA */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 lg:p-8 overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5" />
              
              <motion.div className="relative z-10 text-center space-y-6 flex flex-col justify-center h-full">
                <motion.div 
                  className="flex justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="p-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl">
                    <FaGithub className="text-4xl text-purple-400" />
                  </div>
                </motion.div>

                <motion.h3 
                  className="text-2xl lg:text-3xl font-bold text-white"
                  whileHover={{ scale: 1.02 }}
                >
                  Explore More Projects
                </motion.h3>
                
                <motion.p 
                  className="text-sm lg:text-base text-gray-400 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  I have created many more projects! Check out my complete collection of innovative solutions on GitHub.
                </motion.p>
                
                <motion.a
                  href="https://github.com/ADITYA9456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-slate-800 to-black border-2 border-slate-700 text-white rounded-xl font-bold hover:border-purple-500/50 transition-all shadow-2xl"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(139, 92, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="text-2xl" />
                  <span>Visit My GitHub</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="group-hover:translate-x-2 transition-transform"
                  >
                    →
                  </motion.div>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Close timeline container */}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Second
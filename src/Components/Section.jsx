import { motion } from 'framer-motion'
import Button from './Button'
import TypeScript from './TypeScript'

const Section = () => {
  // Animation variants (keeping all your existing variants)
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
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        delay: 0.2
      }
    }
  }

  const nameVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.5
      }
    },
    hover: {
      scale: 1.05,
      textShadow: "0px 0px 20px rgba(139, 92, 246, 0.8)",
      transition: { duration: 0.3 }
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

  const statsVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2 + 1.2,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.1,
      y: -5,
      transition: { type: "spring", stiffness: 300 }
    }
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 180, 360],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const scrollIndicatorVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.section 
      id="home"
      className="first relative flex flex-col lg:flex-row justify-center items-center min-h-screen px-6 lg:px-20 pt-24 pb-12 md:py-12 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Enhanced Background Animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
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
          className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"
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
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-r from-violet-600/15 to-purple-600/15 rounded-full blur-3xl"
        />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/60 rounded-full"
            animate={{
              x: [0, Math.random() * 400 - 200],
              y: [0, Math.random() * 400 - 200],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
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
          className="absolute top-1/4 left-1/4 w-16 h-16 border border-purple-500/30 rotate-45"
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
          className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-sm"
        />

        {/* Animated grid pattern */}
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
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
            backgroundSize: "50px 50px"
          }}
        />

        {/* Ripple effect */}
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
          <div className="w-32 h-32 border border-purple-500/20 rounded-full" />
        </motion.div>

        {/* Additional ripples with delays */}
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
          <div className="w-24 h-24 border border-pink-500/20 rounded-full" />
        </motion.div>

        {/* Shooting stars */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            animate={{
              x: [-100, typeof window !== 'undefined' ? window.innerWidth + 100 : 1000],
              y: [Math.random() * 200, Math.random() * 200 + 100],
              opacity: [0, 1, 0],
              scale: [0, 2, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 4,
              ease: "easeOut"
            }}
            style={{
              top: `${20 + i * 30}%`,
              boxShadow: "0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff"
            }}
          />
        ))}
      </div>

      {/* Left Section - Content */}
      <motion.div 
        className="leftSection w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 lg:pr-12 relative z-10"
        variants={itemVariants}
      >
        {/* Main Heading with Animation */}
        <motion.div className="mb-8" variants={itemVariants}>
          <motion.h1 
            className="text-4xl lg:text-6xl font-bold leading-tight text-white"
            variants={headingVariants}
          >
            Hello, I'm{' '}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 cursor-pointer"
              variants={nameVariants}
              whileHover="hover"
            >
              Aditya
            </motion.span>
          </motion.h1>
          
          {/* Subtitle with Typewriter Effect */}
          <motion.div 
            className="mt-4 text-2xl lg:text-3xl text-gray-300 font-medium"
            variants={itemVariants}
          >
            I'm a{' '}
            <motion.span 
              className="text-purple-400 font-semibold"
              whileHover={{ 
                color: "#ec4899",
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              Web Developer
            </motion.span>
          </motion.div>
          
          {/* TypeScript Component */}
          <motion.div 
            className="mt-4 text-lg lg:text-xl text-purple-300"
            variants={itemVariants}
          >
            <TypeScript />
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.div 
          className="mb-8 text-gray-300 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0"
          variants={itemVariants}
        >
          <p>
            Passionate about creating beautiful, functional, and user-friendly web experiences. 
            I love turning ideas into reality through code.
          </p>
        </motion.div>

        {/* Enhanced Button Section */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button />
          </motion.div>
          <motion.a 
            href="#projects"
            className="px-6 py-3 border-2 border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 rounded-lg font-medium relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View My Work</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
            />
          </motion.a>
        </motion.div>

        {/* Updated Social Links or Stats */}
        <motion.div 
          className="flex justify-center lg:justify-start space-x-6"
          variants={itemVariants}
        >
          {[
            { number: "Fresher", label: "Years Experience" },
            { number: "10+", label: "Projects Done" },
            { number: "Ready", label: "To Work" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center cursor-pointer"
              variants={statsVariants}
              custom={index}
              whileHover="hover"
            >
              <motion.div className="text-2xl font-bold text-purple-400">
                {stat.number}
              </motion.div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div 
        className="rightSection w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10"
        variants={imageVariants}
      >
        <motion.div 
          className="relative group"
          whileHover="hover"
        >
          {/* Background decoration */}
          <motion.div 
            className="absolute -inset-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 1, -1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Main image */}
          <motion.div 
            className="relative"
            variants={imageVariants}
          >
            <motion.img 
              className="w-80 h-96 lg:w-96 lg:h-112 object-cover rounded-lg shadow-2xl" 
              src="images/img3.png" 
              alt="Aditya - Web Developer"
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.4 }
              }}
            />
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"
              variants={floatingVariants}
              animate="animate"
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-violet-400 rounded-full shadow-lg shadow-violet-400/50"
              variants={pulseVariants}
              animate="animate"
            />
            <motion.div 
              className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50"
              animate={{
                x: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:block hidden cursor-pointer"
        variants={scrollIndicatorVariants}
        animate="animate"
        whileHover={{ scale: 1.2 }}
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center relative">
          <motion.div 
            className="w-1 h-3 bg-purple-400 rounded-full mt-2"
            animate={{
              y: [0, 8, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Section

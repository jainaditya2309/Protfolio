import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const navVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const logoVariants = {
    initial: { scale: 0, rotate: -180, opacity: 0 },
    animate: { 
      scale: 1, 
      rotate: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10,
        delay: 0.2
      }
    },
    hover: { 
      scale: 1.1,
      rotate: [0, -10, 10, 0],
      transition: { duration: 0.5 }
    }
  }

  const menuItemVariants = {
    initial: { y: -30, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: { 
        delay: i * 0.15 + 0.3, 
        type: "spring", 
        stiffness: 100,
        damping: 10
      }
    }),
    hover: { 
      scale: 1.1,
      y: -5,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  }

  const underlineVariants = {
    initial: { scaleX: 0, opacity: 0 },
    hover: { 
      scaleX: 1, 
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  }

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.4, 
        ease: "easeInOut",
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { 
        duration: 0.4, 
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const mobileItemVariants = {
    closed: {
      x: -50,
      opacity: 0,
      transition: { duration: 0.2 }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }

  const contactButtonVariants = {
    initial: { scale: 0, y: 20, opacity: 0 },
    animate: { 
      scale: 1, 
      y: 0,
      opacity: 1,
      transition: { 
        delay: 0.8, 
        type: "spring", 
        stiffness: 150,
        damping: 10
      }
    },
    hover: { 
      scale: 1.05,
      y: -2,
      boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  }

  const hamburgerVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 }
  }

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' }
  ]

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="initial"
        animate="animate"
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-blue-950/95 backdrop-blur-lg shadow-2xl border-b border-purple-500/30' 
            : 'bg-blue-950/90 backdrop-blur-sm'
        }`}
      >
        <div className="flex justify-between items-center h-16 px-6 lg:px-12">
          {/* Logo */}
          <motion.div 
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-violet-400 bg-clip-text text-transparent cursor-pointer"
          >
            Aditya&apos;s Portfolio
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  variants={menuItemVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  whileTap="tap"
                  custom={index}
                  className="relative"
                >
                  <motion.a
                    href={item.href}
                    className="px-4 py-2 text-white font-medium relative overflow-hidden cursor-pointer"
                  >
                    {item.name}
                    <motion.div
                      variants={underlineVariants}
                      initial="initial"
                      whileHover="hover"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 origin-left"
                    />
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              variants={hamburgerVariants}
              animate={isMobileMenuOpen ? "open" : "closed"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col justify-center items-center w-8 h-8 cursor-pointer relative z-10"
            >
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: -3 }}
                className="w-6 h-0.5 bg-white block transition-all duration-300"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-white block mt-1 transition-all duration-300"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -2 } : { rotate: 0, y: 3 }}
                className="w-6 h-0.5 bg-white block mt-1 transition-all duration-300"
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          variants={mobileMenuVariants}
          animate={isMobileMenuOpen ? "open" : "closed"}
          className="md:hidden overflow-hidden bg-blue-900/98 backdrop-blur-md border-t border-purple-500/20"
        >
          <motion.ul className="flex flex-col py-6">
            {menuItems.map((item) => (
              <motion.li
                key={item.name}
                variants={mobileItemVariants}
                whileHover={{ 
                  x: 15, 
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  scale: 1.02
                }}
                whileTap={{ scale: 0.98 }}
                className="rounded-lg mx-4 my-1"
              >
                <a
                  href={item.href}
                  className="block px-6 py-4 text-white hover:text-purple-300 cursor-pointer transition-all duration-300 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.nav>

      {/* Floating Contact Button */}
      <motion.div
        variants={contactButtonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.a
          href="#footer"
          className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg cursor-pointer group"
          whileHover={{
            rotate: [0, -10, 10, -5, 5, 0],
            transition: { duration: 0.5 }
          }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 15, scale: 1.1 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </motion.svg>
          
          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            whileHover={{ opacity: 1, x: 0, scale: 1 }}
            className="absolute right-20 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg"
          >
            Contact Me
            <div className="absolute top-1/2 -right-1 w-2 h-2 bg-gray-800 rotate-45 transform -translate-y-1/2"></div>
          </motion.div>
        </motion.a>
      </motion.div>

      {/* Contact Button for Mobile Menu */}
      <motion.div
        variants={mobileMenuVariants}
        animate={isMobileMenuOpen ? "open" : "closed"}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 md:hidden"
      >
        <motion.a
          href="#footer"
          variants={mobileItemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium cursor-pointer shadow-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact Me
        </motion.a>
      </motion.div>
    </>
  )
}

export default Navbar

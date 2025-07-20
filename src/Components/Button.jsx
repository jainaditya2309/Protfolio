import { motion } from 'framer-motion'
import { FaDownload, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Button = () => {
    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: { duration: 0.3 }
        },
        tap: {
            scale: 0.95,
            transition: { duration: 0.1 }
        }
    }

    const iconVariants = {
        hover: {
            rotate: 360,
            transition: { duration: 0.6 }
        }
    }

    return (
        <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
        >
            {/* Resume Button */}
            <motion.a
                href="/Aditya Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg overflow-hidden"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
            >
                {/* Background animation */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Shine effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                />
                
                <div className="relative z-10 flex items-center gap-3">
                    <motion.div variants={iconVariants} whileHover="hover">
                        <FaDownload className="text-lg" />
                    </motion.div>
                    <span>Resume</span>
                    <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <FaExternalLinkAlt className="text-sm" />
                    </motion.div>
                </div>
                
                {/* Glow effect */}
                <motion.div
                    className="absolute inset-0 rounded-xl"
                    animate={{
                        boxShadow: [
                            "0 0 20px rgba(139, 92, 246, 0.3)",
                            "0 0 30px rgba(139, 92, 246, 0.5)",
                            "0 0 20px rgba(139, 92, 246, 0.3)"
                        ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
            </motion.a>

            {/* GitHub Button */}
            <motion.a
                href="https://github.com/ADITYA9456"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-800 to-gray-900 border-2 border-slate-700 text-white rounded-xl font-semibold shadow-lg overflow-hidden hover:border-purple-500/50 transition-all duration-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
            >
                {/* Background animation */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-800 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Particle effects */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                        animate={{
                            x: [0, Math.random() * 40 - 20],
                            y: [0, Math.random() * 40 - 20],
                            scale: [0, 1, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeOut"
                        }}
                        style={{
                            left: `${30 + i * 20}%`,
                            top: "50%"
                        }}
                    />
                ))}
                
                <div className="relative z-10 flex items-center gap-3">
                    <motion.div 
                        variants={iconVariants} 
                        whileHover="hover"
                        className="group-hover:text-purple-400 transition-colors duration-300"
                    >
                        <FaGithub className="text-lg" />
                    </motion.div>
                    <span className="group-hover:text-purple-100 transition-colors duration-300">
                        Visit GitHub
                    </span>
                    <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                    >
                        <FaExternalLinkAlt className="text-sm text-purple-400" />
                    </motion.div>
                </div>
            </motion.a>
        </motion.div>
    )
}

export default Button

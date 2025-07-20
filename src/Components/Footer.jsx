import { motion } from 'framer-motion'
import { FaGithub, FaHeart, FaLinkedin, FaRocket, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
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
        hidden: { y: 20, opacity: 0 },
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

    const iconVariants = {
        hover: {
            scale: 1.2,
            rotate: 360,
            transition: { duration: 0.6 }
        }
    }

    const linkVariants = {
        hover: {
            scale: 1.05,
            color: "#8b5cf6",
            transition: { duration: 0.2 }
        }
    }

    return (
        <motion.footer 
            id="footer"
            className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient orbs */}
                <motion.div
                    className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 360],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                
                <motion.div
                    className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-r from-violet-500/15 to-pink-500/15 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.4],
                        rotate: [0, -360],
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
                        animate={{
                            x: [0, Math.random() * 200 - 100],
                            y: [0, Math.random() * 200 - 100],
                            opacity: [0, 1, 0],
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
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Section */}
                    <motion.div 
                        className="text-center md:text-left"
                        variants={itemVariants}
                    >
                        <motion.h3 
                            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
                            whileHover={{ 
                                scale: 1.05,
                                textShadow: "0 0 20px rgba(139, 92, 246, 0.5)"
                            }}
                        >
                            Aditya&apos;s Portfolio
                        </motion.h3>
                        <motion.p 
                            className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0"
                            variants={itemVariants}
                        >
                            Passionate about creating innovative solutions and bringing ideas to life through code.
                        </motion.p>
                        
                        {/* Achievement badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mt-4"
                            whileHover={{ scale: 1.05 }}
                            animate={{
                                boxShadow: [
                                    "0 0 10px rgba(139, 92, 246, 0.2)",
                                    "0 0 20px rgba(139, 92, 246, 0.4)",
                                    "0 0 10px rgba(139, 92, 246, 0.2)"
                                ]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <FaRocket className="text-purple-400" />
                            <span>Always Building</span>
                        </motion.div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div 
                        className="text-center"
                        variants={itemVariants}
                    >
                        <motion.h4 
                            className="text-lg font-semibold text-white mb-6"
                            variants={itemVariants}
                        >
                            Quick Links
                        </motion.h4>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Projects', 'Skills'].map((link, index) => (
                                <motion.li key={link}>
                                    <motion.a
                                        href={`#${link.toLowerCase()}`}
                                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer inline-block"
                                        variants={linkVariants}
                                        whileHover="hover"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {link}
                                    </motion.a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Connect Section */}
                    <motion.div 
                        className="text-center md:text-right"
                        variants={itemVariants}
                    >
                        <motion.h4 
                            className="text-lg font-semibold text-white mb-6"
                            variants={itemVariants}
                        >
                            Let&apos;s Connect
                        </motion.h4>
                        <div className="flex justify-center md:justify-end gap-6 mb-6">
                            <motion.a
                                href="https://wa.me/+919456266491"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gradient-to-r from-green-500/20 to-green-400/20 border border-green-400/30 rounded-xl text-green-400 hover:bg-green-500/30 transition-all duration-300"
                                variants={iconVariants}
                                whileHover="hover"
                            >
                                <FaWhatsapp className="text-xl" />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/aditya-jain-3211a8257"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gradient-to-r from-blue-500/20 to-blue-400/20 border border-blue-400/30 rounded-xl text-blue-400 hover:bg-blue-500/30 transition-all duration-300"
                                variants={iconVariants}
                                whileHover="hover"
                            >
                                <FaLinkedin className="text-xl" />
                            </motion.a>
                            <motion.a
                                href="https://github.com/ADITYA9456"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gradient-to-r from-purple-500/20 to-purple-400/20 border border-purple-400/30 rounded-xl text-purple-400 hover:bg-purple-500/30 transition-all duration-300"
                                variants={iconVariants}
                                whileHover="hover"
                            >
                                <FaGithub className="text-xl" />
                            </motion.a>
                        </div>
                        <motion.p 
                            className="text-gray-500 text-sm"
                            variants={itemVariants}
                        >
                            Open for opportunities and collaborations
                        </motion.p>
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.div 
                    className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1.2 }}
                />

                {/* Bottom Section */}
                <motion.div 
                    className="flex flex-col md:flex-row justify-between items-center gap-4"
                    variants={itemVariants}
                >
                    <motion.div 
                        className="flex items-center gap-2 text-gray-500 text-sm"
                        variants={itemVariants}
                    >
                        <span>&copy; 2025 Aditya Jain. All rights reserved.</span>
                    </motion.div>
                    
                    <motion.div 
                        className="flex items-center gap-2 text-gray-500 text-sm"
                        variants={itemVariants}
                    >
                        <span>Made with</span>
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                color: ["#ef4444", "#f59e0b", "#ef4444"]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <FaHeart className="text-red-500" />
                        </motion.div>
                        <span>and lots of ☕</span>
                    </motion.div>
                </motion.div>
            </div>
        </motion.footer>
    )
}

export default Footer

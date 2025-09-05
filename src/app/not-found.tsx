"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleGoBack = () => {
        if (window.history.length > 1) {
            router.back();
        } else {
            router.push("/");
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        }
    };

    const glitchAnimation = {
        x: [0, -2, 2, 0],
        transition: {
            duration: 0.2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut" as const
        }
    };

    if (!mounted) {
        return null;
    }

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
            <motion.div
                className="text-center max-w-2xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* 404 Number with glitch effect */}
                <motion.div
                    className="mb-8"
                    animate={glitchAnimation}
                >
                    <h1 className="text-8xl md:text-9xl font-bold text-emerald-500 mb-4 relative">
                        4
                        <span className="text-emerald-400">0</span>
                        <span className="text-emerald-600">4</span>
                        {/* Glitch overlay */}
                        <span className="absolute inset-0 text-emerald-300 opacity-50 animate-pulse">
                            4<span className="text-emerald-200">0</span><span className="text-emerald-400">4</span>
                        </span>
                    </h1>
                </motion.div>

                {/* Warning Icon */}
                <motion.div
                    className="flex justify-center mb-6"
                    variants={itemVariants}
                >
                    <AlertTriangle className="w-16 h-16 text-emerald-500 animate-bounce" />
                </motion.div>

                {/* Error Message */}
                <motion.div
                    className="mb-8 space-y-4"
                    variants={itemVariants}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-lg text-gray-300 mb-2">
                        Oops! The page you&apos;re looking for seems to have vanished into the digital void.
                    </p>
                    <p className="text-base text-gray-400">
                        Don&apos;t worry, even the best developers encounter 404s. Let&apos;s get you back on track!
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
                    variants={itemVariants}
                >
                    <Link href="/">
                        <motion.button
                            className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Home className="w-5 h-5" />
                            Go Home
                        </motion.button>
                    </Link>

                    <motion.button
                        onClick={handleGoBack}
                        className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </motion.button>
                </motion.div>

                {/* Helpful Links */}
                <motion.div
                    className="space-y-4"
                    variants={itemVariants}
                >
                    <p className="text-gray-400 text-sm mb-4">Or try one of these helpful links:</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <Link 
                            href="/"
                            className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 hover:underline"
                        >
                            Home
                        </Link>
                        <span className="text-gray-600">•</span>
                        <Link 
                            href="/#projects"
                            className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 hover:underline"
                        >
                            Projects
                        </Link>
                        <span className="text-gray-600">•</span>
                        <Link 
                            href="/#skills"
                            className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 hover:underline"
                        >
                            Skills
                        </Link>
                        <span className="text-gray-600">•</span>
                        <Link 
                            href="/#contact"
                            className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 hover:underline"
                        >
                            Contact
                        </Link>
                    </div>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                    className="mt-12 flex justify-center space-x-2"
                    variants={itemVariants}
                >
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 bg-emerald-500 rounded-full"
                            animate={{
                                opacity: [0.3, 1, 0.3],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </motion.div>

                {/* Error Code for Developers */}
                <motion.div
                    className="mt-8 text-xs text-gray-600 font-mono"
                    variants={itemVariants}
                >
                    ERROR_CODE: 404_PAGE_NOT_FOUND
                </motion.div>
            </motion.div>
        </div>
    );
}
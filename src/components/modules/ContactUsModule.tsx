"use client";

import { useState, useRef, useEffect } from "react";
import { Mail, Send, Check, AlertCircle } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import BasicButton from "@/components/structural-elements/Buttons";
import { handleContactSubmission } from "@/utils/apiConnectors";

// Animation configuration
const SPRING_CONFIG = {
    type: "spring" as const,
    damping: 15,
    stiffness: 300,
    mass: 0.8
};

interface ContactFormData {
    email: string;
    message: string;
}

interface FormStatus {
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
}

export const ContactUsModule = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isScrollingDown, setIsScrollingDown] = useState(true);
    const { scrollY } = useScroll();
    
    const [formData, setFormData] = useState<ContactFormData>({
        email: '',
        message: ''
    });
    
    const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });
    const [emailError, setEmailError] = useState<string>('');

    useEffect(() => {
        let lastScrollY = scrollY.get();
        
        const unsubscribe = scrollY.on("change", (latest) => {
            setIsScrollingDown(latest > lastScrollY);
            lastScrollY = latest;
        });

        return () => unsubscribe();
    }, [scrollY]);

    // Email validation function
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        // Real-time email validation (only show error if user typed something)
        if (name === 'email') {
            if (value && !validateEmail(value)) {
                setEmailError('Invalid email format');
            } else {
                setEmailError('');
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Only validate message (email is optional now)
        if (!formData.message.trim()) {
            setStatus({ type: 'error', message: 'Please enter a message' });
            return;
        }
        
        // If email is provided, it must be valid
        if (formData.email.trim() && !validateEmail(formData.email)) {
            setStatus({ type: 'error', message: 'Please enter a valid email or leave it empty' });
            return;
        }

        setStatus({ type: 'loading', message: 'Sending...' });

        try {
            const result = await handleContactSubmission({
                email: formData.email.trim() || undefined,
                message: formData.message.trim()
            });

            if (result.success) {
                setStatus({ type: 'success', message: result.message });
                setFormData({ email: '', message: '' });
                setEmailError('');
            } else {
                setStatus({ type: 'error', message: result.message });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
        }
    };

    return (
        <div 
            ref={containerRef}
            id="contact" 
            className="w-full bg-gray-900 py-12 px-4 md:px-8"
        >
            <div className="max-w-2xl mx-auto">
                {/* Animated Header */}
                <motion.div 
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={isScrollingDown ? { opacity: 1, y: 0 } : { opacity: 1, y: 0, transition: { duration: 0 } }}
                    transition={SPRING_CONFIG}
                    viewport={{ margin: "-50px" }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{fontFamily: 'var(--font-fredericka)'}}>
                        Let&apos;s Connect
                    </h2>
                    <p className="text-gray-400 text-sm">
                        Got a project idea? Drop me a quick message! 📧
                    </p>
                </motion.div>

                {/* Compact Contact Form */}
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg">
                    {/* Status Message */}
                    {status.type !== 'idle' && (
                        <div className={`mb-4 p-3 rounded-lg flex items-center gap-2 text-xs ${
                            status.type === 'success' ? 'bg-emerald-900/30 text-emerald-300' :
                            status.type === 'error' ? 'bg-red-900/30 text-red-300' :
                            'bg-blue-900/30 text-blue-300'
                        }`}>
                            {status.type === 'success' && <Check size={14} />}
                            {status.type === 'error' && <AlertCircle size={14} />}
                            {status.type === 'loading' && <div className="w-3 h-3 border-2 border-blue-300 border-t-transparent rounded-full animate-spin" />}
                            <span>{status.message}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email Input - Now Optional */}
                        <div>
                            <label className="flex items-center gap-2 mb-2 text-emerald-400 font-medium text-sm">
                                <Mail size={14} />
                                Email <span className="text-gray-500 text-xs">(optional)</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full px-3 py-2 bg-gray-700 border rounded-md text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-1 transition-all duration-200 ${
                                    emailError 
                                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30' 
                                        : 'border-gray-600 focus:border-emerald-500 focus:ring-emerald-500/30'
                                }`}
                                placeholder="your.email@example.com (for direct response)"
                            />
                            {emailError && (
                                <p className="mt-1 text-red-400 text-xs">{emailError}</p>
                            )}
                        </div>

                        {/* Message Textarea */}
                        <div>
                            <label className="block mb-2 text-emerald-400 font-medium text-sm">
                                Message *
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={3}
                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white text-sm placeholder-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 transition-all duration-200 resize-none"
                                placeholder="Hi! I'd love to work with you on..."
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <BasicButton
                            onClick={() => {}} // Form submission handled by onSubmit
                            buttonColor="bg-emerald-600 hover:bg-emerald-500"
                            buttonHoverColor=""
                            extraStyle="w-full rounded-md font-medium transition-all duration-300 flex items-center justify-center gap-2 
                                cursor-pointer text-sm"
                            padding="py-2 px-4"
                            margin="m-0"
                        >
                            {status.type === 'loading' ? (
                                <>
                                    <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send size={14} />
                                    Send Message
                                </>
                            )}
                        </BasicButton>
                    </form>
                </div>
            </div>
        </div>
    );
}
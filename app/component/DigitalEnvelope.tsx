'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function DigitalEnvelope() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    // Animation Variants
    const flapVariants: Variants = {
        closed: {
            rotateX: 0,
            zIndex: 30,
            transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
        },
        open: {
            rotateX: 180,
            zIndex: 0,
            transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
        }
    };

    const cardVariants: Variants = {
        closed: {
            y: 0,
            scale: 0.95,
            opacity: 0,
            zIndex: 10,
            transition: { duration: 0.5 }
        },
        open: {
            y: -240,
            scale: 1,
            opacity: 1,
            zIndex: 10,
            transition: {
                delay: 0.4,
                duration: 1,
                type: 'spring' as const,
                stiffness: 40,
                damping: 12
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f8f7f4] to-[#ebe9e1] flex flex-col items-center justify-center p-4 overflow-hidden relative">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative w-full max-w-md aspect-[4/3] perspective-1000 z-10">

                {/* --- Envelope Body (Back) --- */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f4ede1] to-[#e8dcc8] rounded-b-2xl shadow-[inset_0_2px_8px_rgba(0,0,0,0.06)] z-0" />

                {/* --- The Card --- */}
                <motion.div
                    variants={cardVariants}
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                    className="absolute inset-x-4 sm:inset-x-8 -bottom-5 h-[95%] bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-8 flex flex-col border border-neutral-100 origin-bottom overflow-hidden"
                    style={{
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
                    }}
                >
                    {/* Scrollable Content Area */}
                    <div className="flex-1 overflow-y-auto overflow-x-hidden pr-2 scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-transparent">
                        {/* The Wish Text */}
                        <div className="space-y-6 max-w-none text-center">
                            <h3
                                className="text-4xl text-neutral-800 font-light mb-2 tracking-tight"
                                style={{
                                    fontFamily: "'Playfair Display', Georgia, serif"
                                }}
                            >
                                Happy Birthday
                            </h3>
                            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
                                Mừng sinh nhật Bác! Nhân ngày đặc biệt này, con chúc Bác thật nhiều sức khoẻ, vạn sự như ý và luôn bình an. Con cảm ơn Bác và gia đình đã luôn dành tình cảm quý mến cho con. Con chúc Bác có một ngày sinh nhật thật ấm áp và trọn vẹn niềm vui bên những người thân yêu ạ.
                            </p>
                        </div>
                    </div>

                    {/* Signature Area */}
                    <div className="mt-6 pt-4 border-t border-neutral-100 flex justify-end">
                        <p
                            className="text-sm text-neutral-500 italic font-light"
                            style={{
                                fontFamily: "'Playfair Display', Georgia, serif"
                            }}
                        >
                            — Con Tài kính gửi Bác Lương
                        </p>
                    </div>
                </motion.div>

                {/* --- Envelope Front Layers --- */}

                {/* Side Flaps */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                    <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-br from-[#e8dcc8] to-[#d4c5ad]"
                        style={{ clipPath: "polygon(0% 0%, 0% 100%, 50% 50%)" }}></div>
                    <div className="absolute right-0 bottom-0 w-full h-full bg-gradient-to-bl from-[#e8dcc8] to-[#d4c5ad]"
                        style={{ clipPath: "polygon(100% 0%, 100% 100%, 50% 50%)" }}></div>
                </div>

                {/* Envelope Front Pocket */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#f4ede1] to-[#ead9c1] border-t border-neutral-300/30 shadow-[0_-2px_10px_rgba(0,0,0,0.04)] z-20 rounded-b-2xl pointer-events-none"
                    style={{
                        clipPath: "polygon(0% 100%, 100% 100%, 50% 0%)"
                    }}
                />

                {/* The Top Flap */}
                <motion.div
                    variants={flapVariants}
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                    style={{ transformOrigin: "top", transformStyle: "preserve-3d" }}
                    className="absolute top-0 left-0 right-0 h-1/2"
                >
                    {/* Outer Flap (Visible when closed) */}
                    <div
                        className="w-full h-full bg-gradient-to-b from-[#f4ede1] to-[#ead9c1] border-b border-neutral-300/30 shadow-[0_4px_12px_rgba(0,0,0,0.08)] rounded-t-lg"
                        style={{
                            clipPath: "polygon(0% 0%, 50% 100%, 100% 0%)",
                            backfaceVisibility: 'hidden'
                        }}
                    />
                    {/* Inner Flap (Visible when open) */}
                    <div
                        className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#e8dcc8] to-[#d4c5ad]"
                        style={{
                            clipPath: "polygon(0% 0%, 50% 100%, 100% 0%)",
                            transform: "rotateX(180deg)",
                            backfaceVisibility: 'hidden'
                        }}
                    />
                </motion.div>

                {/* --- Interaction Trigger (Wax Seal) --- */}
                <AnimatePresence>
                    {!isOpen && (
                        <motion.button
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.92 }}
                            onClick={handleOpen}
                            className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.15)] border-[3px] border-[#5a1a1a] flex items-center justify-center cursor-pointer group transition-all duration-200"
                            style={{
                                background: 'linear-gradient(135deg, #7c2d2d 0%, #5a1a1a 100%)'
                            }}
                            initial={{ scale: 0, rotate: -15 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        >
                            <div className="w-12 h-12 sm:w-14 sm:h-14 border border-[#8b3a3a]/30 rounded-full flex items-center justify-center relative">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent" />
                                <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-[#f5e6e6] fill-[#f5e6e6]/30 drop-shadow-sm group-hover:fill-[#f5e6e6]/50 transition-all" />
                            </div>
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>

            {/* Instructions Footer */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-8 sm:bottom-12 text-neutral-400 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-light text-center px-4"
                style={{
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
                }}
            >
                {isOpen ? (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-neutral-500"
                    >
                        Enjoy your special day
                    </motion.span>
                ) : "Click to open"}
            </motion.div>
        </div>
    );
}

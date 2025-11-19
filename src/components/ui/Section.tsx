'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    delay?: number;
}

export default function Section({ children, className = "", id, delay = 0 }: SectionProps) {
    return (
        <section id={id} className={`py-16 md:py-24 ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay, type: "spring" as const, bounce: 0.4 }}
            >
                {children}
            </motion.div>
        </section>
    );
}

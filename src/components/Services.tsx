'use client';

import Section from './ui/Section';
import { Wrench, Thermometer, Droplets, Wind } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Thermometer className="w-8 h-8 text-blue-600" />,
        title: "Heating",
        description: "Installation and repair of furnaces, heat pumps, and boilers to keep you warm."
    },
    {
        icon: <Wind className="w-8 h-8 text-cyan-500" />,
        title: "Cooling",
        description: "Energy-efficient air conditioning solutions for those hot summer days."
    },
    {
        icon: <Droplets className="w-8 h-8 text-blue-500" />,
        title: "Plumbing",
        description: "Full-service plumbing from leak repairs to hot water tank installations."
    },
    {
        icon: <Wrench className="w-8 h-8 text-slate-600" />,
        title: "Maintenance",
        description: "Regular check-ups to ensure your systems run efficiently and last longer."
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 50 }
    }
};

export default function Services() {
    return (
        <Section id="services" className="bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
                    <p className="text-slate-600 text-lg">
                        Comprehensive HVAC and plumbing solutions tailored to your needs.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -10, transition: { type: "spring" as const, stiffness: 300 } }}
                            className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="mb-4 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
}

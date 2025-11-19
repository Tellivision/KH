'use client';

import Section from './ui/Section';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

export default function Contact() {
    return (
        <Section id="contact" className="bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                        <p className="text-slate-600 text-lg mb-12">
                            Ready to upgrade your home comfort? Contact us today for a quote or service request.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Visit Us</h3>
                                    <p className="text-slate-600">1889 Hammonds Plains Rd,<br />Hammonds Plains, NS B4B 1P4</p>
                                    <a
                                        href="https://maps.google.com/?q=1889+Hammonds+Plains+Rd,+Hammonds+Plains,+NS+B4B+1P4"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 text-sm font-medium hover:underline mt-1 inline-block"
                                    >
                                        View on Google Maps
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                                    <p className="text-slate-600 mb-1">Mon-Fri 7:30am - 5pm</p>
                                    <a href="tel:9024053050" className="text-xl font-bold text-blue-600 hover:text-blue-700">
                                        (902) 405-3050
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2">Business Hours</h3>
                                    <ul className="space-y-1 text-slate-600 text-sm">
                                        <li className="flex justify-between w-48"><span>Monday</span> <span>7:30 a.m.–5 p.m.</span></li>
                                        <li className="flex justify-between w-48"><span>Tuesday</span> <span>7:30 a.m.–5 p.m.</span></li>
                                        <li className="flex justify-between w-48"><span>Wednesday</span> <span>7:30 a.m.–5 p.m.</span></li>
                                        <li className="flex justify-between w-48"><span>Thursday</span> <span>7:30 a.m.–5 p.m.</span></li>
                                        <li className="flex justify-between w-48"><span>Friday</span> <span>7:30 a.m.–5 p.m.</span></li>
                                        <li className="flex justify-between w-48"><span>Saturday</span> <span>7 a.m.–12 p.m.</span></li>
                                        <li className="flex justify-between w-48 text-slate-400"><span>Sunday</span> <span>Closed</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        placeholder="(902) 555-0123"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </Section>
    );
}

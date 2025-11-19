'use client';

import Section from './ui/Section';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Tony Hancock",
        content: "Very happy with KHL they were prompt and courteous. Hot water tank installed and old removed in such a short time. Pricing very good. Thanks!",
        rating: 5
    },
    {
        name: "Steve Renner",
        content: "Best plumbing and heating company in the HRM.",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <Section id="testimonials" className="bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
                    <p className="text-slate-600 text-lg">
                        Don't just take our word for it. Here's what our customers have to say.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
                            <Quote className="absolute top-8 right-8 text-blue-100 w-12 h-12" />
                            <div className="flex gap-1 mb-4">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-slate-700 text-lg mb-6 leading-relaxed">"{t.content}"</p>
                            <div className="font-bold text-slate-900">{t.name}</div>
                            <div className="text-sm text-slate-500">Verified Customer</div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

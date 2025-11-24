import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
    return (
        <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-16 text-center uppercase tracking-tight">Client Feedback</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { name: "Dr. Senthil", org: "Ophthall Hospitals", initial: "D", text: "Invictus Global Tech transformed our digital presence. They delivered a clean, professional, and fast site in record time. Highly recommended." },
                        { name: "Er. Mani", org: "Sri Krish Mirra Builders", initial: "E", text: "In the construction business, showing our portfolio clearly is key. The team at Invictus understood our requirements perfectly." },
                        { name: "Sivakumar Sir", org: "VLS Law Academy", initial: "S", text: "Invictus provided a seamless, educational website structure that is easy to navigate. Support has been excellent." }
                    ].map((t, i) => (
                        <div key={i} className="bg-[#1a1a1a] p-8 border-l-2 border-[#00DC82] hover:bg-[#1a1a1a]/80 hover:translate-x-2 transition-all duration-300">
                            <div className="flex items-center gap-1 text-[#00DC82] mb-6 text-xs">
                                {[...Array(5)].map((_, j) => <Star key={j} size={12} fill="#00DC82" />)}
                            </div>
                            <p className="text-gray-300 mb-6 text-sm italic leading-relaxed">"{t.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-bold text-lg rounded-full">{t.initial}</div>
                                <div>
                                    <h4 className="font-bold text-white text-sm uppercase">{t.name}</h4>
                                    <p className="text-xs text-gray-500">{t.org}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

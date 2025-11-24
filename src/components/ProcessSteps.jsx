import React from 'react';

const ProcessSteps = () => {
    return (
        <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-16 text-center uppercase tracking-tight">What Happens Next?</h2>
                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { step: "01", title: "Quick Call", desc: "Get a call in 10 mins to discuss needs." },
                        { step: "02", title: "Share Requirements", desc: "Send us your logo and basic content." },
                        { step: "03", title: "Approve Layout", desc: "Review the initial design draft." },
                        { step: "04", title: "Start Same Day", desc: "We begin development immediately." }
                    ].map((s, i) => (
                        <div key={i} className="relative p-6 border-l border-[#00DC82]/30 hover:border-[#00DC82] hover:bg-[#00DC82]/5 transition-colors duration-300 group">
                            <span className="text-4xl font-bold text-[#00DC82]/20 absolute top-4 right-4 group-hover:text-[#00DC82]/40 transition-colors">{s.step}</span>
                            <h3 className="text-xl font-bold text-white mb-2 uppercase group-hover:text-[#00DC82] transition-colors">{s.title}</h3>
                            <p className="text-sm text-gray-400">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSteps;

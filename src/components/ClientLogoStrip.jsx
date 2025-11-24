import React from 'react';

const ClientLogoStrip = () => {
    const logos = ["Ophthall", "VLS Law Academy", "HealthPilot", "Krish Mirra Builders", "Wellinit USA", "Doctorix"];

    return (
        <section className="py-12 bg-[#050505] border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-8">
                <p className="text-center text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Trusted By Industry Leaders</p>
            </div>
            <div className="relative flex overflow-x-hidden group">
                <div className="animate-[scroll_30s_linear_infinite] whitespace-nowrap flex gap-16 md:gap-32 items-center px-4">
                    {[...logos, ...logos, ...logos].map((logo, i) => (
                        <span key={i} className="text-xl md:text-2xl font-sans font-bold text-[#1a1a1a] uppercase hover:text-[#00DC82] transition-colors cursor-default select-none text-stroke hover:scale-110 transform duration-300 inline-block">
                            {logo}
                        </span>
                    ))}
                </div>
                <div className="animate-[scroll_30s_linear_infinite] whitespace-nowrap flex gap-16 md:gap-32 items-center px-4" aria-hidden="true">
                    {[...logos, ...logos, ...logos].map((logo, i) => (
                        <span key={i} className="text-xl md:text-2xl font-sans font-bold text-[#1a1a1a] uppercase hover:text-[#00DC82] transition-colors cursor-default select-none text-stroke hover:scale-110 transform duration-300 inline-block">
                            {logo}
                        </span>
                    ))}
                </div>
            </div>
            <style>{`
        .text-stroke { -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2); color: transparent; }
        .text-stroke:hover { -webkit-text-stroke: 1px #00DC82; color: #00DC82; }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
        </section>
    );
};

export default ClientLogoStrip;

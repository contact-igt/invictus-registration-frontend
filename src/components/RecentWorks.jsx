import React from 'react';
import { ArrowRight } from 'lucide-react';

const RecentWorks = () => {
    const projects = [
        { title: "HealthPilot AI", cat: "Healthcare", url: "www.healthpilot.ai", img: "/healthpilot-cover.png" },
        { title: "Ophthall Hospitals", cat: "Medical", url: "www.ophthall.in", img: "/ophthall-cover.png" },
        { title: "VLS Law Academy", cat: "Education", url: "www.vlslawacademy.com", img: "/vls-cover.png" },
        { title: "Sri Krish Mirra", cat: "Construction", url: "www.srikrishmirrabuilders.in", img: "/srikrishmirra-cover.png" },
        { title: "Wellinit (USA)", cat: "Finance", url: "www.wellinit.com", img: "/wellinit-cover.png" },
        { title: "Dr. Ramanan", cat: "Finance", url: "www.ramananfinancialvision.com", img: "/ramanan-cover.png" }
    ];

    return (
        <section id="portfolio" className="py-24 bg-[#050505] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
                    <div className="text-center md:text-left">
                        <div className="text-[#00DC82] text-xs font-bold uppercase tracking-[0.2em] mb-4">Proven Track Record</div>
                        <h2 className="text-3xl md:text-5xl font-sans font-bold text-white uppercase tracking-tight">Recent Deliveries</h2>
                    </div>
                    <a href="https://invictusglobaltech.com" target="_blank" rel="noreferrer" className="text-sm font-bold text-white border-b border-[#00DC82] pb-1 hover:text-[#00DC82] transition-colors uppercase tracking-widest flex items-center gap-2 hover:gap-3 duration-300">
                        View Full Portfolio <ArrowRight size={14} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p, i) => (
                        <a key={i} href={`https://${p.url}`} target="_blank" rel="noreferrer" className="group block bg-[#1a1a1a] border border-white/5 hover:border-[#00DC82] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                            <div className="relative h-56 overflow-hidden bg-black">
                                <div className="absolute inset-0 bg-[#00DC82]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay"></div>
                                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0" />
                            </div>
                            <div className="p-6">
                                <div className="text-[10px] text-[#00DC82] font-mono mb-2 uppercase">{p.cat}</div>
                                <h3 className="font-bold text-lg text-white group-hover:text-[#00DC82] transition-colors">{p.title}</h3>
                                <p className="text-xs text-gray-500 mt-1 group-hover:text-white transition-colors">{p.url}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentWorks;

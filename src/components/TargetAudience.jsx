import React from 'react';
import { Stethoscope, Rocket, Briefcase, Users, ShoppingBag, Globe } from 'lucide-react';

const TargetAudience = () => {
    const audiences = [
        { label: "Doctors", icon: Stethoscope },
        { label: "Startups", icon: Rocket },
        { label: "Real Estate", icon: Briefcase },
        { label: "Coaches", icon: Users },
        { label: "E-commerce", icon: ShoppingBag },
        { label: "Local Biz", icon: Globe }
    ];

    return (
        <section className="py-24 bg-[#050505] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-16 uppercase tracking-tight">Who Is This For?</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {audiences.map((a, i) => (
                        <div key={i} className="bg-[#1a1a1a] border border-white/5 p-6 flex flex-col items-center justify-center gap-4 hover:border-[#00DC82] hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,220,130,0.15)] transition-all duration-300 group cursor-default">
                            <a.icon size={32} className="text-gray-400 group-hover:text-[#00DC82] transition-colors group-hover:animate-bounce" />
                            <span className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-[#00DC82] transition-colors">{a.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TargetAudience;

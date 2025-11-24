import React from 'react';
import { PenTool, Zap, Smartphone } from 'lucide-react';

const ValueProps = () => {
    return (
        <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6 uppercase tracking-tight">
                        Why Wait Weeks? <br />
                        <span className="text-[#00DC82]">Get It Done Now.</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">We've cut out the fluff. No meetings about meetings. Just execution.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-[#1a1a1a] p-8 border border-white/5 hover:border-[#00DC82] hover:bg-[#00DC82]/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
                        <PenTool size={32} className="text-white mb-6 group-hover:text-[#00DC82] group-hover:scale-110 transition-all duration-300" />
                        <h3 className="text-xl font-bold text-white mb-3 uppercase">Fully Customized</h3>
                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">No cookie-cutter templates. We design to match your brand identity, colors, and specific business needs.</p>
                    </div>

                    <div className="bg-[#1a1a1a] p-8 border border-[#00DC82]/30 hover:border-[#00DC82] hover:bg-[#00DC82]/5 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,220,130,0.1)] transition-all duration-300 relative group">
                        <div className="absolute top-0 right-0 bg-[#00DC82] text-black text-[10px] font-bold px-2 py-1 uppercase shadow-md">Speed</div>
                        <Zap size={32} className="text-[#00DC82] mb-6 group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-xl font-bold text-white mb-3 uppercase">Lightning Fast</h3>
                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">From brief to launch in 48 hours. Perfect for product launches, events, or urgent presence.</p>
                    </div>

                    <div className="bg-[#1a1a1a] p-8 border border-white/5 hover:border-[#00DC82] hover:bg-[#00DC82]/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
                        <Smartphone size={32} className="text-white mb-6 group-hover:text-[#00DC82] group-hover:scale-110 transition-all duration-300" />
                        <h3 className="text-xl font-bold text-white mb-3 uppercase">Mobile & SEO Ready</h3>
                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">Looks perfect on phones, tablets, and desktops. Built with clean code that Google loves.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueProps;

import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
    const plans = [
        { name: "Starter", price: "₹4,999", features: ["1 Page Website", "Basic SEO", "Mobile Responsive", "Contact Form"] },
        { name: "Business", price: "₹14,999", popular: true, features: ["5 Page Website", "Advanced SEO", "WhatsApp Integration", "Speed Optimization", "CMS Setup"] },
        { name: "Premium", price: "₹24,999", features: ["10+ Pages", "E-commerce Setup", "Payment Gateway", "Custom Animations", "Priority Support"] }
    ];

    return (
        <section className="py-24 bg-[#050505] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-4 uppercase tracking-tight">Transparent Pricing</h2>
                    <p className="text-gray-400">No hidden fees. Choose the plan that fits your scale.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, i) => (
                        <div key={i} className={`p-8 border ${plan.popular ? 'border-[#00DC82] bg-[#00DC82]/5 relative transform scale-105 z-10 shadow-[0_0_30px_rgba(0,220,130,0.15)]' : 'border-white/5 bg-[#1a1a1a] hover:border-white/20'} transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}>
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#00DC82] text-black text-[10px] font-bold px-3 py-1 uppercase tracking-wider shadow-lg">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-lg font-bold text-white uppercase mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-sm text-gray-500">Starting at</span>
                                <span className="text-3xl font-bold text-[#00DC82]">{plan.price}</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((f, j) => (
                                    <li key={j} className="flex items-center gap-3 text-sm text-gray-300">
                                        <Check size={14} className="text-[#00DC82]" /> {f}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => {
                                    const formElement = document.getElementById('hero-form');
                                    if (formElement) {
                                        formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    }
                                }}
                                className={`w-full py-4 uppercase font-bold text-xs tracking-wider border ${plan.popular ? 'bg-[#00DC82] text-black border-[#00DC82] hover:bg-[#00b368] hover:text-black' : 'bg-transparent text-white border-white/20 hover:border-[#00DC82] hover:text-[#00DC82] hover:bg-[#00DC82]/5'} transition-all duration-300`}
                            >
                                Start Project
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;

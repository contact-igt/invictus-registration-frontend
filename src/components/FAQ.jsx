import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { q: "How fast can you build the website?", a: "We typically deliver the first draft within 24 hours and the final launch within 48 hours after content is provided." },
        { q: "Do I need to give content?", a: "Ideally yes, but we provide placeholder content and can assist with AI-generated copy if needed." },
        { q: "Can I update the website later?", a: "Yes, we build on user-friendly stacks. We can also provide an optional CMS setup for easy edits." },
        { q: "Is hosting included?", a: "Yes! Our current limited-time offer includes Free Premium Hosting for the first year." },
        { q: "What if I need more pages later?", a: "Our websites are scalable. We can add more pages anytime for a small add-on fee." },
        { q: "Will you integrate WhatsApp chat?", a: "Absolutely. Direct WhatsApp integration is a standard feature we include to boost conversions." },
        { q: "Is SEO included?", a: "We implement technical SEO best practices: fast loading speeds, meta tags, sitemaps, and mobile optimization." },
        { q: "Do you provide maintenance?", a: "Yes, the current offer includes 6 months of free technical maintenance." }
    ];

    return (
        <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-12 text-center uppercase tracking-tight">Common Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className={`border transition-all duration-300 ${openIndex === i ? 'border-[#00DC82] bg-[#00DC82]/5' : 'border-white/5 bg-[#1a1a1a] hover:border-white/10'}`}>
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className={`text-sm font-bold uppercase tracking-wider ${openIndex === i ? 'text-[#00DC82]' : 'text-gray-300 group-hover:text-white'}`}>{faq.q}</span>
                                {openIndex === i ? <ChevronUp size={16} className="text-[#00DC82]" /> : <ChevronDown size={16} className="text-gray-500" />}
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

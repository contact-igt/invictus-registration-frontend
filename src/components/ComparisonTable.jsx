import React from 'react';
import { Check } from 'lucide-react';

const ComparisonTable = () => {
    return (
        <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-16 text-center uppercase tracking-tight">Why Choose Invictus?</h2>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="py-4 pl-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Features</th>
                                <th className="py-4 text-xs font-bold text-gray-500 uppercase tracking-widest text-center">Freelancers</th>
                                <th className="py-4 text-xs font-bold text-gray-500 uppercase tracking-widest text-center">Agencies</th>
                                <th className="py-4 px-4 text-sm font-bold text-[#00DC82] uppercase tracking-widest text-center bg-[#00DC82]/5 border-t-2 border-[#00DC82]">Invictus</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {[
                                { name: "Delivery Speed", other1: "2-4 Weeks", other2: "1-2 Months", us: "48 Hours" },
                                { name: "Hosting Included", other1: "No", other2: "Extra Cost", us: "Yes (Free)" },
                                { name: "Design Quality", other1: "Hit or Miss", other2: "Good", us: "Premium" },
                                { name: "Support", other1: "Slow", other2: "Ticket Based", us: "Direct WhatsApp" },
                                { name: "SEO Setup", other1: "Basic", other2: "Extra Cost", us: "Included" },
                                { name: "Maintenance", other1: "Hourly Rate", other2: "Monthly Retainer", us: "6 Months Free" }
                            ].map((row, i) => (
                                <tr key={i} className="border-b border-white/5 hover:bg-[#00DC82]/5 transition-colors group">
                                    <td className="py-4 pl-4 font-medium text-white group-hover:text-[#00DC82] transition-colors">{row.name}</td>
                                    <td className="py-4 text-gray-500 text-center">{row.other1}</td>
                                    <td className="py-4 text-gray-500 text-center">{row.other2}</td>
                                    <td className="py-4 px-4 text-white font-bold text-center bg-[#00DC82]/5 group-hover:bg-[#00DC82]/10 transition-colors">
                                        {row.name === "Hosting Included" || row.name === "SEO Setup" ? <Check size={16} className="inline text-[#00DC82] animate-pulse" /> : row.us}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;

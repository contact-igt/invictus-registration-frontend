import React, { useState, useEffect, useRef } from 'react';

const Timeline = () => {
    const [activeStep, setActiveStep] = useState(0);
    const stepRefs = useRef([]);
    const sectionRef = useRef(null);

    const steps = [
        {
            id: "Day 01",
            title: "Structure & Design",
            items: ['Brand Questionnaire Analysis', 'Layout Structure & Wireframe', 'Initial Design Concepts', 'Content Optimization']
        },
        {
            id: "Day 02",
            title: "Build & Launch",
            items: ['Full Development & Coding', 'Mobile & Speed Optimization', 'Hosting & Domain Setup', 'Final Launch 🚀']
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Simple logic: if section is visible, activate steps sequentially or just set to max
                        // For this specific 2-step timeline, we can just activate both when in view for effect
                        // or use scroll position. Let's use a simple timeout for effect.
                        setActiveStep(0);
                        setTimeout(() => setActiveStep(1), 500);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#00DC82]/5 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-sans font-bold text-white uppercase tracking-tight">
                        What You Get in <span className="text-[#00DC82]">2 Days</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Horizontal timeline line (Desktop) */}
                    <div className="hidden lg:block absolute top-[24px] left-0 w-full h-[1px] bg-[#333] z-0"></div>

                    {/* Vertical timeline line (Mobile) */}
                    <div className="lg:hidden absolute top-0 left-[22px] w-[1px] h-full bg-[#333] z-0">
                        {/* Mobile Progress Bar */}
                        <div
                            className="absolute top-0 left-0 w-full bg-[#2AB182] transition-all duration-1000 ease-out"
                            style={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
                        ></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 md:gap-8">
                        {steps.map((step, index) => {
                            const isMobileActive = index <= activeStep;
                            return (
                                <div
                                    key={index}
                                    ref={el => stepRefs.current[index] = el}
                                    className="relative z-10 group pl-16 lg:pl-0"
                                >
                                    {/* Step Indicator Dot */}
                                    <div className={`
                                        absolute left-0 top-0 lg:relative w-12 h-12 rounded-full border flex items-center justify-center mb-8 mx-auto lg:mx-0 
                                        transition-all duration-500
                                        ${isMobileActive ? 'border-[#2AB182] lg:border-white lg:group-hover:border-[#2AB182]' : 'border-white lg:group-hover:border-[#2AB182]'}
                                        bg-[#0a0a0a]
                                    `}>
                                        <div className={`
                                            w-4 h-4 rounded-full transition-all duration-500
                                            ${isMobileActive ? 'bg-[#2AB182] lg:bg-white lg:group-hover:bg-[#2AB182]' : 'bg-white lg:group-hover:bg-[#2AB182]'}
                                        `}></div>
                                    </div>

                                    {/* Step Title */}
                                    <div className="mb-6">
                                        <span className={`
                                            block text-sm font-bold uppercase tracking-widest mb-2 transition-colors duration-500
                                            ${isMobileActive ? 'text-[#2AB182]' : 'text-[#888] group-hover:text-[#2AB182]'}
                                        `}>
                                            {step.id}
                                        </span>
                                        <h3 className={`
                                            text-2xl font-bold uppercase transition-colors duration-500
                                            ${isMobileActive ? 'text-white' : 'text-white group-hover:text-[#2AB182]'}
                                        `}>
                                            {step.title}
                                        </h3>
                                    </div>

                                    {/* Step Details */}
                                    <ul className="space-y-3 font-body text-sm transition-colors duration-500">
                                        {step.items.map((item, idx) => (
                                            <li key={idx} className={`
                                                flex items-start gap-2 transition-colors duration-500
                                                ${isMobileActive ? 'text-white lg:text-[#888] lg:group-hover:text-white' : 'text-[#888] lg:group-hover:text-white'}
                                            `}>
                                                <div className={`
                                                    w-1 h-1 rounded-full flex-shrink-0 mt-2 transition-colors duration-500
                                                    ${isMobileActive ? 'bg-[#2AB182] lg:bg-[#888] lg:group-hover:bg-[#2AB182]' : 'bg-[#888] lg:group-hover:bg-[#2AB182]'}
                                                `}></div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;

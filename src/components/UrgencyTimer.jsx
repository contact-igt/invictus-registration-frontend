import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const UrgencyTimer = () => {
    // Simple countdown logic: always counts down to a fixed time 4 hours from load for demo purposes
    const [time, setTime] = useState({ h: 3, m: 12, s: 15 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prev => {
                if (prev.s > 0) return { ...prev, s: prev.s - 1 };
                if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
                if (prev.h > 0) return { h: prev.h - 1, m: 59, s: 59 };
                return { h: 3, m: 12, s: 15 }; // Reset for demo
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const format = (num) => num.toString().padStart(2, '0');

    return (
        <div className="fixed bottom-0 left-0 w-full bg-[#050505]/95 backdrop-blur-md border-t border-[#00DC82] z-50 py-4 shadow-[0_-5px_30px_rgba(0,220,130,0.25)]">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                <div className="flex items-center gap-2 text-[#00DC82] animate-pulse">
                    <Clock size={20} />
                    <span className="font-bold text-sm uppercase tracking-widest">Offer Ends In:</span>
                </div>
                <div className="font-mono text-2xl md:text-3xl text-white font-bold tracking-widest tabular-nums">
                    {format(time.h)}:{format(time.m)}:{format(time.s)}
                </div>
                <button onClick={() => document.getElementById('hero-form').scrollIntoView({ behavior: 'smooth' })} className="bg-[#00DC82] text-black font-bold text-xs px-6 py-2 uppercase rounded-sm hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 transform hover:-translate-y-0.5">
                    Claim Offer Now
                </button>
            </div>
        </div>
    );
};

export default UrgencyTimer;

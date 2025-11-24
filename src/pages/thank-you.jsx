import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { CheckCircle, Home, Mail, Phone } from 'lucide-react';

const ThankYou = () => {
    return (
        <>
            <Head>
                <title>Thank You - Invictus Global Tech</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>

                <div className="relative z-10 max-w-2xl w-full">
                    {/* Success Card */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-[#00DC82] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
                        <div className="relative bg-[#0F0F0F] border border-white/10 p-12 shadow-2xl backdrop-blur-sm text-center">

                            {/* Success Icon */}
                            <div className="flex justify-center mb-8">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#00DC82] opacity-20 blur-2xl animate-pulse"></div>
                                    <CheckCircle size={80} className="text-[#00DC82] relative animate-bounce" />
                                </div>
                            </div>

                            {/* Success Message */}
                            <h1 className="text-4xl md:text-5xl font-sans font-bold text-white mb-4 uppercase tracking-tight">
                                Thank You!
                            </h1>

                            <div className="border-l-2 border-[#00DC82] pl-6 py-4 mb-8 bg-gradient-to-r from-[#00DC82]/5 to-transparent inline-block">
                                <p className="text-xl text-gray-300 mb-2">
                                    Your request has been received successfully.
                                </p>
                                <p className="text-sm text-gray-400">
                                    Our team will contact you within <span className="text-[#00DC82] font-bold">10 minutes</span>.
                                </p>
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-4 mb-8">
                                <div className="bg-[#1a1a1a] border border-white/5 p-4 hover:border-[#00DC82]/30 transition-colors">
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <Phone size={20} className="text-[#00DC82] flex-shrink-0" />
                                        <div className="text-left">
                                            <p className="text-xs text-gray-500 uppercase tracking-wider">Call Us</p>
                                            <p className="text-sm font-bold">+91 6369 757 054</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#1a1a1a] border border-white/5 p-4 hover:border-[#00DC82]/30 transition-colors">
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <Mail size={20} className="text-[#00DC82] flex-shrink-0" />
                                        <div className="text-left">
                                            <p className="text-xs text-gray-500 uppercase tracking-wider">Email Us</p>
                                            <p className="text-sm font-bold">contact@invictusglobaltech.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Back to Home Button */}
                            <Link href="/">
                                <button className="w-full bg-[#00DC82] text-black font-bold uppercase tracking-wider py-4 hover:bg-[#00b368] hover:shadow-[0_0_20px_rgba(0,220,130,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                                    <Home size={20} />
                                    Back to Home
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ThankYou;

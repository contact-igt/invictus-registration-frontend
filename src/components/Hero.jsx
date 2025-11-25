import React, { useState } from 'react';
import { Zap, Check, Shield, Lock } from 'lucide-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';

const Hero = ({selectedPlan}) => {
    const router = useRouter();
    const [formStatus, setFormStatus] = useState('idle');
    const [error, setError] = useState('');

    const formik = useFormik({
        initialValues: {
            name: "",
            mobile: "",
            email: "",
            business_type: "",
            choose_plan: selectedPlan || "",
        },
        enableReinitialize: true, 
        validationSchema: Yup.object({
            name: Yup.string().required("Name required"),
            mobile: Yup.string()
                .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
                .required("Mobile required"),
            email: Yup.string().email("Invalid email address"),
            business_type: Yup.string().required("Business type required"),
            choose_plan: Yup.string().required("Plan selection is required"),
        }),
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: async (values) => {
            setFormStatus("submitting");
            setError('');
            try {
                const ipResponse = await fetch("https://api.ipify.org?format=json");
                const ipData = await ipResponse.json();

                const newFormData = {
                    name: values.name,
                    mobile: values.mobile,
                    email: values.email,
                    business_type: values.business_type,
                    choose_plan: values.choose_plan,
                    ip_address: ipData.ip,
                    utm_source: localStorage.getItem("utm_source"),
                };

                await fetch(
                    "https://script.google.com/macros/s/AKfycbwFSQeofQcEb6v6-360Ak1sOn5uMcWEFsdAryMSlPhxt7c5EXgJZFmzK1cEOfQVVMzm/exec",
                    {
                        method: "POST",
                        mode: "no-cors",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                        body: new URLSearchParams(newFormData).toString(),
                    }
                );

                formik.resetForm();
                setFormStatus("success");
                router.push("/thank-you");
            } catch (err) {
                setError("Something went wrong. Please try again.");
                setFormStatus("idle");
            }
        },
    });

    return (
        <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden bg-[#050505]">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] animate-[pulse_8s_infinite]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">

                    <div className="text-left">
                        <div className="flex items-center gap-2 text-[#00DC82] text-xs font-bold uppercase tracking-[0.2em] mb-6 animate-fade-in-up">
                            <span className="w-8 h-[2px] bg-[#00DC82]"></span>
                            Fast Track Delivery
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-sans font-bold text-white leading-[1] mb-6 tracking-tight">
                            GET A FULLY <br />
                            CUSTOMIZED <br />
                            <span className="text-[#00DC82] inline-block hover:scale-105 transition-transform duration-300 origin-left cursor-default">WEBSITE.</span>
                        </h1>

                        <div className="border-l-2 border-[#00DC82] pl-6 py-2 mb-8 bg-gradient-to-r from-[#00DC82]/5 to-transparent hover:from-[#00DC82]/10 transition-all duration-500">
                            <h3 className="text-white font-bold text-lg mb-1 flex items-center gap-2">
                                <Zap size={20} className="text-[#00DC82] animate-pulse" /> Too Good To Be True?
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Includes <span className="text-white font-bold">Free Hosting</span> & <span className="text-white font-bold">6 Months Maintenance</span>.
                            </p>
                        </div>

                        <h2 className="text-xl font-light text-gray-400 mb-8 max-w-md">
                            Tailored to your needs in just <span className="text-white font-bold underline decoration-[#00DC82] decoration-2 underline-offset-4 hover:text-[#00DC82] transition-colors cursor-default">2 Days.</span>
                        </h2>

                        {/* Scarcity Tracker */}
                        <div className="mb-10 group">
                            <div className="flex justify-between items-end mb-2 max-w-sm">
                                <span className="text-[10px] font-bold uppercase text-white tracking-widest group-hover:text-[#00DC82] transition-colors">Offer Ends Nov 30</span>
                                <span className="text-[10px] text-[#00DC82] font-mono bg-[#00DC82]/10 px-2 py-0.5 rounded">3/10 Claimed</span>
                            </div>
                            <div className="w-full max-w-sm bg-[#2a2a2a] h-1.5 overflow-hidden rounded-full">
                                <div className="bg-[#00DC82] h-full shadow-[0_0_10px_#00DC82]" style={{ width: '30%' }}></div>
                            </div>
                            <p className="text-xs text-gray-400 mt-3 flex items-center">
                                <Shield size={12} className="text-[#00DC82] mr-2" /> Only <strong>7 spots left</strong> for this package.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 text-sm text-gray-400 font-medium">
                            {[
                                "Mobile Responsive & Fast Loading",
                                "SEO Optimized Structure",
                                "100% Custom Code"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                                    <Check size={16} className="text-[#00DC82]" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div id="hero-form" className="relative mt-8 lg:mt-0 group">
                        <div className="absolute -inset-1 bg-[#00DC82] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
                        <div className="relative bg-[#0F0F0F] border border-white/10 p-8 shadow-2xl backdrop-blur-sm">
                            <div className="absolute top-0 right-0 bg-[#00DC82] text-black text-[10px] font-bold px-3 py-1 uppercase tracking-wider transform translate-x-2 -translate-y-2 shadow-lg animate-bounce">
                                7 Spots Left
                            </div>
                            <h3 className="text-2xl font-sans font-bold text-white mb-2 uppercase tracking-tight">Claim Your Spot</h3>
                            <p className="text-gray-400 text-sm mb-8">Lock in the Free Hosting offer before it expires.</p>

                            <form className="space-y-5" onSubmit={formik.handleSubmit}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className="w-full bg-[#1a1a1a] border border-white/10 text-white p-3 text-sm focus:outline-none focus:border-[#00DC82] focus:bg-[#00DC82]/5 transition-all duration-300"
                                            placeholder="John Doe"
                                        />
                                        {formik.touched.name && formik.errors.name && (
                                            <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            name="mobile"
                                            value={formik.values.mobile}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className="w-full bg-[#1a1a1a] border border-white/10 text-white p-3 text-sm focus:outline-none focus:border-[#00DC82] focus:bg-[#00DC82]/5 transition-all duration-300"
                                            placeholder="9876543210"
                                        />
                                        {formik.touched.mobile && formik.errors.mobile && (
                                            <p className="text-red-500 text-xs mt-1">{formik.errors.mobile}</p>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="w-full bg-[#1a1a1a] border border-white/10 text-white p-3 text-sm focus:outline-none focus:border-[#00DC82] focus:bg-[#00DC82]/5 transition-all duration-300"
                                        placeholder="john@company.com"
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Business Type</label>
                                    <select
                                        name="business_type"
                                        value={formik.values.business_type}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="w-full bg-[#1a1a1a] border border-white/10 text-white p-3 text-sm focus:outline-none focus:border-[#00DC82] focus:bg-[#00DC82]/5 transition-all duration-300"
                                    >
                                        <option value="">Select Business Type</option>
                                        <option>E-commerce</option>
                                        <option>Corporate / Business</option>
                                        <option>Portfolio / Personal</option>
                                        <option>Landing Page</option>
                                        <option>Other</option>
                                    </select>
                                    {formik.touched.business_type && formik.errors.business_type && (
                                        <p className="text-red-500 text-xs mt-1">{formik.errors.business_type}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Choose Your Plan</label>
                                    <select
                                        name="choose_plan"
                                        value={formik.values.choose_plan}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="w-full bg-[#1a1a1a] border border-white/10 text-white p-3 text-sm focus:outline-none focus:border-[#00DC82] focus:bg-[#00DC82]/5 transition-all duration-300"
                                    >
                                        <option value="">Select Plan</option>
                                        <option>Starter</option>
                                        <option>Business</option>
                                        <option>Premium</option>
                                    </select>
                                    {formik.touched.choose_plan && formik.errors.choose_plan && (
                                        <p className="text-red-500 text-xs mt-1">{formik.errors.choose_plan}</p>
                                    )}
                                </div>
                                {error && (
                                    <p className="text-red-500 text-sm text-center">{error}</p>
                                )}
                                <button
                                    type="submit"
                                    disabled={formStatus === 'submitting'}
                                    className="w-full bg-[#00DC82] text-black font-bold uppercase tracking-wider py-4 mt-4 hover:bg-[#00b368] hover:shadow-[0_0_20px_rgba(0,220,130,0.4)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {formStatus === 'submitting' ? 'Submitting...' : 'Request Callback'}
                                </button>
                                <p className="text-[10px] text-center text-gray-500 mt-4 uppercase tracking-wider flex justify-center items-center gap-1">
                                    <Lock size={10} className="text-[#00DC82]" /> No spam. 100% Secure.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

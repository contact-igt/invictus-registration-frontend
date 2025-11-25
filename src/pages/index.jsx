import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ValueProps from '../components/ValueProps';
import RecentWorks from '../components/RecentWorks';
import Testimonials from '../components/Testimonials';
import ClientLogoStrip from '../components/ClientLogoStrip';
import Pricing from '../components/Pricing';
import Timeline from '../components/Timeline';
import ComparisonTable from '../components/ComparisonTable';
import TargetAudience from '../components/TargetAudience';
import ProcessSteps from '../components/ProcessSteps';
import FAQ from '../components/FAQ';
import UrgencyTimer from '../components/UrgencyTimer';
import Footer from '../components/Footer';

import Head from 'next/head';

export default function Home() {
    const [selectedPlan, setSelectedPlan] = useState(null);
    return (
        <div className="font-sans bg-[#050505] text-white selection:bg-[#00DC82] selection:text-black">
            <Head>
                <title>Invictus Global Tech</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="bg-[#00DC82] text-black py-2 text-center text-xs font-bold tracking-widest uppercase">
                <span className="inline-block w-2 h-2 rounded-full bg-black mr-2 animate-pulse"></span>
                Limited Offer: Free Hosting & 6 Months Maintenance! Valid till Nov 30.
            </div>

            <Navbar />
            <Hero selectedPlan={selectedPlan} />
            <ValueProps />
            <RecentWorks />
            <Testimonials />
            <ClientLogoStrip />
            <Pricing setSelectedPlan={setSelectedPlan} />
            <Timeline />
            <ComparisonTable />
            <TargetAudience />
            <ProcessSteps />
            <FAQ />
            <UrgencyTimer />
            <Footer />
        </div>
    );
}

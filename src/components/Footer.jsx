import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-black py-24 border-t border-white/10 text-gray-500 text-xs uppercase tracking-wider mb-20 md:mb-0">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <Link href="/" className="flex items-center gap-3 group mb-2 justify-center md:justify-start">
                        <img
                            src="/assets/invictus_logo.png"
                            alt="Invictus Global Tech"
                            className="h-8 w-auto invert hue-rotate-180 saturate-150 brightness-90 transition-all duration-300"
                        />
                    </Link>
                    <p>© 2025 Invictus Global Tech. All rights reserved.</p>
                </div>
                <div className="flex gap-6 items-center">
                    <a href="https://www.linkedin.com/company/invictus-global-tech/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <img src="/assets/social-media.png" alt="LinkedIn" className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity" />
                    </a>
                    <a href="https://www.facebook.com/people/Invictus-Global-Tech/61557394517942/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <img src="/assets/social.png" alt="Facebook" className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity" />
                    </a>
                    <a href="https://www.instagram.com/invictusglobaltech/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <img src="/assets/instagram.png" alt="Instagram" className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity" />
                    </a>
                    <a href="https://www.youtube.com/@invictusglobaltech-offl" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <img src="/assets/youtube.png" alt="YouTube" className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

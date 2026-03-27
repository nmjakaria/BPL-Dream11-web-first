import React from 'react';
import FooterLogo from '../../assets/logo-footer.png';
import BgShadow from '../../assets/bg-shadow.png';

const Footer = () => {
    return (
        <footer className="relative bg-[#06091A] pt-48 pb-10 mt-64">
            {/* Floating Newsletter Card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-6xl">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-4xl border border-white/20">
                    <div
                        className="bg-white rounded-3xl py-16 px-6 text-center shadow-xl"
                        style={{
                            backgroundImage: `url(${BgShadow})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <h2 className="text-3xl font-bold text-black mb-2">Subscribe to our Newsletter</h2>
                        <p className="text-gray-500 mb-8 font-medium">Get the latest updates and news right in your inbox!</p>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="input input-bordered w-full max-w-sm rounded-xl text-black"
                            />
                            <button className="btn border-none rounded-xl px-8 bg-linear-to-r from-pink-400 to-yellow-500 text-black font-bold normal-case">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-6">
                {/* Footer Logo */}
                <div className="flex justify-center mb-16">
                    <img src={FooterLogo} alt="Cricket Logo" className="w-32" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white/70">
                    {/* About Us */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">About Us</h3>
                        <p className="max-w-xs leading-relaxed">
                            We are a passionate team dedicated to providing the best services to our customers.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors">• Home</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">• Services</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">• About</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">• Contact</a></li>
                        </ul>
                    </div>

                    {/* Subscribe */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Subscribe</h3>
                        <p className="mb-6">Subscribe to our newsletter for the latest updates.</p>
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="input input-bordered rounded-l-xl rounded-r-none w-full bg-white text-black"
                            />
                            <button className="btn rounded-l-none rounded-r-xl border-none bg-linear-to-r from-yellow-500 to-pink-400 text-black font-bold normal-case px-6">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-[white] border-t border-white/10 mt-16 pt-8 text-center text-sm">
                    <p>©2024 Your Company All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
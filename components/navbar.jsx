"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import Container from "../Layout/container";

export default function Navbar() {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (e, name) => {
        e.preventDefault();
        setOpenDropdown((prev) => (prev === name ? null : name));
    };

    return (
        <nav className="fixed  w-full transition-all duration-300 bg-sky-50 backdrop-blur-sm">
            <Container>
                <div className="flex justify-between items-center h-12 sm:h-18 ">
                    <div>
                        <Link href="/PAGES/insurance-investment" aria-label="MAXIN home">
                            <Image
                                src="/images/MAXIN.png"
                                width={300}
                                height={100}
                                alt="Logo"
                                className="h-10 sm:h-12 md:h-14 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Desktop nav links */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">

                        <div className="relative">
                            <Link href="/PAGES/insurance-investment" className="flex items-center gap-1 text-[#012289] hover:text-[#0056b3] font-bold text-sm lg:text-base">
                                HOME
                            </Link>
                        </div>

                        {/* Products & Services dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setOpenDropdown('products')}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <button
                                onClick={() => setOpenDropdown('products')}
                                className="flex items-center gap-1 text-[#012289] hover:text-[#0056b3] font-bold text-sm lg:text-base"
                            >
                                PRODUCT & SERVICES
                                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${openDropdown === 'products' ? 'rotate-180' : ''}`} />
                            </button>

                            <div
                                onClick={() => setOpenDropdown(null)}
                                className={`
                                    absolute top-full left-0 pt-2 min-w-64 transition-all duration-300
                                    ${openDropdown === 'products' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
                                `}
                            >
                                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                                    <Link href="/PAGES/life-variables-mutual-fund" className="block px-5 py-3 font-bold text-base text-[#012289] hover:bg-[#0056b3] hover:text-white">
                                        Life, Variable Life & Mutual Funds
                                    </Link>
                                    <Link href="/PAGES/non-lifeInsurance" className="block px-5 py-3 font-bold text-base text-[#012289] hover:bg-[#0056b3] hover:text-white">
                                        Non-Life Insurance
                                    </Link>
                                    <Link href="/PAGES/hmo-health-insurance" className="block px-5 py-3 font-bold text-base text-[#012289] hover:bg-[#0056b3] hover:text-white">
                                        HMO / Health Insurance
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link href="/PAGES/get-quote/index" className="text-[#012289] hover:text-[#0056b3] font-bold text-sm lg:text-base">GET QUOTE</Link>
                        <Link href="/PAGES/claims/index" className="text-[#012289] hover:text-[#0056b3] font-bold text-sm lg:text-base">CLAIMS</Link>

                        {/* About Us dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setOpenDropdown('about')}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <button
                                onClick={() => setOpenDropdown('about')}
                                className="flex items-center gap-1 text-[#012289] hover:text-[#0056b3] font-bold text-sm lg:text-base"
                            >
                                ABOUT 
                                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${openDropdown === 'about' ? 'rotate-180' : ''}`} />
                            </button>

                            <div
                                onClick={() => setOpenDropdown(null)}
                                className={`
                                    absolute top-full left-0 pt-2 min-w-64 transition-all duration-300
                                    ${openDropdown === 'about' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
                                `}
                            >
                                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                                    <Link href="/PAGES/about-us/who-we-are" className="block px-5 py-3 font-bold text-base text-[#012289] hover:bg-[#0056b3] hover:text-white">
                                        About Us
                                    </Link>
                                    <Link href="/PAGES/about-us/meet-our-team" className="block px-5 py-3 font-bold text-base text-[#012289] hover:bg-[#0056b3] hover:text-white">
                                        Meet Our Team
                                    </Link>
                                    <Link href="/PAGES/about-us/offices" className="block px-5 py-3 font-bold text-base text-[#012289] hover:bg-[#0056b3] hover:text-white">
                                        Offices
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Hamburger */}
                    <button
                        aria-label={mobileMenuIsOpen ? "Close menu" : "Open menu"}
                        className="md:hidden text-[#012289] hover:text-[#0056b3]"
                        onClick={() => setMobileMenuIsOpen((prev) => !prev)}
                    >
                        {mobileMenuIsOpen ? (
                            <X className="w-5 h-5 sm:w-6 sm:h-6" />
                        ) : (
                            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                        )}
                    </button>
                </div>
            </Container>

            {/* Mobile menu */}
            {mobileMenuIsOpen && (
                <div className="md:hidden bg-white backdrop-blur-lg border-t border-gray-400 animate-in slide-in-from-top duration-300">
                    <div className="px-6 py-4 sm:py-6 space-y-3 sm:space-y-4">

                        <Link
                            href="/PAGES/insurance-investment"
                            onClick={() => setMobileMenuIsOpen(false)}
                            className="block text-[#012289] hover:text-[#0056b3] font-bold text-sm"
                        >
                           HOME
                        </Link>

                        <div onMouseLeave={() => setOpenDropdown(null)}>
                            <button
                                onClick={(e) => toggleDropdown(e, 'products-mobile')}
                                className="flex items-center justify-between w-full text-[#012289] hover:text-[#0056b3] font-bold text-sm"
                            >
                                PRODUCT & SERVICES
                                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${openDropdown === 'products-mobile' ? 'rotate-180' : ''}`} />
                            </button>
                            {openDropdown === 'products-mobile' && (
                                <div className="pl-0 mt-2 space-y-2">
                                    <Link href="/PAGES/life-variables-mutual-fund" onClick={() => setMobileMenuIsOpen(false)} className="block font-bold py-2 pl-3 text-[#012289] hover:bg-[#012289] hover:text-white text-sm">
                                        Life, Variable Life & Mutual Funds
                                    </Link>
                                    <Link href="/PAGES/non-lifeInsurance" onClick={() => setMobileMenuIsOpen(false)} className="block font-bold py-2 pl-3 text-[#012289] hover:bg-[#012289] hover:text-white text-sm">
                                        Non-Life Insurance
                                    </Link>
                                    <Link href="/PAGES/hmo-health-insurance" onClick={() => setMobileMenuIsOpen(false)} className="block font-bold py-2 pl-3 text-[#012289] hover:bg-[#012289] hover:text-white text-sm">
                                        HMO / Health Insurance
                                    </Link>
                                </div>
                            )}
                        </div>  

                        <Link href="/PAGES/get-quote/index" onClick={() => setMobileMenuIsOpen(false)} className="block text-[#012289] hover:text-[#0056b3] font-bold text-sm">
                            GET QUOTE
                        </Link>

                        <Link href="/PAGES/claims/index" onClick={() => setMobileMenuIsOpen(false)} className="block text-[#012289] hover:text-[#0056b3] font-bold text-sm">
                            CLAIMS
                        </Link>

                        <div onMouseLeave={() => setOpenDropdown(null)}>
                            <button
                                onClick={(e) => toggleDropdown(e, 'about-mobile')}
                                className="flex items-center justify-between w-full text-[#012289] hover:text-[#0056b3] font-bold text-sm"
                            >
                                ABOUT 
                                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${openDropdown === 'about-mobile' ? 'rotate-180' : ''}`} />
                            </button>
                            {openDropdown === 'about-mobile' && (
                                <div className="pl-0 mt-2 space-y-2">
                                    <Link href="/PAGES/about-us/who-we-are" onClick={() => setMobileMenuIsOpen(false)} className="block font-bold py-2 pl-3 text-[#012289] hover:bg-[#012289] hover:text-white text-sm">
                                        About Us
                                    </Link>
                                    <Link href="/PAGES/about-us/meet-our-team" onClick={() => setMobileMenuIsOpen(false)} className="block font-bold py-2 pl-3 text-[#012289] hover:bg-[#012289] hover:text-white text-sm">
                                        Meet Our Team
                                    </Link>
                                    <Link href="/PAGES/about-us/offices" onClick={() => setMobileMenuIsOpen(false)} className="block font-bold py-2 pl-3 text-[#012289] hover:bg-[#012289] hover:text-white text-sm">
                                        Offices
                                    </Link>
                                </div>
                            )}
                        </div>  
                    </div>
                </div>
            )}
        </nav>
    );
}
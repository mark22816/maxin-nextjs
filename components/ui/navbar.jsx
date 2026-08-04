"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import MAXINlogo from "../../image/MAXIN.png";
import Container from "../../Layout/container";

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
                        <Image
                            src={MAXINlogo}
                            alt="Logo"
                            className="h-10 sm:h-12 md:h-14 w-auto"
                        />
                    </div>

                    {/* Desktop nav links */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">

                        <div className="relative">
                            <Link href="/" className="flex items-center gap-1 text-[#012289] hover:text-[#0056b3] font-bold text-sm lg:text-base">
                                HOME
                            </Link>
                        </div>

                        {/* Products & Services dropdown */}
                        <div className="relative">
                            <button
                                onClick={(e) => toggleDropdown(e, 'products')}
                                className="flex items-center gap-1 text-[#012289] hover:text-[#0056b3] font-bold text-sm lg:text-base"
                            >
                                PRODUCT & SERVICES
                                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${openDropdown === 'products' ? 'rotate-180' : ''}`} />
                            </button>

                            <div
                                className={`
                                    absolute top-full left-0 mt-2 min-w-64 bg-white shadow-xl rounded-lg
                                    overflow-hidden transition-all duration-300
                                    ${openDropdown === 'products' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
                                `}
                            >
                                <Link href="/life-variables-mutual-fund" className="block px-5 py-3 font-bold text-sm text-[#012289] hover:bg-[#0056b3] hover:text-white">
                                    Life, Variable Life & Mutual Funds
                                </Link>
                                <Link href="/non-lifeInsurance" className="block px-5 py-3 font-bold text-sm text-[#012289] hover:bg-[#0056b3] hover:text-white">
                                    Non-Life Insurance
                                </Link>
                                <Link href="/hmo-health-insurance" className="block px-5 py-3 font-bold text-sm text-[#012289] hover:bg-[#0056b3] hover:text-white">
                                    HMO / Health Insurance
                                </Link>
                            </div>
                        </div>

                        <a href="#get-quote" className="text-[#012289] hover:text-[#0056b3] font-bold text-sm lg:text-base">GET QUOTE</a>
                        <a href="#claims" className="text-[#012289] hover:text-[#0056b3] font-bold text-sm lg:text-base">CLAIMS</a>

                        {/* Career */}
                        <a href="#career" className="text-[#012289] hover:text-[#0056b3] font-bold text-sm lg:text-base">
                            CAREER
                        </a>
                    </div>

                    {/* Hamburger */}
                    <button
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
                            href="/"
                            onClick={() => setMobileMenuIsOpen(false)}
                            className="block text-[#012289] hover:text-[#0056b3] font-bold text-sm"
                        >
                           HOME
                        </Link>

                        <div>
                            <button
                                onClick={(e) => toggleDropdown(e, 'products-mobile')}
                                className="flex items-center justify-between w-full text-[#012289] hover:text-[#0056b3] font-bold text-sm"
                            >
                                PRODUCT & SERVICES
                                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${openDropdown === 'products-mobile' ? 'rotate-180' : ''}`} />
                            </button>
                            {openDropdown === 'products-mobile' && (
                                <div className="pl-0 mt-2 space-y-2">
                                    <Link href="/life-variables-mutual-fund" onClick={() => setMobileMenuIsOpen(false)} className="block font-bold py-2 pl-3 text-[#012289] hover:bg-[#012289] hover:text-white text-sm">
                                        Life, Variable Life & Mutual Funds
                                    </Link>
                                    <Link href="/non-lifeInsurance" onClick={() => setMobileMenuIsOpen(false)} className="block font-bold py-2 pl-3 text-[#012289] hover:bg-[#012289] hover:text-white text-sm">
                                        Non-Life Insurance
                                    </Link>
                                    <Link href="/hmo-health-insurance" onClick={() => setMobileMenuIsOpen(false)} className="block font-bold py-2 pl-3 text-[#012289] hover:bg-[#012289] hover:text-white text-sm">
                                        HMO / Health Insurance
                                    </Link>
                                </div>
                            )}
                        </div>

                        <a href="#get-quote" onClick={() => setMobileMenuIsOpen(false)} className="block text-[#012289] hover:text-[#0056b3] font-bold text-sm">
                            GET QUOTE
                        </a>

                        <a href="#claims" onClick={() => setMobileMenuIsOpen(false)} className="block text-[#012289] hover:text-[#0056b3] font-bold text-sm">
                            CLAIMS
                        </a>

                        {/* Career (mobile) */}
                        <a href="#career" onClick={() => setMobileMenuIsOpen(false)} className="block text-[#012289] hover:text-[#0056b3] font-bold text-sm">
                            CAREER
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
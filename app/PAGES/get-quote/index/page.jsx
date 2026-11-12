"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../../../../Layout/container";
import { IMAGES } from "../../../../constants/images";
import LifeMutualFunds from "../../../../components/get_quote_form/life_insurance/life_mutual_funds";
import  HmoHealthInsurance from "../hmo_health_insurance/page";
import NoneLifeInsurance from "../non-life-insurance/page";


export default function GetQuote() {
    const [active, setActive] = useState("life");

    const links = [
        { key: "life", label: "Life, Variable Life & Mutual Funds" },
        { key: "nonlife", label: "Non-Life Insurance" },
        { key: "hmo", label: "HMO / Health Insurance" },
    ];

    // Add the other forms here as you build them
    const forms = {
        life: <LifeMutualFunds />,
        nonlife: <NoneLifeInsurance />,
        hmo: <HmoHealthInsurance/>,
    };

    return (
        <>
        
            {/* Hero */}
            <section className="relative flex min-h-[60vh] w-full items-center justify-center overflow-hidden mt-20 lg:mt-25">
                <div className="absolute inset-0">
                    <Image
                        src={IMAGES.GetQuote}
                        alt="get quote"
                        fill
                        priority
                        quality={75}
                        sizes="auto"
                        className="object-cover object-center"
                    />

                    {/* Dark overlay: solid on mobile, gradient on desktop */}
                    <div className="absolute inset-0 bg-[#003b63]/75 lg:hidden" />
                    <div className="absolute inset-0 hidden bg-gradient-to-r from-[#003b63]/95 via-[#0056b3]/80 to-[#003b63]/40 lg:block" />

                    {/* Soft glow effects */}
                    <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
                    <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
                </div>

                <div className="w-full">
                    <Container>
                        <div className="relative z-10 py-12 text-center lg:w-1/2 lg:pr-1">
                            <h2 className="mb-6 text-4xl sm:text-5xl text-center  font-semibold leading-tight tracking-tight text-white">
                                <span className="block">Get Insurance Solutions</span>
                                <span className="block ">Tailored to Your Needs</span>
                            </h2>

                            <p className="mx-auto mb-8 max-w-xl text-center text-[18px] leading-8 text-white lg:mx-0 lg:text-justify">
                                Fill out our quick and easy forms to apply for insurance or request a service. Our team will guide you every step of the way, ensuring you have the protection you need.
                            </p>
                        </div>
                    </Container>
                </div>
            </section>

            {/* Buttons: switch the form below */}
            <section className="w-full bg-white py-10 ">
                <Container>
                    <div className="grid grid-cols-1 gap-6 justify-center sm:grid-cols-1 lg:grid-cols-3 px-20">
                        {links.map((link) => (
                            <button
                                key={link.key}
                                type="button"
                                onClick={() => setActive(link.key)}
                                className={`rounded-md border px-5 py-3 text-center text-sm font-medium text-white transition-colors duration-300 hover:border-[#1d688b] hover:bg-[#1d688b] ${
                                    active === link.key
                                        ? "border-[#1d688b] bg-[#1d688b]"
                                        : "border-[#012289] bg-[#012289]"
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </Container>
            </section>

            {forms[active]}
        </>
    );
}
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
            <section className="relative min-h-[60vh] w-full overflow-hidden bg-cover bg-center bg-no-repeat mt-20 lg:mt-25 lg:flex lg:items-center">
                <div className="relative h-64 w-full sm:h-80 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto">
                    <Image
                        src={IMAGES.GetQuote}
                        alt="get quote"
                        fill
                        priority
                        quality={75}
                        sizes="auto"
                        className="object-cover object-center"
                    />
                    {/* White gradient: fades up from the bottom on mobile, left to right on desktop */}
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-white via-white/30 to-transparent lg:bg-linear-to-r lg:from-white lg:to-transparent" />
                </div>

                <div className="w-full justify-center">
                    <Container>
                        <div className="relative z-10 py-12 lg:w-1/2 lg:pr-12 text-center">
                            <h1 className="mb-6 text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#1d688b] ">
                                Get Insurance Solution Tailored to your Needs
                            </h1>

                            <p className="text-[18px] leading-snug text-gray-700 md:text-lg">
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
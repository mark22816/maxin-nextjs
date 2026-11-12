"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldCheck, HeartHandshake, Stethoscope, CheckCircle2 } from "lucide-react";
import Container from "../../../../Layout/container";
import { IMAGES } from "../../../../constants/images";
import ClaimsAccordion from "../non-life-claims/page";
import LifeClaims from "../life-claims/page";
import HMOClaims from "../HMO/page";

export default function GetQuote() {
    const [active, setActive] = useState("nonlife");

    const links = [
        {
            key: "nonlife",
            label: "Non-Life Claims",
            hint: "Property, fire, motor and more",
            Icon: ShieldCheck,
        },
        {
            key: "life",
            label: "Life Claims",
            hint: "Benefits for you and your family",
            Icon: HeartHandshake,
        },
        {
            key: "hmo",
            label: "HMO",
            hint: "Health and medical coverage",
            Icon: Stethoscope,
        },
    ];

    // Content shown below the buttons (add the HMO page here when it's ready)
    const content = {
        nonlife: (
            <Container>
                <ClaimsAccordion />
            </Container>
        ),
        life: <LifeClaims />,
        hmo: <HMOClaims />
    };

    return (
        <>
            {/* Hero */}
            <section className="relative flex min-h-[60vh] w-full items-center justify-center overflow-hidden mt-20 lg:mt-25">
                <div className="absolute inset-0">
                    <Image
                        src={IMAGES.Claims}
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
                        <div className="relative z-10 py-12 text-center lg:w-1/2 lg:pr-12">
                            <h1 className="mb-6 text-4xl sm:text-5xl font-semibold text-white">
                                Claims
                            </h1>

                            <p className="mx-auto mb-8 max-w-xl text-center text-base leading-8 text-white sm:text-[18px] lg:mx-0 lg:text-justify">
                                <span className="block">
                                    Insurance claims can be complex, but we simplify the process for you. Whether it's Life, HMO, Non-Life or Health Insurance, we ensure a smooth experience.
                                    From securing life insurance benefits to settling property damage claims swiftly, we're dedicated to efficiency and professionalism.
                                </span>
                                <span className="block mt-4">
                                    Trust us with your insurance needs; your claims are in capable hands. Don't wait until it's too late. Secure your future with MAXIN Insurance today!
                                </span>
                            </p>
                        </div>
                    </Container>
                </div>
            </section>

            {/* Buttons: switch the content below */}
            <section className="w-full bg-white py-10">
                <Container>
                    <div className="flex flex-col items-center py-12 text-center">
                        <h2 className="text-3xl sm:text-4xl font-extrabold  tracking-wide text-[#1a9cc4]">
                            Claims Requirements
                        </h2>
                        
                    </div>

                    <div
                        role="tablist"
                        aria-label="Claim type"
                        className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-6"
                    >
                        {links.map(({ key, label, hint, Icon }) => {
                            const isActive = active === key;
                            return (
                                <button
                                    key={key}
                                    type="button"
                                    role="tab"
                                    aria-selected={isActive}
                                    onClick={() => setActive(key)}
                                    className={`relative flex min-h-24 cursor-pointer items-center gap-4 rounded-2xl border-2 p-5 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1a9cc4]/40 active:scale-[0.98] ${
                                        isActive
                                            ? "border-[#012289] bg-[#012289]/5 shadow-md"
                                            : "border-gray-200 bg-white hover:border-[#1a9cc4] hover:bg-[#1a9cc4]/5"
                                    }`}
                                >
                                    <span
                                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-colors duration-200 ${
                                            isActive
                                                ? "bg-[#012289] text-white"
                                                : "bg-[#1a9cc4]/10 text-[#1a9cc4]"
                                        }`}
                                    >
                                        <Icon className="h-7 w-7" strokeWidth={1.75} />
                                    </span>

                                    <span className="flex flex-col">
                                        <span
                                            className={`text-base font-semibold ${
                                                isActive ? "text-[#012289]" : "text-gray-800"
                                            }`}
                                        >
                                            {label}
                                        </span>
                                        <span className="mt-0.5 text-sm text-gray-500">
                                            {hint}
                                        </span>
                                    </span>

                                    {isActive && (
                                        <CheckCircle2
                                            className="absolute right-4 top-4 h-5 w-5 text-[#012289]"
                                            aria-hidden="true"
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </Container>
            </section>

            <section className="w-full bg-white py-10 mt-20">
                {content[active]}
            </section>
        </>
    );
}
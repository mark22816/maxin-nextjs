"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldCheck, HeartHandshake, Stethoscope, CheckCircle2 } from "lucide-react";
import Container from "../../../../Layout/container";
import { IMAGES } from "../../../../constants/images";
import ClaimsAccordion from "../non-life-claims/page";

export default function GetQuote() {
    const [active, setActive] = useState("life");

    const links = [
        {
            key: "life",
            label: "Non-Life Claims",
            hint: "Property, fire, motor and more",
            Icon: ShieldCheck,
        },
        {
            key: "nonlife",
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

    return (
        <>
            {/* Hero */}
            <section className="relative min-h-[60vh] w-full overflow-hidden bg-cover bg-center bg-no-repeat mt-20 lg:mt-25 lg:flex lg:items-center">
                <div className="relative h-64 w-full sm:h-80 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto">
                    <Image
                        src={IMAGES.Claims}
                        alt="get quote"
                        fill
                        priority
                        quality={75}
                        sizes="auto"
                        className="object-cover object-center"
                    />
                    {/* White gradient: fades up from the bottom on mobile, left to right on desktop */}
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-white via-white/85 to-transparent lg:bg-linear-to-r lg:from-white lg:to-transparent" />
                </div>

                <div className="w-full justify-center">
                    <Container>
                        <div className="relative z-10 py-12 lg:w-1/2 lg:pr-12 text-center">
                            <h1 className="mb-6 text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#1d688b] ">
                                Claims
                            </h1>

                            <p className="text-justify text-base sm:text-lg leading-8 max-w-xl mx-auto lg:mx-0 mb-8 text-gray-700 ">
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

            {/* Buttons: switch the form below */}
            <section className="w-full bg-white py-10">
                <Container>
                    <div className="flex flex-col items-center py-12 text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1d688b]">
                            Claims Requirements
                        </h2>
                        <p className="mt-4 max-w-md text-base text-gray-600">
                            What type of claim are you filing? Tap one to see what you need.
                        </p>
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
                <Container>
                    <ClaimsAccordion />
                </Container>
            </section>
        </>
    );
}
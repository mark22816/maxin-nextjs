"use client";


import Container from "../../../Layout/container";
import Image from "next/image";


const partners = [
  { src: "/images/intellicare.png", alt: "Intellicare" },
  { src: "/images/maxicare.png", alt: "Maxicare" },
  { src: "/images/medicard.png", alt: "Medicard" },
  { src: "/images/philcare.png", alt: "PhilCare" },
  { src: "/images/IMS.png", alt: "IMS" },
  { src: "/images/AVEGA.png", alt: "Avega" },
];

// Duplicate logos for seamless marquee
const marqueeLogos = [...partners, ...partners];

/* -------------------------------------------------------------------------- */
/*                                    HERO                                    */
/* -------------------------------------------------------------------------- */



/* -------------------------------------------------------------------------- */
/*                              PARTNERS MARQUEE                              */
/* -------------------------------------------------------------------------- */

export default function Content() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#f5faff] to-white py-14 sm:py-16 lg:py-24">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#1a6fa0]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-400/5 blur-3xl" />

      <Container className="relative flex w-full flex-col items-center">
        {/* Section Heading */}
        <div className="mb-10 text-center sm:mb-14">
          <h3 className="text-[clamp(24px,4vw,38px)] font-bold leading-tight text-[#2c7ba3]">
            Our HMO / Health Insurance Partners
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            We partner with trusted health insurance providers to deliver
            dependable protection and flexible solutions tailored to your needs.
          </p>
        </div>

        {/* Logo Marquee */}
        <div className="relative w-full">
          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#f8fcff] to-transparent sm:w-32" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#f8fcff] to-transparent sm:w-32" />

          {/* Marquee */}
          <div
            className="group overflow-hidden py-5"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <div
              className="
                flex w-max items-center gap-5
                animate-[marquee_28s_linear_infinite]
                group-hover:[animation-play-state:paused]
              "
              role="list"
            >
              {marqueeLogos.map((partner, index) => {
                const isDuplicate = index >= partners.length;

                return (
                  <div
                    key={`${partner.alt}-${index}`}
                    role="listitem"
                    aria-hidden={isDuplicate}
                    className="
                      group/card flex h-28 w-44 shrink-0
                      items-center justify-center
                      rounded-2xl
                      border border-[#1a6fa0]/10
                      bg-white/80
                      px-6
                      shadow-[0_8px_30px_rgba(20,80,120,0.06)]
                      backdrop-blur-sm
                      transition-all duration-500
                      hover:-translate-y-1
                      hover:border-[#1a6fa0]/20
                      hover:shadow-[0_15px_35px_rgba(20,80,120,0.12)]
                      sm:h-32 sm:w-52
                    "
                  >
                    <Image
                      src={partner.src}
                      alt={isDuplicate ? "" : `${partner.alt} logo`}
                      width={180}
                      height={80}
                      className="
                        h-12 w-auto object-contain
                        transition-all duration-500
                        group-hover/card:opacity-100
                        group-hover/card:grayscale-0
                        sm:h-18
                      "
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-8 flex items-center gap-3 text-center">
          <div className="hidden h-px w-10 bg-gray-200 sm:block" />
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
            Trusted Networks
          </p>
          <div className="hidden h-px w-10 bg-gray-200 sm:block" />
        </div>
      </Container>
    </section>
  );
}

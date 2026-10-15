"use client";

import Image from "next/image";

import {
  FaUmbrella,
  FaCarSide,
  FaHeartbeat,
  FaHandshake,
} from "react-icons/fa";


import Container from "../../../Layout/container";

const productRows = [
  {
    label: "Life, Variable Life & Mutual Funds",
    icon: FaUmbrella,
    description:
      "Solutions designed to help protect your loved ones and build your financial future.",
    partners: [
      { src: "/images/AXA Logo.png", alt: "AXA Logo" },
      { src: "/images/FAMI.png", alt: "FAMI Logo" },
    ],
  },
  {
    label: "Non-Life Insurance",
    icon: FaCarSide,
    description:
      "Reliable protection for your assets, business, vehicles, and other valuable investments.",
    partners: [
      { src: "/images/AXA Logo.png", alt: "AXA Logo" },
      { src: "/images/pioneer_logo.png", alt: "Pioneer Logo" },
      { src: "/images/Bethel.png", alt: "Bethel Logo" },
      { src: "/images/Malayan.png", alt: "Malayan Insurance Logo" },
      { src: "/images/BPIMS.png", alt: "BPI MS Logo" },
      { src: "/images/stronghold.png", alt: "Stronghold Logo" },
      { src: "/images/prodencial.png", alt: "Prudential Logo" },
    ],
  },
  {
    label: "HMO / Health Insurance",
    icon: FaHeartbeat,
    live: true,
    description:
      "Flexible healthcare options that help you and your family access quality care with confidence.",
    partners: [
      { src: "/images/intellicare.png", alt: "Intellicare Logo" },
      { src: "/images/maxicare.png", alt: "Maxicare Logo" },
      { src: "/images/medicard.png", alt: "Medicard Logo" },
      { src: "/images/AVEGA.png", alt: "Avega Logo" },
      { src: "/images/philcare.png", alt: "PhilCare Logo" },
      { src: "/images/IMS.png", alt: "IMS Logo" },
    ],
  },
  {
    label: "Consulting & Advisory Services",
    icon: FaHandshake,
    description:
      "Professional guidance and strategic solutions to support your business and financial goals.",
    partners: [
      { src: "/images/Consulting.png", alt: "Machica Group Consulting Logo" },
      { src: "/images/pma.png", alt: "PMA Logo" },
      { src: "/images/RFP.webp", alt: "RFP Logo" },
    ],
  },
];




export default function ProductsAndPartners() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f4f9fc] via-white to-[#eef6fa] py-14 md:py-20">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#14678d]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#012289]/5 blur-3xl" />

      <Container>
        <div className="relative">
          {/* HEADER */}
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            

            <h2 className="text-3xl font-extrabold tracking-tight text-[#012289] sm:text-4xl lg:text-5xl">
              Products, Services &{" "}
              <span className="text-[#14678d]">Trusted Partners</span>
            </h2>

            
          </div>

          {/* PRODUCT CARDS */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {productRows.map((row) => {
              const Icon = row.icon;

              return (
                <div
                  key={row.label}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
                >
                  {/* Top accent */}
                  <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#012289] via-[#14678d] to-[#5aa9c9]" />

                  {/* Category */}
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#14678d]/10 transition-all duration-300 group-hover:bg-[#14678d]">
                      <Icon
                        className={`text-2xl text-[#14678d] transition-colors duration-300 group-hover:text-white ${
                          row.live ? "animate-heartbeat" : ""
                        }`}
                      />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold leading-snug text-[#012289] sm:text-xl">
                        {row.label}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        {row.description}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px bg-gray-100" />

                  {/* Partners */}
                  <div>
                    <div className="mb-5 flex items-center gap-3">
                      <span className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">
                        Trusted Partners
                      </span>

                      <div className="h-px flex-1 bg-gray-100" />
                    </div>

                    <div className="flex min-h-[72px] flex-wrap items-center justify-center gap-x-7 gap-y-5">
                      {row.partners.map((partner) => (
                        <div
                          key={partner.alt}
                          className="flex h-14 items-center justify-center rounded-lg px-2 transition-all duration-300 hover:scale-105"
                        >
                          <Image
                            src={partner.src}
                            alt={partner.alt}
                            width={160}
                            height={80}
                            className="max-h-14 w-auto max-w-[120px] object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

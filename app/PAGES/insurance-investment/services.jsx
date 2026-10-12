"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
;
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  HeartPulse,
  ShieldCheck,
  TrendingUp, 
} from "lucide-react";
import Container from "../../../Layout/container";
import { IMAGES } from "../../../constants/images";



const servicesData = [
  {
    bg: IMAGES.service1,
    title: "Life, Variable & Mutual Funds",
    p: "Secure your future with life insurance protection while accessing investment opportunities through variable and mutual funds.",
    link: "/PAGES/life-variables-mutual-fund",
    icon: TrendingUp,
  },
  {
    bg: IMAGES.service2,
    title: "Non-life Insurance",
    p: "Protect your personal and business assets with reliable non-life insurance solutions designed around your needs.",
    link: "/PAGES/non-lifeInsurance",
    icon: ShieldCheck,
  },
  {
    bg: IMAGES.service3,
    title: "HMO / Health Insurance",
    p: "Prioritize your health and well-being with comprehensive HMO and health insurance coverage for greater peace of mind.",
    link: "/PAGES/hmo-health-insurance",
    icon: HeartPulse,
  },
  {
    bg: IMAGES.service4,
    title: "Consulting Services",
    p: "Strengthen your financial strategy with expert guidance in wealth management, asset management, and succession planning.",
    link: "/PAGES/consulting-services",
    icon: BriefcaseBusiness,
  },
];


export default function Services() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[400px] overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${IMAGES.servicesBackground})` }}
    >
      {/* Decorative background elements */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 h-[450px] w-[450px] rounded-full bg-blue-300/10 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]" />

      <Container className="relative z-10">
        {/* HEADER */}
        <div
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          className={`
            mx-auto max-w-[850px] pt-20 pb-12 text-center
            transition-all duration-1000
            ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
          `}
        >
          <h2 className="mb-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our <span className="text-white">Services</span>
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-7 text-white sm:text-lg sm:leading-8">
            Trust our knowledge and commitment to guide you through the
            changing world of insurance and investments, building a strong
            foundation for your future wealth, protection, and security.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="pb-20">
          <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {servicesData.map((item, index) => (
              <div
                key={item.title}
                style={{
                  transitionDelay: isVisible ? `${index * 120}ms` : "0ms",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className={`
                  group relative flex flex-col overflow-hidden
                  rounded border border-white/15
                  bg-white shadow-xl
                  transition-all duration-700
                  hover:-translate-y-2
                  hover:shadow-2xl
                  ${
                    isVisible
                      ? "translate-y-0 scale-100 opacity-100"
                      : "translate-y-12 scale-95 opacity-0"
                  }
                `}
              >
                {/* IMAGE */}
                <div className="relative h-[180px] w-full overflow-hidden sm:h-[190px] xl:h-[180px]">
                  <Image
                    src={item.bg}
                    alt={`${item.title} service`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* CARD BODY */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-3 min-h-[52px] text-xl font-bold leading-[1.3] text-[#17233c]">
                    {item.title}
                  </h3>

                  <p className="mb-7 flex-1 text-[15px] leading-7 text-[#607086]">
                    {item.p}
                  </p>

                  <Link
                    href={item.link}
                    className="
                      group/button inline-flex w-full items-center
                      justify-center gap-2 rounded
                      bg-[#1a9cc4] px-5 py-3.5
                      text-sm font-semibold text-white
                      transition-all duration-300
                      hover:bg-[#00196b]
                    "
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                  </Link>
                </div>

                {/* Bottom accent */}
                <div className="h-1 w-0 bg-gradient-to-r from-[#012289] to-cyan-400 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}


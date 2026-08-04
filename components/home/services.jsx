"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import serviceImage from "../../image/background.png";
import serviceImage2 from "../../image/NON-LIFE.png";
import serviceImage3 from "../../image/HMO.png";
import servicesImage4 from "../../image/CONSULTINGIMAGE.png";
import Container from "../../Layout/container";

const servicesData = [
  {
    bg: serviceImage,
    title: "Life, Variable & Mutual Funds",
    p: "Securing life insurance protection; accessing mutual funds for investment opportunities.",
    link: "/life-variables-mutual-fund",
  },
  {
    bg: serviceImage2,
    title: "Non-life Insurance",
    p: "Ensure comprehensive protection for your personal and business assets with our trusted non-life insurance solutions.",
    link: "/non-life-insurance",
  },
  {
    bg: serviceImage3,
    title: "HMO / Health Insurance",
    p: "Experience peace of mind and prioritize your well-being with our comprehensive health insurance and HMO coverage.",
    link: "/hmo-health-insurance",
  },
  {
    bg: servicesImage4,
    title: "Consulting Services",
    p: "Elevate your financial strategy with our expert consulting services in wealth, asset management, and succession.",
    link: "/consulting-services",
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            setIsVisible(true);
          }, 400);
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className=" bg-[#012289]/90">
      <Container>
        {/* Header */}
        <div
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          className={`text-center pt-[60px] pb-[60px] max-w-[700px] mx-auto md:pt-[50px] md:pb-[30px]
                      transition-all duration-1000
                      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-[clamp(28px,4vw,40px)] font-bold text-white mb-[14px]">
            Our Services
          </h2>
          <p className="text-[18px] text-justify text-white leading-[1.65] pb-4">
            Trust our knowledge and commitment to guide you through the changing world of
            insurance and investments, building a strong base for your future wealth and security.
          </p>
        </div>

        {/* Grid */}
        <div className="pb-10 sm:pb-[60px]">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 max-w-[1300px] mx-auto items-stretch">
            {servicesData.map((item, index) => (
              <div
                key={index}
                style={{
                  transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className={`flex flex-col bg-white rounded-[4px] overflow-hidden 
                           border border-[#e4e9f2] transition-all duration-[900ms]
                           hover:shadow-[0_6px_24px_rgba(0,0,0,0.15)] hover:-translate-y-1 hover:duration-200
                           ${
                             isVisible
                               ? "opacity-100 translate-y-0 scale-100"
                               : "opacity-0 translate-y-12 scale-95"
                           }`}
              >
                {/* Image */}
                <div className="w-full h-[200px] sm:h-[160px] xl:h-[200px] overflow-hidden shrink-0 relative">
                  <Image
                    src={item.bg}
                    alt={`${item.title} service illustration`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Card Body */}
                <div className="flex flex-col text-center px-6 pt-6 pb-7 flex-1 justify-between">
                  <div>
                    {/* Title */}
                    <h3
                      className="text-[20px] font-bold text-[#1a2744] leading-[1.3] mb-[14px] 
                                 min-h-[52px] flex items-center justify-center
                                 sm:text-[18px] sm:min-h-[44px]"
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[16px] text-justify text-[#5a6a80] leading-[1.6] mb-6">
                      {item.p}
                    </p>
                  </div>

                  {/* Button */}
                  <Link
                    href={item.link}
                    className="block w-full py-[13px] bg-[#1a6fa0] text-white border-none 
                                   rounded-[4px] cursor-pointer text-[15px] font-semibold 
                                   text-center transition-colors duration-200 mt-auto shrink-0 
                                   hover:bg-[#012289]"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
"use client";

import { CheckCircle2, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import aboutimage from "../../image/1.jpg";
import Container from "../../Layout/container";

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // animate only once
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden"
    >
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Left - Image */}
        <div
          className={`relative order-1 transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-12"
          }`}
        >
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#012289]/90 rounded-[10px] hidden sm:block" />
          <Image
            src={aboutimage}
            alt="About MAXIN"
            className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] rounded-[10px] object-cover shadow-xl"
          />

          {/* Floating badge */}
          <div
            className={`absolute -bottom-6 left-4 sm:left-8 bg-white rounded-lg shadow-xl px-4 sm:px-5 py-3 sm:py-4 flex items-center gap-3 transition-all duration-700 ease-out delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-[#002288]/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#002288]" />
            </div>
            <div>
              <p className="text-[16px] font-semibold text-[#002288]">Trusted Coverage</p>
              <p className="text-[14px] text-gray-500 ">Backed by top insurers</p>
            </div>
          </div>
        </div>

        {/* Right - Text */}
        <div
          className={`order-2 flex flex-col justify-center mt-6 lg:mt-0 transition-all duration-1000 ease-out delay-150 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-12"
          }`}
        >

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#002288] mb-4 leading-tight">
            Find optimal insurance solutions with MAXIN
          </h3>

          <p className="text-[16px] sm:text-[16px] lg:text-lg text-justify  text-gray-500  mb-6">
            At MAXIN, we make it easy to find great insurance in the Philippines.
            We work with top insurance companies to compare all your options.
            Trust us to help you pick the right insurance for you, so you can
            feel secure. With our expertise and support, you'll have peace of
            mind knowing you're making the best choice for your needs.
          </p>

          {/* Highlight points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              "Compare top insurers side by side",
              "Personalized coverage guidance",
              "Fast, hassle-free application",
              "Dedicated support every step",
            ].map((point, i) => (
              <div
                key={i}
                className={`flex items-start gap-2 transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isVisible ? `${300 + i * 120}ms` : "0ms" }}
              >
                <CheckCircle2 className="w-5 h-5 text-[#002288] shrink-0 mt-0.5" />
                <span className="text-[16px] text-gray-500">{point}</span>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default About;
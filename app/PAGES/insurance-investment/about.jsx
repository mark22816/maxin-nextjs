"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import Container from "../../../Layout/container";
import { IMAGES } from "../../../constants/images";

export default function About (){
  
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

        {/* Image (right on large screens) */}
        <div
          className={`relative order-1 lg:order-2 transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-12"
          }`}
        >
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#012289]/90 rounded-[10px] hidden sm:block" />
          <Image
            src={IMAGES.aboutimage}
            width={300}
            height={400}
            alt="About MAXIN"
            className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] rounded-[10px] object-cover shadow-xl"
          />

          
        </div>

        {/* Text (left on large screens) */}
        <div
          className={`order-2 lg:order-1 flex flex-col justify-center mt-6 lg:mt-0 transition-all duration-1000 ease-out delay-150 ${
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
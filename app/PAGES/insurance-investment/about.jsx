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
      id="about"
      aria-labelledby="about-heading"
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
          <Image
            src={IMAGES.aboutimage}
            width={1200}
            height={900}
            quality={90}
            sizes="(max-width: 1024px) 100vw, 50vw"
            alt="MAXIN insurance agency helping clients in the Philippines compare and choose insurance coverage"
            className="relative w-full aspect-[4/3] rounded-2xl object-cover object-center shadow-lg"
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

          <h2
            id="about-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#002288] mb-5 leading-tight"
          >
            Find optimal insurance solutions with MAXIN
          </h2>

          <p className="max-w-prose text-base sm:text-lg leading-8 text-left text-gray-700 mb-8">
            Looking for insurance or ways to grow your savings? MAXIN makes it simple, with trusted partners and advice made for you.
          </p>

          {/* Highlight points */}
          <ul className="grid grid-cols-1 gap-4 mb-8">
            {[
              "Compare top insurers side by side",
              "Personalized coverage guidance",
              "Fast, hassle-free application",
              "Dedicated support every step",
            ].map((point, i) => (
              <li
                key={i}
                className={`flex items-start gap-3 transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isVisible ? `${300 + i * 120}ms` : "0ms" }}
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="w-5 h-5 text-[#002288] shrink-0 mt-1"
                />
                <span className="min-w-0 text-base sm:text-[17px] leading-7 font-medium text-gray-700">
                  {point}
                </span>
              </li>
            ))}
          </ul>

        </div>
      </Container>
    </section>
  );
};
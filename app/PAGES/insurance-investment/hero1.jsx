"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BookOpenText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";


import Container from "../../../Layout/container";
import { IMAGES } from "../../../constants/images";



const slides = [
  IMAGES.image4,
  IMAGES.image5,
  IMAGES.image6,
  IMAGES.image7,
  IMAGES.image8,
  IMAGES.image9,
  IMAGES.image10,
  IMAGES.image11,
].filter(Boolean);


  export default function Hero1() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden flex items-center pt-26 pb-16 lg:pt-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-blue-50/40 to-cyan-50/30" />

      {/* Mouse glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background: `radial-gradient(
            500px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(37, 99, 235, 0.08),
            transparent 45%
          )`,
        }}
      />

      {/* Decorative shapes */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-0 top-0 hidden h-full w-[35%] overflow-hidden lg:block">
        <div className="absolute right-[-120px] top-[20%] h-[500px] w-[500px] rounded-full border border-blue-300" />
        <div className="absolute right-[-80px] top-[25%] h-[400px] w-[400px] rounded-full border border-blue-300" />
        <div className="absolute right-[-40px] top-[30%] h-[300px] w-[300px] rounded-full border border-blue-300" />
      </div>

      <Container className="relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 sm:pt-12 gap-12 xl:gap-20 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div className="text-center lg:text-left">
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.2rem] font-bold tracking-tight leading-[1.08] mb-6">
              <span className="block text-gray-900">Protect What</span>

              <span className="block bg-gradient-to-r from-[#002288] via-[#1a9cc4] to-cyan-500 bg-clip-text text-transparent">
                Matters Most.
              </span>

              <span className="block text-gray-900">Invest in Your Future.</span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-8 max-w-xl mx-auto lg:mx-0 mb-8">
              MAXIN connects you to trusted insurance partners and tailored
              investment solutions, helping you turn today’s protection into
              tomorrow’s possibilities.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-10">
              <button className="group w-full sm:w-auto px-7 py-4 rounded-xl bg-[#002288] text-white font-semibold shadow-lg shadow-blue-900/20 hover:bg-[#1a9cc4] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
                <span>Get a Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group w-full sm:w-auto px-7 py-4 rounded-xl border border-blue-200 bg-white text-[#002288] font-semibold hover:bg-blue-50 hover:border-blue-300 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
                <BookOpenText className="w-5 h-5" />
                <span>Learn More</span>
              </button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-[#002288]" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">
                    Our expertise, your solution
                  </p>
                  <p>Since 1999</p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-10 bg-gray-200" />

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-cyan-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">Trusted</p>
                  <p>Insurance Solutions</p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT CAROUSEL ================= */}
          <div className="relative w-full">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full rounded-[2rem] bg-blue-100/60 rotate-2" />
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-[2rem] bg-cyan-100/50 -rotate-2" />

              <div className="relative h-[350px] sm:h-[450px] lg:h-[520px] xl:h-[580px] w-full overflow-hidden rounded-[2rem] shadow-2xl border border-white">
                {slides.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`MAXIN insurance and investment slide ${index + 1}`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={`object-cover object-center transition-opacity duration-[1200ms] ease-in-out ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ zIndex: index === currentSlide ? 2 : 1 }}
                  />
                ))}

                <div className="absolute inset-0 z-[3] bg-gradient-to-t from-black/45 via-transparent to-black/5 pointer-events-none" />

                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[6] flex items-center gap-2 px-3 py-2 rounded-full bg-black/25 backdrop-blur-md">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      aria-label={`Go to slide ${index + 1}`}
                      onClick={() => setCurrentSlide(index)}
                      className={`rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "w-7 h-2 bg-white"
                          : "w-2 h-2 bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}



 
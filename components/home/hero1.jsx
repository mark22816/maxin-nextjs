"use client";

import { ArrowRight, BookOpenText, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { floatingCards } from "../home/data";
import Slide1 from "../../image/4.jpg";
import Slide2 from "../../image/5.jpg";
import Slide3 from "../../image/6.jpg";
import Slide4 from "../../image/7.jpg";
import Slide5 from "../../image/8.jpg";
import Slide6 from "../../image/9.jpg";
import Slide7 from "../../image/10.jpg";
import Slide8 from "../../image/11.jpg";
import Container from "../../Layout/container";

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8];

export default function Hero1() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

 
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-20 sm:pt-22 md:pt-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse [animation-delay:1000ms]" />

      <Container className="flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sm:gap-8 lg:gap-12 items-center relative w-full">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-xs sm:text-sm text-blue-700">
              Insurance & Investments, Simplified
            </span>
          </div>

          <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
              Protect Today
            </span>
            <span className="bg-gradient-to-b from-[#002288] via-cyan-500 to-[#002288] bg-clip-text text-transparent block mb-1 sm:mb-2">
              Insurance & Investments
            </span>
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
              With MAXIN
            </span>
          </h1>

          <p className="text-justify sm:text-[18px] lg:text-lg leading-8 text-gray-500 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200">
            MAXIN pairs tailored insurance coverage with smart investment solutions. With over 26 years of local expertise, we understand what protection you truly need. That's how we keep you secure today and prepared for tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300">
            <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-[#002288] to-blue-600 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
              <span className="text-white">Get Quote</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 text-white" />
            </button>

            <div className="group w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-2 bg-white/5 backdrop-blur-sm border border-[#002288] rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white hover:scale-105 flex items-center justify-center space-x-2">
              <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 duration-300 transition-colors">
                <BookOpenText className="w-4 h-4 sm:w-5 sm:h-5 text-[#002288]" />
              </div>
              <span className="text-[#002288]">Learn More</span>
            </div>
          </div>
        </div>

        <div className="relative order-2 w-full pb-12">
          <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-2xl border border-white/10">
            <div className="bg-gradient-to-br backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[450px] lg:h-[550px] w-full relative">
              {slides.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`Slide ${index + 1}`}
                  fill
                  className={`object-cover object-center transition-opacity duration-[1200ms] ease-out ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ zIndex: index === currentSlide ? 2 : 1 }}
                />
              ))}

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors ${
                      index === currentSlide ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            
             
          </div>
        </div>
      </Container>
    </section>
  );
}
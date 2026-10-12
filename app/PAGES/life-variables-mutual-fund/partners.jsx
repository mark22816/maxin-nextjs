"use client";
import Image from "next/image";
import { IMAGES } from "../../../constants/images";
import Container from "../../../Layout/container";

export default function Content() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#f4faff] to-white py-14 sm:py-20 lg:py-24">
      
      {/* Decorative Background */}
      <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[#1a6fa0]/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#1a6fa0]/10 blur-3xl" />

      <Container className="relative flex w-full flex-col items-center">
        
        {/* Small Label */}
        
        <h3 className="text-center text-[clamp(24px,4vw,38px)] font-bold leading-tight text-[#2c7ba3]">
          Our Life, Variable Life & Mutual Funds Partners
        </h3>

        <p className="mt-3 mb-10 max-w-xl text-center text-sm leading-relaxed text-gray-500 sm:text-base">
          Trusted partners in life insurance, variable life, and investment solutions.
        </p>

        {/* Partner Cards */}
        <div className="grid w-full max-w-2xl grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-2">
          
          {/* AXA */}
          <div className="group relative flex min-h-[180px] items-center justify-center overflow-hidden rounded-3xl border border-white/70 bg-white/70 px-8 py-10 shadow-[0_15px_50px_rgba(26,111,160,0.10)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(26,111,160,0.18)]">
            
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a6fa0]/5 via-transparent to-[#1a6fa0]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative flex flex-col items-center">
              <Image
                src={IMAGES.providers.axa}
                alt="AXA logo"
                width={180}
                height={80}
                className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-110 h-20 sm:h-20"
              />
            </div>
          </div>

          {/* FAMI */}
          <div className="group relative flex min-h-[180px] items-center justify-center overflow-hidden rounded-3xl border border-white/70 bg-white/70 px-8 py-10 shadow-[0_15px_50px_rgba(26,111,160,0.10)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(26,111,160,0.18)]">
            
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a6fa0]/5 via-transparent to-[#1a6fa0]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative flex flex-col items-center">
              <Image
                
               src={IMAGES.providers.fami}
               alt="FAMI logo"
               width={180}
               height={80}
              className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-110 h-14 sm:h-16"
               />
              
            </div>
          </div>

        </div>

        {/* Bottom Accent */}
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
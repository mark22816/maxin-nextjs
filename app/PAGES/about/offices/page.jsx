"use client";

import Image from "next/image";
import Container from "../../../../Layout/container";
import Offices from "../../../../components/map";


const vision =
  "To be an internationally-recognized service group of socially inspiring leaders and professionals passionately driven by best practices and innovations in delivering optimum value to all domestic and overseas stakeholders.";

const mission = [
  "We shall forge ideal business relationship with business partners and clients.",
  "We shall develop highly motivated, values-driven, and accomplished leaders and professionals.",
  "We shall endeavor consistent leading-edge innovations and organizational excellence.",
  "We shall afford best value to our stakeholders.",
];

export default function Hero() {
  return (
    <>
      <section className="relative min-h-[60vh] w-full overflow-hidden">
        {/* Background image (fixed on scroll) */}
        <div
          role="img"
          aria-label="Machica Group building"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
          style={{ backgroundImage: "url('/images/MachicaBuilding.png')" }} 
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0056b3]/80 via-[#003b63]/80 to-[#003b63]/40" />

        {/* Decorative Glow */}
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-[100px]" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-blue-300/10 blur-[120px]" />

        {/* Decorative Lines */}
        <div className="absolute right-0 top-0 hidden h-full w-[35%] overflow-hidden lg:block">
          <div className="absolute right-[-120px] top-[20%] h-[500px] w-[500px] rounded-full border border-white/10" />
          <div className="absolute right-[-80px] top-[25%] h-[400px] w-[400px] rounded-full border border-white/10" />
          <div className="absolute right-[-40px] top-[30%] h-[300px] w-[300px] rounded-full border border-white/10" />
        </div>

        <Container className="relative z-10 flex min-h-[60vh] w-full items-center">
          <div className="grid w-full grid-cols-1 items-start sm:items-center gap-12 lg:grid-cols-1 pt-20 sm:pt-20">
            {/* Center Content */}
            <div className="mx-auto max-w-3xl text-center pt-10">
             
              

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl font-semibold text-white pb-3 ">
                Our Offices
              </h1>

              {/* Description */}
              <p className="mx-auto mb-8 max-w-2xl text-base leading-8 text-white sm:text-[18px] text-center">
                With offices in two key locations in the Philippines, we’re ready to support your insurance needs.”
                <span>
                  <br />
                </span>

              </p>
            </div>
          </div>
        </Container>
      </section>
      <Offices />

    
    </>
  );
}
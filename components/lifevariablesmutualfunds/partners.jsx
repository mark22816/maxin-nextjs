"use client";

import Image from "next/image";
import Image1 from "../../image/AXA Logo.png";
import Image2 from "../../image/FAMI.png";
import Container from "../../Layout/container";

export default function Content() {
  return (
    <section className="relative overflow-hidden flex bg-cover bg-center bg-no-repeat h-auto sm:min-h-[40vh] w-full py-10 sm:py-16 lg:py-20 ">


      

      <Container className="flex flex-col text-center  items-center relative w-full">
        <div className="">
          <h2 className="text-[clamp(24px,5vw,40px)] font-bold text-[#1a6fa0] mb-3 sm:mb-[12px] px-4 ">
            Our Life, Variable Life & Mutual Funds partners
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-6">
            <Image
              src={Image1}
              alt="Axa Logo"
              width={100}
              height={100}
              className="object-contain w-16 sm:w-20 md:w-[100px] lg:w-[110px] h-auto"
            />
            <Image
              src={Image2}
              alt="Fami Logo"
              width={100}
              height={100}
              className="object-contain w-24 sm:w-28 md:w-32 lg:w-40 h-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
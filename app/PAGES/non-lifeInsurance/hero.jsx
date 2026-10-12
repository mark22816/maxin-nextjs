import Image from "next/image";
import Container from "../../../Layout/container";
import { IMAGES } from "../../../constants/images";

export default function Hero() {
  return (
    <section className="relative min-h-[75vh]  w-full overflow-hidden">
      {/* Background image */}
      <Image src={IMAGES.service2} alt=""fill priority className="object-cover object-center" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#003b63]/95 via-[#0056b3]/80 to-[#003b63]/40" />

      {/* Decorative Glow */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-[100px]" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-blue-300/10 blur-[120px]" />

      {/* Decorative Lines */}
      <div className="absolute right-0 top-0 hidden h-full w-[35%] overflow-hidden lg:block">
        <div className="absolute right-[-120px] top-[20%] h-[500px] w-[500px] rounded-full border border-white/10" />
        <div className="absolute right-[-80px] top-[25%] h-[400px] w-[400px] rounded-full border border-white/10" />
        <div className="absolute right-[-40px] top-[30%] h-[300px] w-[300px] rounded-full border border-white/10" />
      </div>

      <Container className="relative z-10 flex min-h-[70vh]  w-full items-center">
        <div className="grid w-full grid-cols-1 items-start sm:items-center gap-12 lg:grid-cols-2 pt-20 sm:pt-30">

          {/* Left Content */}
          <div className="max-w-3xl text-center lg:text-left pt-12">

            {/* Accent */}
            <div className="mb-2 hidden  min-[1080px]:flex justify-center lg:justify-start gap-3">
              <span className="h-1 w-16 rounded-full bg-white" />
              <span className="h-1 w-3 rounded-full bg-white/50" />
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white">
              Non-life Insurance
            </h1>

            {/* Description */}
            <p className="mx-auto mb-8 max-w-2xl text-base leading-8 text-white/90 sm:text-lg lg:mx-0 text-center text-justify">
              Non-life insurance provides financial protection against a wide
              range of risks, including vehicles, travel, homes, businesses,
              marine operations, engineering projects, and liability exposures.
              Our solutions are designed to provide dependable coverage for
              both personal and business needs.
            </p>
          </div>

          {/* Right Floating Panel */}

        </div>
      </Container>
    </section>
  );
}
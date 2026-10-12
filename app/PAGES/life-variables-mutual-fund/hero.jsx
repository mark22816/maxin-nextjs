import Container from "../../../Layout/container";

export default function Hero() {
  return (
    <section
      className="relative min-h-[75vh] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${"/images/background.png"})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#003b63]/95 via-[#0056b3]/80 to-[#003b63]/40" />

      {/* Soft glow effects */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

      <Container className="relative z-10 flex min-h-[70vh] w-full items-center">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 pt-20 sm:pt-22">

          {/* Left Content */}
             <div className="max-w-3xl pt-16 text-center items-center lg:pt-20 lg:text-left">
          {/* Accent */}
            <div className="mb-2 hidden  min-[1080px]:flex justify-center lg:justify-start gap-3">
              <span className="h-1 w-16 rounded-full bg-white" />
              <span className="h-1 w-3 rounded-full bg-white/50" />
            </div>

         {/* Heading */}
            <h1 className="mb-6 text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white">
              Life, Variable Life
              <span className="block text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white">
                & Mutual Funds
              </span>
            </h1>

          {/* Description */}
            <p className="text-justify mx-auto mb-8 max-w-2xl text-base leading-8 text-white/90 sm:text-lg lg:mx-0">
              With Traditional Life & Variable Life Insurance and Mutual Funds,
              you're not just planning for tomorrow. You're shaping your
              financial future, protecting your loved ones, and building wealth
              through a strategy designed around your goals.
            </p>

          </div>

        </div>
      </Container>
    </section>
  );
}
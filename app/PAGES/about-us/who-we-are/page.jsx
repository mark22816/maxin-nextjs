"use client";

import Image from "next/image";
import Container from "../../../../Layout/container";

const history = [
  {
    year: "1999",
    text: "Established our first office in Tacloban City, laying the foundation for our journey.",
    src: "/images/office-tacloban-1999.png",
    alt: "Aerial view of the San Juanico Bridge near Tacloban City, where Machica Group opened its first office in 1999",
  },
  {
    year: "2003",
    text: "Expanded into a larger office and launched Machica FIRM, Inc., marking a key milestone in our evolution.",
    src: "/images/office-opening-2003.png",
    alt: "Ribbon-cutting ceremony at the opening of Machica Group's larger office and the launch of Machica FIRM, Inc. in 2003",
  },
  {
    year: "2014",
    text: "Opened our Makati Business Office, solidifying our presence in the heart of the country’s business district.",
    src: "/images/makati-office-2014.png",
    alt: "Blessing ceremony with candles at the opening of the Machica Group Makati Business Office in 2014",
  },
  {
    year: "2018",
    text: "Celebrated the inauguration of the Machica Group Center, a facility that represents our commitment to innovation and excellence.",
    src: "/images/machicagroup-center-2018.png",
    alt: "Reception area with the Machica Group logo wall inside the Machica Group Center, inaugurated in 2018",
  },
  {
    year: "2024",
    text: "Inaugurated Machica Group’s new headquarters, marking our growth, innovation, and 25th anniversary.",
    src: "/images/machicgroup-headquarters-2024.png",
    alt: "Exterior of the new Machica Group headquarters inaugurated in 2024 for the company's 25th anniversary",
  },
  {
    year: "2026",
    text: "Makati & Manila Offices Combined; 11F PMI Tower, P. Ocampo, Sr. corner Onyx Sts., La Paz, Makati .",
    src: "/images/machicgroup-headquarters-2026.png",
    alt: "Exterior of the new Machica Group headquarters inaugurated in 2026 for the company's 25th anniversary",
  },
];

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
      <section className="relative min-h-[20vh] w-full overflow-hidden">
        {/* Background image (fixed on scroll) */}
        <div
          role="img"
          aria-label="Machica Group building"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
          style={{ backgroundImage: "url('/images/MachicaBuilding.png')" }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003b63]/95 via-[#003b63]/80 to-[#003b63]/40" />

        {/* Decorative Glow */}
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-[100px]" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-blue-300/10 blur-[120px]" />

        {/* Decorative Lines */}
        <div className="absolute right-0 top-0 hidden h-full w-[35%] overflow-hidden lg:block">
          <div className="absolute right-[-120px] top-[20%] h-[500px] w-[500px] rounded-full border border-white/10" />
          <div className="absolute right-[-80px] top-[25%] h-[400px] w-[400px] rounded-full border border-white/10" />
          <div className="absolute right-[-40px] top-[30%] h-[300px] w-[300px] rounded-full border border-white/10" />
        </div>

        <Container className="relative z-10 flex min-h-[70vh] w-full items-center">
          <div className="grid w-full grid-cols-1 items-start sm:items-center gap-12 lg:grid-cols-1 pt-20 sm:pt-28">
            {/* Center Content */}
            <div className="mx-auto max-w-3xl text-center pt-16">
             
              

              {/* Heading */}
              <h1 className="mb-6 text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white">
                About Us
              </h1>

              {/* Description */}
              <p className="mx-auto mb-8 max-w-2xl text-base leading-8 text-white sm:text-[20px] text-center">
                We are your one-stop shop for all insurance, investment, HMO needs. Plus professional advisory services on wealth, asset protection, and succession.
                <span>
                  <br />
                </span>

              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Historical Background */}
      <section
        aria-labelledby="historical-background"
        className="w-full bg-gradient-to-b from-white via-sky-50 to-white py-16 sm:py-20"
      >
        <Container>
          <div className="mb-12 text-center">
            <h2
              id="historical-background"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase  tracking-wide text-[#1a9cc4]"
            >
              Historical Background
            </h2>
           
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {history.map((item) => (
              <article
                key={item.year}
                className="group flex w-full flex-col overflow-hidden rounded border border-sky-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-4rem)/3)]"
              >
                <figure className="relative aspect-[3/2] w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    title={`Machica Group ${item.year}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003b63]/70 via-transparent to-transparent" />
                  <time
                    dateTime={item.year}
                    className="absolute bottom-3 left-3 rounded-full bg-[#012289] px-4 py-1 text-xl font-bold text-white shadow-lg"
                  >
                    {item.year}
                  </time>
                  <figcaption className="sr-only">{item.alt}</figcaption>
                </figure>

                <div className="flex-1 border-t-4 border-[#0056b3] p-5">
                  <p className="text-[18px] leading-relaxed text-gray-700 sm:text-[18px]">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Straight line (20px below the cards) */}
          <div className="mt-[80px] h-px w-full bg-[#1a9cc4]" />
        </Container>
      </section>

      {/* Awards and Recognition */}
      <section
        aria-labelledby="awards-and-recognition"
        className="w-full bg-gradient-to-b from-white via-sky-50 to-white py-16 sm:py-10 mb-20"
      >
        <Container>
          <div className="mb-12 text-center">
            
            <h2
              id="awards-and-recognition"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide uppercase text-[#1a9cc4]"
            >
              Awards and Recognition
            </h2>
          </div>

          <figure className="group mx-auto w-full max-w-5xl overflow-hidden  bg-white p-4 shadow-md  sm:p-8">
            <Image
              src="/images/award.png"
              alt="Awards and recognitions received by MAXIN Insurance Agency (Machica Firm, Inc.), including BPI MS Insurance Shining Stars, AXA Prime, AXA Court of the Table, Golden Globe Annual Awards for Business Excellence, and MDRT qualifier recognition"
              title="Machica Group Awards and Recognition"
              width={2100}
              height={1500}
              sizes="(min-width: 1024px) 64rem, 100vw"
              className="h-auto w-full"
            />
            <figcaption className="sr-only">
              Awards and recognitions received by MAXIN Insurance Agency
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* Vision and Mission */}
      <section
        aria-labelledby="vision-and-mission"
        className="relative w-full overflow-hidden py-16 sm:py-20"
      >
        {/* Background image (fixed on scroll) */}
        <div
          role="img"
          aria-label="Machica Group building"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
          style={{ backgroundImage: "url('/images/MachicaBuilding.png')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#003b63]/80 via-[#003b63]/80 to-[#003b63]/80" />

        <Container className="relative z-10">
          <h2
            id="vision-and-mission"
            className="sr-only"
          >
            Vision and Mission
          </h2>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Vision */}
            <article className="rounded-2xl border border-white/30 p-6 shadow-lg backdrop-blur-md sm:p-8">
              <h3 className="mb-4 text-4xl font-extrabold uppercase tracking-wide text-white sm:text-5xl">
                Vision
              </h3>
             
              <p className="text-[20px] leading-relaxed text-white">
                {vision}
              </p>
            </article>

            {/* Mission */}
            <article className="rounded-2xl border border-white/30  p-6 shadow-lg backdrop-blur-md sm:p-8">
              <h3 className="mb-4 text-4xl font-extrabold uppercase tracking-wide text-white sm:text-5xl">
                Mission
              </h3>
              
              <ul className="space-y-3 pl-0 text-[20px] leading-relaxed text-white">
                {mission.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </section>

      {/* Awards and Recognition */}
      <section className="w-full bg-gradient-to-b from-white via-sky-50 to-white py-16 sm:py-10 mb-5 mt-5 sm:mt-15 sm:mb-15"
      >
        <Container>
          

          <figure className="group mx-auto w-full max-w-5xl overflow-hidden  bg-[f0ede6] p-4 shadow sm:p-8">
            <Image
              src="/images/core-values.png"
              alt="Awards and recognitions received by MAXIN Insurance Agency (Machica Firm, Inc.), including BPI MS Insurance Shining Stars, AXA Prime, AXA Court of the Table, Golden Globe Annual Awards for Business Excellence, and MDRT qualifier recognition"
              title="Machica Group Awards and Recognition"
              width={2100}
              height={1500}
              sizes="(min-width: 1024px) 64rem, 100vw"
              className="h-auto w-full"
            />
            <figcaption className="sr-only">
              Awards and recognitions received by MAXIN Insurance Agency
            </figcaption>
          </figure>
        </Container>
      </section>
    </>
  );
}
"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "../../../../Layout/container";

const directors = [
  {
    name: "Dr. Michael A. Machica",
    role: "Managing Director & Chairman, MAXIN, Chief Consultant & Chairman, Machia Group Consulting",
    image: "/images/michael1.png",
    bio: [
      "Dr. Michael A. Machica is the Chairman and Founder of Machica Group, Chief Consultant and Chairman of Machica Group Consulting, and Managing Director and Chairman of MAXIN. With over 30 years of experience in accounting, finance, consulting, risk management, and corporate leadership, he has served various industries and held key positions at Paytaca, BDO Unibank, BPI, and SGV & Co. / Ernst & Young Philippines.",
      "He holds a D.B.A. (summa cum laude), a Ph.D. in Management, an M.B.A. (class valedictorian), and a bachelor's degree in Accountancy (cum laude, rank No. 1). He is a Philippine CPA, ASEAN Chartered Professional Accountant, Certified Internal Auditor, Certified Financial Services Auditor, Chartered Doctor of Business Administration, and Certified Estate/Wealth Planner.",
      "A respected business leader and professional, Dr. Machica has received numerous distinctions, including Most Outstanding CEO, Asia Pacific Entrepreneurs Award, Best Filipino Achiever in Business Management, and Asia's Outstanding Professional of the Year. He is also committed to professional development, community leadership, and education through various industry and civic organizations.",
    ],
  },
  {
    name: "Joan Tan Cruz, Hon. Ph.D.",
    role: "CEO, MAXIN Insurance Agency / Machica Group Consulting",
    image: "/images/joan.png",
    bio: [
      "Joan was elevated to the presidency of MAXIN and Machica Group Consulting in 2011, and is concurrently the Finance/HR Head at MTC & Co., CPAs.",
      " She was formerly the Vice President and Head of the Group's Administration, Finance and Human Resource Department. She started with the group's insurance division after her 3-year stint in a universal bank.",
      " She is licensed for life and variable insurance, and non-life insurance, with the Insurance Commission. In addition, she is a certified Health Specialist and certified Investment Specialist in AXA. She is a registered nurse (PH &USA) and earned units in Master in Health Sciences. She was conferred with Honorary Ph.D. in Business Administration (honoris causa) by the Thames International University, Paris.",
      " In 2009, she completed trainings on Human Resource at the Ateneo de Manila University School of Business; Best Practices in Crafting HR Policies & Contracts, Center for Global Best Practices; Advanced Labor Seminar-Workshop for Management: Strengthening the Company's Labor Management Systems, Procedures and Infrastructures at the Asian Institute of Marketing and Entrepreneurship. At the International Federation of Professional Managers, Joan completed Certified Human Resource Professional Program (CHRP), a global recognition of HR professionals with headquarters in U.К.",
      "Further, the World Confederation of Businesses conferred upon her 'Excellence in Business Leadership'. Finally, she is a consistent GAMA FLA awardee in her capacity as Senior Unit Manager of AXA Phils.",
    ],
  },
  {
    name: "Rhea R. Mirante",
    role: "Manager",
    image: "/images/rheah.png",
    bio: [
      "Rhealyn is currently the Manager of MAXIN Insurance Agency. She is a home grown employee having rose from the ranks. She is well adept at both marketing and operational agency matters. She leads the team that focuses on life, investment, health and corporate solutions. She passed the traditional life insurance, and variable life insurance representing AXA given by the Insurance Commission. Rhea has completed trainings in Personal Leadership, The Art of Business Communications, and Leadership Workshop on Supervisory Development Program for Managers and Supervisors sponsored by Machica Group and Philippine Chamber of Commerce and Industry.",
      "In 2021, she was hailed 'Manager of the Year' during Machica Group's annual awards. In 2022, the company bestowed her '10-year Service Loyalty Award. Previously, she has been recognized as Peak Performer (2018), Team Leadership (Chairman's Award 2017), Special Award on Regulatory Reporting (2016). Her outstanding customer care approach has been developed across her affiliations with Machica Group and Taytay sa Kauswagan (TSK). She was a former Project Unit Supervisor at TSK. Ms. Mirante is a graduate of BS in Business Administration from Eastern Visayas State University.",
    ],
  },
  {
    name: "Zebediah Amicane R. Duran",
    role: "Agency Dev't & Sales Officer",
    image: "/images/deah.png",
    bio: [
      "Zebediah is currently the Agency Development and Sales Officer at MAXIN Insurance Agency, where she plays a key role in advisors' recruitment, driving business growth, and strengthening client relationships. With a strong background in agency development, service, and operations, she is dedicated to expanding the agency's network by identifying and onboarding talented insurance professionals while ensuring seamless service delivery to clients. In 2024, she completed a Leadership Workshop sponsored by the Machica Group. She is also a licensee of AXA Philippines.",
      "She earned a Bachelor of Science in Home Arts and Entrepreneurship at Leyte Normal University and obtained a teaching certificate from Leyte Colleges. With her expertise in team development, sales strategies, and client engagement, she contributes significantly to the agency's mission of providing quality insurance solutions while fostering a dynamic and high-performing workforce.",
    ],
  },
];

export default function BoardOfDirectors() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = directors[activeIndex];
  const paragraphs = Array.isArray(active.bio) ? active.bio : [active.bio];

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
              <h1 className="mb-4 text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white">
                Meet Our Team
              </h1>

              {/* Description */}
              <p className="mx-auto mb-8 max-w-2xl text-base leading-8 text-white sm:text-[18px] text-center">
                Our team of dedicated professionals brings years of industry experience, expertise, and integrity 
                to deliver personalized insurance and investment solutions. We are committed to guiding you every 
                step of the way toward a more secure future and greater financial confidence.
                <span>
                  <br />
                </span>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <Container>
          {/* Featured director */}
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_380px] lg:gap-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Meet the team - Our Executive Officers
              </p>
              <h2 className="mt-3 text-4xl font-normal text-slate-900 sm:text-5xl">
                {active.name}
              </h2>
              <p className="mt-2 text-lg font-bold text-[#012289]">
                {active.role}
              </p>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="relative mx-auto h-[300px] w-full max-w-[380px] sm:h-[380px] lg:h-[400px]">
              <Image
                key={active.name}
                src={active.image}
                alt={active.name}
                fill
                sizes="(min-width: 1024px) 380px, 100vw"
                className="object-contain object-center"
                priority
              />
            </div>
          </div>

          {/* Director cards */}
          <div className="mt-30 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {directors.map((d, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={d.name}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-pressed={isActive}
                  className={`relative h-40 overflow-hidden rounded-2xl text-left shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                    isActive
                      ? "bg-[#012289] text-white"
                      : "bg-white text-slate-900"
                  }`}
                >
                  <div className="relative z-10 flex h-full w-3/5 flex-col justify-center pl-5">
                    <span className="text-lg font-bold leading-tight">
                      {d.name}
                    </span>
                    <span
                      className={`mt-1 text-xs ${
                        isActive ? "text-white/80" : "text-slate-700"
                      }`}
                    >
                      {d.role}
                    </span>
                  </div>
                  <div className="absolute bottom-0 right-0 top-8 w-2/5">
                    <Image
                      src={d.image}
                      alt=""
                      fill
                      sizes="150px"
                      className="object-cover object-top"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
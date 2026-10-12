
import MessageUs from "../../../../components/messageus";
import Image from "next/image";
import Container from "../../../../Layout/container";





const AVEGA_SOLUTIONS = [
  {
    number: "01",
    name: "Premier TPA",
    description:
      "A flexible, fund-based managed-care program that helps organizations design benefits around their needs and manage healthcare costs effectively.",
  },
  {
    number: "02",
    name: "Healthcare Network Services",
    description:
      "Access to Avega's network of healthcare providers, supported by dependable service and coordinated member care.",
  },
  {
    number: "03",
    name: "Tailored Benefit Design",
    description:
      "Customizable healthcare programs that can be shaped around your organization's priorities, population, and budget.",
  },
  {
    number: "04",
    name: "Member Care & Support",
    description:
      "Compassionate assistance for members, with 24/7 customer support and digital tools that simplify access to care.",
  },
];

const SERVICES = [
  "Inpatient care",
  "Outpatient care",
  "Preventive care",
  "Emergency care",
  "Dental care",
  "Maternity care",
];

export default function AvegaOverview() {
  return (
    <section className="w-full pt-24 pb-20 sm:pt-40 sm:pb-32">
      <style>{`
        @keyframes avegaRise {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .avega-reveal {
          animation: avegaRise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>

      <Container>
        <div className="flex flex-col gap-16 lg:gap-20">
          <div className="relative isolate h-[360px] w-full overflow-hidden rounded-2xl shadow-lg sm:h-[460px] lg:h-[560px]">
            <Image
              src="/images/avega-services.png"
              alt="Avega healthcare services"
              fill
              priority
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#012289]/60 via-[#012289]/15 to-transparent" />

            <div className="avega-reveal relative z-10 flex h-full flex-col justify-end p-8 sm:p-12 lg:p-16">
              <h1 className="mb-3 max-w-xl font-serif text-3xl font-normal leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                Bespoke healthcare, made simple
              </h1>

              <p className="max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
                Flexible managed-care solutions designed around the needs of
                your organization and its people.
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="mb-8 flex h-[80px] w-[160px] items-center">
              <Image
                src="/images/AVEGA.png"
                alt="Avega logo"
                width={300}
                height={90}
                className="h-full max-h-[80px] w-auto object-contain"
                priority
              />
            </div>

            <div className="mb-14 border-b border-[#012289]/15 pb-10">
              <p className="text-justify text-base leading-[1.8] text-slate-700 sm:text-lg">
                 AVEGA is Maxin’s trusted healthcare administration partner, providing flexible 
                 managed-care solutions and access to quality healthcare services for organizations
                 and their members. Established in 2011, AVEGA brings years of expertise in third-party
                 administration and managed care. Through AVEGA’s extensive nationwide network of affiliated 
                 hospitals, clinics, doctors, and specialists, Maxin helps businesses build practical, people-focused 
                 coverage tailored to their workforce, priorities, and budget.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="mb-3 text-3xl font-bold text-[#012289] sm:text-4xl">
                Avega Healthcare Solutions
              </h2>

              <p className="mb-10 max-w-[58ch] text-base leading-relaxed text-slate-600 sm:text-lg">
                Tailored healthcare programs and services that support
                organizations, their members, and their changing needs.
              </p>

              <div className="grid grid-cols-1 border-l border-t border-[#012289]/10 sm:grid-cols-2">
                {AVEGA_SOLUTIONS.map((solution) => (
                  <div
                    key={solution.number}
                    className="flex flex-col gap-2 border-b border-r border-[#012289]/10 p-6 sm:p-8"
                  >
                    <span className="font-serif text-2xl text-[#1a9cc4]">
                      {solution.number}
                    </span>

                    <h3 className="mb-1 text-lg font-semibold text-[#012289]">
                      {solution.name}
                    </h3>

                    <p className="max-w-[42ch] text-sm leading-relaxed text-slate-600 sm:text-base">
                      {solution.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-2">
                <p className="mb-3 text-sm text-slate-500">
                  Programs may include:
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {SERVICES.map((item) => (
                    <span
                      key={item}
                      className="border-b border-[#14678d]/30 pb-0.5 text-sm text-[#14678d]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8 rounded-2xl bg-[#012289] p-8 sm:flex-row sm:items-center sm:gap-12 sm:p-12">
              <div className="max-w-md">
                <h3 className="mb-3 text-2xl font-normal text-white sm:text-3xl">
                  Healthcare designed around your business
                </h3>

                <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                  Speak with AVEGA about a managed-care program tailored to
                  your organization, members, and healthcare goals.
                </p>
              </div>

              <a
                href="https://site.avega.com.ph/index.php/contact-us/"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#012289] transition hover:bg-[#8fd4ec]"
              >
                Contact Avega
              </a>
            </div>
          </div>
        </div>
        <MessageUs/>
      </Container>
      
    </section>
  );
}
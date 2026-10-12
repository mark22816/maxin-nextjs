
import MessageUs from "../../../../components/messageus";
import Image from "next/image";
import Container from "../../../../Layout/container";

const PHILCARE_PLANS = [
  {
    number: "01",
    name: "Health Plans",
    description:
      "Healthcare plans designed for individuals and families, providing access to essential medical services, hospitalization, and other healthcare benefits.",
  },
  {
    number: "02",
    name: "Corporate Health Plans",
    description:
      "Flexible healthcare solutions for businesses and organizations, helping provide employees with access to quality medical care and healthcare services.",
  },
  {
    number: "03",
    name: "Prepaid Health Plans",
    description:
      "Affordable prepaid healthcare options designed to provide convenient access to selected medical and emergency services.",
  },
  {
    number: "04",
    name: "Emergency & Consultation Plans",
    description:
      "Healthcare options focused on emergency assistance, medical consultations, diagnostics, and other essential healthcare needs.",
  },
];

const SERVICES = [
  "Inpatient care",
  "Outpatient care",
  "Emergency assistance",
  "Medical consultations",
  "Diagnostic services",
  "Digital healthcare services",
];

export default function PhilCareOverview() {
  return (
    <section className="w-full pt-24 sm:pt-40 pb-20 sm:pb-32">
      <style>{`
        @keyframes philcareRise {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .philcare-reveal {
          animation: philcareRise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>

      <Container>
        <div className="flex flex-col gap-16 lg:gap-20">

          {/* HERO IMAGE BANNER */}
          <div className="relative isolate overflow-hidden w-full h-[360px] sm:h-[460px] lg:h-[560px] rounded-2xl shadow-lg">
            <Image
              src={"/images/philcare-services.png"}
              alt="PhilCare healthcare services"
              fill
              priority
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#012289]/60 via-[#012289]/15 to-transparent" />

            <div className="relative z-10 flex h-full flex-col justify-end p-8 sm:p-12 lg:p-16 philcare-reveal">
              <h1 className="font-serif text-white text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] mb-3 max-w-xl">
                Healthcare solutions for every need
              </h1>

              <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-lg">
                Flexible healthcare plans designed for individuals, families,
                and businesses.
              </p>
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="w-full">

            {/* LOGO */}
            <div className="mb-8">
              <div className="flex h-[70px] w-[160px] items-center">
                <Image
                  src={"/images/philcare.png"}
                  alt="PhilCare logo"
                  width={300}
                  height={90}
                  className="h-full max-h-[48px] w-auto object-contain sm:max-h-[56px]"
                  priority
                />
              </div>
            </div>

            {/* INTRO */}
            <div className="pb-10 mb-14 border-b border-[#012289]/15">
              <p className="text-slate-700 text-base sm:text-lg leading-[1.8] text-justify">
                PhilCare is a leading Health Maintenance Organization (HMO) in
                the Philippines, providing comprehensive healthcare solutions
                for individuals, families, and businesses. Established in 1982,
                PhilCare offers corporate, individual, family, and prepaid
                health plans with access to a wide network of healthcare
                providers.
              </p>

              <p className="text-slate-700 text-base sm:text-lg leading-[1.8] text-justify mt-5">
                Members can access a range of healthcare services, including
                inpatient and outpatient care, emergency assistance,
                consultations, diagnostics, and other medical benefits,
                depending on their selected plan. Through its HeyPhil digital
                platform, members can conveniently access healthcare services
                and manage their healthcare needs.
              </p>
            </div>

            {/* PHILCARE PLANS */}
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#012289] mb-3">
                PhilCare Health Plans
              </h2>

              <p className="text-slate-600 text-base sm:text-lg max-w-[58ch] mb-10 leading-relaxed">
                PhilCare offers a range of healthcare solutions designed to
                meet the different needs of individuals, families, and
                organizations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-[#012289]/10">
                {PHILCARE_PLANS.map((plan) => (
                  <div
                    key={plan.number}
                    className="flex flex-col gap-2 p-6 sm:p-8 border-b border-r border-[#012289]/10"
                  >
                    <span className="font-serif text-2xl text-[#1a9cc4]">
                      {plan.number}
                    </span>

                    <h3 className="text-lg font-semibold text-[#012289] mb-1">
                      {plan.name}
                    </h3>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-[42ch]">
                      {plan.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* SERVICES */}
              <div className="mt-8 pt-2">
                <p className="text-sm text-slate-500 mb-3">
                  Healthcare services may include:
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {SERVICES.map((item) => (
                    <span
                      key={item}
                      className="text-sm text-[#14678d] border-b border-[#14678d]/30 pb-0.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CORPORATE PLANS */}
            <div className="bg-[#012289] rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row sm:items-center gap-8 sm:gap-12 justify-between">
              <div className="max-w-md">
                <h3 className="text-2xl sm:text-3xl font-normal text-white mb-3">
                  Healthcare solutions for businesses
                </h3>

                <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                  PhilCare provides healthcare options for companies and
                  organizations looking to provide employees with accessible
                  medical and healthcare benefits.
                </p>
              </div>

              <a
                href="#"
                className="shrink-0 inline-flex items-center justify-center text-sm font-medium text-[#012289] bg-white rounded-full px-6 py-3 hover:bg-[#8fd4ec] transition"
              >
                Request a quote
              </a>
            </div>

          </div>
        </div>
      </Container>
      <MessageUs/>
    </section>
  );
}




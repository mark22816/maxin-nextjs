
import MessageUs from "../../../../components/messageus";
import Image from "next/image";
import Container from "../../../../Layout/container";

import { ShieldCheck, HeartPulse, CheckCircle2 } from "lucide-react";

const SECONDARY_PLANS = [
  {
    title: "MediCard Select & HealthPro",
    tier: "Individual coverage",
    description:
      "Flexible, budget-focused options covering essential outpatient consultations, routine diagnostic lab work, and fundamental primary care requirements.",
    icon: ShieldCheck,
  },
  {
    title: "Corporate & SME Plans",
    tier: "Organization coverage",
    description:
      "Scalable enterprise health packages designed for businesses, supporting employee wellness programs and integrated with group life benefits.",
    icon: HeartPulse,
  },
];

const FEATURED_INCLUSIONS = [
  "Access to tier-1 hospitals nationwide",
  "Elevated annual coverage limits",
  "Executive check-ups included",
  "Specialized preventive wellness care",
];

export default function MedicardOverview() {
  return (
    <section className="w-full  pt-24 sm:pt-40 pb-20 sm:pb-32">
      <style>{`
        @keyframes medicardRise {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .medicard-reveal {
          animation: medicardRise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>

      <Container>
        <div className="flex flex-col items-center gap-16 lg:gap-20">

          {/* HERO IMAGE BANNER */}
          <div className="relative isolate overflow-hidden w-full h-[360px] sm:h-[460px] lg:h-[560px] rounded-2xl shadow-lg">
            <Image
              src={"/images/medicard-services.png"}
              alt="A MediCard member consulting with a healthcare provider"
              fill
              priority
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#01185F] via-[#012289]/55 to-transparent" />

            <div className="relative z-10 flex h-full flex-col justify-end p-8 sm:p-12 lg:p-16 medicard-reveal">
              

              

              <h1 className=" text-white text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] mb-1">
                MediCard is a leading Health
                Maintenance Organization (HMO)
              </h1>

              <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-lg">
                MediCard delivers nationwide healthcare for all through a robust 
                network of clinics, doctors, and corporate plans.
              </p>
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="w-full">

            {/* LOGO */}
            <div className="mb-4">
              <div className="flex h-[85px] w-[160px] items-center sm:h-[105px] sm:w-[200px]">
                <Image
                  src={"/images/medicard.png"}
                  alt="MediCard logo"
                  width={300}
                  height={90}
                  className="h-full max-h-[48px] w-auto object-contain sm:max-h-[56px]"
                  priority
                />
              </div>
            </div>

            {/* INTRO */}
            <div className="pb-12 mb-14 border-b border-[#012289]/10">
              <p className="text-slate-600 text-base sm:text-lg leading-[1.8] max-w text-justify">
                MediCard is a premier HMO provider in the Philippines, delivering
                individual and family healthcare plans with nationwide coverage
                spanning expert consultations, comprehensive hospitalization, and
                advanced diagnostic testing. Medicard offers tailored healthcare plans
                for Small and Medium Enterprises (SMEs), providing comprehensive coverage for employees.
                These plans typically include outpatient consultations, hospitalization, diagnostics tests,
                preventive care services, dental, optical services, and wellness programs. They are flexible
                to fit different budgets and employee needs, helping SMEs enhance employee satisfaction and well-being.
                For specifics, visit Medicard's website or contact their customer service.
              </p>
            </div>

            {/* PLANS SECTION */}
            <div className="w-full">
              <h2 className=" text-3xl sm:text-4xl font-bold text-[#012289] mb-3">
                Choose your coverage
              </h2>
              <p className="text-slate-600 text-base sm:text-lg max-w-[60ch] mb-10">
                Three plan tracks, from individual essentials to full executive
                protection — each built on the same nationwide network.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

                {/* FEATURED PLAN */}
                <div className="h-full flex flex-col bg-[#012289] rounded-2xl p-8 sm:p-10 border-t-[3px] border-[#8fd4ec]">
                  

                  <h3 className=" text-2xl sm:text-3xl font-normal text-white mb-3">
                    MediCard VIP / Complete Plan
                  </h3>

                  <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-7">
                    Premier executive health coverage with seamless access to
                    top-tier hospitals and specialized preventive wellness care.
                  </p>

                  <ul className="space-y-3 mb-8">
                    {FEATURED_INCLUSIONS.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-white/90 text-sm">
                        <CheckCircle2 size={16} className="text-[#8fd4ec] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6 border-t border-white/15">
                    <a href="#" className="text-white text-sm font-medium underline decoration-[#8fd4ec]/40 underline-offset-4 hover:decoration-[white]/100 transition">
                      Get a quote
                    </a>
                  </div>
                </div>

                {/* SECONDARY PLANS */}
                <div className="h-full flex flex-col gap-6">
                  {SECONDARY_PLANS.map((plan, index) => {
                    const IconComponent = plan.icon;
                    return (
                      <div
                        key={index}
                        className="flex-1 flex flex-col justify-center bg-white rounded-2xl p-7 border border-[#012289]/10"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#F6F4EF] text-[#14678d] shrink-0">
                            <IconComponent size={18} strokeWidth={1.8} />
                          </div>

                          <div>
                            <p className="text-[#14678d] text-xs font-medium mb-1">
                              {plan.tier}
                            </p>
                            <h3 className="text-lg font-semibold text-[#012289] mb-2">
                              {plan.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                              {plan.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>

          </div>
        </div>
      </Container>
      <MessageUs/>
    </section>
  );
}




import MessageUs from "../../../../components/messageus";
import Image from "next/image";
import Container from "../../../../Layout/container";

const IWC_SOLUTIONS = [
  {
    number: "01",
    name: "Corporate & Group Plans",
    description:
      "Customizable healthcare coverage for companies and organizations, designed to support the well-being of employees and members.",
  },
  {
    number: "02",
    name: "Flexible HMO Plans",
    description:
      "A range of healthcare options that can be tailored to the needs, priorities, and budget of different groups.",
  },
  {
    number: "03",
    name: "Preventive Care Programs",
    description:
      "Healthcare benefits that support early care through annual physical examinations, consultations, and diagnostic services.",
  },
  {
    number: "04",
    name: "Member Care Support",
    description:
      "Practical support that helps members access care through IWC's accredited network of healthcare providers.",
  },
];

const SERVICES = [
  "Preventive care",
  "Annual physical examination",
  "Outpatient care",
  "Inpatient care",
  "Emergency care",
  "Diagnostic procedures",
];

export default function IMSWellthCareOverview() {
  return (
    <section className="w-full pt-24 pb-20 sm:pt-40 sm:pb-32">
      <style>{`
        @keyframes iwcRise {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .iwc-reveal {
          animation: iwcRise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>

      <Container>
        <div className="flex flex-col gap-16 lg:gap-20">
          <div className="relative isolate h-[360px] w-full overflow-hidden rounded-2xl shadow-lg sm:h-[460px] lg:h-[560px]">
            <Image
              src={"/images/ims-services.png"}
              alt="IMS Wellth Care healthcare services"
              fill
              priority
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#012289]/60 via-[#012289]/15 to-transparent" />

            <div className="iwc-reveal relative z-10 flex h-full flex-col justify-end p-8 sm:p-12 lg:p-16">
              <h1 className="mb-3 max-w-xl font-serif text-3xl font-normal leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                Flexible healthcare for every workforce
              </h1>

              <p className="max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
                Healthcare options that help organizations support the
                well-being of their people.
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="mb-8 flex h-[80px] w-[190px] items-center">
              <Image
                src={"/images/ims.png"}
                alt="IMS Wellth Care logo"
                width={300}
                height={90}
                className="h-full max-h-[48px] w-auto object-contain sm:max-h-[56px]"
                priority
              />
            </div>

            <div className="mb-14 border-b border-[#012289]/15 pb-10">
              <p className="text-justify text-base leading-[1.8] text-slate-700 sm:text-lg">
                IMS Wellth Care, Inc. (IWC) is Maxin&apos;s trusted healthcare
                partner, offering flexible and affordable HMO solutions for
                companies, organizations, and their members. Established in
                2002, IWC provides customizable corporate and group healthcare
                plans designed around each organization&apos;s needs.
              </p>

              <p className="mt-5 text-justify text-base leading-[1.8] text-slate-700 sm:text-lg">
                Through its diverse network of accredited hospitals, clinics,
                doctors, and healthcare professionals, IWC gives members access
                to preventive care, consultations, diagnostic services,
                outpatient and inpatient care, emergency treatment, and other
                healthcare benefits.
              </p>

              <p className="mt-5 text-justify text-base leading-[1.8] text-slate-700 sm:text-lg">
                IWC also develops healthcare programs for corporate employees,
                government personnel, deployed workers, daily wage earners, and
                OFW dependents. Its flexible health-plan options, provider
                partnerships, and member support help make quality healthcare
                more accessible.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="mb-3 text-3xl font-bold text-[#012289] sm:text-4xl">
                IMS Wellth Care Solutions
              </h2>

              <p className="mb-10 max-w-[58ch] text-base leading-relaxed text-slate-600 sm:text-lg">
                Healthcare plans and support services tailored to the needs of
                organizations and their members.
              </p>

              <div className="grid grid-cols-1 border-l border-t border-[#012289]/10 sm:grid-cols-2">
                {IWC_SOLUTIONS.map((solution) => (
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
                  Healthcare services may include:
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
                  Healthcare options for your business
                </h3>

                <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                  Speak with Maxin about IMS Wellth Care coverage tailored to
                  your organization and your team.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#012289] transition hover:bg-[#8fd4ec]"
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



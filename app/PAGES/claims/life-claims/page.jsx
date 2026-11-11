import Container from "../../../../Layout/container";

const basicRequirements = [
  "Beneficiary’s Statement",
  "Death Certificate",
  "Valid ID of the Beneficiary/ies",
  "Proof of account",
];

const conditionalRequirements = [
  {
    title: "If death occurred at the hospital during confinement:",
    items: [
      "Death Claim Form (Attending Physician's Statement)",
      "Complete Medical Records of Insured (copy of actual admitting history, discharge summary, and all laboratory or workup results of inpatient or outpatient consultation from clinics or hospitals)",
    ],
  },
  {
    title: "If cause of death is due to accident or violent incident:",
    items: [
      "Police Report",
      "Death Claim Form (Attending Physician's Statement) (only if the claim is within two years from policy effective date)",
    ],
  },
  {
    title: "If death happened abroad:",
    items: [
      "Report of Death issued by the Philippine Embassy, Consulate, or apostilled documents.",
      "All documents related to the claim coming from abroad should be duly authenticated by the Philippine Embassy or Consulate nearest the residence of the claimant.",
      "All documents must be translated into English.",
    ],
  },
  {
    title: "If any of the beneficiaries had passed away:",
    items: [
      "Philippine Statistics Authority (PSA) or Local Civil Registry-issued Death Certificate",
    ],
  },
  {
    title: "If spouse is beneficiary:",
    items: ["Marriage Certificate"],
  },
  {
    title: "If beneficiary is a minor:",
    items: [
      "Philippine Statistics Authority (PSA) or Local Civil Registry-issued Birth Certificate of the child",
      "Notarized Affidavit of Legal Guardianship along with valid ID of the Legal Guardian (if insurance share of minor is less than or equal to Php 500,000)",
    ],
  },
  {
    title: "If claimant is a representative of beneficiary:",
    items: ["Special Power of Attorney (SPA)"],
  },
];

const process = [
  {
    number: "1",
    title: "Submit Complete Requirements",
    description:
      "Download and fill out the Claim Form. Send the necessary documents to our office.",
  },
  {
    number: "2",
    title: "Your Request Will Be Processed",
    description:
      "Once we receive your documents, an evaluation will be done. You will receive an update within five (5) working days.",
  },
  {
    number: "3",
    title: "Expect to Hear From Us",
    description:
      "We will advise you if your claim request needs additional documents, or if your application is approved or declined.",
  },
  {
    number: "4",
    title: "Receive Your Payout",
    description:
      "Once approved, you will receive your claims payout through your preferred payment method.",
  },
];

// Structured data for search engines
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "InsuranceAgency",
      name: "MAXIN Insurance Agency",
      description:
        "Life, non-life, HMO and investment solutions in Tacloban City, Philippines.",
      email: "maxin.machicagroup@gmail.com",
      telephone: ["+63-916-516-2548", "+63-53-832-1782", "+63-53-832-3567"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "121 Independencia St. Brgy. 51",
        addressLocality: "Tacloban City",
        postalCode: "6500",
        addressCountry: "PH",
      },
    },
    {
      "@type": "HowTo",
      name: "How to file a life insurance claim with MAXIN",
      description:
        "A simple four-step guide to filing a life insurance claim, preparing the required documents, and receiving your benefits.",
      step: process.map((step, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: step.title,
        text: step.description,
      })),
    },
  ],
};

// Shared styles (match the claims accordion)
const cardClass = "overflow-hidden rounded-2xl border border-[#cfdaee] bg-slate-50 shadow-md";
const titleBarClass = "bg-[#d6e6fb] px-6 py-6";
const titleClass = "text-lg font-bold uppercase text-[#1d4e9e] md:text-[18px]";
const bodyClass = "border-t border-[#cfdaee] px-6 py-6";
const headingClass = "mb-4 text-[18px] font-bold uppercase text-black";
const subheadingClass = "mb-4 text-[18px] font-bold text-black";
const listClass = "list-disc space-y-1 pl-6 text-[18px] text-gray-900 marker:text-black";

export default function LifeClaims() {
  return (
    <section
      id="life-claims"
      aria-labelledby="life-claims-heading"
      className="w-full bg-white py-16 sm:py-20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <Container>
        <div className="mx-auto w-full max-w-5xl">

          {/* Header */}
          <header className="mb-10">
            <h2
              id="life-claims-heading"
              className="text-2xl font-bold uppercase text-[#1d4e9e] md:text-3xl"
            >
              Life Insurance Claims
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-gray-900">
              A simple guide to filing your insurance claim, preparing the
              required documents, and receiving your benefits.
            </p>
          </header>

          <div className="flex flex-col gap-3">

            {/* Claims Process */}
            <section
              id="claims-process"
              aria-labelledby="claims-process-heading"
              className={cardClass}
            >
              <div className={titleBarClass}>
                <h3 id="claims-process-heading" className={titleClass}>
                  Claims Process
                </h3>
              </div>

              <div className={bodyClass}>
                <p className="mb-6 text-lg text-gray-900">
                  Follow these four simple steps to process your claim.
                </p>

                <ol className="space-y-6">
                  {process.map((step) => (
                    <li key={step.number}>
                      <h4 className={headingClass}>
                        {step.number}. {step.title}
                      </h4>
                      <ul className={listClass}>
                        <li>{step.description}</li>
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            {/* Required Documents */}
            <section
              id="required-documents"
              aria-labelledby="required-documents-heading"
              className={cardClass}
            >
              <div className={titleBarClass}>
                <h3 id="required-documents-heading" className={titleClass}>
                  Required Documents
                </h3>
              </div>

              <div className={bodyClass}>
                <p className="mb-6 text-lg text-gray-900">
                  Prepare the following documents to facilitate your insurance
                  claim application.
                </p>

                <div>
                  <h4 className={headingClass}>Basic Requirements</h4>
                  <ul className={listClass}>
                    {basicRequirements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className={headingClass}>Conditional Requirements</h4>
                  <p className="mb-4 text-lg text-gray-900">
                    Submit additional requirements appropriate to your case.
                  </p>

                  <div className="space-y-6">
                    {conditionalRequirements.map((group) => (
                      <div key={group.title}>
                        <h5 className={subheadingClass}>{group.title}</h5>
                        <ul className={listClass}>
                          {group.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section
              id="contact-claims"
              aria-labelledby="contact-claims-heading"
              className={cardClass}
            >
              <div className={titleBarClass}>
                <h3 id="contact-claims-heading" className={titleClass}>
                  Contact Information
                </h3>
              </div>

              <div className={bodyClass}>
                <p className="mb-6 text-lg text-gray-900">
                  For questions and assistance regarding your insurance claims,
                  please contact our office.
                </p>

                <h4 className={subheadingClass}>Contact Information:</h4>
                <ul className={listClass}>
                  <li>
                    <address className="not-italic">
                      121 Independencia St. Brgy. 51, Tacloban City 6500
                    </address>
                  </li>
                  <li>
                    Mobile:{" "}
                    <a
                      href="tel:+639165162548"
                      className="hover:underline"
                    >
                      +63 916 516 2548
                    </a>
                  </li>
                  <li>
                    Landline:{" "}
                    <a
                      href="tel:+63538321782"
                      className="hover:underline"
                    >
                      +63 (53) 832-1782
                    </a>{" "}
                    |{" "}
                    <a
                      href="tel:+63538323567"
                      className="hover:underline"
                    >
                      832-3567
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:maxin.machicagroup@gmail.com"
                      className="break-all hover:underline"
                    >
                      maxin.machicagroup@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </section>

          </div>
        </div>
      </Container>
    </section>
  );
}
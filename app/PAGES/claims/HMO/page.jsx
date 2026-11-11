import Container from "../../../../Layout/container";

const reminders = [
  "Reimbursements must be filed within 30 days from the date of availment or date of discharge. Otherwise, the reimbursement will be forfeited.",
  "Not all procedures may be reimbursed (i.e. consultations, dental are not reimbursable).",
  "Reimbursements are only allowed for emergency cases availed at non-accredited hospitals/clinics.",
];

const documents = [
  "Duly Accomplished (CIF) Customer Information Form.",
  "Filled-out Claims Reimbursement Form",
  "Medical Certificate indicating the diagnosis and procedure(s) done (if any)",
  "Original BIR-registered Official Receipt(s) / Sales Invoice with TIN",
  "Statement of Account (summary of hospital bill charges)",
  "Charge slips or detailed itemized breakdown of charges (charges per item paid)",
  "Police report for cases of assault or vehicular accidents",
  "Operative report for surgical cases",
  "Clinical Abstract / History",
  "Certification of non-availability of medicines for hospital pharmacy and original prescriptions signed by the attending physician (for IP medicines bought outside the hospital)",
];

// Shared styles (match the claims accordion)
const cardClass =
  "overflow-hidden rounded-2xl border border-[#cfdaee] bg-slate-50 shadow-md";
const titleBarClass = "bg-[#d6e6fb] px-6 py-6";
const titleClass =  "text-lg font-bold uppercase text-[#1d4e9e] ";
const bodyClass = "border-t border-[#cfdaee] px-6 py-6";
const headingClass = "mb-4 text-[18px] font-bold uppercase text-black";
const subheadingClass = "mb-4 text-[18px] font-bold text-black";
const listClass = "list-disc text-[18px] space-y-1 pl-6 text-gray-900 marker:text-black";

export default function HmoClaims() {
  return (
    <section
      id="hmo-claims"
      aria-labelledby="hmo-claims-heading"
      className="w-full bg-white py-16 sm:py-20"
    >
      <Container>
        <div className="mx-auto w-full max-w-5xl">

          {/* Header */}
          <header className="mb-10">
            <h2
              id="hmo-claims-heading"
              className="text-2xl font-bold uppercase text-[#1d4e9e] md:text-3xl"
            >
              HMO Claims
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-gray-900">
              Information and requirements for members filing reimbursement
              claims.
            </p>
          </header>

          <div className="flex flex-col gap-3">

            {/* Important Reminders */}
            <section
              id="hmo-reminders"
              aria-labelledby="hmo-reminders-heading"
              className={cardClass}
            >
              <div className={titleBarClass}>
                <h3 id="hmo-reminders-heading" className={titleClass}>
                  Important Reminders
                </h3>
              </div>

              <div className={bodyClass}>
                <ol className="list-decimal space-y-3 pl-6 text-[18px] text-gray-900 marker:font-bold marker:text-black">
                  {reminders.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ol>
              </div>
            </section>

            {/* Required Documents */}
            <section
              id="hmo-documents"
              aria-labelledby="hmo-documents-heading"
              className={cardClass}
            >
              <div className={titleBarClass}>
                <h3 id="hmo-documents-heading" className={titleClass}>
                  Required Documents
                </h3>
              </div>

              <div className={bodyClass}>
                <p className="mb-6 text-base text-gray-900">
                  Members filing for reimbursement must submit the complete
                  documents as follows:
                </p>

                <ol className="list-[lower-alpha] space-y-2 pl-6 text-[18px] text-gray-900 marker:font-bold marker:text-black">
                  {documents.map((doc) => (
                    <li key={doc}>{doc}</li>
                  ))}
                </ol>
              </div>
            </section>

            {/* Where to Submit */}
            <section
              id="hmo-contact"
              aria-labelledby="hmo-contact-heading"
              className={cardClass}
            >
              <div className={titleBarClass}>
                <h3 id="hmo-contact-heading" className={titleClass}>
                  Where to Submit
                </h3>
              </div>

              <div className={bodyClass}>
                <p className="mb-6 text-lg text-gray-900">
                  Submit the complete reimbursement documents to the following
                  address or you may email.
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
                    <a href="tel:+639178676837" className="hover:underline">
                      +63 917 867 6837
                    </a>
                  </li>
                  <li>
                    Landline:{" "}
                    <a href="tel:+63538321782" className="hover:underline">
                      +63 (53) 832-1782
                    </a>{" "}
                    |{" "}
                    <a href="tel:+63538323567" className="hover:underline">
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
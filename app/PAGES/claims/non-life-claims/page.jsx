"use client";

import { useState } from "react";

const CLAIMS = [
    {
        title: "Fire and Allied Perils(Typhoon, Earthquake, Flood) Insurance Claim ",
        sections: [{
            heading:"1. REPORT A CLAIM ",
            subheading:"Contact Information:",
            items: [
                    "121 Independencia St. Brgy. 51, Tacloban City 6500",
                    "Mobile: +63 917 867 6837",
                    "Landline: +63 (53) 832-1782 | 832-3567",
                    "maxin.machicagroup@gmail.com",
                  
                ] },
                
                {
                heading: "2. SUBMIT COMPLETE CLAIM REQUIREMENTS ",
                subheading: "For Building Claim:",
                items: [
                    "Photocopy of Transfer Certificate of Title and/or Tax Declaration",
                    "Fire report coming from BFP (for fire insurance claim)",
                    "Photocopy of floor plan",
                    "Photocopy of building permit",
                    "Estimate cost of damage duly signed by a licensed engineer or contractor",
                    "Picture of damaged property",
                    "Affidavit of loss signed by the insured",
                    "Claim letter to insurance company signed by the insured",
                    
                ],
               },

               {
                
                subheading: "For Stocks/Content Claim:",
                items: [
                    "List of inventory duly signed by the insured",
                    "List of damaged items duly signed by the insured",
                    "Fire report coming from BFP (for fire insurance claim",
                    "Copy of official receipts/invoice to support the unit cost",
                    "Business permits (for stocks claim",
                    "Certificate of Registration from BIR",
                    "Affidavit of loss signed by the insured",
                    "Claim letter to insurance company signed by the insured",
                    "Pictures of damaged items",                  
                ],
               },

                ],

           
    },
    {
        title: "Motor Car Insurance Claim",
        sections:
              [{ 
                heading:"1. REPORT A CLAIM ",
                subheading:"Contact Information:",
                items:
                [
                    "121 Independencia St. Brgy. 51, Tacloban City 6500",
                    "Mobile: +63 917 867 6837",
                    "Landline: +63 (53) 832-1782 | 832-3567",
                    "maxin.machicagroup@gmail.com",
                ] },


                {
                heading: "2. SUBMIT COMPLETE CLAIM REQUIREMENTS ",
                subheading: "Own Damage:",
                items: [
                    "Picture of the damaged unit",
                    "Police report and/or affidavit of accident",
                    "Latest LTO OR and CR",
                    "Driver’s License of the driver",
                    "Repair estimate",
                    
                ],
               },

               {
                subheading: "Third Party Liability (TPL):",
                items: [
                    "Picture of the damaged unit",
                    "Police report and/or affidavit of accident",
                    "Latest LTO OR and CR",
                    "Driver’s License of the driver",
                    "Repair estimate",
                    "Driver’s License of the other party",
                    "Certificate of No Insurance Claim coming from the insurance provider of the other party. (if applicable)",
                    
                ],
               },
            ],
    },
    {
        title: "Travel Insurance Claim",
        sections: [{
            heading:"1. REPORT A CLAIM ",
            subheading:"Contact Information:", 
            items:
            [
                 "121 Independencia St. Brgy. 51, Tacloban City 6500",
                    "Mobile: +63 917 867 6837",
                    "Landline: +63 (53) 832-1782 | 832-3567",
                    "maxin.machicagroup@gmail.com",
            ] 
        },
        {
                heading: "2. SUBMIT COMPLETE CLAIM REQUIREMENTS ",
                subheading: "Documentary Requirements:",
                items: [
                    "Complete and signed claim form provided by Insurance Provider.",
                    "A copy of your Airline Ticket",
                    "A copy of your identification document (e.g., passport, driver's license).",
                    "Copies of your original flight tickets or booking confirmation showing the scheduled departure and arrival times. ",
                    "Copies of boarding passes or any other documents provided by the airline indicating your attempt to board the delayed flight.",
                    "A written confirmation from the airline stating the reason for the flight delay, the duration of the delay, and any compensation offered (if applicable).",
                    "Supply client’s bank account information so that payments can be made if reimbursement for costs is needed.",
                    "Any other relevant documentation related to the flight delay or any travel claim.",

                    
                ]
               },

                {
                
                subheading: "Note:",
                items: [
                    "Ensure that you submit all required documentation accurately and promptly to expedite the claims process. If you have any questions or need further assistance, don't hesitate to contact us for guidance.",
                    

                    
                ],
               },


               
    ],

        
    },
    {
       
        title: "Comprehensive Liabilty Claim",
        sections: [
            {
                heading:"1. REPORT A CLAIM ",
                subheading:"Contact Information:",
                items:
                [
                    "121 Independencia St. Brgy. 51, Tacloban City 6500",
                    "Mobile: +63 917 867 6837",
                    "Landline: +63 (53) 832-1782 | 832-3567",
                    "maxin.machicagroup@gmail.com",
                
                ],
            },

            {
                heading: "2. SUBMIT COMPLETE CLAIM REQUIREMENTS ",
                items: [
                    "Completed and signed claim form.",
                    " Detailed account of the incident leading to the claim.",
                    " Copy of the contract with the client. ",
                    "Copy of any relevant agreements or terms of engagement.",
                    "Copy of the insurance policy or certificate ",
                    "Any correspondence related to the claim, including letters, emails, and communications with the client or third parties.",
                    " Copies of any advice or recommendations provided that are related to the claim.",
                    "Documentation showing any steps taken to mitigate the damage or issue.",
                    "Evidence of financial loss incurred, such as invoices, receipts, or loss of revenue reports.",
                    "Any additional evidence supporting the claim, such as witness statements or expert reports.",
                     "Details of any settlement offers or agreements made in relation to the claim.",


                    
                ]
               },
        ],
    },

    {
        title: "Marine Insurance Claim",
        sections:
              [{ 
                heading:"1. REPORT A CLAIM ",
                subheading:"Contact Information:",
                items:
                [
                    "121 Independencia St. Brgy. 51, Tacloban City 6500",
                    "Mobile: +63 917 867 6837",
                    "Landline: +63 (53) 832-1782 | 832-3567",
                    "maxin.machicagroup@gmail.com",
                ] },


                {
                heading: "2. SUBMIT COMPLETE CLAIM REQUIREMENTS ",
                subheading: "To evaluate your claim and determine the Insurer's liability under the policy, we need the following information and documents:",
                items: [
                    "Formal Claim against the Insurer, showing the computation of loss.",
                    "Acknowledged copy of the Formal Claim against the Shipping Company/Airline.",
                    'Acknowledged copy of the Formal Claim against the "Name of Contractor."',
                    'Reply from the "Name of Contractor."',
                    "Duplicate copy of Delivery Receipt of a Customs Broker/Trucking Co.",
                    "Reply of Lighterage/Customs Broker/Trucking Co.",
                    "Original Marine Cargo Policy/Risk Note",
                    "Original Bill of Lading/Master Air Waybill",
                    "Original Packing List",
                    "Original Commercial Invoice",
                    "Bad Order Certificate",
                    "Master’s Marine Protest",
                    "Chemical Analysis Report",
                    "Any other documents which you feel can have any help in evaluating your claim",
                    

                    
                    
                ],
                
               },

               {
                 subheading: "The company reserves the right to require such additional proof as it may be considered necessary to support the claim.",
                items: [
                    
                ],
               },
            ],
    },
    {
        title: "Bonds Insurance Claim",
        sections:
              [{ 
                heading:"1. REPORT A CLAIM ",
                subheading:"Contact Information:",
                items:
                [
                    "121 Independencia St. Brgy. 51, Tacloban City 6500",
                    "Mobile: +63 917 867 6837",
                    "Landline: +63 (53) 832-1782 | 832-3567",
                    "maxin.machicagroup@gmail.com",
                ] },


                {
                heading: "SUBMIT COMPLETE CLAIM REQUIREMENTS ",
                subheading: "1. Issuance of Written Notice:",
                items: [
                    "Prepare a detailed written notice specifying the claim amount and the cause or reason for the claim.",
                    "Attach all relevant supporting documents and communications.",    
                ],
               },

               {
                subheading: "2. Notification to Principal:",
                items: [
                    "The surety notifies the principal of the claim, providing a 5-day period for the principal to respond.",
                    
                    
                ],
               },
               {
                subheading: "3. Position of Surety:",
                items: [
                    "Request for additional documents or information.",
                    "Decision to honor or reject the claim.",
                    "Proposal for a conference or meeting to discuss the matter further.",
                    
                    
                ],
               },
            ],
    },

    {
        title: "Engineering Insurance Claim",
        sections:
              [{ 
                heading:"1. REPORT A CLAIM ",
                subheading:"Contact Information:",
                items:
                [
                    "121 Independencia St. Brgy. 51, Tacloban City 6500",
                    "Mobile: +63 917 867 6837",
                    "Landline: +63 (53) 832-1782 | 832-3567",
                    "maxin.machicagroup@gmail.com",
                ] },


                {
                heading: "2. SUBMIT COMPLETE CLAIM REQUIREMENTS ",
                subheading: "Contractors All Risk",
                items: [
                    "Sworn Statement of Claim: Completed and notarized (provided by adjuster).",
                    "Non-Waiver Agreement: Completed and notarized (provided by adjuster).",
                    "Incident Report: Detailed account of the incident.",
                    "Weather and Rainfall Report: Official report from the nearest PAGASA weather station (if applicable).",
                    "Contract Documents: Copy of Contract Agreement with Bid Estimates,  Copy of Notice of Award, Copy of Notice of Commencement. ",
                    "Business Documentation: Copies of business registration, permits, etc.",
                    "Survey of Damages: Based on standard engineering practices (including plans, survey data, PERT CPM, etc.).",
                    "Projected Cash Flow: Cash flow projections for the project.",
                    "Loss and Damage Computation: Detailed calculation to restore the damaged portions to their original condition.",
                    "Accomplishment/Progress Reports: Certified copies of recent and previous monthly reports, including backup computations.",
                    "Billing Reports: Certified copies of recent and previous billing reports.",
                    "Repair/Replacement Documents: Invoices, receipts, and other documents supporting the actual cost of repair/replacement.",
                    "Panoramic Photos: Clear, annotated photos taken immediately after the loss.",
                    
                    
                ],
               },

               {
                subheading: "Damaged POS Machine",
                items: [
                    "Incident Report: Detailed account of the incident.",
                    "Repair Estimates/Quotations: Estimates or quotations for repair.",
                    "Photos: Clear pictures of the damaged machine.",
                    "IBM Technical Report: Technical assessment report from IBM.4o",
                    
                    
                ],
               },
            ],
    },

     

     {
        title: "Personal Accident Insurance Claim",
        sections:
              [{ 
                heading:" REPORT A CLAIM ",
                subheading:"Contact Information:",
                items:
                [
                    "121 Independencia St. Brgy. 51, Tacloban City 6500",
                    "Mobile: +63 917 867 6837",
                    "Landline: +63 (53) 832-1782 | 832-3567",
                    "maxin.machicagroup@gmail.com",
                ] },


                {
                heading: "SUBMIT COMPLETE CLAIM REQUIREMENTS ",
                subheading: "Death Claim",
                items: [
                    "Police Investigation Report or Statement of Witness/es (If not available, provide an Affidavit or Incident Report)",
                    "Valid ID of the Beneficiary/ies  with date of birth, signature, and photo-present the actual ID(s) and submit photocopy(ies)",
                    "Complete Medical records of Insured",
                    "Newspaper Clippings (if any)",
                    "Attending Physician’s Medical Certificate",
                    "Birth Certificate - Certified True Copy (Insured)",
                    "Death Certificate - Certified True Copy (Insured)",
                    "Marriage Contract",
                    "Burial Receipts",
                    "Pictures (if any)"
                ],
               },

               {
                subheading: "Medical Reimbursement for Bodily Injuries or Disability Claim",
                items: [
                    "Police Investigation Report or Statement of Witness/es",
                    "Attending Physician’s Medical Certificate",
                    "Doctor’s Prescription",
                    "Hospital Statement of Account",
                    "Medical Bills and Receipts (originals)",
                    "Policy Owner, Assignee & irrevocable beneficiary/ies (if any)",
                    "Duly Signed Police Surrender / Full Withdrawal Application Form"
                    
                ],
               },
            ],
    },

    {
        title: "Professional Indemnity Insurance Claim",
        sections:
              [{ 
                heading:" REPORT A CLAIM ",
                subheading:"Contact Information:",
                items:
                [
                    "121 Independencia St. Brgy. 51, Tacloban City 6500",
                    "Mobile: +63 917 867 6837",
                    "Landline: +63 (53) 832-1782 | 832-3567",
                    "maxin.machicagroup@gmail.com",
                ] },


                {
                heading: "SUBMIT COMPLETE CLAIM REQUIREMENTS ",
                subheading: "",
                items: [
                    "Completed and signed claim form.",
                    "Detailed account of the incident leading to the claim.", 
                    "Copy of the contract with the client.", 
                    "Copy of any relevant agreements or terms of engagement.",
                    "Copy of the insurance policy or certificate.",
                    " Any correspondence related to the claim, including letters, emails, and communications with the client or third parties.",
                    "Professional Advice Documentation: Copies of any advice or recommendations provided that are related to the claim.",
                    "Documentation showing any steps taken to mitigate the damage or issue.",
                    "Evidence of financial loss incurred, such as invoices, receipts, or loss of revenue reports.",
                    " Any additional evidence supporting the claim, such as witness statements or expert reports.",
                    "Details of any settlement offers or agreements made in relation to the claim."
                    
                ],
               },

               
            ]
    },


    
];

export default function ClaimsAccordion() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="mx-auto w-full max-w-5xl">
            

            <div className="flex flex-col gap-3">
                {CLAIMS.map((claim, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div
                            key={claim.title}
                            className="overflow-hidden rounded-2xl border border-[#cfdaee] bg-slate-50 shadow-md"
                        >
                            <button
                                type="button"
                                aria-expanded={isOpen}
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className={`flex w-full items-center justify-between gap-4 px-6 py-6 text-left transition-colors duration-300 ${
                                    isOpen ? "bg-[#d6e6fb]" : "bg-slate-50 hover:bg-[#eaf1fc]"
                                }`}
                            >
                                <span className="text-lg font-bold uppercase text-[#1d4e9e] md:text-[18px]">
                                    {claim.title}
                                </span>

                                <span
                                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                                        isOpen
                                            ? "bg-[#1d4e9e] text-white"
                                            : "bg-[#d6e6fb] text-[#1d4e9e]"
                                    }`}
                                >
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    >
                                        <path d="M2 7h10" />
                                        <path
                                            d="M7 2v10"
                                            className={`origin-center transition-transform duration-300 ${
                                                isOpen ? "scale-y-0" : "scale-y-100"
                                            }`}
                                        />
                                    </svg>
                                </span>
                            </button>

                            {/* Smooth open/close */}
                            <div
                                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="border-t border-[#cfdaee] px-6 py-6">
                                        {claim.sections.map((section, i) => (
                                            <div key={i} className={i > 0 ? "mt-6" : ""}>
                                                {section.heading && (
                                                    <h3 className="mb-4 text-lg font-bold uppercase text-black">
                                                        {section.heading}
                                                    </h3>
                                                )}
                                                {section.subheading && (
                                                    <h3 className="mb-4 text-lg font-bold  text-black">
                                                        {section.subheading}
                                                    </h3>
                                                )}

                                                <ul className="list-disc space-y-1 pl-6 text-lg text-gray-900 marker:text-black">
                                                    {section.items.map((item) => (
                                                        <li key={item}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
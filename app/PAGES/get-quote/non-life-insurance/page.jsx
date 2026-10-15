"use client";

import { useState } from "react";
import Container from "../../../../Layout/container";
import FireInsuranceForm from "../../../../components/get_quote_form/non-life_insurance/fire_insurance";
import MotorCarInsurance from "../../../../components/get_quote_form/non-life_insurance/motor_car_insurance";
import TravelInsurance from "../../../../components/get_quote_form/non-life_insurance/travel_insurance";
import PersonaLInccident from"../../../../components/get_quote_form/non-life_insurance/personal_inccident";
import MarineInsurance from"../../../../components/get_quote_form/non-life_insurance/marine_insurance";
import BondSurety from"../../../../components/get_quote_form/non-life_insurance/bonds_surety";
import Engineering from"../../../../components/get_quote_form/non-life_insurance/engineering_insurance";
import GeneralLiablity from"../../../../components/get_quote_form/non-life_insurance/general_liability";
import IndemnityInsurance from"../../../../components/get_quote_form/non-life_insurance/professional_insurance";
 



const products = [
  "Fire Insurance",
  "Motor Car Insurance",
  "Travel Insurance",
  "Personal Accident Insurance",
  "Marine Insurance",
  "Bonds & Surety",
  "Engineering Insurance",
  "Comprehensive General Liability",
  "Professional Indemnity Insurance",
];

// Add the other forms here as you build them (key = product name)
const forms = {
  "Fire Insurance": <FireInsuranceForm />,
  "Motor Car Insurance": <MotorCarInsurance/>,
  "Travel Insurance": <TravelInsurance/>,
  "Personal Accident Insurance": <PersonaLInccident/>,
  "Marine Insurance": <MarineInsurance/>,
  "Bonds & Surety": <BondSurety/>,
  "Engineering Insurance": <Engineering/>,
  "Comprehensive General Liability": <GeneralLiablity/>,
  "Professional Indemnity Insurance": <IndemnityInsurance/>,
  
  

  
};

export default function NoneLifeInsurance() {
  const [selected, setSelected] = useState("Fire Insurance");

  return (
    <Container>
      <main className="grid items-start md:grid-cols-[22rem_1fr] gap-10 bg-white py-18 min-h-screen">
        {/* Left: product list */}
        <aside>
          <h2 className="mb-4 text-xl font-bold text-[#012289]">
            Select Products
          </h2>

          <nav className="flex flex-col gap-2">
            {products.map((name) => {
              const isActive = name === selected;
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => setSelected(name)}
                  aria-pressed={isActive}
                  className={`w-full px-7 py-2.5 text-left text-base font-bold transition-colors ${
                    isActive
                      ? "bg-[#14678d] text-white"
                      : "bg-gray-200 text-[#14678d] hover:bg-gray-300"
                  }`}
                >
                  {name}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Right: form for the selected product */}
        <section>{forms[selected] ?? null}</section>
      </main>
    </Container>
  );
}
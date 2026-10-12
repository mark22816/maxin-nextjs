"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../../../../Layout/container";
import { IMAGES } from "../../../../constants/images";
import FireInsuranceForm from "../../../../components/get_quote_form/fire_insurance";

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
};

export default function NoneLifeInsurance() {
  const [selected, setSelected] = useState("Fire Insurance");

  return (
    <Container>
      <main className="grid items-start md:grid-cols-[22rem_1fr] gap-10 bg-white py-18 min-h-screen">
        {/* Left: product list */}
        <aside>
          <h2 className="mb-4 text-lg font-semibold text-[#012289]">
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
"use client";

import { useState } from "react";
import Container from "../../../../Layout/container";
import Business from "../../../../components/get_quote_form/hmo_health_insurance/business";
import Individual from "../../../../components/get_quote_form/hmo_health_insurance/personal";

const products = [
  "I'm a business",
  "I'm a Individual",
  
];

// Add the other forms here as you build them (key = product name)
const forms = {
  "I'm a business": <Business/>,
  "I'm a Individual": <Individual/>,
  
  
  

  
};

export default function NoneLifeInsurance() {
  const [selected, setSelected] = useState("I'm a business");

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
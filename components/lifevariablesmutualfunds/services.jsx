"use client";

import Link from "next/link";
import { Heart, Users, ShieldPlus, TrendingUp, GraduationCap, HandCoins } from "lucide-react";
import Container from "../../Layout/container";

const products = [
  { id: "life-insurance", label: "Life\nInsurance", icon: Heart, href: "/life-variable-mutual-funds" },
  { id: "retirement-plans", label: "Retirement\nPlans", icon: Users, href: "/retirement-plans" },
  { id: "health-coverage", label: "Health\nCoverage", icon: ShieldPlus, href: "/health-coverage" },
  { id: "mutual-funds", label: "Mutual\nFunds", icon: TrendingUp, href: "/life-variable-mutual-funds" },
  { id: "savings-educational", label: "Savings &\nEducational Plan", icon: GraduationCap, href: "/savings-educational-plan" },
  { id: "investment-vul", label: "Investment-Linked & VUL\nInsurance", icon: HandCoins, href: "/investment-vul-insurance" },
];

export default function ProductsServices() {
  return (
    <section className="relative bg-gradient-to-br from-[#1a9cc4] via-[#14678d] to-[#012289] py-16 sm:py-20 w-full">
      <Container className="relative w-full">
        <h2 className="text-center text-white font-bold tracking-wide text-xl sm:text-2xl lg:text-3xl mb-10 sm:mb-12">
          OUR PRODUCTS &amp; SERVICES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {products.map(({ id, label, icon: Icon, href }) => (
            <Link
              key={id}
              href={href}
              className="group flex items-center gap-4 rounded-xl bg-white hover:bg-slate-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out px-6 py-4 text-left  animate-flip-horizontal animate-duration-1000 animate-fill-mode-bothshadow-sm"
            >
              <Icon
                className="shrink-0 w-6 h-6 text-[#14678d] transition-transform duration-300 ease-out group-hover:scale-110"
                strokeWidth={2}
              />
              <span className="font-bold text-[#012289] group-hover:text-[#14678d] transition-colors duration-300 ease-out leading-snug whitespace-pre-line text-[16px] sm:text-[18px]">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
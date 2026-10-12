"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { User, Users, Briefcase, CreditCard } from "lucide-react";
import Container from "../../../Layout/container";

const audienceCategories = [
  {
    id: "individuals",
    href: "/healthcare/individuals",
    icon: User,
    title: "Individuals",
    description:
      "Protect your health with trusted insurance options tailored to your needs and budget.",
  },
  {
    id: "families",
    href: "/healthcare/families",
    icon: Users,
    title: "Families",
    description:
      "Build a healthier future for your family with coverage that grows with your needs.",
  },
  {
    id: "smes-corporations",
    href: "/healthcare/corporate",
    icon: Briefcase,
    title: "SMEs or Corporations",
    description:
      "Protect your team with trusted healthcare solutions tailored to your business needs.",
  },
  {
    id: "prepaid-health-card",
    href: "/healthcare/prepaid-card",
    icon: CreditCard,
    title: "Prepaid Health Cards",
    description:
      "Access budget-friendly, pre-funded medical coverage and emergency care solutions designed for quick, hassle-free use.",
  },
];

function AudienceCard({ href, title, description, icon: Icon, index, isLast }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      href={href}
      ref={cardRef}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`group relative flex h-full flex-col items-center  text-center px-6 py-10 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Icon Badge */}
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#012289]/10 text-[#012289] mb-6 transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-[#012289] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#012289]/25">
        <Icon size={32} strokeWidth={1.75} />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold tracking-tight text-[#2c7ba3] mb-3 transition-colors">
        {title}
      </h3>
      <p className="text-base text-slate-600 leading-relaxed max-w-sm">
        {description}
      </p>

      {/* Bottom accent line on hover */}
      <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-[#012289] transition-all duration-300 ease-out group-hover:w-12" />

      {/* Centered column/row divider */}
      {!isLast && (
        <>
          <span className="hidden md:block absolute top-1/2 right-0 h-16 w-px -translate-y-1/2 bg-slate-200" />
          <span className="md:hidden absolute bottom-0 left-1/2 h-px w-16 -translate-x-1/2 bg-slate-200" />
        </>
      )}
    </Link>
  );
}

export default function AudienceSection() {
  return (
    <section className="py-20 sm:py-24 w-full bg-[#012289]">
      <Container className="w-full">
        <div className="rounded-3xl bg-white shadow-2xl overflow-hidden py-12 px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {audienceCategories.map((item, i) => (
              <AudienceCard
                key={item.id}
                index={i}
                isLast={i === audienceCategories.length - 1}
                {...item}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
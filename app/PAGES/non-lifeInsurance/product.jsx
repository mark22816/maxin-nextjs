"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IMAGES } from "../../../constants/images";
import Container from "../../../Layout/container";
import {
  Flame, Car, PlaneTakeoff, ShieldCheck, Ship, FileCheck2, HardHat, Building2, BriefcaseBusiness, ArrowUpRight,
} from "lucide-react";


const products = [
  {
    id: "fire-insurance",
    icon: Flame,
    image: IMAGES.Product1,
    title: "Fire Insurance",
    description:
      "Protects against financial losses resulting from fire damage to personal or business property, offering compensation for repair or rebuilding costs. Coverage extends to losses from acts of nature.",
  },
  {
    id: "motor-car-insurance",
    code: "MOTOR",
    icon: Car,
    image: IMAGES.Product2,
    title: "Motor Car Insurance",
    description:
      "Coverage for vehicles against accidents, theft, vandalism, and natural disasters, including liability for bodily injury and property damage caused to others.",
  },
  {
    id: "travel-insurance",
    code: "TRAVEL",
    icon: PlaneTakeoff,
    image: IMAGES.Product3,
    title: "Travel Insurance",
    description:
      "Financial protection against trip cancellations, medical emergencies, and lost luggage, with customizable options tailored to individual needs.",
  },
  {
    id: "personal-accident-insurance",
    code: "PERSONAL",
    icon: ShieldCheck,
    image: IMAGES.Product4,
    title: "Personal Accident Insurance",
    description:
      "Coverage for policyholders in the event of accidents resulting in bodily injury, disability, or death — paying out for medical expenses, lost income, and family support.",
  },
  {
    id: "marine-insurance",
    code: "MARINE",
    icon: Ship,
    image: IMAGES.Product5,
    title: "Marine Insurance",
    description:
      "Protection for businesses operating on the high seas, covering maritime liabilities and losses associated with voyages and inland transit exposure.",
  },
  {
    id: "bond-surety",
    code: "SURETY",
    icon: FileCheck2,
    image: IMAGES.Product6,
    title: "Bonds & Surety",
    description:
      "Investment-linked and Variable Universal Life plans combining insurance with investment, blending security with the opportunity to grow wealth.",
  },
  {
    id: "engineering-insurance",
    code: "ENGINEERING",
    icon: HardHat,
    image: IMAGES.Product7,
    title: "Engineering Insurance",
    description:
      "Safeguards construction, installation, and operation projects — covering sites, machinery, equipment, and third-party liabilities from start to finish.",
  },
  {
    id: "comprehensive-general-liability",
    code: "LIABILITY",
    icon: Building2,
    image: IMAGES.Product8,
    title: "Comprehensive General Liability",
    description:
      "Broad protection against third-party claims for bodily injury or property damage arising from business operations, products, or premises.",
  },
  {
    id: "professional-indemnity-insurance",
    code: "INDEMNITY",
    icon: BriefcaseBusiness,
    image: IMAGES.Product9,
    title: "Professional Indemnity Insurance",
    description:
      "Protection for professionals against claims of negligence, errors, or omissions in the services or advice they provide to clients.",
  },
];

function ProductCard({ image, title, description, code, icon: Icon, index }) {
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

  const tones = ["bg-maxin-blue", "bg-maxin-cyan", "bg-[#14678d]"];
  const tone = tones[index % 3];

  return (
    <div
      ref={cardRef}
      style={{ transitionDelay: isVisible ? `${(index % 3) * 100}ms` : "0ms" }}
      className={`rounded-lg group relative flex flex-col overflow-hidden border border-black/10 bg-[#F8F7F3] transition-all duration-700 ease-out hover:border-maxin-blue/30 hover:shadow-[0_24px_48px_-20px_rgba(1,34,137,0.28)] hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Image */}
      <div className="relative w-full h-[220px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover grayscale-[15%] transition-all duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/60 via-transparent to-transparent" />

        {/* Coverage seal */}
        <div
          className={`absolute -bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-full ${tone} text-white shadow-lg transition-transform duration-500 ease-out group-hover:rotate-[18deg] group-hover:scale-110`}
          style={{
            border: "2px dashed rgba(255,255,255,0.55)",
            outline: "2px solid rgba(0,0,0,0.06)",
            outlineOffset: "3px",
          }}
        >
          <Icon size={22} strokeWidth={1.75} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 pt-10 pb-7 px-6">
       

        <h3 className="text-[19px] font-semibold uppercase tracking-tight text-[#1a6fa0] mb-1 leading-snug">
          {title}
        </h3>
        <div className="h-px w-10 bg-maxin-cyan mb-4 transition-all duration-500 group-hover:w-16" />

        <p className="text-[14.5px] text-gray-500 leading-relaxed mb-5">
          {description}
        </p>

        <div className="mt-auto flex items-center gap-1.5 text-sm font-medium text-maxin-blue">
          <span className="border-b border-transparent group-hover:border-maxin-blue transition-colors">
            View coverage details
          </span>
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </div>
  );
}

export default function Product() {
  return (
    <section className="py-20 sm:py-24 w-full bg-white">
      <Container className="w-full">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 " >
          {products.map((p, i) => (
            <ProductCard key={p.id} index={i} {...p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
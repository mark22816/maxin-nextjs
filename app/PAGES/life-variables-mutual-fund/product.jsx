"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IMAGES } from "../../../constants/images";
import Container from "../../../Layout/container";

const products = [
  { id: "life-insurance", image: IMAGES.Product10, title: "LIFE INSURANCE", description: "Your ultimate shield against life's uncertainties and your family's beacon of security! Imagine the comfort of knowing that, no matter what, your loved ones will be financially protected and able to maintain their quality of life. With life insurance, you're not just preparing for the unexpected; you're investing in a legacy of care and stability for those who matter most." },
  { id: "retirement-plans", image: IMAGES.Product11, title: "RETIREMENT PLANS", description: "Secure your future and live the retirement of your dreams by investing in a retirement plan today. With the potential for tax benefits and employer contributions, you're not just saving money, you're building a foundation for financial freedom. Don't wait another day to take control of your retirement destiny and embrace the peace of mind that comes with planning for a prosperous future." },
  { id: "health-coverage", image: IMAGES.Product12, title: "HEALTH COVERAGE", description: "Health coverage provides essential protection for individuals, families, and corporations, guaranteeing access to quality healthcare while minimizing financial strain. With customizable plans to suit diverse needs, it offers peace of mind knowing that your well-being is secured for the future." },
  { id: "mutual-funds", image: IMAGES.Product13, title: "MUTUAL FUNDS", description: "Mutual funds investments provides the benefit of diversification, professional management, and ease of access. This reduces risk, offers expert handling of your investments, and makes it simple to invest in a wide range of assets." },
  { id: "saving-education-plan", image: IMAGES.Product14, title: "SAVINGS & EDUCATIONAL PLAN", description: "Savings and Educational Plans offer vital pathways to financial security and future success. With savings plans, you safeguard your family's financial well-being by preparing for emergencies, homeownership, and retirement. Additionally, educational plans ensure your children have access to quality education without financial strain, setting them up for a bright future." },
  { id: "investment-link-vul-insurance", image: IMAGES.Product15, title: "INVESTMENT-LINKED & VUL INSURANCE", description: "Investment-linked and Variable Universal Life (VUL) Insurance combine insurance with investment. In Investment-Linked plans, premiums are invested for growth and coverage, while VUL lets you adjust premiums and choose where to invest. They blend security with the opportunity to grow wealth, ideal for those wanting a complete financial plan." },
];

function ProductRow({ image, title, description, reverse }) {
  const rowRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rowRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-6 lg:gap-10">
      <div
        className={`${reverse ? "md:order-2" : ""} transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${reverse ? "translate-x-10" : "-translate-x-10"}`
        }`}
      >
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="w-full h-auto rounded-lg shadow-lg object-cover"
          
        />
      </div>

      <div
        className={`flex flex-col justify-center mt-6 lg:mt-0 ${reverse ? "md:order-1" : ""} transition-all duration-700 ease-out delay-150 ${
          isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${reverse ? "-translate-x-10" : "translate-x-10"}`
        }`}
      >
        <h3 className="text-[20px] font-bold text-[#1a6fa0] mb-4 leading-tight">{title}</h3>
        <p className="text-[16px] lg:text-lg text-justify text-gray-500 mb-6">{description}</p>
      </div>
    </div>
  );
}

export default function Product() {
  return (
    <section className="py-18 sm:py-20 w-full">
      <Container className="flex flex-col gap-16 sm:gap-20 w-full">
        {products.map(({ id, image, title, description }, i) => (
          <ProductRow key={id} image={image} title={title} description={description} reverse={i % 2 === 1} />
        ))}
      </Container>
    </section>
  );
}
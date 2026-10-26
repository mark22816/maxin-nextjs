"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "../../../Layout/container";




export default function HMOSection  () {
  const providers = [
    {
      logo: "/images/maxicare.png",
      logoWidth: 300,
      description:
        "Maxicare is a healthcare provider in the Philippines that offers various healthcare plans, including individual plans tailored to meet the specific needs of individuals and plans typically offer coverage for outpatient consultations",
      image: "/images/maxicare-services.png",
      link: "/PAGES/HMO/maxicare",
    },
    {
      logo: "/images/medicard.png",
      logoWidth: 320,
      description:
        "Medicard is another healthcare provider in the Philippines that offers individual healthcare plans tailored to meet the diverse needs of individuals and families.",
      image: "/images/medicard-services.png",
      link: "/PAGES/HMO/medicard",
    },
    {
      logo: "/images/intellicare.png",
      logoWidth: 300,
      description:
        "Intellicare offers healthcare plans for SMEs: the SME Fit Plan for smaller businesses and the Corporate Plan for larger enterprises. ",
      image: "/images/intellicare-services.png",
      link: "/PAGES/HMO/intellicare",
    },
    {
      logo: "/images/philcare.png",
      logoWidth: 300,
      description:
        "PhilCare offers a range of HMO and health care plans designed for individuals and families, providing access to various medical services and healthcare benefits based on the selected plan.",
      image: "/images/philcare-services.png",
      link: "/PAGES/HMO/philcare",
    },
    {
      logo: "/images/IMS.png",
      logoWidth: 300,
      description:
        "IMS offers comprehensive health insurance solutions for individuals and organizations, ensuring access to quality medical care and financial protection.",
      image: "/images/ims-services.png",
      link: "/PAGES/HMO/ims",
    },
    {
      logo: "/images/AVEGA.png",
      logoWidth: 300,
      description:
        "Avega offers comprehensive health insurance solutions for individuals and organizations, ensuring access to quality medical care and financial protection.",
      image: "/images/avega-services.png",
      link: "/PAGES/HMO/avega",
    },
  ];

  const Logo = ({ provider, index }) => (
    <div className="mb-2 flex h-[60px] w-[140px] items-center justify-start sm:h-[75px] sm:w-[170px] lg:h-[90px] lg:w-[190px]">
      <Image
        src={provider.logo}
        alt="Healthcare provider logo"
        width={provider.logoWidth}
        height={90}
        className="h-full max-h-[55px] w-auto object-contain sm:max-h-[70px] lg:max-h-[85px]"
        priority={index === 0}
      />
    </div>
  );

  const Description = ({ provider }) => (
    <p className="mb-3 line-clamp-3 text-left text-base leading-[1.5] tracking-wide text-gray-600 sm:text-base md:text-[17px] lg:leading-[1.35]">
      {provider.description}
    </p>
  );

  const ReadMore = ({ provider }) => (
    <Link
      href={provider.link}
      className="mb-6 inline-block text-sm font-semibold text-[#012289] underline underline-offset-2 hover:text-[#1a9cc4] sm:text-base"
    >
      Read more
    </Link>
  );

  const ServiceImage = ({ provider }) => (
    <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] lg:aspect-square">
      <Image
        src={provider.image}
        alt="Healthcare services"
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 33vw"
      />
    </div>
  );

  return (
    <section className="w-full bg-white py-10 sm:py-12 lg:py-16">
      <Container className="mx-auto">

        {/* Auto-wrapping grid: 1 column on mobile, 2 on tablet, 3 on desktop — any number of providers */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-14">
          {providers.map((provider, index) => (
            <div key={index} className="flex h-full flex-col">
              <Logo provider={provider} index={index} />
              <Description provider={provider} />
              <ReadMore provider={provider} />
              <div className="mt-auto">
                <ServiceImage provider={provider} />
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};


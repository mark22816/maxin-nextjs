"use client";

import { useState } from 'react';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Container from "../../../Layout/container";

const testimonials = [
  {
    quote: "We hold MAXIN Insurance Agency in the high regard as far as customer service goes. We are among the agency's early patrons who are happy with the level of service, not only in keeping with our insurance needs, but also in assisting us with claims settlements.",
    name: 'Ms. Leticia Y. Ruiz',
    title: 'Treasurer, SL Ruiz Group',
  },
  {
    quote: "The Machica Group's consulting segment is our major professional services provider in our Philippine subsidiary. From incorporating and obtaining corporate licenses, they are with us in providing accounting, tax, regulatory compliance support services, and corporate secretarial functions at very competitive prices.",
    name: 'Mr. Anthony Sewell',
    title: 'Former E.D, Scott Chemicals Holdings Ltd.',
  },
  {
    quote: "As an ecosystem advocate, I admire Machica Group's business consulting model which promotes and supports environmentally-sustainable client's projects. Its founder, Dr Machica, is the leading figure of the Economy for the Common Good – Asia Pacific Chapter which advocates a more ethical economic model in which the well being of people and the environment become the ultimate goal of business.",
    name: 'Michael Klammer',
    title: '3D Artist / Ecosystem Advocate',
  },
];

export default function CustomerExperience() {
  const [index, setIndex] = useState(0);

  const goPrev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const goNext = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const current = testimonials[index];

  return (
    <section className="w-full py-16 md:py-18 bg-gray-50 relative overflow-hidden">
      <Container>
        <div className="max-w-3xl mx-auto text-center px-4">

          {/* Stars */}
          <div className="flex justify-center gap-2 mb-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-md"
              >
                <FaStar className="text-[#14678d] text-lg sm:text-xl" />
              </div>
            ))}
          </div>

          {/* Quote */}
          <p className="text-[16px]  sm:text-xl md:text-lg font-bold text-[#012289] text-justify leading-relaxed mb-6 transition-all duration-300">
            "{current.quote}"
          </p>

          {/* Name / Title */}
          <p className="text-sm sm:text-base text-gray-400 mb-10">
            {current.name} — {current.title}
          </p>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-3">
            <button
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="w-11 h-11 flex items-center justify-center bg-[#14678d] hover:bg-[#012289] text-white rounded-lg transition-colors duration-300"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={goNext}
              aria-label="Next testimonial"
              className="w-11 h-11 flex items-center justify-center bg-[#14678d] hover:bg-[#012289] text-white rounded-lg transition-colors duration-300"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
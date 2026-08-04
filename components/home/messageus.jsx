"use client";

import { useState, useEffect, useRef } from 'react';
import Container from "../../Layout/container";

const purposeOptions = [
  'General Inquiry',
  'Product Information',
  'Claims Assistance',
  'Partnership Opportunity',
  'Complaint',
  'Others',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    purpose: '',
    summary: '',
  });

  const [focusedField, setFocusedField] = useState(null);
  const [purposeOpen, setPurposeOpen] = useState(false);
  const purposeRef = useRef(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFocus = (field) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire this up to your email/API endpoint
    console.log(formData);
  };

  // Determines whether a label should be "floated" to the top border
  const isFloated = (field) => focusedField === field || formData[field] !== '';

  // Shared label class generator
  const labelClass = (field) =>
    `absolute left-4 transition-all duration-200 ease-out pointer-events-none ${
      isFloated(field)
        ? 'top-0 -translate-y-1/2 text-xs bg-white px-1 text-[#012289]'
        : 'top-1/2 -translate-y-1/2 text-base text-gray-400'
    }`;

  // Close purpose dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (purposeRef.current && !purposeRef.current.contains(e.target)) {
        setPurposeOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="w-full py-12 md:py-20">
      <Container>
        <div className="max-w-xl">
          {/* Accent bar */}
          <div className="w-12 h-1 bg-[#14678d] mb-4"></div>

          {/* Heading */}
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Send us a message
          </h2>
          <p className="text-[18px] text-gray-500 mb-8 leading-relaxed">
            You may use the form below to send us your inquiries/concerns. We shall respond to you the soonest we can.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="relative border border-gray-300 rounded-md px-4 pt-4 pb-2 hover:border-[#1a9cc4] focus-within:border-[#012289] focus-within:ring-2 focus-within:ring-[#012289]/10 transition-all duration-200">
              <label htmlFor="name" className={labelClass('name')}>
                Name <span className="text-[#14678d]">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
                className="w-full outline-none text-gray-700 bg-transparent pt-1"
              />
            </div>

            {/* Email Address */}
            <div className="relative border border-gray-300 rounded-md px-4 pt-4 pb-2 hover:border-[#1a9cc4] focus-within:border-[#012289] focus-within:ring-2 focus-within:ring-[#012289]/10 transition-all duration-200">
              <label htmlFor="email" className={labelClass('email')}>
                Email Address <span className="text-[#14678d]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                className="w-full outline-none text-gray-700 bg-transparent pt-1"
              />
            </div>

            {/* Contact Number */}
            <div className="relative border border-gray-300 rounded-md px-4 pt-4 pb-2 hover:border-[#1a9cc4] focus-within:border-[#012289] focus-within:ring-2 focus-within:ring-[#012289]/10 transition-all duration-200">
              <label htmlFor="contact" className={labelClass('contact')}>
                Contact Number <span className="text-[#14678d]">*</span>
              </label>
              <input
                id="contact"
                name="contact"
                type="tel"
                required
                value={formData.contact}
                onChange={handleChange}
                onFocus={() => handleFocus('contact')}
                onBlur={handleBlur}
                className="w-full outline-none text-gray-700 bg-transparent pt-1"
              />
            </div>

            {/* Purpose - custom dropdown */}
            <div className="relative" ref={purposeRef}>
              <div
                className={`group relative border rounded-md px-4 pt-4 pb-2 
                hover:border-[#1a9cc4] transition-all duration-200 cursor-pointer
                ${purposeOpen ? 'border-[#012289] ring-2 ring-[#012289]/10' : 'border-gray-300'}`}
                onClick={() => setPurposeOpen((prev) => !prev)}
              >
                <label className={labelClass('purpose')}>
                  Purpose <span className="text-[#14678d]">*</span>
                </label>
                <div className="w-full text-gray-700 pt-1 pr-8 min-h-[24px] select-none">
                  {formData.purpose || ''}
                </div>
                <svg
                  className={`absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 
                  pointer-events-none transition-transform duration-200 ease-out
                  ${purposeOpen ? 'rotate-180 text-[#012289]' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                {/* Hidden input so native form validation still enforces "required" */}
                <input
                  type="text"
                  required
                  value={formData.purpose}
                  onChange={() => {}}
                  className="absolute inset-0 opacity-0 pointer-events-none -z-10"
                  tabIndex={-1}
                  aria-hidden="true"
                />
              </div>

              {/* Options panel */}
              <div
                className={`absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-md 
                shadow-lg overflow-hidden origin-top transition-all duration-200 ease-out
                ${purposeOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}`}
              >
                {purposeOptions.map((opt) => (
                  <div
                    key={opt}
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, purpose: opt }));
                      setPurposeOpen(false);
                    }}
                    className={`flex items-center justify-between px-4 py-3 text-sm cursor-pointer
                    transition-colors duration-150
                    ${formData.purpose === opt
                      ? 'bg-[#012289]/5 text-[#012289] font-medium'
                      : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    {opt}
                    {formData.purpose === opt && (
                      <svg className="w-4 h-4 text-[#012289]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Summary of concern */}
            <div className="relative border border-gray-300 rounded-md px-4 pt-4 pb-2 hover:border-[#1a9cc4] focus-within:border-[#012289] focus-within:ring-2 focus-within:ring-[#012289]/10 transition-all duration-200">
              <label htmlFor="summary" className={labelClass('summary')}>
                Summary of concern <span className="text-[#14678d]">*</span>
              </label>
              <textarea
                id="summary"
                name="summary"
                required
                rows={5}
                value={formData.summary}
                onChange={handleChange}
                onFocus={() => handleFocus('summary')}
                onBlur={handleBlur}
                className="w-full outline-none text-gray-700 bg-transparent resize-y pt-1"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-gradient-to-b from-[#002288] to-blue-600 hover:from-[#012289] hover:to-blue-700 text-white sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg 
              font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 ">
              Submit
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
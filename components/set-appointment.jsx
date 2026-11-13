"use client";

import { useState } from "react";
import { Calendar, Clock, CheckCircle2, Loader2, Video, Building2 } from "lucide-react";

export default function AppointmentSection() {
  const [meetingType, setMeetingType] = useState("online");
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formKey, setFormKey] = useState(0);

  // Local date (not UTC) so Philippine users can't pick yesterday
  const today = new Date().toLocaleDateString("en-CA");

  const validate = (data) => {
    const e = {};
    if (data.fullName.trim().length < 2) e.fullName = "Please enter your full name.";
    if (!/^(\+63|0)9\d{9}$/.test(data.phone.replace(/[\s-]/g, "")))
      e.phone = "Enter a valid PH mobile number.";
    if (!/^\S+@\S+\.\S+$/.test(data.email)) e.email = "Enter a valid email address.";
    if (!data.service) e.service = "Please select a service.";
    if (!data.date || data.date < today) e.date = "Please choose today or a future date.";
    if (!data.time) e.time = "Please select a time slot.";
    return e;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      meetingType,
      fullName: String(formData.get("fullName") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      service: String(formData.get("service") ?? ""),
      date: String(formData.get("date") ?? ""),
      time: String(formData.get("time") ?? ""),
      notes: String(formData.get("notes") ?? ""),
    };

    const found = validate(data);
    setErrors(found);
    setFormError("");
    if (Object.keys(found).length > 0) return;

    setIsPending(true);
    try {
      // TODO: send `data` to your backend here (Supabase insert, API route, etc.)
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitted(true);
    } catch {
      setFormError("Something went wrong. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  const handleBookAnother = () => {
    setSubmitted(false);
    setMeetingType("online");
    setErrors({});
    setFormError("");
    setFormKey((prev) => prev + 1);
  };

  return (
    <section
      aria-labelledby="appointment-heading"
      className="min-h-[60vh] bg-[#012289] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Heading & Copy */}
          <div className="text-left lg:col-span-5">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-200">
              Schedule a Consultation
            </p>
            <h2
              id="appointment-heading"
              className="text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl lg:text-4xl"
            >
              Set Your{" "}
              <span className="">Appointment Today</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-blue-100">
              Ready to get started? Choose your preferred date and time, and
              our team will reach out promptly to confirm your session and
              discuss how we can best assist you.
            </p>

            <ul className="mt-8 space-y-3.5 text-sm text-blue-100">
              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                  ✓
                </span>
                Personalized one-on-one consultation
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                  ✓
                </span>
                Flexible virtual or in-office scheduling
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                  ✓
                </span>
                Fast confirmation via email or SMS
              </li>
            </ul>
          </div>

          {/* Right Column: Appointment Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8 lg:p-10">
              {submitted ? (
                <div className="py-10 text-center">
                  <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">
                    Appointment Request Sent
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-sm text-gray-600">
                    Thank you! Our team will contact you shortly to confirm your
                    appointment.
                  </p>
                  <button
                    type="button"
                    onClick={handleBookAnother}
                    className="mt-6 text-sm font-semibold text-[#012289] hover:underline"
                  >
                    Book another appointment
                  </button>
                </div>
              ) : (
                <form
                  key={formKey}
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >
                  {formError && (
                    <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {formError}
                    </div>
                  )}

                  {/* Meeting Mode Selector */}
                  <div>
                    <span className="block text-sm font-semibold text-gray-700">
                      Meeting Type
                    </span>
                    <div className="mt-1.5 grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setMeetingType("online")}
                        className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                          meetingType === "online"
                            ? "border-[#012289] bg-[#012289]/5 text-[#012289]"
                            : "border-gray-300 text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <Video className="h-4 w-4" />
                        Online / Video Call
                      </button>
                      <button
                        type="button"
                        onClick={() => setMeetingType("in-office")}
                        className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                          meetingType === "in-office"
                            ? "border-[#012289] bg-[#012289]/5 text-[#012289]"
                            : "border-gray-300 text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <Building2 className="h-4 w-4" />
                        In-Office Visit
                      </button>
                    </div>
                  </div>

                  {/* Full Name & Mobile */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Juan Dela Cruz"
                        className="mt-1.5 w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#012289] focus:outline-none focus:ring-1 focus:ring-[#012289]"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+63 9XX XXX XXXX"
                        className="mt-1.5 w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#012289] focus:outline-none focus:ring-1 focus:ring-[#012289]"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Email & Service */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        className="mt-1.5 w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#012289] focus:outline-none focus:ring-1 focus:ring-[#012289]"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Purpose / Service *
                      </label>
                      <select
                        id="service"
                        name="service"
                        defaultValue=""
                        className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 focus:border-[#012289] focus:outline-none focus:ring-1 focus:ring-[#012289]"
                      >
                        <option value="">Select a service</option>
                        <option value="consultation">General Consultation</option>
                        <option value="quote">Request a Quote</option>
                        <option value="inquiry">Product / Policy Inquiry</option>
                        <option value="support">Client Support</option>
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-xs text-red-600">{errors.service}</p>
                      )}
                    </div>
                  </div>

                  {/* Preferred Date & Time */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="date"
                        className="flex items-center gap-1.5 text-sm font-semibold text-gray-700"
                      >
                        <Calendar className="h-4 w-4 text-gray-400" />
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        min={today}
                        className="mt-1.5 w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 focus:border-[#012289] focus:outline-none focus:ring-1 focus:ring-[#012289]"
                      />
                      {errors.date && (
                        <p className="mt-1 text-xs text-red-600">{errors.date}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="time"
                        className="flex items-center gap-1.5 text-sm font-semibold text-gray-700"
                      >
                        <Clock className="h-4 w-4 text-gray-400" />
                        Preferred Time *
                      </label>
                      <select
                        id="time"
                        name="time"
                        defaultValue=""
                        className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 focus:border-[#012289] focus:outline-none focus:ring-1 focus:ring-[#012289]"
                      >
                        <option value="">Select a time slot</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:30">10:30 AM</option>
                        <option value="13:30">1:30 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:30">4:30 PM</option>
                      </select>
                      {errors.time && (
                        <p className="mt-1 text-xs text-red-600">{errors.time}</p>
                      )}
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label
                      htmlFor="notes"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Additional Notes{" "}
                      <span className="font-normal text-gray-400">(Optional)</span>
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      placeholder="Share any details or questions ahead of our meeting..."
                      className="mt-1.5 w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#012289] focus:outline-none focus:ring-1 focus:ring-[#012289]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isPending}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#012289] px-5 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-[#011a6b] focus:outline-none focus:ring-2 focus:ring-[#012289] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Confirm Appointment"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
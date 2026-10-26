"use client";
import { useRef, useState } from "react";
import CaptchaModal from "../../../components/capcha"
import { PersonalTypeForm } from "../../../lib/submitInsuranceform";
import SuccessModal from "../../../components/success_message";

const inputClass =
  "w-full border border-gray-300 bg-white px-3.5 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#3b97ee] focus:outline-none";
const labelClass = "mb-2 block text-[15px] font-medium text-[#14678d]";

function Field({ id, label, children }) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  );
}


export default function HMOPersonal() {
  const formRef = useRef(null);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [busy, setBusy] = useState(false);
  const [captchaError, setCaptchaError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCaptchaError("");
    setShowCaptcha(true);
  };

  const handleToken = async (token) => {
    setBusy(true);
    setCaptchaError("");

    try {
      const verify = await fetch("/api/verify-turnstile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const { success } = await verify.json();

      if (!success) {
        setCaptchaError("Verification failed. Please close and try again.");
        return;
      }

      const { error } = await PersonalTypeForm(
        new FormData(formRef.current)
      );

      if (error) {
        console.error(error.message, error.code, error.details, error.hint);
        setCaptchaError("Something went wrong. Please try again.");
        return;
      }

      formRef.current.reset();
      setShowCaptcha(false);
      setShowSuccess(true);
    } catch (err) {
      console.error(err);
      setCaptchaError("Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit} className="w-full">
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
          <h2 className="text-xl font-bold text-[#012289] sm:col-span-2">
            Please fill out the form
          </h2>
          <Field id="fullName" label="Full Name">
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="e.g Juan De la Cruz"
              className={inputClass}
            />
          </Field>

          <Field id="email" label="Email Address">
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="e.g. juan@mail.com"
              className={inputClass}
            />
          </Field>

          <Field id="mobile" label="Phone no.">
            <input
              id="mobile"
              name="mobile"
              type="tel"
              required
              placeholder="e.g. 09*********"
              className={inputClass}
            />
          </Field>

          <Field id="birthday" label="Birthday">
            <input
              id="birthday"
              name="birthday"
              type="date"
              required
              className={inputClass}
            />
          </Field>
        </div>

        <label className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-gray-800">
          <input
            type="checkbox"
            name="agreed"
            required
            className="mt-1 h-4 w-4 shrink-0 accent-[#3b97ee]"
          />
          <span>
            I agree to receive promotional SMS, emails or calls from MAXIN or its
            affiliates, subsidiaries, including any person or entities providing
            services on MAXIN&apos;s behalf, consistent with the purpose for which
            the information was obtained.
            <br />
            <br />
            By clicking the Submit button below, you are deemed to have agreed to
            the collection and use by MAXIN of your information in accordance
            with its{" "}
            <a
              href="/privacy-policy"
              className="font-bold text-blue-700 underline"
            >
              Privacy Policy
            </a>
            .
          </span>
        </label>

        <footer className="flex justify-end px-5 py-5 sm:px-8">
          <button
            type="submit"
            className="w-full bg-[#012289] px-10 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#14678d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a9cc4] focus-visible:ring-offset-2 sm:w-auto"
          >
            Submit
          </button>
        </footer>
      </form>

      {showCaptcha && (
        <CaptchaModal
          onToken={handleToken}
          onClose={() => setShowCaptcha(false)}
          busy={busy}
          error={captchaError}
        />
      )}
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
    </>
  );
}
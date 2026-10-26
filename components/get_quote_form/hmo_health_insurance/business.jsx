"use client";

/**
 * HMOBusiness: get-quote form for HMO business leads.
 *
 * Flow: Submit -> captcha opens -> token verified at /api/verify-turnstile
 *       -> lead saved to Supabase (hmo_business_leads) -> success modal.
 *
 * Values are read with FormData, so every input needs a `name`
 * that matches what submitBusinessType() in lib/submitInsurance.js reads.
 */

import { useRef, useState } from "react";
import { BusinessTypeForm} from "../../../lib/submitInsuranceform";
import CaptchaModal from "../../../components/capcha";
import SuccessModal from "../../../components/success_message";

const inputClass =
  "w-full border border-gray-300 bg-white px-3.5 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#3b97ee] focus:outline-none";
const labelClass = "mb-2 block text-[15px] font-medium text-[#14678d]";

// Label + input wrapper. `id` must match the input's id.
function Field({ id, label, className = "", children }) {
  return (
    <div className={className}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default function HMOBusiness() {
  const formRef = useRef(null);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [busy, setBusy] = useState(false);
  const [captchaError, setCaptchaError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // Step 1: open the captcha (browser validation has already run).
  const handleSubmit = (e) => {
    e.preventDefault();
    setCaptchaError("");
    setShowCaptcha(true);
  };

  // Step 2: verify the captcha token, then save the lead.
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

      const { error } = await BusinessTypeForm(
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

          {/* Checkboxes share one name; saved as an array. */}
          <fieldset className="sm:col-span-2">
            <legend className={labelClass}>Type of Business:</legend>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <label className="flex items-center gap-2 text-sm text-gray-800">
                <input
                  type="checkbox"
                  name="businessType"
                  value="SME"
                  className="h-4 w-4 accent-[#3b97ee]"
                />
                Small, Medium Enterprises (SMEs)
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-800">
                <input
                  type="checkbox"
                  name="businessType"
                  value="Corporate Account"
                  className="h-4 w-4 accent-[#3b97ee]"
                />
                Corporate Account
              </label>
            </div>
          </fieldset>

          <Field id="companyName" label="Company Name" className="sm:col-span-2">
            <input
              id="companyName"
              name="companyName"
              type="text"
              required
              placeholder="Please input company name"
              className={inputClass}
            />
          </Field>

          <Field id="natureOfBusiness" label="Nature of Business" className="sm:col-span-2">
            <input
              id="natureOfBusiness"
              name="natureOfBusiness"
              type="text"
              required
              placeholder="Please input nature of business"
              className={inputClass}
            />
          </Field>

          <Field id="employeeCount" label="Employee Count">
            <input
              id="employeeCount"
              name="employeeCount"
              type="number"
              min="0"
              required
              placeholder="Please input employee count"
              className={inputClass}
            />
          </Field>

          {/* Optional: empty is saved as null. */}
          <Field id="industrial" label="Industrial">
            <input
              id="industrial"
              name="industrial"
              type="text"
              placeholder="Only include regular employees"
              className={inputClass}
            />
          </Field>

          <Field id="contactPerson" label="Contact Person" className="sm:col-span-2">
            <input
              id="contactPerson"
              name="contactPerson"
              type="text"
              required
              placeholder="Please input contact person"
              className={inputClass}
            />
          </Field>

          <Field id="startDate" label="Set your preferred start date">
            <input
              id="startDate"
              name="startDate"
              type="date"
              required
              className={inputClass}
            />
          </Field>

          <Field id="email" label="Email">
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="e.g. juan@mail.com"
              className={inputClass}
            />
          </Field>

          <Field id="contactNumber" label="Contact Number">
            <input
              id="contactNumber"
              name="contactNumber"
              type="tel"
              required
              placeholder="Please input valid contact number"
              className={inputClass}
            />
          </Field>

          <Field id="location" label="Location" className="sm:col-span-2">
            <input
              id="location"
              name="location"
              type="text"
              required
              placeholder="Please input exact location"
              className={inputClass}
            />
          </Field>

          {/* Yes/No answers are saved as text, not booleans. */}
          <Field id="registeredInPH" label="Is your business registered in the Philippines?">
            <select
              id="registeredInPH"
              name="registeredInPH"
              required
              defaultValue=""
              className={inputClass}
            >
              <option value="" disabled>
                Select one...
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </Field>

          <Field id="hasHMO" label="Do you currently have an HMO?">
            <select
              id="hasHMO"
              name="hasHMO"
              required
              defaultValue=""
              className={inputClass}
            >
              <option value="" disabled>
                Select one...
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </Field>
        </div>

        {/* Required consent; saved as "Yes" / "No". */}
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
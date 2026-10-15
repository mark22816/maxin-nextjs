"use client";

const inputClass =
  "w-full border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 transition-colors focus:border-[#1a9cc4] focus:outline-none focus:ring-2 focus:ring-[#1a9cc4]/30";
const labelClass =
  "mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-[#14678d]";

function Field({ id, label, required, className = "", children }) {
  return (
    <div className={className}>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required && <span className="ml-0.5 text-red-600">*</span>}
      </label>
      {children}
    </div>
  );
}

function Section({ number, title, children }) {
  return (
    <section className="border-b border-gray-200 px-5 py-6 sm:px-8">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#012289] text-sm font-bold text-white">
          {number}
        </span>
        <h3 className="text-base font-bold text-[#012289]">{title}</h3>
      </div>
      {children}
    </section>
  );
}

export default function FireInsuranceForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log({ product: "Fire Insurance", ...data });
    // TODO: send `data` to your API
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full border border-gray-200 border-t-4 border-t-[#012289] bg-white shadow-sm"
    >
      {/* Header */}
      <header className="border-b border-gray-200 bg-gray-50 px-5 py-5 sm:px-8">
        <h2 className="text-xl font-bold text-[#012289]">
          Please fill out the form
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Fields marked <span className="text-red-600">*</span> are required.
        </p>
      </header>

      {/* 1. Client Information */}
      <Section number="1" title="Client Information">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_10rem]">
          <Field id="fullName" label="Full Name" required>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="Last Name, First Name, Middle Name"
              className={inputClass}
            />
          </Field>
          <Field id="sex" label="Sex" required>
            <select
              id="sex"
              name="sex"
              required
              defaultValue=""
              className={inputClass}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </Field>
        </div>

        <Field id="registeredName" label="Registered Name (if any)" className="mt-4">
          <input
            id="registeredName"
            name="registeredName"
            type="text"
            placeholder="Corporation, Partnership"
            className={inputClass}
          />
        </Field>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-[1fr_10rem]">
          <Field
            id="address"
            label="Permanent Address / Principal Place of Business"
            required
          >
            <input
              id="address"
              name="address"
              type="text"
              required
              placeholder="Unit/Floor No., Building, Street, Barangay, City, Province"
              className={inputClass}
            />
          </Field>
          <Field id="zipCode" label="Zip Code" required>
            <input
              id="zipCode"
              name="zipCode"
              type="text"
              inputMode="numeric"
              required
              className={inputClass}
            />
          </Field>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-[11rem_5rem_1fr_1fr]">
          <Field id="birthday" label="Birthday" required className="col-span-2 lg:col-span-1">
            <input
              id="birthday"
              name="birthday"
              type="date"
              required
              className={inputClass}
            />
          </Field>
          <Field id="age" label="Age" required>
            <input
              id="age"
              name="age"
              type="number"
              min="0"
              required
              className={inputClass}
            />
          </Field>
          <Field id="placeOfBirth" label="Place of Birth" required>
            <input
              id="placeOfBirth"
              name="placeOfBirth"
              type="text"
              required
              className={inputClass}
            />
          </Field>
          <Field id="nationality" label="Nationality" required>
            <input
              id="nationality"
              name="nationality"
              type="text"
              required
              className={inputClass}
            />
          </Field>
        </div>
     

     


        <div className="mt-4">
          <label htmlFor="supportingImage" className={labelClass}>
            
          </label>
          <input
            id="supportingImage"
            name="supportingImage"
            type="file"
            accept="image/*"
            className="block w-full border border-dashed border-gray-400 bg-gray-50 p-3 text-sm text-gray-700 file:mr-4 file:border-0 file:bg-[#14678d] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:border-[#14678d] hover:file:bg-[#012289]"
          />
          <p className="mt-1.5 text-xs text-gray-500">
            Please wait for the upload status to display before submitting the
            form.
          </p>
        </div>
      </Section>

      {/* 3. Terms & Condition */}
      <Section number="2" title="Terms & Conditions">
        <label className="flex items-start gap-3 text-sm leading-relaxed text-gray-800">
          <input
            type="checkbox"
            name="agreed"
            required
            className="mt-1 h-4 w-4 shrink-0 accent-[#14678d]"
          />
          <span>
            By clicking the Submit button, I acknowledge that I have read and
            agree to the collection and use of my personal data by MAXIN, as
            outlined in its Privacy Policy.
          </span>
        </label>

        <p className="mt-4 border-l-2 border-[#1a9cc4] pl-4 text-xs leading-relaxed text-gray-600">
          I consent to receive promotional messages, including SMS, emails, or
          phone calls, from MAXIN, its affiliates, and subsidiaries, as well as
          any authorized third-party service providers acting on behalf of
          MAXIN, in line with the purposes for which my information was
          collected.
        </p>
      </Section>

      {/* Submit */}
      <footer className="flex justify-end bg-gray-50 px-5 py-5 sm:px-8">
        <button
          type="submit"
          className="w-full bg-[#012289] px-10 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#14678d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a9cc4] focus-visible:ring-offset-2 sm:w-auto"
        >
          Submit
        </button>
      </footer>
    </form>
  );
}
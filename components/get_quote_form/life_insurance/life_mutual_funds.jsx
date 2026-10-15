"use client";

import Link from "next/link";
import Container from "../../../Layout/container";
import { useRef, useState } from "react";

const PRODUCTS = [
    "Life Insurance",
    "Retirement Plans",
    "Health Coverage",
    "Mutual Funds",
    "Savings & Educational Plan",
    "Investment-Linked & VUL Insurance",
];

const SALUTATIONS = ["Mr.", "Ms.", "Mrs."];
const MAX_FILE_MB = 5;

// Change this one value to change the background of all three cards
const CARD_BG = "bg-gray-50";

const inputClass = (hasError) =>
    `w-full border bg-white px-3.5 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:ring-2 ${
        hasError
            ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
            : "border-[#1d688b] focus:border-[#012289] focus:ring-[#012289]/30"
    }`;

function Field({ id, label, error, children }) {
    return (
        <div>
            <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-gray-800">
                {label} <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            {children}
            {error && (
                <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-red-600">
                    {error}
                </p>
            )}
        </div>
    );
}

export default function LifeMutualFunds() {
    
    const [products, setProducts] = useState([]);
    const [salutation, setSalutation] = useState("");
    const [fullName, setFullName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [files, setFiles] = useState([]);
    const [agreed, setAgreed] = useState(false);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const fileRef = useRef(null);

    const today = new Date().toISOString().split("T")[0];

    const toggleProduct = (name) => {
        setProducts((prev) => (prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]));
        setErrors((e) => ({ ...e, products: undefined }));
    };

    const handleFiles = (list) => {
        if (!list) return;
        const incoming = Array.from(list);
        const tooBig = incoming.find((f) => f.size > MAX_FILE_MB * 1024 * 1024);
        if (tooBig) {
            setErrors((e) => ({ ...e, files: `${tooBig.name} is larger than ${MAX_FILE_MB}MB.` }));
        } else {
            setErrors((e) => ({ ...e, files: undefined }));
            setFiles((prev) => [...prev, ...incoming]);
        }
        if (fileRef.current) fileRef.current.value = "";
    };

    const validate = () => {
        const next = {};
        if (products.length === 0) next.products = "Select at least one product.";
        if (!salutation) next.salutation = "Please choose a salutation.";
        if (!fullName.trim()) next.fullName = "Full name is required.";
        if (!birthday) next.birthday = "Birthday is required.";
        else if (birthday > today) next.birthday = "Birthday can't be in the future.";
        const phone = contact.replace(/[\s-]/g, "");
        if (!phone) next.contact = "Contact number is required.";
        else if (!/^(\+63|0)?9\d{9}$/.test(phone)) next.contact = "Enter a valid PH mobile number, e.g. 0917 123 4567.";
        if (!email.trim()) next.email = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
        if (!agreed) next.agreed = "You must agree to the terms before submitting.";
        return next;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const next = validate();
        setErrors((prev) => ({ ...next, files: prev.files }));

        const firstInvalid = ["products", "salutation", "fullName", "birthday", "contact", "email", "agreed"].find(
            (k) => next[k]
        );

        if (firstInvalid) {
            const id = firstInvalid === "products" ? "product-0" : firstInvalid;
            document.getElementById(id)?.focus();
            return;
        }

        // TODO: send { products, salutation, fullName, birthday, contact, email, files, agreed } to your API
        setSubmitted(true);
    };

    const reset = () => {
        setProducts([]);
        setSalutation("");
        setFullName("");
        setBirthday("");
        setContact("");
        setEmail("");
        setFiles([]);
        setAgreed(false);
        setErrors({});
        setSubmitted(false);
    };

    if (submitted) {
        return (
            <section className="w-full bg-white py-12">
                <Container>
                    <div role="status" className={`mx-auto max-w-xl rounded-2xl ${CARD_BG} p-8 text-center shadow-sm`}>
                        <h2 className="mb-2 text-2xl font-semibold text-[#012289]">Thank you!</h2>
                        <p className="mb-6 text-gray-700">
                            We received your request. Our team will contact you shortly.
                        </p>
                        <button
                            type="button"
                            onClick={reset}
                            className=" border border-[#012289] px-5 py-3 text-sm font-medium text-[#012289] transition-colors hover:bg-[#012289] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#012289]/40 focus-visible:ring-offset-2"
                        >
                            Submit another request
                        </button>
                    </div>
                </Container>
            </section>
        );
    }

    return (
        <section className="w-full bg-white py-10 lg:py-16">
            <Container>
                <form onSubmit={handleSubmit} noValidate className="grid items-start gap-6 lg:grid-cols-[1fr_1.4fr]">
                    {/* 1. Select Products */}
                    <fieldset
                        aria-describedby={errors.products ? "products-error" : undefined}
                        className={` ${CARD_BG} p-6 shadow-sm sm:p-8`}
                    >
                        <legend className="sr-only">Select products</legend>
                        <h2 className="text-xl font-bold text-[#012289]" aria-hidden="true">
                            1. Select Products
                        </h2>
                        <p className="mt-1 mb-5 text-sm text-[#1d688b]">You can select multiple types of insurance.</p>

                        <div className="space-y-3">
                            {PRODUCTS.map((name, i) => {
                                const checked = products.includes(name);
                                return (
                                    <label
                                        key={name}
                                        htmlFor={`product-${i}`}
                                        className={`flex cursor-pointer items-center gap-3  border px-4 py-3 transition-colors focus-within:ring-2 focus-within:ring-[#012289]/30 ${
                                            checked
                                                ? "border-[#012289] bg-white"
                                                : errors.products
                                                ? "border-red-400 bg-white/60"
                                                : "border-transparent bg-white/60 hover:bg-white"
                                        }`}
                                    >
                                        <input
                                            id={`product-${i}`}
                                            type="checkbox"
                                            checked={checked}
                                            onChange={() => toggleProduct(name)}
                                            className="h-5 w-5 shrink-0 cursor-pointer border-gray-400 accent-[#012289] focus:outline-none"
                                        />
                                        <span className="text-base font-bold text-[#012289]">{name}</span>
                                    </label>
                                );
                            })}
                        </div>

                        {errors.products && (
                            <p id="products-error" role="alert" className="mt-3 text-sm text-red-600">
                                {errors.products}
                            </p>
                        )}
                    </fieldset>

                    {/* 2. Client Information */}
                    <div className={` ${CARD_BG} p-6 shadow-sm sm:p-8`}>
                        <h2 className="mb-6 text-xl font-bold text-[#012289]">2. Client Information</h2>

                        <div className="space-y-5">
                            <Field id="salutation" label="Salutation" error={errors.salutation}>
                                <select
                                    id="salutation"
                                    value={salutation}
                                    onChange={(e) => {
                                        setSalutation(e.target.value);
                                        setErrors((er) => ({ ...er, salutation: undefined }));
                                    }}
                                    aria-invalid={!!errors.salutation}
                                    aria-describedby={errors.salutation ? "salutation-error" : undefined}
                                    className={inputClass(!!errors.salutation)}
                                >
                                    <option value="">Select…</option>
                                    {SALUTATIONS.map((s) => (
                                        <option key={s} value={s}>
                                            {s}
                                        </option>
                                    ))}
                                </select>
                            </Field>

                            <Field id="fullName" label="Full Name" error={errors.fullName}>
                                <input
                                    id="fullName"
                                    type="text"
                                    autoComplete="name"
                                    value={fullName}
                                    onChange={(e) => {
                                        setFullName(e.target.value);
                                        setErrors((er) => ({ ...er, fullName: undefined }));
                                    }}
                                    aria-invalid={!!errors.fullName}
                                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                                    placeholder="Juan Dela Cruz"
                                    className={inputClass(!!errors.fullName)}
                                />
                            </Field>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <Field id="birthday" label="Birthday" error={errors.birthday}>
                                    <input
                                        id="birthday"
                                        type="date"
                                        max={today}
                                        autoComplete="bday"
                                        value={birthday}
                                        onChange={(e) => {
                                            setBirthday(e.target.value);
                                            setErrors((er) => ({ ...er, birthday: undefined }));
                                        }}
                                        aria-invalid={!!errors.birthday}
                                        aria-describedby={errors.birthday ? "birthday-error" : undefined}
                                        className={inputClass(!!errors.birthday)}
                                    />
                                </Field>

                                <Field id="contact" label="Contact Number" error={errors.contact}>
                                    <input
                                        id="contact"
                                        type="tel"
                                        inputMode="tel"
                                        autoComplete="tel"
                                        value={contact}
                                        onChange={(e) => {
                                            setContact(e.target.value);
                                            setErrors((er) => ({ ...er, contact: undefined }));
                                        }}
                                        aria-invalid={!!errors.contact}
                                        aria-describedby={errors.contact ? "contact-error" : undefined}
                                        placeholder="0917 123 4567"
                                        className={inputClass(!!errors.contact)}
                                    />
                                </Field>
                            </div>

                            <Field id="email" label="Email" error={errors.email}>
                                <input
                                    id="email"
                                    type="email"
                                    inputMode="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setErrors((er) => ({ ...er, email: undefined }));
                                    }}
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? "email-error" : undefined}
                                    placeholder="you@example.com"
                                    className={inputClass(!!errors.email)}
                                />
                            </Field>

                            {/* Upload */}
                            <div>
                                <span className="mb-1.5 block text-sm font-medium text-gray-800">
                                    Supporting Documents <span className="font-normal text-gray-500">(optional)</span>
                                </span>

                                <label
                                    htmlFor="files"
                                    className={`flex cursor-pointer flex-col items-center justify-center border-2 border-dashed bg-white px-4 py-6 text-center transition-colors focus-within:ring-2 focus-within:ring-[#012289]/30 hover:border-[#012289] ${
                                        errors.files ? "border-red-500" : "border-[#1d688b]/50"
                                    }`}
                                >
                                    <span className="text-sm font-medium text-[#012289]">Upload files</span>
                                    <span className="mt-1 text-xs text-gray-500">
                                        PDF, JPG or PNG, up to {MAX_FILE_MB}MB each
                                    </span>
                                    <input
                                        ref={fileRef}
                                        id="files"
                                        type="file"
                                        multiple
                                        accept=".pdf,.jpg,.jpeg,.png"
                                        onChange={(e) => handleFiles(e.target.files)}
                                        aria-describedby={errors.files ? "files-error" : undefined}
                                        className="sr-only"
                                    />
                                </label>

                                {errors.files && (
                                    <p id="files-error" role="alert" className="mt-1.5 text-sm text-red-600">
                                        {errors.files}
                                    </p>
                                )}

                                {files.length > 0 && (
                                    <ul className="mt-3 space-y-2">
                                        {files.map((f, i) => (
                                            <li
                                                key={`${f.name}-${i}`}
                                                className="flex items-center justify-between gap-3 rounded-lg bg-white px-3 py-2 text-sm text-gray-700"
                                            >
                                                <span className="truncate">{f.name}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => setFiles((prev) => prev.filter((_, idx) => idx !== i))}
                                                    aria-label={`Remove ${f.name}`}
                                                    className="shrink-0 rounded px-2 py-1 text-red-600 hover:bg-red-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/40"
                                                >
                                                    Remove
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* Terms & Conditions */}
                            <div>
                                <label
                                    htmlFor="agreed"
                                    className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-gray-600 md:text-sm"
                                >
                                    <input
                                        id="agreed"
                                        type="checkbox"
                                        checked={agreed}
                                        onChange={(e) => {
                                            setAgreed(e.target.checked);
                                            setErrors((er) => ({ ...er, agreed: undefined }));
                                        }}
                                        aria-invalid={!!errors.agreed}
                                        aria-describedby={errors.agreed ? "agreed-error" : undefined}
                                        className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-gray-400 accent-[#012289] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#012289]/40"
                                    />
                                    <span className="space-y-3 block">
                                        <span className="block">
                                            By clicking the Submit button, I acknowledge that I have read and agree to the
                                            collection and use of my personal data by MAXIN, as outlined in their{" "}
                                            <Link
                                                href="/privacy-policy"
                                                className="text-[#1d688b] underline hover:text-[#012289]"
                                            >
                                                Privacy Policy
                                            </Link>
                                            .
                                        </span>
                                        <span className="block">
                                            I consent to receive promotional messages, including SMS, emails, or phone
                                            calls, from MAXIN, its affiliates, and subsidiaries, as well as any
                                            authorized third-party service providers acting on behalf of MAXIN, in line
                                            with the purposes for which my information was collected.
                                        </span>
                                    </span>
                                </label>

                                {errors.agreed && (
                                    <p id="agreed-error" role="alert" className="mt-1.5 text-sm text-red-600">
                                        {errors.agreed}
                                    </p>
                                )}
                            </div>

                            {/* Submit */}
                            <div className="flex justify-end px-5 py-5 sm:px-8">
                                <button
                               type="submit"
                               className="w-full bg-[#012289] px-10 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#14678d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a9cc4] focus-visible:ring-offset-2 sm:w-auto"
                               >
                               Submit
                               </button>
                            </div>
                        </div>
                    </div>
                </form>
            </Container>
        </section>
    );
}
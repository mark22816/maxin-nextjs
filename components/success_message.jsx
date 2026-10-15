
"use client";

import { useEffect, useRef } from "react";

export default function SuccessModal({ onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousFocus = document.activeElement;

    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);

      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
        bg-slate-950/60 px-4 backdrop-blur-sm
        animate-in fade-in duration-200"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-title"
        aria-describedby="success-description"
        className="w-full max-w-sm rounded-2xl bg-white p-8
          text-center shadow-2xl
          animate-in fade-in zoom-in-95 duration-200"
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className="mx-auto mb-5 flex h-16 w-16 items-center
            justify-center rounded-full bg-[#1a9cc4]/15"
        >
          <svg
            className="h-8 w-8 text-[#14678d]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h2
          id="success-title"
          className="text-xl font-bold text-[#012289]"
        >
          Your data has been saved!
        </h2>

        <p
          id="success-description"
          className="mt-3 text-sm leading-6 text-gray-600"
        >
          Thank you. We will contact you as soon as possible.
        </p>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="mt-7 w-full rounded-lg bg-[#012289]
            px-6 py-3 text-sm font-bold uppercase
            tracking-wider text-white transition-colors
            hover:bg-[#14678d]
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-[#1a9cc4]
            focus-visible:ring-offset-2"
        >
          OK
        </button>
      </div>
    </div>
  );
}
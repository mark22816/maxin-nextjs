import { useEffect,} from "react";
import { Turnstile } from "@marsidev/react-turnstile";

export default function CaptchaModal({ onToken, onClose, busy, error }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && !busy && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, busy]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={() => !busy && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="captcha-title"
    >
      <div
        className="w-full max-w-sm bg-white p-8 text-center shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 id="captcha-title" className="text-xl font-bold text-[#012289]">
          Verify you are human
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          {busy ? "Saving your data..." : "Complete the check to submit."}
        </p>

        <div className="mt-5 flex justify-center">
          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
            onSuccess={onToken}
          />
        </div>

        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

        <button
          type="button"
          onClick={onClose}
          disabled={busy}
          className="mt-6 w-full border border-gray-300 px-10 py-3 text-sm font-bold uppercase tracking-wider text-gray-700 transition-colors hover:bg-gray-100 disabled:opacity-50"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

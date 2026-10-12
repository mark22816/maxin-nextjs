"use client";

import Link from "next/link";
import { Building2, Headset } from "lucide-react";
import Container from "../Layout/container";

export default function TopBar() {
  return (
    <div className="w-full bg-[#012289]">
      <Container>
        <div className="flex items-center justify-end gap-6 h-9">
          <Link
            href="/about-us"
            className="flex items-center gap-1.5 text-white hover:text-gray-300 font-semibold text-xs sm:text-sm transition-colors"
          >
            <Building2 className="w-4 h-4" strokeWidth={2} />
            About Us
          </Link>

          <Link
            href="/contact-us"
            className="flex items-center gap-1.5 text-white hover:text-gray-300 font-semibold text-xs sm:text-sm transition-colors"
          >
            <Headset className="w-4 h-4" strokeWidth={2} />
            Contact Us
          </Link>
        </div>
      </Container>
    </div>
  );
}
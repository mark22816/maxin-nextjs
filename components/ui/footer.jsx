
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Phone, Mail, Smartphone } from "lucide-react";
import MAXINlogo from "../../image/MAXIN.png";
import Container from "../../Layout/container";

const footerLinks = {
  Insurance: ["Life Insurance", "Health Insurance / HMO", "Non-Life Insurance", "Compare Plans"],
  Investments: ["Mutual Funds", "Wealth Management", "Asset Management", "Succession Planning"],
  Company: ["About MAXIN", "Our Partners", "Careers", "Company Profile"],
};

const socials = [
  { icon: FaFacebookF, hover: "hover:bg-blue-700" },
  { icon: FaInstagram, hover: "hover:bg-blue-500" },
  { icon: FaLinkedinIn, hover: "hover:bg-[#0a66c2]" },
  { icon: FaYoutube, hover: "hover:bg-red-700" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#3b98c3] to-[#2c7ba3]">
      <Container className="py-10 sm:py-14 lg:py-20">
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-10 lg:gap-12 mb-10 sm:mb-14 text-center sm:text-left">

          {/* Brand column */}
          <div className="sm:col-span-3 lg:col-span-1">
            <div className="flex justify-center sm:justify-start mb-4 sm:mb-5">
              <Image
                src={MAXINlogo}
                alt="MAXIN Logo"
                className="w-28 sm:w-36 h-auto object-contain brightness-0 invert"
              />
            </div>

            <p className="text-white font-semibold mb-3 text-sm sm:text-base uppercase tracking-wide">
              Follow us
            </p>
            <div className="flex justify-center sm:justify-start gap-3 mb-6">
              {socials.map(({ icon: Icon, hover }, i) => (
                <a
                  key={i}
                  href="#"
                  className={`p-2.5 text-[#002288] bg-white rounded-lg ${hover} hover:text-white transition-colors duration-200`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>

            <div className="space-y-2.5 max-w-xs mx-auto sm:mx-0">
              
                < a href="tel:+6353832178"
                className="flex items-center justify-center sm:justify-start gap-2 text-white/80 hover:text-white text-sm transition-colors duration-200"
              >
                <Phone className="w-4 h-4 shrink-0" />
                (+63) 53 832-1782 | (+63) 53 832-1782
              </a>

              
                <a href="mailto:maxin.machicagroup@gmail.com"
                className="flex items-center justify-center sm:justify-start gap-2 text-white/80 hover:text-white text-sm transition-colors duration-200 break-all"
              >
                <Mail className="w-4 h-4 shrink-0" />
                maxin.machicagroup@gmail.com
              </a>

              
                <a href="tel:+6353832178"
                className="flex items-center justify-center sm:justify-start gap-2 text-white/80 hover:text-white text-sm transition-colors duration-200"
              >
                <Smartphone className="w-4 h-4 shrink-0" />
                0916 516 2548 | 0917 867 6837
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="sm:col-span-3 lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-8 lg:gap-12 lg:justify-items-end">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="font-semibold text-white mb-4 text-sm sm:text-base uppercase tracking-wide">
                    {category}
                  </h3>
                  <ul className="space-y-2.5">
                    {links.map((link) => (
                      <li key={link}>
                        
                          < a href="#"
                          className="text-white/70 hover:text-white transition-colors duration-200 text-sm sm:text-[15px]"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/15">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 text-center sm:text-left">
            <p className="text-white/60 text-sm sm:text-[15px]">
              © 2026 MAXIN. All rights reserved.
            </p>
            <div className="flex items-center gap-5 sm:gap-6 text-sm sm:text-[15px]">
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                Data Protection
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
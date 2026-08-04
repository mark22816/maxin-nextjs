
import Image from "next/image";
import AXAlogo from '../../image/AXA Logo.png';
import Fami from '../../image/FAMI.png';
import Pioneer from '../../image/pioneer_logo.png';
import Bethel from '../../image/Bethel.png';
import MalayanInsurance from '../../image/Malayan.png';
import BPI from '../../image/BPIMS.png';
import Stronghold from '../../image/Stronghold.png';
import Prodencial from '../../image/prodencial.png';
import Intelecare from '../../image/intellicare.png';
import Maxicare from '../../image/maxicare.png';
import Medicard from '../../image/medicard.png';
import MGconsulting from '../../image/Consulting.png';
import PMA from '../../image/pma.png';
import RFP from '../../image/RFP.webp';
import Container from "../../Layout/container";
import { FaUmbrella, FaCarSide, FaHeartbeat, FaHandshake } from 'react-icons/fa';

const productRows = [
  {
    label: 'Life, Variable Life & Mutual Funds',
    icon: FaUmbrella,
    partners: [
      { src: AXAlogo, alt: 'AXA Logo' },
      { src: Fami, alt: 'FAMI Logo' },
    ],
  },
  {
    label: 'Non-Life Insurance',
    icon: FaCarSide,
    partners: [
      { src: AXAlogo, alt: 'AXA Logo' },
      { src: Pioneer, alt: 'Pioneer Logo' },
      { src: Bethel, alt: 'Bethel Logo' },
      { src: MalayanInsurance, alt: 'Malayan Insurance Logo' },
      { src: BPI, alt: 'BPI Logo' },
      { src: Stronghold, alt: 'Stronghold Logo' },
      { src: Prodencial, alt: 'Prodencial Logo' },
    ],
  },
  {
    label: 'HMO / Health Insurance',
    icon: FaHeartbeat,
    live: true, // triggers the beating animation
    partners: [
      { src: Intelecare, alt: 'Intelecare Logo' },
      { src: Maxicare, alt: 'Maxicare Logo' },
      { src: Medicard, alt: 'Medicard Logo' },
    ],
  },
  {
    label: 'Consulting & Advisory Services',
    icon: FaHandshake,
    partners: [
      { src: MGconsulting, alt: 'MG Consulting Logo' },
      { src: PMA, alt: 'PMA Logo' },
      { src: RFP, alt: 'RFP Logo' },
    ],
  },
];

export default function ProductsAndPartners() {
  return (
    <section className="w-full py-10 md:py-16 bg-gradient-to-b from-[#14678d]/50 to-blue">
      <Container>
        <div className="bg-white rounded-t-2xl md:rounded-t-2    xl shadow-sm border border-gray-100 px-5 sm:px-8 md:px-12 lg:px-16 py-10 md:py-16">

          {/* Split Header */}
          <div className="mb-10 md:mb-14 grid grid-cols-1 sm:grid-cols-2 bg-gradient-to-r from-[#012289] via-[#14678d] to-[#012289] rounded-2xl overflow-hidden">
            <div className="text-center py-4 sm:py-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                Products &amp; Services
              </h2>
            </div>
            <div className="text-center py-4 sm:py-6 border-t sm:border-t-0 sm:border-l border-white/30">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                Our Business Partners
              </h2>
            </div>
          </div>

          {/* ROWS */}
          <div className="divide-y divide-gray-100">
            {productRows.map((row) => {
              const Icon = row.icon;
              return (
                <div
                  key={row.label}
                  className="py-8 md:py-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 items-center"
                >
                  {/* LEFT: ICON + LABEL */}
                  <div className="flex items-center justify-start sm:justify-start gap-4">
                    <Icon
                      className={`text-4xl sm:text-5xl text-[#5aa9c9] shrink-0 ${
                        row.live ? 'animate-heartbeat' : ''
                      }`}
                    />
                    <span className="text-lg sm:text-xl font-bold text-[#012289] uppercase tracking-wide leading-snug">
                      {row.label}
                    </span>
                  </div>

                  {/* RIGHT: PARTNER LOGOS */}
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-8 gap-y-6">
                    {row.partners.map((partner) => (
                      <Image
                        key={partner.alt}
                        src={partner.src}
                        alt={partner.alt}
                        className="max-h-12 sm:max-h-14 max-w-[140px] object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
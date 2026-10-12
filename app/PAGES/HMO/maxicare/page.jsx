
import MessageUs from "../../../../components/messageus";
import Image from "next/image";
import Container from "../../../../Layout/container";
import {
    BedDouble,
    PlusCircle,
    Stethoscope,
    ClipboardCheck,
    ShieldCheck,
    Smile,
    Siren,
    HeartPulse,
    CheckCircle2,
} from "lucide-react";

const CARE_ITEMS = [
    { label: "Inpatient Care", icon: BedDouble },
    { label: "Additional Care", icon: PlusCircle },
    { label: "Outpatient Care", icon: Stethoscope },
    { label: "Annual Check-up (ACU)", icon: ClipboardCheck },
    { label: "Preventive Care", icon: ShieldCheck },
    { label: "Dental Care (Optional)", icon: Smile },
    { label: "Emergency Care", icon: Siren },
    { label: "Dreaded Disease / Condition", icon: HeartPulse },
];

const SECONDARY_PLANS = [
    {
        title: "Starter Plus",
        tier: "Individual coverage",
        description:
            "An affordable option with basic outpatient coverage, including consultations with primary care physicians and diagnostic tests.",
        icon: ShieldCheck,
    },
    {
        title: "Corporate Plans",
        tier: "Organization coverage",
        description:
            "Designed for businesses and enterprises, with healthcare benefits for employees and dependents customized to company needs.",
        icon: HeartPulse,
    },
];

const FEATURED_INCLUSIONS = [
    "Outpatient and inpatient services",
    "Diagnostic tests and consultations",
    "Wide network of accredited providers",
    "Preventive care and wellness programs",
];

export default function MaxicareOverview() {
    return (
        <section className="w-full  pt-24 sm:pt-40 pb-20 sm:pb-32">
            <style>{`
                @keyframes maxicareRise {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .maxicare-reveal {
                    animation: maxicareRise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
                }
            `}</style>

            <Container>
                <div className="flex flex-col items-center gap-16 lg:gap-20">

                    {/* HERO IMAGE BANNER */}
                    <div className="relative isolate overflow-hidden w-full h-[360px] sm:h-[460px] lg:h-[560px] rounded-2xl shadow-lg">
                        <Image
                            src="/images/maxicare-services.png"
                            alt="A Maxicare member consulting with a healthcare provider"
                            fill
                            priority
                            className="object-cover object-center"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#01185F] via-[#012289]/55 to-transparent" />

                        <div className="relative z-10 flex h-full flex-col justify-end p-8 sm:p-12 lg:p-16 maxicare-reveal">
                            

                            

                            <h1 className=" text-white text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] mb-3">
                                Choose Maxicare
                            </h1>

                            <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-lg">
                                Let Maxicare help you live your best life.
                            </p>
                        </div>
                    </div>

                    {/* MAIN CONTENT AREA */}
                    <div className="w-full">

                        {/* LOGO */}
                        <div className="mb-6">
                            <div className="flex h-[56px] w-[140px] items-center sm:h-[64px] sm:w-[160px]">
                                <Image
                                    src="/images/maxicare.png"
                                    alt="Maxicare logo"
                                    width={300}
                                    height={90}
                                    className="h-full max-h-[48px] w-auto object-contain sm:max-h-[56px]"
                                    priority
                                />
                            </div>
                        </div>

                        {/* INTRO */}
                        <div className="pb-12 mb-14 border-b border-[#012289]/10">
                            <p className="text-slate-600 text-base sm:text-lg leading-[1.8] max-w">
                                Maxicare is a healthcare provider in the Philippines that offers various healthcare plans, 
                                including individual plans tailored to meet the specific needs of individuals and plans 
                                typically offer coverage for outpatient consultations, hospitalization, diagnostic procedures, 
                                preventive healthcare services, and sometimes even dental and optical services, depending on
                                the specific plan you choose.
                            </p>
                        </div>

                        {/* COVERAGE */}
                        <div className="mb-16">
                            <h2 className=" text-3xl sm:text-4xl font-bold text-[#012289] mb-3">
                                What&apos;s covered
                            </h2>
                            <p className="text-slate-600 text-base sm:text-lg max-w-[60ch] mb-10">
                                Every plan draws from the same set of core healthcare
                                benefits, scaled to the coverage level you choose.
                            </p>

                            <div className="grid sm:grid-cols-2 border-t border-[#012289]/10">
                                {CARE_ITEMS.map(({ label, icon: Icon }) => (
                                    <div
                                        key={label}
                                        className="flex items-center gap-4 py-5 border-b border-[#012289]/10"
                                    >
                                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#F6F4EF] border border-[#012289]/10 shrink-0">
                                            <Icon
                                                size={18}
                                                className="text-[#14678d]"
                                                strokeWidth={1.8}
                                            />
                                        </div>

                                        <span className="text-slate-700 text-sm sm:text-base font-medium">
                                            {label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* PLANS SECTION */}
                        <div className="w-full">
                            <h2 className=" text-3xl sm:text-4xl font-bold text-[#012289] mb-1">
                                Choose your coverage
                            </h2>
                            <p className="text-slate-600 text-base sm:text-lg max-w-[60ch] mb-10">
                                From individual essentials to full corporate protection —
                                each plan is built on the same nationwide network.
                            </p>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

                                {/* FEATURED PLAN */}
                                <div className="h-full flex flex-col bg-[#012289] rounded-2xl p-8 sm:p-10 border-t-[3px] border-[#8fd4ec]">
                                    <p className="text-[#8fd4ec] text-sm font-medium mb-2">
                                        Most comprehensive
                                    </p>

                                    <h3 className=" text-2xl sm:text-3xl font-normal text-white mb-3">
                                        Maxicare Plus
                                    </h3>

                                    <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-7">
                                        Covers both outpatient and inpatient services with
                                        access to a wide network of accredited providers.
                                    </p>

                                    <ul className="space-y-3 mb-8">
                                        {FEATURED_INCLUSIONS.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2.5 text-white/90 text-sm">
                                                <CheckCircle2 size={16} className="text-[#8fd4ec] shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-auto pt-6 border-t border-white/15">
                                        <a href="#" className="text-white text-sm font-medium underline decoration-[#8fd4ec]/40 underline-offset-4 hover:decoration-[white]/100 transition">
                                            Get a qoute
                                        </a>
                                    </div>
                                </div>

                                {/* SECONDARY PLANS */}
                                <div className="h-full flex flex-col gap-6">
                                    {SECONDARY_PLANS.map((plan, index) => {
                                        const IconComponent = plan.icon;
                                        return (
                                            <div
                                                key={index}
                                                className="flex-1 flex flex-col justify-center bg-white rounded-2xl p-7 border border-[#012289]/10"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#F6F4EF] text-[#14678d] shrink-0">
                                                        <IconComponent size={18} strokeWidth={1.8} />
                                                    </div>

                                                    <div>
                                                        <p className="text-[#14678d] text-xs font-medium mb-1">
                                                            {plan.tier}
                                                        </p>
                                                        <h3 className="text-lg font-semibold text-[#012289] mb-2">
                                                            {plan.title}
                                                        </h3>
                                                        <p className="text-slate-600 text-sm leading-relaxed">
                                                            {plan.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </Container>
            <MessageUs/>
        </section>
    );
}




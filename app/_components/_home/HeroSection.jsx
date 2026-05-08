"use client";

import Link from "next/link";
import Image from "next/image";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import ChevronRight from "lucide-react/dist/esm/icons/chevron-right";
import Users from "lucide-react/dist/esm/icons/users";
import BarChart3 from "lucide-react/dist/esm/icons/bar-chart-3";
import Search from "lucide-react/dist/esm/icons/search";

const cards = [
  {
    Icon: BarChart3,
    tag: "Research",
    heading: "Trusted Market Research",
    description:
      "End-to-end data collection, CATI surveys, mystery shopping, and consumer insights — powered by 1000+ trained field agents across India.",
    cta: { label: "Book Free Consultation", href: "/contact", primary: true },
    image: {
      src: "/home-infographics.JPG",
      alt: "Market research analytics dashboard on a laptop screen",
    },
  },
  {
    Icon: Search,
    tag: "Services",
    heading: "Accelerate Your Insights",
    description:
      "Retail audits, in-home usage tests, and consumer intercepts — delivered with precision tracking and real-time reporting across India.",
    cta: { label: "Our Services", href: "/services", primary: true }, // Changed to true for green color
    image: {
      src: "/blog-slug-3.jpg",
      alt: "Team collaborating on market research services in an office",
    },
  },
  {
    Icon: Users,
    tag: "Participants",
    heading: "Get Paid to Take Studies",
    description:
      "Be part of India's largest research panel. Share your opinions, shape brands, and earn real rewards from the comfort of your home.",
    cta: {
      label: "Join Paid Surveys",
      href: "/company/join-paid-surveys",
      primary: true,
    },
    image: {
      src: "/working-businessman2.JPG",
      alt: "Person taking an online paid survey on a laptop at home",
    },
  },
];

export default function HeroSection() {
  return (
    /* Full viewport height, no scroll needed on first load */
    <div className="w-full h-[89dvh] overflow-x-clip">
      <section
        aria-label="Our offerings"
        className="w-full h-full grid grid-cols-1 md:grid-cols-3 bg-primary"
      >
        {cards.map((card, i) => {
          const { Icon } = card;
          const isFirst = i === 0;

          return (
            <article
              key={card.tag}
              className={[
                "relative flex flex-col h-[89dvh] ",
                "border-b border-white/10 last:border-b-0",
                "md:border-b-0 md:border-r md:last:border-r-0",
              ].join(" ")}
            >
              {/* ── Text block — Shifted down by an additional 0.25cm (pt-[84px]) ── */}
              <div className="flex flex-col px-6 sm:px-8 lg:px-10 pt-21 pb-4 shrink-0">
                {/* Icon + Tag */}
                <div className="flex items-center gap-2.5 mb-1">
                  <Icon
                    className="text-accent shrink-0"
                    size={20}
                    aria-hidden="true"
                  />
                  <span className="text-base sm:text-lg font-extrabold tracking-wide text-accent">
                    / {card.tag}
                  </span>
                </div>

                {/* Card heading */}
                <h2 className="text-xl sm:text-2xl lg:text-[1.75rem] font-bold text-primary-foreground leading-tight tracking-tight mb-2">
                  {card.heading}
                </h2>

                {/* Description */}
                <p className="text-sm sm:text-base lg:text-[1.05rem] text-primary-foreground/80 leading-relaxed line-clamp-3">
                  {card.description}
                </p>
              </div>

              {/* ── Image block ── */}
              <div className="flex-[0.8] min-h-0 px-5 sm:px-6 lg:px-7 -mb-4 overflow-hidden">
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/15 shadow-[0_4px_32px_rgba(0,0,0,0.35)]">
                  {/* Image */}
                  {card.image.src && (
                    <Image
                      src={card.image.src}
                      alt={card.image.alt}
                      fill
                      className="object-cover object-center"
                      priority={isFirst}
                      sizes="(max-width: 767px) 100vw, 384px"
                      quality={75}
                    />
                  )}

                  {/* Bottom scrim so button is readable */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/80 to-transparent" />

                  {/* Button — pinned to bottom of image */}
                  <div className="absolute inset-x-5 bottom-4">
                    {card.cta.primary ? (
                      <Link
                        href={card.cta.href}
                        className="group w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-accent text-accent-foreground font-bold text-sm hover:bg-accent-hover transition-colors duration-200 whitespace-nowrap"
                      >
                        <span>{card.cta.label}</span>
                        <ArrowRight
                          size={16}
                          strokeWidth={2.5}
                          className="shrink-0 group-hover:translate-x-1 transition-transform duration-200"
                          aria-hidden="true"
                        />
                      </Link>
                    ) : (
                      <Link
                        href={card.cta.href}
                        className="group w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/50 text-white font-semibold text-sm hover:bg-white/15 transition-colors duration-200 whitespace-nowrap backdrop-blur-sm"
                      >
                        <span>{card.cta.label}</span>
                        <ChevronRight
                          size={16}
                          strokeWidth={2.5}
                          className="shrink-0 group-hover:translate-x-1 transition-transform duration-200"
                          aria-hidden="true"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
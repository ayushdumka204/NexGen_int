"use client";

import React, { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ChevronDown, ChevronUp, Check } from "lucide-react";
import ArrowButton from "../../../_components/utils/ArrowButton.jsx";

const ABOUT_IMAGES = [
  { url: "/About-nexgen.png", alt: "NexGen Office" },
  { url: "/Startup.png", alt: "NexGen Office" },
  // { url: "/sa.png", alt: "NexGen Office" },
];

const ServiceShowcase = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-16 md:py-24 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* LEFT: SLIDER (Fixed Height to prevent jumping) */}
          <div className="w-full lg:w-1/2 max-w-xl mx-auto lg:mx-0 relative">
            <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-lg relative min-h-[450px] md:min-h-[550px] lg:min-h-[600px]" ref={emblaRef}>
              <div className="flex h-full absolute inset-0">
                {ABOUT_IMAGES.map((item, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 h-full relative">
                    <Image
                      src={item.url}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Navigation */}
            <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex justify-between z-10">
              <ArrowButton direction="left" visible={true} onClick={scrollPrev} />
              <ArrowButton direction="right" visible={true} onClick={scrollNext} />
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] leading-tight mb-2">
              2 Decades <span className="text-[var(--color-accent)]">of Experience</span>
            </h2>

            <div className="w-12 h-1 bg-[var(--color-primary)] mb-6"></div>

            {/* <p className="text-2xl md:text-3xl font-medium text-[var(--color-accent)] italic mb-8">
              2 Decades of Experience
            </p> */}

            <div className="space-y-6">
              {/* Point 1 */}
              <div className="flex gap-4 items-start">
                <Check className="mt-1 h-5 w-5 text-[var(--color-accent)] shrink-0 stroke-[3]" />
                <p className=" leading-relaxed text-sm md:text-base">
                  <span className="font-bold text-black">NexGen Market Research Services Pvt Ltd</span>{" "}
                  is a multidimensional market research company offering high quality marketing research, analysis and consulting services.
                  With <span className="font-bold">2 decades</span> into the industry, NexGen has evolved as a leading market research services provider catering to the needs of clients from all verticals.
                </p>
              </div>

              {/* Point 2 */}
              <div className="flex gap-4 items-start">
                <Check className="mt-1 h-5 w-5 text-[var(--color-accent)] shrink-0 stroke-[3]" />
                <p className=" leading-relaxed text-sm md:text-base text-black">
                  As a company, we work very closely with our clients in providing a very{" "}
                  <span className="font-bold text-black">'hands-on' approach</span>{" "}
                  to the management of all campaigns. NexGen works exclusively with market research companies in India looking for a personal guide through the varied cultures.
                </p>
              </div>

              {/* Hidden Content */}
              <div className={`space-y-6 transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0"}`}>
                <div className="flex gap-4 items-start">
                  <Check className="mt-1 h-5 w-5 text-[var(--color-accent)] shrink-0 stroke-[3]" />
                  <p className="leading-relaxed text-sm md:text-base text-black">
                    Instead of sighting opportunity as just another business deal, NexGen believes in{" "}
                    <span className="font-bold text-black">building a lasting relationship</span>{" "}
                    with clients. Since its inception, NexGen has established many friends & clients among{" "}
                    <span className="font-bold text-black">international companies.</span>
                  </p>
                </div>

                <div className="flex gap-4 items-start">
                  <Check className="mt-1 h-5 w-5 text-[var(--color-accent)] shrink-0 stroke-[3]" />
                  <p className=" leading-relaxed text-sm md:text-base text-black">
                    With our ever-expanding research network, currently spanning cities within India across all regions, NexGen is excellently poised to enable you to reach your target market.
                  </p>
                </div>
              </div>

              {/* Toggle Button with Cursor Pointer */}
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-[var(--color-primary)] font-bold text-sm hover:text-[var(--color-accent)] transition-colors mt-4 ml-9 cursor-pointer"
              >
                {isExpanded ? (
                  <>Read Less <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>Read More <ChevronDown className="w-4 h-4" /></>
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
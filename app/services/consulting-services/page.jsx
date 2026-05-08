import React from "react";
import Image from "next/image";
import ServicesCTA from "../_components/ServicesCTA";

export const metadata = {
  title: "Market Research Consulting | Market Survey Consultants",
};

const data = {
  title: "Consulting",
  content: [
    "NexGen experts give the right suggestions to the companies / businesses to follow the right steps.",
    "NexGen assists clients to decide the best parameters to consider taking right action that are highly impactful but less cost intensive.",
    "Our consulting team closely works with the companies / startups for a duration for 6 months to 2 years.",
    "Our consulting services helps to address the right market potential and market attractiveness.",
  ],
  image: "/consulting.jpg",
};

export default function ConsultingPage() {
  return (
    <div className="bg-white text-(--color-primary)-sans flex flex-col items-center py-8 px-6 md:px-12">
      {/* --- HEADER --- */}
      <div className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none m-0 text-primary">
          {data.title}
        </h1>
        <div className="h-1 w-12 bg-accent mx-auto mt-4 rounded-full" />
      </div>

      {/* --- CONTENT GRID --- */}
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {data.content.map((text, idx) => (
          <div
            key={idx}
            className="group p-6 border border-border rounded-xl flex flex-col justify-center"
          >
            <div className="flex items-start gap-4">
              <span className="text-accent font-black text-xl ">
                0{idx + 1}
              </span>
              <p className="text-[13px] md:text-[14px] text-black font-bold leading-relaxed tracking-wide">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* --- BOTTOM IMAGE (Size Controlled & Natural) --- */}
      <div className="w-full max-w-md mx-auto mb-16"> 
        {/* max-w-md use kiya hai taaki div chhota rahe aur aspect ratio maintain ho */}
        <Image
          src={data.image}
          alt="Consulting"
          width={3798}
          height={3798}
          className="w-full h-auto object-contain rounded-xl shadow-sm border border-border"
          quality={90}
          priority
        />
      </div>

      <div className="w-full">
        <ServicesCTA />
      </div>
      {/*  */}
    </div>
  );
}
"use client";
import React from "react";
import { Users, User, MapPin, Eye } from "lucide-react";
import TiltedCard from "../../../_components/ui/TiltedCard"; // Path updated
import ServiceSlider from "../../../_components/ui/ServiceSlider"; // Path updated
import { Tag } from "./Tag"; // Local import

// Data defined inside the component file that uses it
const researchMethods = [
  {
    title: "Focus Group Discussions",
    desc: "FGDs bring together 6–10 carefully screened respondents to explore product concepts.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop",
    tags: ["Delhi, Mumbai", "Live-Streaming", "Online FGDs"],
  },
  {
    title: "In-Depth Interviews (IDIs)",
    desc: "One-on-one conversations that allow researchers to probe individual experiences.",
    icon: User,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
    tags: ["IRB Protocols", "Laddering", "Anonymisation"],
  },
  {
    title: "Ethnographic & Shop-Alongs",
    desc: "Captures actual behaviour in natural environments: at home, or the workplace.",
    icon: MapPin,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    tags: ["In-Home", "Retail Journey", "Behavioural Gap"],
  },
  {
    title: "Mystery Shopping",
    desc: "Uses trained, anonymous shoppers to evaluate real-world customer experience.",
    icon: Eye,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    tags: ["Service Quality", "Compliance", "Benchmark"],
  },
];

export default function MethodsSlider() {
  return (
    <section className="mb-20">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-2xl font-bold text-primary">Research Methods</h2>
          <p className="text-slate-500 text-sm mt-1">Swipe or use arrows to explore</p>
        </div>
      </div>

      <ServiceSlider>
        {researchMethods.map((method) => (
          <TiltedCard
            key={method.title}
            imageSrc={method.image}
            altText={method.title}
            captionText={method.title}
            containerHeight="380px"
            containerWidth="100%"
            imageHeight="380px"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <div className="w-full h-full flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-accent rounded-lg text-primary">
                    <method.icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{method.title}</h3>
                </div>
                <p className="text-white/70 text-xs leading-relaxed mb-3 line-clamp-2">
                  {method.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {method.tags.map((tag, tagIdx) => (
                    <Tag key={tagIdx} text={tag} />
                  ))}
                </div>
              </div>
            }
          />
        ))}
      </ServiceSlider>
    </section>
  );
}
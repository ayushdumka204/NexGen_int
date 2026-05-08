"use client";
import { BentoGrid, BentoGridItem } from "../../../_components/ui/bento-grid";
import {
  IconCheck,
  IconEye,
  IconSchool,
  IconClock,
  IconMapPin,
  IconDatabase,
  IconFileCheck,
  IconShieldCheck
} from "@tabler/icons-react";

export default function SevenCoreControls() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                <IconShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-primary">
                Seven Core Controls
            </h3>
        </div>

        {/* Bento Grid Layout */}
        <BentoGrid>
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    className={item.className}
                    header={item.header} // Optional header for gradients/images
                />
            ))}
        </BentoGrid>
    </div>
  );
}

// Data Configuration
const items = [
  {
    title: "Back-Check Validation",
    description: "30% of all quantitative respondents independently re-contacted by a supervisor to verify responses.",
    icon: <IconCheck className="w-6 h-6" />,
    className: "md:col-span-2", // Wide Card
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-primary/5 to-accent/10" />,
  },
  {
    title: "Full Qualitative Review",
    description: "100% of transcripts reviewed against audio or video recordings before analysis begins.",
    icon: <IconEye className="w-6 h-6" />,
    className: "md:col-span-1",
  },
  {
    title: "Interviewer Competency",
    description: "All interviewers complete formal assessed training before any deployment.",
    icon: <IconSchool className="w-6 h-6" />,
    className: "md:col-span-1",
  },
  {
    title: "Real-Time Field Supervision",
    description: "Field Managers monitor active fieldwork and apply corrective action the same day.",
    icon: <IconClock className="w-6 h-6" />,
    className: "md:col-span-2", // Wide Card
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-accent/10 via-white to-primary/5" />,
  },
  {
    title: "GPS & Photo Verification",
    description: "Every face-to-face interview generates a GPS location stamp and photograph.",
    icon: <IconMapPin className="w-6 h-6" />,
    className: "md:col-span-1",
  },
  {
    title: "Data Integrity Checks",
    description: "Tabulated data reviewed for logical inconsistencies and anomalous response patterns.",
    icon: <IconDatabase className="w-6 h-6" />,
    className: "md:col-span-1",
  },
  {
    title: "Source Authentication",
    description: "All secondary sources verified for credibility before inclusion in client deliverables.",
    icon: <IconFileCheck className="w-6 h-6" />,
    className: "md:col-span-1",
  },
];
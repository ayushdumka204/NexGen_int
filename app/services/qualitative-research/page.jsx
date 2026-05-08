import ServicesCTA from "../_components/ServicesCTA";
import StatsCarousel from "../../_components/_home/StatsCarousel"; // adjust path as needed

export const metadata = {
  title: "Qualitative Research Services | Data Collection Services",
  description:
    "In-depth qualitative research on consumer behavior using focus groups, interviews, ethnography, usability testing, and central location tests.",
};

/* ── Data for the two carousels ─────────────────────────────── */

// Replaces /mysteryshopping.png hero image
const heroCarouselItems = [
  {
    // label: "",
    value: "Focus Group Discussions",
    desc: "6–10 screened respondents, Expert facilitation & moderation, Projective & enabling techniques, Studios: 5 cities nationwide, Online FGD's available, ESOMAR & MRSI compliant.",
  },
  {
    // label: "",
    value: "In-Depth Interviews",
    desc: "One-on-one depth interviews, HCP & senior professionals, Laddering & elicitation methods, IRB-compatible protocols, Full anonymisation standard, Academic research ready.",
  },
  {
    // label: "",
    value: "Ethnographic Research",
    desc: "In-home & in-store observation, Natural environment fieldwork, Real vs recalled behaviour, Video documentation included, Shop-along retail studiese, FMCG Retail Healthcare.",
  },
  {
    // label: "",
    value: "Mystery Shopping",
    desc: "Trained anonymous evaluators, Service quality audits, Brand standard compliance, Competitor benchmarking, Contact centre evaluation, Full ESOMAR compliance.",
  },
];

// Replaces /Quali.png section image
const qualiCarouselItems = [
  {
    // label: "",
    value: "Briefing & Recruiting",
    desc: "Scenario scripts & evaluator selection.",
  },
  {
    // label: "",
    value: "Anonymous Visit",
    desc: "Convert service experience observation.",
  },
  {
    // label: "",
    value: "Evidence Capture",
    desc: "Notes, photos, audio-verification.",
  },
  {
    // label: "",
    value: "Report Submission",
    desc: "Structured scorecard within 24 hours.",
  },
  {
    // label: "",
    value: "Analysis & Debrief",
    desc: "Trend analysis & client presentation.",
  },
];

/* ── Method cards data ───────────────────────────────────────── */
const methods = [
  {
    title: "Focus Group Discussions",
    body: [
      "Focus Group Discussions (FGDs) bring together 6–10 carefully screened respondents to explore product concepts, brand perceptions, category attitudes, advertising effectiveness, and unmet consumer needs through guided group dialogue. NexGen's moderators are expert practitioners of projective and enabling techniques, creating the conditions for authentic, spontaneous consumer expression.",
      "NexGen's dedicated FGD facilities are located in Delhi, Mumbai, Bengaluru, Hyderabad, and Chennai, equipped with one-way mirrors, professional audio-visual recording, and secure live-streaming for remote client observation. Online focus groups are available for geographically dispersed or hard-to-recruit audiences.",
    ],
  },
  {
    title: "In-Depth Interviews",
    body: [
      "In-Depth Interviews (IDIs) are one-on-one qualitative conversations that allow NexGen researchers to probe individual experiences, decision pathways, and motivations with a depth and confidentiality that group settings cannot replicate. IDIs are the recommended method for sensitive research topics, senior professional audiences, healthcare professional studies, and complex decision-making research.",
      "NexGen's qualitative interviewers are trained in advanced elicitation techniques — including laddering, means-end chain analysis, and narrative interviewing. For academic and social research projects where IRB protocols apply, NexGen provides fully documented informed consent, interview anonymisation, and secure data handling as standard.",
    ],
  },
  {
    title: "Ethnographic Research & Shop-Alongs",
    body: [
      "Ethnographic observation captures actual behaviour rather than recalled behaviour, consistently revealing the gap between what consumers say they do and what they actually do. NexGen deploys trained researchers to observe consumers in their natural environments: at home, in retail stores, in clinical settings, or at the workplace.",
      "Shop-along research accompanies individual consumers through the complete retail purchase journey — capturing real-time attention, browsing patterns, in-store triggers, and purchase barriers. This method is deployed by FMCG, retail, and consumer electronics clients seeking to optimise shelf placement, packaging communication, and in-store marketing effectiveness.",
    ],
  },
  {
    title: "Mystery Shopping",
    body: [
      "NexGen's Mystery Shopping programme uses rigorously trained, anonymous shoppers to evaluate the real-world customer experience at retail outlets, service branches, healthcare facilities, e-commerce platforms, and contact centres. Conducted in full accordance with ESOMAR's mystery shopping guidelines, the programme delivers objective, auditable evidence of service quality and brand standard compliance.",
    ],
  },
];

/* ── Table rows ──────────────────────────────────────────────── */
const tableRows = [
  {
    app: "Retail Service Audit",
    measure:
      "Staff conduct, product knowledge, upselling behaviour, queue management",
  },
  {
    app: "Brand Standard Compliance",
    measure: "Visual merchandising, POP, pricing accuracy, planogram adherence",
  },
  {
    app: "Competitor Benchmarking",
    measure:
      "Comparative service quality, product availability, price positioning",
  },
  {
    app: "Contact Centre Quality",
    measure: "Call handling, script adherence, first-call resolution, empathy",
  },
  {
    app: "Healthcare Experience",
    measure: "Reception conduct, wait times, consultation quality, compliance",
  },
];

/* ─────────────────────────────────────────────────────────────── */

export default function QualitativeResearchPage() {
  return (
    <div className=" min-h-screen bg-background">
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-14 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-[var(--color-primary)]">
                QUALITATIVE RESEARCH
              </span>{" "}
              <span className="text-[var(--color-accent)]">SERVICES</span>
            </h1>

            <div className="space-y-6 text-lg leading-relaxed text-black">
              <p>
                Quantitative data reveals the scale and direction of market
                phenomena. Qualitative research reveals the reasoning behind
                them — the attitudes, motivations, cultural contexts, and
                emotional drivers that shape consumer behaviour. NexGen's
                qualitative practice is built on a senior team of experienced
                moderators, qualitative interviewers, and behavioural
                researchers with deep expertise across healthcare, consumer
                goods, financial services, retail, and social policy.
              </p>
              <p className="text-sm  italic border-l-2 border-[var(--color-accent)] pl-4 text-black">
                All qualitative research at NexGen is conducted in accordance
                with ESOMAR's guidelines for qualitative methods and the MRSI
                Code of Conduct. Respondent anonymity is protected at all times;
                participation is voluntary and fully informed.
              </p>
            </div>
          </div>

          {/* Right — carousel replacing /mysteryshopping.png */}
          <StatsCarousel
            items={heroCarouselItems}
            heading="Our Core Methods"
            subheading="NexGen's four qualitative research methods"
            interval={4500}
            className="py-8 lg:py-0 text-black"
          />
        </div>
      </section>

      {/* ── METHODS ───────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-[var(--color-primary)]">Our</span>{" "}
            <span className="text-[var(--color-accent)]">Methods</span>
          </h2>
          <p className="text-center text-black mb-12 max-w-2xl mx-auto">
            NexGen's four qualitative research methods — each serves a distinct
            role in the insight process
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {methods.map((m) => (
              <div
                key={m.title}
                className="bg-white rounded-xl p-8 shadow-md border border-[var(--color-border)] hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">
                  {m.title}
                </h3>
                {m.body.map((para, i) => (
                  <p
                    key={i}
                    className={`text-black leading-relaxed ${i < m.body.length - 1 ? "mb-4" : ""} ${i === m.body.length - 1 && m.body.length > 1 ? "text-sm" : ""}`}
                  >
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAROUSEL replacing /Quali.png ─────────────────────── */}
      <StatsCarousel
        items={qualiCarouselItems}
        heading="Mystery Shopping Evaluation Cycle"
        subheading="From Briefing to Analysis & Debrief"
        interval={5000}
        className="bg-[var(--color-muted)]/30"
      />

      {/* ── TABLE ─────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-[var(--color-muted)]/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-[var(--color-primary)]">Qualitative</span>{" "}
            <span className="text-[var(--color-accent)]">Applications</span>
          </h2>

          <div className="bg-white rounded-xl shadow-md border border-[var(--color-border)] overflow-hidden">
            <table className="w-full">
              <thead className="bg-[var(--color-primary)]/10 border-b border-[var(--color-border)]">
                <tr>
                  <th className="px-8 py-6 text-left text-lg font-semibold text-[var(--color-primary)]">
                    Application
                  </th>
                  <th className="px-8 py-6 text-left text-lg font-semibold text-[var(--color-primary)]">
                    What NexGen Measures
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr
                    key={row.app}
                    className={`hover:bg-[var(--color-accent)]/5 transition-colors ${
                      i < tableRows.length - 1
                        ? "border-b border-[var(--color-border)]"
                        : ""
                    }`}
                  >
                    <td className="px-8 py-6 text-foreground font-medium">
                      {row.app}
                    </td>
                    <td className="px-8 py-6 text-foreground">{row.measure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ServicesCTA />
    </div>
  );
}

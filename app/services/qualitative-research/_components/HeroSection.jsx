"use client";

import React from "react";
import Image from "next/image";

const QualitativeResearch = () => {
  return (
    <section className="bg-white text-[var(--color-foreground)] py-24 px-6 md:px-12">

      {/* ===== HEADER ===== */}
      <div className="max-w-7xl mx-auto mb-20">
        <p className="text-xs tracking-[0.4em] uppercase text-[var(--color-muted-foreground)] mb-4">
          04 — QUALITATIVE RESEARCH
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-end">
          <h2 className="text-4xl md:text-6xl font-black text-[var(--color-primary)] leading-tight">
            Qualitative Research <br />
            <span className="text-[var(--color-accent)]">Services</span>
          </h2>

          <p className="text-base md:text-lg leading-relaxed border-l-4 border-[var(--color-accent)] pl-6">
            Quantitativedata reveals the scale and direction of market phenomena. Qualitative research reveals the reasoning behind them — the attitudes, motivations, cultural contexts, and emotional drivers that shape consumer behaviour. NexGen’s qualitative practice is built on a senior team of experienced moderators, qualitative interviewers, and behavioural researchers with deep expertise across healthcare, consumer goods, financial services, retail, and social policy.
          </p>
        </div>

        <p className="mt-8 text-base md:text-lg max-w-4xl text-[var(--color-muted-foreground)]">
          All qualitative research at NexGen is conducted in accordance with ESOMAR’s guidelines for qualitative methods and the MRSI Code of Conduct. Respondent anonymity is protected at all times; participation is voluntary and fully informed.
        </p>
      </div>

      {/* ===== ONLY IMAGE 1 ===== */}
      <div className="max-w-7xl mx-auto mb-28">
        <div className="relative h-[350px] rounded-2xl overflow-hidden">
          <Image
            src="/qualitative-methods.png"
            alt="NexGen’s four qualitative research methods — each serves a distinct role in the insight process"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 flex items-center">
            <p className="text-white text-lg md:text-xl max-w-xl px-8">
              NexGen’s four qualitative research methods — each serves a distinct role in the insight process
            </p>
          </div>
        </div>
      </div>

      {/* ===== METHODS (NO IMAGE, PREMIUM DESIGN) ===== */}
      <div className="max-w-7xl mx-auto space-y-20">

        {/* METHOD 1 */}
        <div className="relative pl-8 border-l-2 border-[var(--color-accent)]">
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-4">
            Focus Group Discussions
          </h3>
          <p className="leading-relaxed text-[var(--color-muted-foreground)]">
            Focus Group Discussions (FGDs) bring together 6–10 carefully screened respondents to explore product concepts, brand perceptions, category attitudes, advertising effectiveness, and unmet consumer needs through guided group dialogue. NexGen’s moderators are expert practitioners of projective and enabling techniques, creating the conditions for authentic, spontaneous consumer expression.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--color-muted-foreground)]">
            NexGen’s dedicated FGD facilities are located in Delhi, Mumbai, Bengaluru, Hyderabad, and Chennai, equipped with one-way mirrors, professional audio-visual recording, and secure live-streaming for remote client observation. Online focus groups are available for geographically dispersed or hard-to-recruit audiences.
          </p>
        </div>

        {/* METHOD 2 */}
        <div className="bg-[var(--color-muted)] p-8 rounded-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-4">
            In-Depth Interviews
          </h3>
          <p className="leading-relaxed">
            In-Depth Interviews (IDIs) are one-on-one qualitative conversations that allow NexGen researchers to probe individual experiences, decision pathways, and motivations with a depth and confidentiality that group settings cannot replicate. IDIs are the recommended method for sensitive research topics, senior professional audiences, healthcare professional studies, and complex decision-making research.
          </p>
          <p className="mt-4 leading-relaxed">
            NexGen’s qualitative interviewers are trained in advanced elicitation techniques — including laddering, means-end chain analysis, and narrative interviewing. For academic and social research projects where IRB protocols apply, NexGen provides fully documented informed consent, interview anonymisation, and secure data handling as standard.
          </p>
        </div>

        {/* METHOD 3 */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)]">
            Ethnographic Research & Shop-Alongs
          </h3>
          <div className="text-[var(--color-muted-foreground)] leading-relaxed">
            <p>
              Ethnographic observation captures actual behaviour rather than recalled behaviour, consistently revealing the gap between what consumers say they do and what they actually do. NexGen deploys trained researchers to observe consumers in their natural environments: at home, in retail stores, in clinical settings, or at the workplace.
            </p>
            <p className="mt-4">
              Shop-along research accompanies individual consumers through the complete retail purchase journey — capturing real-time attention, browsing patterns, in-store triggers, and purchase barriers. This method is deployed by FMCG, retail, and consumer electronics clients seeking to optimise shelf placement, packaging communication, and in-store marketing effectiveness.
            </p>
          </div>
        </div>

      </div>

      {/* ===== MYSTERY SHOPPING ===== */}
      <div className="max-w-7xl mx-auto mt-28">

        <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-10">
          Mystery Shopping
        </h3>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <p className="leading-relaxed text-[var(--color-muted-foreground)]">
            NexGen’s Mystery Shopping programme uses rigorously trained, anonymous shoppers to evaluate the real-world customer experience at retail outlets, service branches, healthcare facilities, e-commerce platforms, and contact centres. Conducted in full accordance with ESOMAR’s mystery shopping guidelines, the programme delivers objective, auditable evidence of service quality and brand standard compliance.
          </p>

          {/* ===== ONLY IMAGE 2 ===== */}
          <div className="relative h-[320px] rounded-2xl overflow-hidden">
            <Image
              src="/mystery-cycle.png"
              alt="Mystery Shopping evaluation cycle — from briefing through anonymous visit to analysis and debrief"
              fill
              sizes="50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-6">
              <p className="text-white text-sm md:text-base">
                Mystery Shopping evaluation cycle — from briefing through anonymous visit to analysis and debrief
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* ===== TABLE (UPGRADED) ===== */}
      <div className="max-w-7xl mx-auto mt-20">

        <div className="rounded-2xl overflow-hidden border border-[var(--color-border)]">

          <div className="grid grid-cols-2 bg-[var(--color-primary)] text-white font-semibold">
            <div className="p-5">Application</div>
            <div className="p-5">What NexGen Measures</div>
          </div>

          {[
            ["Retail Service Audit", "Staff conduct, product knowledge, upselling behaviour, queue management"],
            ["Brand Standard Compliance", "Visual merchandising, POP, pricing accuracy, planogram adherence"],
            ["Competitor Benchmarking", "Comparative service quality, product availability, price positioning"],
            ["Contact Centre Quality", "Call handling, script adherence, first-call resolution, empathy"],
            ["Healthcare Experience", "Reception conduct, wait times, consultation quality, compliance"],
          ].map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-2 border-t border-[var(--color-border)] hover:bg-[var(--color-muted)] transition"
            >
              <div className="p-5 font-medium text-[var(--color-primary)]">
                {row[0]}
              </div>
              <div className="p-5 text-[var(--color-muted-foreground)]">
                {row[1]}
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default QualitativeResearch;
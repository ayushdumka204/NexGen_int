import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-(--color-background) py-8 px-6 font-sans text-(--color-foreground)">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            <span className="text-(--color-primary)">Privacy</span>{" "}
            <span className="text-(--color-accent)">Policy</span>
          </h2>
          <div className="h-1.5 w-24 bg-(--color-accent) mx-auto rounded-full" />
        </div>

        {/* Intro Section */}
        <div className="bg-(--color-muted) p-8 rounded-3xl border border-(--color-border) mb-12">
          <p className="leading-relaxed font-medium">
            NexGen Market Research Services Private Limited (“NexGen”, “we”,
            “us”, “our”) is committed to protecting the privacy,
            confidentiality, and security of personal data of its clients,
            research respondents, employees, vendors, and other stakeholders,
            and to conducting market and social research in accordance with
            applicable law, global industry standards, and ethical norms.
          </p>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-12">
          {/* 1. Scope, Applicability, and Definitions */}
          <section className="group">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center font-bold">
                1
              </span>
              <h3 className="text-2xl font-bold text-(--color-primary)">
                Scope, Applicability, and Definitions
              </h3>
            </div>
            <div className="pl-0 md:pl-14 space-y-4">
              <p>
                This Privacy Policy applies to all personal data and research
                data that NexGen collects, receives, processes, stores, or
                otherwise handles in the course of providing market research and
                consulting services, whether collected online (websites, online
                surveys, mobile apps, email, online communities) or offline
                (CATI, CAPI, face-to-face interviews, FGDs, CLTs, ethnography,
                mystery shopping, and other research modes).
              </p>
              <p className="font-bold">This Policy covers:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Clients and their representatives.</li>
                <li>
                  Research respondents/participants (including panellists,
                  survey participants, qualitative respondents, and community
                  members).
                </li>
                <li>
                  Website visitors and users of NexGen’s digital platforms.
                </li>
                <li>
                  Vendors, suppliers, consultants, and other business partners.
                </li>
              </ul>
              <div className="mt-6 space-y-4 bg-(--color-muted) p-6 rounded-2xl border border-(--color-border)">
                <h4 className="font-bold text-(--color-primary)">
                  Key Definitions:
                </h4>
                <p>
                  <strong>“Personal data”</strong> means any information that
                  identifies or can reasonably be linked to an identifiable
                  individual, such as name, contact details, identification
                  numbers, location data, online identifiers, or one or more
                  factors specific to that individual.
                </p>
                <p>
                  <strong>“Sensitive personal data”</strong> includes, as
                  defined under applicable laws, financial information,
                  passwords, health information, biometric information, sexual
                  orientation, religious or political beliefs, and any other
                  information classified as sensitive under law or industry
                  codes.
                </p>
                <p>
                  <strong>“Research data”</strong> means responses, opinions,
                  behaviours, attitudes, usage patterns, and other information
                  provided or observed in the context of a research activity,
                  whether or not linked to personal data.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Legal and Ethical Framework */}
          <section className="group">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center font-bold">
                2
              </span>
              <h3 className="text-2xl font-bold text-(--color-primary)">
                Legal and Ethical Framework
              </h3>
            </div>
            <div className="pl-0 md:pl-14 space-y-4">
              <p>NexGen conducts its activities in compliance with:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Applicable Indian laws, including the Information Technology
                  Act, 2000 and the Information Technology (Reasonable Security
                  Practices and Procedures and Sensitive Personal Data or
                  Information) Rules, 2011, and any successor data protection
                  legislation.
                </li>
                <li>
                  Global and local self-regulatory codes and professional
                  standards for market, opinion, and social research, including
                  the ICC/ESOMAR International Code on Market, Opinion and
                  Social Research and Data Analytics.
                </li>
              </ul>
              <p className="p-4 border-l-4 border-(--color-accent) bg-(--color-muted) font-semibold">
                NexGen treats market research strictly as a scientific and
                statistical activity and does not use research projects as a
                vehicle for direct marketing, sales, fundraising, or other
                non-research purposes, thereby preserving public confidence and
                respondent trust.
              </p>
            </div>
          </section>

          {/* 3. Categories of Data Collected */}
          <section className="group">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center font-bold">
                3
              </span>
              <h3 className="text-2xl font-bold text-(--color-primary)">
                Categories of Data Collected
              </h3>
            </div>
            <div className="pl-0 md:pl-14 space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-2 text-(--color-accent)">
                  Client and Stakeholder Data
                </h4>
                <p className="mb-2">NexGen may collect and process:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>
                    <strong>Identity data:</strong> name, designation,
                    organisation, professional biography.
                  </li>
                  <li>
                    <strong>Contact data:</strong> business address, email
                    address, phone numbers, communication preferences.
                  </li>
                  <li>
                    <strong>Contract and billing data:</strong> contract
                    documents, purchase orders, invoices, payment information to
                    the extent required for billing and statutory compliance.
                  </li>
                  <li>
                    <strong>Interaction data:</strong> correspondence, meeting
                    notes, feedback, support requests, and records of
                    communications.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-(--color-accent)">
                  Respondent and Panel Data
                </h4>
                <p className="mb-2">
                  Depending on the nature of the specific research project,
                  NexGen may collect:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>
                    <strong>Basic demographics:</strong> age, gender, city or
                    region, education, occupation, income bands, household size,
                    and composition.
                  </li>
                  <li>
                    <strong>Contact and profile data:</strong> name or unique
                    respondent ID, email, phone number, postal code, language
                    preference, panel membership details (if applicable).
                  </li>
                  <li>
                    <strong>Research responses:</strong> survey answers, usage
                    and attitude information, product or concept evaluations,
                    buying behaviour, satisfaction and feedback, open-ended
                    comments, audio/video responses.
                  </li>
                  <li>
                    <strong>Observation and behavioural data:</strong> stimulus
                    reaction, browsing or usage patterns within research
                    platforms (e.g., heatmaps, click paths) where legally
                    permitted and with appropriate notice.
                  </li>
                  <li>
                    <strong>Technical data:</strong> device identifiers, IP
                    address, browser type, operating system, timestamps, and
                    similar information generated by cookies or similar
                    technologies for research quality and fraud detection.
                  </li>
                </ul>
                <p className="mt-3 text-sm italic">
                  Sensitive personal data is collected only when strictly
                  necessary for a specific research purpose, permitted by law,
                  and subject to explicit informed consent and enhanced
                  safeguards.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-(--color-accent)">
                  Website and Digital Platform Data
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>
                    <strong>Usage data:</strong> pages viewed, time spent,
                    referral URLs, clickstream data.
                  </li>
                  <li>
                    <strong>Cookie and similar technology data:</strong>{" "}
                    information from cookies, pixels, tags, and similar
                    technologies used to ensure proper functioning, improve user
                    experience, prevent fraud, and support analytics.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. Purpose and Legal Basis */}
          <section className="group">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center font-bold">
                4
              </span>
              <h3 className="text-2xl font-bold text-(--color-primary)">
                Purpose and Legal Basis of Processing
              </h3>
            </div>
            <div className="pl-0 md:pl-14 space-y-6">
              <p>
                NexGen processes personal data for specified, explicit, and
                legitimate purposes, and does not further process it in a manner
                incompatible with those purposes.
              </p>
              <div>
                <h4 className="font-bold text-(--color-accent)">
                  For Research Respondents
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>
                    Designing, conducting, and analysing quantitative and
                    qualitative research studies.
                  </li>
                  <li>
                    Ensuring sample quality, representativeness, and validation
                    (including de-duplication, fraud detection, and panel
                    quality management).
                  </li>
                  <li>
                    Contacting respondents for participation, follow-up
                    interviews, or validation, subject to prior consent and
                    local legal requirements.
                  </li>
                  <li>
                    Generating anonymised or aggregated research deliverables,
                    insights, and statistical outputs for clients.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-(--color-accent)">
                  For Clients and Stakeholders
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>
                    Perform and administer contracts, including project
                    planning, execution, delivery, and billing.
                  </li>
                  <li>
                    Respond to enquiries, provide proposals, and manage ongoing
                    relationships.
                  </li>
                  <li>
                    Improve services, develop new offerings, and manage business
                    operations, audits, and risk.
                  </li>
                  <li>
                    Comply with legal, regulatory, tax, and accounting
                    obligations.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-(--color-accent)">
                  For Website and Platform Users
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Provide and improve site functionality and content.</li>
                  <li>
                    Ensure security and integrity, including monitoring,
                    troubleshooting, and abuse prevention.
                  </li>
                  <li>
                    Compile analytics and statistics on usage trends in an
                    aggregated form.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 5. Data Minimisation, Accuracy, and Quality */}
          <section className="group">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center font-bold">
                5
              </span>
              <h3 className="text-2xl font-bold text-(--color-primary)">
                Data Minimisation, Accuracy, and Quality
              </h3>
            </div>
            <div className="pl-0 md:pl-14 space-y-3 text-sm">
              <p>
                NexGen adheres to the principles of data minimisation and
                quality:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Collects only data that is adequate, relevant, and not
                  excessive for the stated research or business purposes.
                </li>
                <li>
                  Uses clear and respectful questionnaires and discussion
                  guides, aligned with professional research codes.
                </li>
                <li>
                  Validates and cleans respondent data to remove duplicate,
                  inconsistent, or fraudulent entries using quality checks
                  (speed checks, red herring questions, IP controls).
                </li>
                <li>
                  Provides respondents with reasonable means to correct or
                  update their information where it is collected in identifiable
                  form.
                </li>
              </ul>
            </div>
          </section>

          {/* 6. Respondent Rights and Protections */}
          <section className="group">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center font-bold">
                6
              </span>
              <h3 className="text-2xl font-bold text-(--color-primary)">
                Respondent Rights and Protections
              </h3>
            </div>
            <div className="pl-0 md:pl-14 space-y-6">
              <div>
                <h4 className="font-bold text-(--color-accent)">
                  Voluntary Participation
                </h4>
                <p className="text-sm mt-2">
                  Participation in NexGen’s research is voluntary. Respondents
                  may decline to answer any question, withdraw at any time, or
                  refuse future contact. Prior to data collection, respondents
                  are informed about the identity of NexGen, the purpose of
                  research, the nature of data collected, and how data will be
                  used.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-(--color-accent)">
                  Confidentiality and Non-Disclosure
                </h4>
                <p className="text-sm mt-2">
                  NexGen maintains a strict separation between respondent
                  identities and survey responses. Clients normally receive
                  results in aggregated or anonymised form only. We do not use
                  respondents’ personal data to directly market products or
                  provide contact details to clients for direct marketing
                  without explicit consent.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-(--color-accent)">
                  Rights Under Applicable Law
                </h4>
                <p className="text-sm mb-2">
                  Subject to applicable laws, respondents may have rights to:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs font-semibold">
                  <li>Access their personal data held by NexGen.</li>
                  <li>Request correction of inaccurate data.</li>
                  <li>Withdraw consent to processing.</li>
                  <li>
                    Request deletion or anonymisation of their personal data.
                  </li>
                  <li>Restrict or object to certain types of processing.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 7. Client Confidentiality */}
          <section className="group">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center font-bold">
                7
              </span>
              <h3 className="text-2xl font-bold text-(--color-primary)">
                Client Confidentiality
              </h3>
            </div>
            <div className="pl-0 md:pl-14">
              <p className="text-sm">
                NexGen treats all client materials, project information, and
                data as highly confidential. We enter into appropriate
                confidentiality agreements with clients and ensure employees and
                subcontractors are bound by equivalent obligations. We do not
                disclose client-identifiable information to third parties except
                as required by law or with prior written consent.
              </p>
            </div>
          </section>

          {/* 8. Data Sharing and Third-Party Processing */}
          <section className="group">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center font-bold">
                8
              </span>
              <h3 className="text-2xl font-bold text-(--color-primary)">
                Data Sharing and Third-Party Processing
              </h3>
            </div>
            <div className="pl-0 md:pl-14 space-y-4">
              <p className="text-sm italic font-bold">
                NexGen does not sell personal data of clients or respondents.
              </p>
              <p className="text-sm">
                We may share data strictly on a need-to-know basis with:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  Authorised service providers: IT providers, survey platform
                  vendors, fieldwork partners, etc.
                </li>
                <li>
                  Clients: Anonymised or aggregated results (or identifiable
                  data only with explicit consent).
                </li>
                <li>
                  Professional advisors: Auditors, legal counsel, tax advisors.
                </li>
                <li>Regulatory authorities: Where required by law.</li>
              </ul>
            </div>
          </section>

          {/* 9. Data Security */}
          <section className="group">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center font-bold">
                9
              </span>
              <h3 className="text-2xl font-bold text-(--color-primary)">
                Data Security
              </h3>
            </div>
            <div className="pl-0 md:pl-14">
              <p className="text-sm mb-2">
                NexGen implements appropriate technical, organisational, and
                physical security measures, including:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  Access controls based on role and need-to-know principles.
                </li>
                <li>
                  Encryption of data in transit and at rest for sensitive data.
                </li>
                <li>Segregation of respondent identifiers from responses.</li>
                <li>
                  Regular backups, secure configuration, and staff training.
                </li>
                <li>Incident response procedures for data breaches.</li>
              </ul>
            </div>
          </section>

          {/* 10. Data Retention and Deletion */}
          <section className="group">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center font-bold">
                10
              </span>
              <h3 className="text-2xl font-bold text-(--color-primary)">
                Data Retention and Deletion
              </h3>
            </div>
            <div className="pl-0 md:pl-14">
              <p className="text-sm">
                NexGen retains personal data only for as long as necessary to
                fulfil research purposes, quality assurance, and
                legal/regulatory compliance. Respondent identifiable data is
                deleted, anonymised, or pseudonymised once no longer required.
              </p>
            </div>
          </section>

          {/* 11. Children and Vulnerable Respondents */}
          <section className="group">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center font-bold">
                11
              </span>
              <h3 className="text-2xl font-bold text-(--color-primary)">
                Children and Vulnerable Respondents
              </h3>
            </div>
            <div className="pl-0 md:pl-14">
              <p className="text-sm">
                NexGen does not knowingly collect personal data directly from
                children below the permitted age without parental consent. When
                researching minors, we obtain parental consent, design sensitive
                instruments, and avoid harm or exploitation.
              </p>
            </div>
          </section>

          {/* 12. Data Quality Controls in Research Delivery */}
          <section className="group">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center font-bold">
                12
              </span>
              <h3 className="text-2xl font-bold text-(--color-primary)">
                Data Quality Controls in Research Delivery
              </h3>
            </div>
            <div className="pl-0 md:pl-14">
              <p className="text-sm mb-2">
                To ensure reliable insights, NexGen applies systematic quality
                controls:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Rigorous sample design and panel management.</li>
                <li>Pre-testing of questionnaires.</li>
                <li>Fieldwork monitoring (call recordings, geo-tagging).</li>
                <li>
                  Automated checks for speeders, straight-lining, and
                  inconsistent patterns.
                </li>
              </ul>
            </div>
          </section>

          {/* 13. Links and Policy Changes */}
          <section className="group">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center font-bold">
                13
              </span>
              <h3 className="text-2xl font-bold text-(--color-primary)">
                Links and Policy Changes
              </h3>
            </div>
            <div className="pl-0 md:pl-14 space-y-4 text-sm">
              <p>
                <strong>Third Party Sites:</strong> Our platforms may contain
                links to third-party services. We are not responsible for their
                privacy practices.
              </p>
              <p>
                <strong>Updates:</strong> NexGen may update this Privacy Policy.
                Updated versions will be posted on our website. Continued
                engagement indicates acceptance of the updated Policy.
              </p>
            </div>
          </section>

          {/* 14. Contact and Data Protection Queries */}
          <section className="group">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center font-bold">
                14
              </span>
              <h3 className="text-2xl font-bold text-(--color-primary)">
                Contact and Data Protection Queries
              </h3>
            </div>
            <div className="pl-0 md:pl-14 space-y-4 text-sm">
              <p>
                For questions, requests, or concerns relating to this Privacy
                Policy, data protection, or the exercise of rights, stakeholders
                may contact NexGen using the details published on our official
                website or as specified in project-specific notices.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

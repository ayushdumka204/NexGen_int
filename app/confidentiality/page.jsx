import React from "react";

const ConfidentialityPolicy = () => {
  return (
    <section className="bg-(--color-background) py-8 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 text-center animate-(--animate-fade-in-up)">
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            <span className="text-(--color-primary)">Confidentiality</span>{" "}
            <span className="text-(--color-accent)">& Non-Disclosure</span>
          </h2>
          <div className="h-1.5 w-24 bg-(--color-accent) mx-auto rounded-full" />
        </div>

        {/* Intro Card */}
        <div className="bg-(--color-muted) p-8 rounded-3xl border border-(--color-border) mb-12 shadow-sm animate-(--animate-fade-in)">
          <p className="text-(--color-foreground) leading-relaxed mb-6 font-medium">
            This Confidentiality and Non-Disclosure Policy governs the
            relationship between <strong>NexGenint</strong> (the “Disclosing
            Party”) and its Clients, Vendors, or Partners (the “Receiving
            Party”).
          </p>
          <p className="text-(--color-foreground) leading-relaxed mb-6">
            The parties desire to enter into a business relationship pursuant to
            which the Receiving Party will receive digital marketing services or
            goods from NexGenint. In the course of this relationship, the
            Receiving Party acknowledges that it may have access to certain
            Confidential Information of NexGenint.
          </p>
          <p className="text-(--color-foreground) leading-relaxed font-semibold border-l-4 border-(--color-accent) pl-4">
            It is critical that the Disclosing Party’s Confidential Information
            be kept confidential and not be used in any manner other than as
            contemplated by this Agreement in furtherance of the Business
            Relationship.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* 1. Definition */}
          <div className="group">
            <div className="flex items-center gap-4 mb-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center font-bold">
                1
              </span>
              <h3 className="text-2xl font-bold text-(--color-primary)">
                Definition of Confidential Information
              </h3>
            </div>
            <div className="pl-14 space-y-4">
              <p className="text-(--color-foreground) leading-relaxed">
                “Confidential Information” shall mean any and all information,
                materials, and/or documents disclosed by NexGenint that are
                either non-public, confidential, or proprietary in nature.
              </p>
              <p className="text-(--color-foreground) font-semibold">
                This includes, without limitation:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Marketing strategies, SEO methodologies, ad campaign structures, and proprietary frameworks.",
                  "Customer lists, business and financial information, pricing models, and supply sources.",
                  "Technical data, software, source code, trade secrets, know-how, inventions, and ideas.",
                  "Analyses, compilations, data, studies, or other documents prepared or derived from the above information.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="bg-(--color-background) border border-(--color-border) p-4 rounded-xl text-md flex items-start gap-3 hover:border-(--color-accent) transition-colors"
                  >
                    <span className="text-(--color-accent) font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. Exceptions */}
          <div className="group">
            <div className="flex items-center gap-4 mb-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center font-bold">
                2
              </span>
              <h3 className="text-2xl font-bold text-(--color-primary)">
                Exceptions to Confidential Information
              </h3>
            </div>
            <div className="pl-14">
              <p className="text-(--color-foreground) mb-4">
                Confidential Information shall not include information,
                materials, or documents that:
              </p>
              <ul className="space-y-3">
                {[
                  "Are or become generally available to the public other than as a result of disclosure by the Receiving Party in violation of this obligation.",
                  "Become available from a third party entitled to disclose such information.",
                  "Were known to the Receiving Party before disclosure by NexGenint, as evidenced by written records.",
                  "The Receiving Party can show by written records was developed independently without reference to the Confidential Information received.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-(--color-foreground) leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-(--color-accent) mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. Obligations */}
          <div className="group">
            <div className="flex items-center gap-4 mb-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center font-bold">
                3
              </span>
              <h3 className="text-2xl font-bold text-(--color-primary)">
                Obligations regarding Disclosure and Use
              </h3>
            </div>
            <div className="pl-14 space-y-4">
              <p className="text-(--color-foreground) mb-4">
                The Receiving Party covenants and agrees that Confidential
                Information of NexGenint:
              </p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Will be kept confidential and will not be disclosed or used other than in furtherance of the Business Relationship.",
                  "Will be disclosed only to those employees, consultants, or agents who have a need to know such information and who have agreed in writing to be bound by confidentiality terms similar to this policy.",
                  "Shall not be reverse-engineered, analyzed for composition, or altered without permission.",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-(--color-muted) border-l-4 border-(--color-primary)"
                  >
                    <p className="text-md text-(--color-foreground) leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-(--color-foreground) leading-relaxed">
                The Receiving Party shall use efforts to protect the
                Confidential Information commensurate with those employed for
                the protection of its own sensitive information, which shall be
                no lesser standard than reasonable care.
              </p>
            </div>
          </div>

          {/* 4. Intellectual Property */}
          <div className="group">
            <div className="flex items-center gap-4 mb-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center font-bold">
                4
              </span>
              <h3 className="text-2xl font-bold text-(--color-primary)">
                Intellectual Property
              </h3>
            </div>
            <div className="pl-14 space-y-4">
              <p className="text-(--color-foreground) leading-relaxed">
                All materials, information, or other documents, whether
                Confidential Information or not, created by NexGenint shall
                remain the property of NexGenint. No license is granted to the
                Receiving Party by this Agreement other than as expressly stated
                in the service contract.
              </p>
              <div className="p-4 rounded-xl">
                <p className="text-(--color-primary) leading-relaxed font-bold">
                  Any Intellectual Property right in the Confidential
                  Information belongs to NexGenint and is protected under
                  intellectual property laws. Illegal reproduction of materials
                  or documentation can result in civil damages and criminal
                  penalties.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Return or Destruction */}
          <div className="group">
            <div className="flex items-center gap-4 mb-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center font-bold">
                5
              </span>
              <h3 className="text-2xl font-bold text-(--color-primary)">
                Return or Destruction of Materials
              </h3>
            </div>
            <div className="pl-14">
              <p className="text-(--color-foreground) leading-relaxed">
                Upon request, the Receiving Party shall promptly return or
                destroy all materials, information, or other documents
                constituting any portion of the Confidential Information and
                shall otherwise handle such materials in accordance with
                customary document retention practices.
              </p>
            </div>
          </div>

          {/* 6. Rights and Remedies */}
          <div className="group">
            <div className="flex items-center gap-4 mb-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center font-bold">
                6
              </span>
              <h3 className="text-2xl font-bold text-(--color-primary)">
                Rights and Remedies Upon Breach
              </h3>
            </div>
            <div className="pl-14 space-y-4">
              <p className="text-(--color-foreground)">
                If the Receiving Party breaches or threatens to commit a breach
                of any provision of this policy, NexGenint shall have the
                following rights:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "The right to specific enforcement by any court of competent jurisdiction, including restraining orders and injunctions.",
                  "The right to require compensation for direct or indirect damages incurred as a result of the violation.",
                  "Reimbursement for all costs and expenses, including reasonable attorney fees, in any action brought to enforce this Agreement.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="bg-(--color-muted) border border-(--color-border) p-4 rounded-xl text-md flex items-start gap-3"
                  >
                    <span className="text-(--color-accent) font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 7. Governing Law */}
          <div className="group">
            <div className="flex items-center gap-4 mb-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center font-bold">
                7
              </span>
              <h3 className="text-2xl font-bold text-(--color-primary)">
                Governing Law and Term
              </h3>
            </div>
            <div className="pl-14 space-y-4">
              <p className="text-(--color-foreground) leading-relaxed">
                This Agreement shall be governed by and construed in accordance
                with the laws and regulations of India. All disputes or breaches
                shall first be submitted to non-binding mediation before
                pursuing formal legal action.
              </p>
              <p className="text-(--color-foreground) leading-relaxed font-semibold py-3 px-6 bg-(--color-muted) rounded-full inline-block border border-(--color-border)">
                This confidentiality obligation shall remain in effect
                indefinitely with respect to all Confidential Information and
                Intellectual Property relating to or arising out of the Business
                Relationship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfidentialityPolicy;

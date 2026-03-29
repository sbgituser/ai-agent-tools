"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  description?: string;
}

export default function FAQ({ items, title, description }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {title && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>
            {title}
          </h2>
          {description && (
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              {description}
            </p>
          )}
        </div>
      )}

      <div className="space-y-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl overflow-hidden transition-all"
            style={{
              backgroundColor: openIndex === index ? "var(--bg-soft)" : "var(--bg-card)",
              borderColor: openIndex === index ? "var(--primary)" : "var(--border)",
            }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left px-5 py-4 flex items-start justify-between gap-3 hover:opacity-80 transition-opacity"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="flex-1 text-sm font-semibold pr-2" style={{ color: "var(--text)" }}>
                {item.q}
              </span>
              <span
                className="flex-shrink-0 text-lg font-bold transition-transform"
                style={{ color: "var(--primary)" }}
                aria-hidden="true"
              >
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div
                id={`faq-answer-${index}`}
                className="px-5 pb-4 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {item.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

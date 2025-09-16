import React, { useState } from 'react';

const items = [
  {
    q: 'How does AI Root Cause Analysis work?',
    a: 'BugLens correlates logs, traces, deploy metadata, and performance signals. A lightweight model ranks likely causes and proposes fixes with links to code and commits.'
  },
  {
    q: 'What about data security and residency?',
    a: 'SOC 2 Type II is in progress. Data is encrypted in transit and at rest. Choose US or EU residency; enterprise options include private cloud.'
  },
  {
    q: 'How big is the SDK footprint?',
    a: 'Clients are minimal and async. Typical bundle adds <6KB gzipped. Server SDKs are streaming-first with backpressure to avoid impacting hot paths.'
  },
  {
    q: 'Is pricing fair as we scale?',
    a: 'Transparent tiers with a free trial. Overage is usage-based and discounted at higher volumes. You can cap events to avoid surprises.'
  },
  {
    q: 'Which integrations are supported?',
    a: 'Native Slack, GitHub, and Jira integrations ship today. Webhooks and custom destinations are available for enterprise.'
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="w-full py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">FAQ</h2>
        <div className="divide-y divide-border rounded-2xl border border-border overflow-hidden">
          {items.map((item, i) => (
            <div key={i}>
              <button
                className="w-full text-left px-5 py-4 bg-card hover:bg-card/80 transition-colors flex justify-between items-center"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-medium">{item.q}</span>
                <span className="text-muted-foreground">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed bg-background/40">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

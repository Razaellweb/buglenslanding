import React from 'react';

const SocialProof = () => {
  const logos = ['LinearFlow', 'ShipKit', 'CloudFox', 'EdgeNet', 'DevDash'];
  return (
    <section className="w-full py-10 md:py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-sm text-muted-foreground mb-6">Trusted by developer-first teams</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 items-center">
          {logos.map((name) => (
            <div key={name} className="flex items-center justify-center">
              <span className="text-foreground/70 font-semibold tracking-wide uppercase text-xs md:text-sm px-3 py-2 rounded-md bg-muted/30 border border-border">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

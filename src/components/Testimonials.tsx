
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: 'BugLens cut our MTTR almost in half. The AI traces point straight to the line of code and the deploy that caused it.',
      author: 'Aisha Patel',
      position: 'Head of Engineering, LoopPay',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      quote: 'We went from drowning in alerts to signal we can act on. Noise is down 60% and on-call is humane again.',
      author: 'Jonas Müller',
      position: 'Platform Lead, NordStack',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg'
    },
    {
      quote: 'The Slack + GitHub workflow is tight. Incidents open with context, PRs link automatically, and fixes land faster.',
      author: 'Mei Chen',
      position: 'EM, Nova SaaS',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
    }
  ];
  
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-card relative overflow-hidden">
      <div className="absolute inset-0 neural-grid opacity-10"></div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
            Loved by modern engineering teams
          </h2>
          <p className="text-muted-foreground text-lg">
            Real outcomes, not vanity metrics: faster resolution and fewer pages.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-border bg-background/80 backdrop-blur-sm hover:border-border/60 transition-all duration-300"
            >
              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary inline-block mr-1">★</span>
                ))}
              </div>
              <p className="text-lg mb-8 text-foreground/90 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={testimonial.avatar} alt={testimonial.author} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-medium text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

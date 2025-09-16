
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter',
      price: annual ? '$0' : '$0',
      period: 'forever',
      description: 'For side-projects and evaluation',
      features: [
        '10k events/month',
        'Real-time stream',
        'Smart grouping',
        '1 project • 3 seats',
      ],
      buttonText: 'Start free',
      buttonVariant: 'outline',
      popular: false,
      href: 'https://buglens.io/signup',
    },
    {
      name: 'Growth',
      price: annual ? '$49' : '$59',
      period: 'per month',
      description: 'For growing SaaS teams',
      features: [
        '1M events/month',
        'AI Root Cause Analysis',
        'Slack/GitHub/Jira',
        'Role-based access',
        'Email + chat support',
      ],
      buttonText: 'Start 14‑day trial',
      buttonVariant: 'default',
      popular: true,
      href: 'https://buglens.io/signup',
    },
    {
      name: 'Scale',
      price: 'Custom',
      period: '',
      description: 'For high-volume and compliance needs',
      features: [
        'Unlimited events',
        'Dedicated SSO/SAML',
        'Private data residency',
        'Custom SLOs and support',
      ],
      buttonText: 'Contact sales',
      buttonVariant: 'outline',
      popular: false,
      href: 'https://buglens.io/contact',
    },
  ];

  return (
    <section id="pricing" className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">Transparent pricing</h2>
          <p className="text-muted-foreground text-lg">Simple tiers with a free trial. Usage-based add‑ons as you scale.</p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <span className="text-sm text-muted-foreground">Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`w-16 h-8 rounded-full border transition-colors ${annual ? 'bg-primary/20 border-primary/40' : 'bg-muted border-border'}`}
            aria-pressed={annual}
          >
            <span className={`inline-block w-7 h-7 rounded-full bg-primary transition-transform translate-y-0.5 ${annual ? 'translate-x-8' : 'translate-x-1'}`} />
          </button>
          <span className="text-sm text-muted-foreground">Annual <span className="text-xs text-primary">save 15%</span></span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl border flex flex-col h-full ${
                plan.popular 
                  ? 'border-primary/50 bg-card glow-primary' 
                  : 'border-border bg-card'
              } transition-all duration-300 relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="mb-auto">
                <h3 className="text-2xl font-semibold tracking-tight mb-1 text-foreground">{plan.name}</h3>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold tracking-tight text-foreground">{plan.price}</div>
                  {plan.period && <div className="text-sm text-muted-foreground">{plan.period}</div>}
                </div>
                
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  className={plan.buttonVariant === 'default' ? 'w-full bg-primary text-primary-foreground hover:bg-primary/90' : 'w-full border-border text-foreground hover:bg-muted'}
                  variant={plan.buttonVariant as 'default' | 'outline'}
                  asChild
                  onClick={() => window.dispatchEvent(new CustomEvent('cta_click', { detail: `pricing_${plan.name.toLowerCase()}` }))}
                >
                  <a href={plan.href}>{plan.buttonText}</a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center text-muted-foreground space-y-2">
          <p>No credit card required for trial. Fair overage pricing, billed monthly.</p>
          <p>
            Questions on events volume? <a href="#faq" className="text-primary hover:underline">See FAQ</a> or <a href="https://buglens.io/contact" className="text-primary hover:underline">contact sales</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

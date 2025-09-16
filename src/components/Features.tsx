import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import {
  Brain,
  LineChart,
  BellRing,
  GitBranch,
  Github,
  Slack,
  Layers,
  Users,
  CheckCircle,
  ArrowUpRight,
} from 'lucide-react';

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Brain,
      title: 'AI Root Cause Analysis',
      description:
        'Auto-correlate logs, traces, and deploys to explain failures and suggest fixes.',
      details: [
        'Correlation across services and releases',
        'Code-aware insights with line-level pointers',
        'Suggested remediation steps',
        'Open a Jira ticket in one click',
      ],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/30',
    },
    {
      icon: LineChart,
      title: 'Real-time Monitoring',
      description:
        'Near-zero lag streams with anomaly detection designed for production SaaS.',
      details: [
        'Live error feed and trends',
        'Latency and throughput overlays',
        'P99 spikes flagged automatically',
        'No sampling surprises',
      ],
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      borderColor: 'border-secondary/30',
    },
    {
      icon: BellRing,
      title: 'Smart Alerts',
      description:
        'Noise suppression, duplicate grouping, and severity tuning that learns.',
      details: [
        'Auto-grouped incidents',
        'Dedup across services and pods',
        'Tunable sensitivity per env',
        'Routing rules by team and hours',
      ],
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/30',
    },
    {
      icon: GitBranch,
      title: 'Seamless Integrations',
      description:
        'Close the loop with GitHub PRs, Jira issues, and Slack on-call workflows.',
      details: [
        'Link deploys to error spikes',
        'PR autolink and blame hints',
        'Two-way Jira sync',
        'Slack incident channels',
      ],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/30',
      integrations: [
        { name: 'Slack', icon: Slack },
        { name: 'GitHub', icon: Github },
      ],
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description:
        'Assign, comment, and resolve together with full audit trails for EMs.',
      details: [
        'Ownership by service/team',
        'Comment threads on incidents',
        'Status pages and SLOs',
        'Role-based access control',
      ],
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      borderColor: 'border-secondary/30',
    },
    {
      icon: Layers,
      title: 'Developer Experience',
      description:
        'Clean SDKs, copyable code snippets, and docs that get out of your way.',
      details: [
        'Lightweight SDK footprint',
        'Type-safe APIs',
        'Copy-to-clipboard snippets',
        'Privacy-first analytics',
      ],
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/30',
    },
  ];

  const stats = [
    { label: 'MTTR reduction', value: '-43%', subtext: 'Across pilot cohorts' },
    { label: 'Alert noise', value: '-58%', subtext: 'With smart grouping' },
    { label: 'Teams onboarded', value: '1,200+', subtext: 'From startups to scaleups' },
    { label: 'Lag to detection', value: '< 1s', subtext: 'Live stream' },
  ];

  const onIntegrationExpand = (name: string) => {
    window.dispatchEvent(new CustomEvent('integration_expand', { detail: name }));
  };

  return (
    <section id="features" className="relative w-full py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 neural-grid opacity-10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 neural-gradient-secondary rounded-full opacity-10 blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <Badge variant="outline" className="px-4 py-2 border-primary/30 bg-primary/5 text-primary">
            Signal over noise for modern dev teams
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Ship faster with fewer incidents
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            BugLens auto-explains production issues, so developers fix what matters and EMs get the stability and visibility they need.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
              <div className="text-xs text-muted-foreground/70">{stat.subtext}</div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`infrastructure-card p-8 rounded-2xl group cursor-pointer transition-all duration-500 ${
                hoveredFeature === index 
                  ? `${feature.borderColor} ${feature.bgColor} glow-primary` 
                  : 'border-border/50 hover:border-primary/30'
              }`}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              onClick={() => feature.title === 'Seamless Integrations' && onIntegrationExpand('integrations')}
            >
              <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className={`space-y-2 transition-all duration-300 ${
                  hoveredFeature === index ? 'opacity-100 max-h-48' : 'opacity-70 max-h-0 overflow-hidden'
                }`}>
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className={`w-4 h-4 ${feature.color} flex-shrink-0`} />
                      <span className="text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>

                {feature.integrations && (
                  <div className="flex gap-2 pt-2">
                    {feature.integrations.map((i, idx) => (
                      <span key={idx} className="inline-flex items-center gap-2 text-xs px-2 py-1 rounded-md bg-muted/50 border border-border">
                        <i.icon className="w-4 h-4" /> {i.name}
                      </span>
                    ))}
                  </div>
                )}

                <div className={`pt-2 transition-all duration-300 ${
                  hoveredFeature === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  <button className={`flex items-center space-x-1 text-sm font-medium ${feature.color} hover:underline group`}>
                    <span>Learn more</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6 pt-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
            See BugLens in your stack
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect Slack, GitHub, and your CI in minutes. Start fixing, not digging.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <a href="https://buglens.io/signup" className="neural-gradient px-8 py-4 rounded-lg text-background font-semibold text-lg hover:scale-105 transition-transform glow-primary" onClick={() => window.dispatchEvent(new CustomEvent('cta_click', { detail: 'features_start_trial' }))}>
              Start free trial
            </a>
            <a href="#pricing" className="px-8 py-4 rounded-lg border border-primary/30 text-foreground hover:bg-primary/5 transition-colors">
              View pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
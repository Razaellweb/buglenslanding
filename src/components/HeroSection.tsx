import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, BellRing, Brain, Github, Slack, Bug, LineChart, ShieldCheck, Zap } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);
  const [lines, setLines] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    const metricTimer = setInterval(() => setActiveMetric((p) => (p + 1) % 4), 1800);
    const lineTimer = setInterval(() => setLines((p) => (p + 1) % 6), 1400);
    return () => { clearTimeout(timer); clearInterval(metricTimer); clearInterval(lineTimer); };
  }, []);

  const trust = [
    { label: 'SOC 2 in progress' },
    { label: 'Data residency EU/US' },
    { label: '99.95% uptime SLO' },
  ];

  const metrics = [
    { label: 'Mean time to resolve', value: '-43%', color: 'text-primary' },
    { label: 'Alert noise', value: '-58%', color: 'text-secondary' },
    { label: 'Signal-to-noise', value: '3.4x', color: 'text-accent' },
    { label: 'Lag to detection', value: '<1s', color: 'text-primary' },
  ];

  const rcaSnippet = [
    'AI RCA: Error spikes correlating with deploy v1.8.24 at 14:32 UTC',
    'Suspected root cause: null pointer in payment-service order.ts:214',
    'Related logs: 124 events across 3 pods',
    'Trace: span b3a1… → db timeout 210ms (p99 780ms)',
    'Suggested fix: guard on order.id before mutation',
    'Opened Jira ticket BL-142 and linked PR #389',
  ];

  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 neural-grid opacity-20"></div>
      <div className="absolute inset-0 animated-grid opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-10 md:pt-16">
        <div className="text-center space-y-8 mb-14">
          <div className={`flex justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Badge variant="outline" className="px-4 py-2 text-sm border-primary/30 bg-primary/5 text-primary hover:bg-primary/10">
              <Brain className="w-4 h-4 mr-2" />
              AI-native Sentry alternative for fast MTTR
              <ArrowRight className="w-3 h-3 ml-2" />
            </Badge>
          </div>

          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-balance">
              AI error tracking that explains issues before users notice
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Developer-first monitoring with AI Root Cause Analysis, real-time streams, and smart alerts that learn. Ship stable, reduce incidents, and close the loop in Slack, GitHub, and Jira.
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button size="lg" className="neural-gradient text-background font-semibold px-8 py-4 text-lg h-auto glow-primary group" asChild>
              <a href="https://buglens.io/signup">
                start free trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 text-foreground hover:bg-primary/5 px-8 py-4 text-lg h-auto group" asChild>
              <a href="#demo-modal">
                <Play className="mr-2 w-5 h-5" />
                watch demo
              </a>
            </Button>
          </div>

          <div className={`flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {trust.map((t, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/40 border border-border">
                <ShieldCheck className="w-4 h-4 text-primary" /> {t.label}
              </span>
            ))}
          </div>
        </div>

        {/* Interactive micro-demo panel */}
        <div className={`relative max-w-6xl mx-auto transition-all duration-1200 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="neural-glass rounded-2xl overflow-hidden infrastructure-glow">
            <div className="bg-card/80 backdrop-blur-xl border-b border-primary/20 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 neural-gradient rounded-lg flex items-center justify-center">
                    <Bug className="w-5 h-5 text-background" />
                  </div>
                  <div>
                    <h3 className="font-semibold">BugLens Live Stream</h3>
                    <p className="text-sm text-muted-foreground">Near-zero lag error monitoring</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary">Production</Badge>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[480px]">
              {/* Left: Alerts */}
              <div className="lg:col-span-1 bg-background/50 p-6 border-r border-primary/10 space-y-3">
                <div className="flex items-center gap-2 mb-2 text-sm font-medium">
                  <BellRing className="w-4 h-4 text-primary" /> Smart Alerts
                </div>
                {['Duplicate crash suppressed', 'Spike detected post-deploy', 'Noise reduced in auth-service'].map((msg, i) => (
                  <div key={i} className="infrastructure-card p-3 rounded-lg flex items-center justify-between">
                    <span className="text-sm text-foreground/90">{msg}</span>
                    <span className="text-xs text-muted-foreground">now</span>
                  </div>
                ))}
                <div className="infrastructure-card p-3 rounded-lg flex items-center gap-2">
                  <Slack className="w-4 h-4 text-secondary" />
                  <span className="text-sm">Alert routed to #oncall</span>
                </div>
                <div className="infrastructure-card p-3 rounded-lg flex items-center gap-2">
                  <Github className="w-4 h-4 text-foreground" />
                  <span className="text-sm">PR auto-linked to incident</span>
                </div>
              </div>

              {/* Center: Chart */}
              <div className="lg:col-span-1 p-6 border-r border-primary/10">
                <div className="flex items-center gap-2 mb-3 text-sm font-medium">
                  <LineChart className="w-4 h-4 text-secondary" /> Live Errors/min
                </div>
                <div className="infrastructure-card p-4 rounded-lg">
                  <div className="flex items-end space-x-1 h-24">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div
                        key={i}
                        className="rounded-t flex-1 animate-infrastructure-glow"
                        style={{
                          backgroundColor: 'hsl(var(--primary) / 0.35)',
                          height: `${20 + (Math.sin((i + activeMetric) / 1.5) + 1) * 30 + (i % 3 === 0 ? 20 : 0)}%`,
                          animationDelay: `${i * 0.08}s`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground">Near real-time stream</div>
                </div>
              </div>

              {/* Right: AI RCA */}
              <div className="lg:col-span-1 p-6">
                <div className="flex items-center gap-2 mb-3 text-sm font-medium">
                  <Zap className="w-4 h-4 text-accent" /> AI Root Cause Analysis
                </div>
                <div className="code-block text-xs space-y-2">
                  {rcaSnippet.slice(0, lines + 1).map((line, idx) => (
                    <div key={idx} className="terminal-text animate-slide-up-fade" style={{ animationDelay: `${idx * 0.2}s` }}>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
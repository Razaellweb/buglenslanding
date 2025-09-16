
import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer id="contact" className="w-full py-16 px-6 md:px-12 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-6">
            <Logo />
            <p className="text-muted-foreground max-w-sm">
              BugLens is the AI‑native error tracker for developers and SaaS teams. Faster MTTR, fewer false positives, seamless workflows.
            </p>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="px-2 py-1 rounded-md bg-muted/50 border border-border">SOC 2 in progress</span>
              <a href="#" className="px-2 py-1 rounded-md bg-muted/50 border border-border hover:text-foreground">Uptime SLO</a>
              <span className="px-2 py-1 rounded-md bg-muted/50 border border-border">EU/US data residency</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="https://buglens.io/docs" className="text-muted-foreground hover:text-foreground transition-colors">Docs</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">Company</h4>
            <ul className="space-y-3">
              <li><a href="https://buglens.io/about" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="https://buglens.io/security" className="text-muted-foreground hover:text-foreground transition-colors">Security</a></li>
              <li><a href="https://buglens.io/careers" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="https://buglens.io/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">Updates</h4>
            <p className="text-sm text-muted-foreground">Get product updates. No spam.</p>
            <form className="flex items-center gap-2">
              <input type="email" className="flex-1 h-10 rounded-md bg-background border px-3 text-sm" placeholder="you@company.com" aria-label="Email address" />
              <button className="h-10 px-4 rounded-md bg-primary text-primary-foreground text-sm">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <div>© {new Date().getFullYear()} BugLens. All rights reserved.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://buglens.io/privacy" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="https://buglens.io/terms" className="hover:text-foreground transition-colors">Terms</a>
            <a href="https://buglens.io/cookies" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

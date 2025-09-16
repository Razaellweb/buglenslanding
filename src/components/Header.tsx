
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X, CircleDot, DollarSign, Sun, Moon, BookOpenText, MessageSquareText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Switch } from '@/components/ui/switch';

const Header = () => {
  const [activePage, setActivePage] = useState('features');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
    }
  }, [isDarkMode]);
  
  const handleNavClick = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActivePage(page);
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const onCta = (source: string) => {
    window.dispatchEvent(new CustomEvent('cta_click', { detail: source }));
  };

  return (
    <div className="sticky top-0 z-50 pt-6 px-4">
      <header className="w-full max-w-7xl mx-auto py-3 px-6 md:px-8 flex items-center justify-between rounded-2xl bg-background/70 backdrop-blur-xl border border-border">
        <div className="p-1">
          <Logo />
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-3 rounded-2xl text-muted-foreground hover:text-foreground"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
          <div className="rounded-full px-1 py-1 backdrop-blur-md bg-background/80 border border-border shadow-lg">
            <ToggleGroup type="single" value={activePage} onValueChange={(value) => value && setActivePage(value)}>
              <ToggleGroupItem 
                value="features"
                className={cn(
                  'px-4 py-2 rounded-full transition-colors',
                  activePage === 'features' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={handleNavClick('features')}
              >
                <CircleDot size={16} className="inline-block mr-1.5" /> Features
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="pricing" 
                className={cn(
                  'px-4 py-2 rounded-full transition-colors',
                  activePage === 'pricing' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={handleNavClick('pricing')}
              >
                <DollarSign size={16} className="inline-block mr-1.5" /> Pricing
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="faq" 
                className={cn(
                  'px-4 py-2 rounded-full transition-colors',
                  activePage === 'faq' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={handleNavClick('faq')}
              >
                <MessageSquareText size={16} className="inline-block mr-1.5" /> FAQ
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="contact" 
                className={cn(
                  'px-4 py-2 rounded-full transition-colors',
                  activePage === 'contact' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={handleNavClick('contact')}
              >
                Contact
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </nav>
        
        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md py-4 px-6 border border-border rounded-2xl shadow-lg z-50">
            <div className="flex flex-col gap-3">
              <a href="#features" className={`px-3 py-2 text-sm rounded-md transition-colors ${activePage === 'features' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`} onClick={handleNavClick('features')}>Features</a>
              <a href="#pricing" className={`px-3 py-2 text-sm rounded-md transition-colors ${activePage === 'pricing' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`} onClick={handleNavClick('pricing')}>Pricing</a>
              <a href="#faq" className={`px-3 py-2 text-sm rounded-md transition-colors ${activePage === 'faq' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`} onClick={handleNavClick('faq')}>FAQ</a>
              <a href="#contact" className={`px-3 py-2 text-sm rounded-md transition-colors ${activePage === 'contact' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`} onClick={handleNavClick('contact')}>Contact</a>
              {/* Theme toggle for mobile */}
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm text-muted-foreground">Theme</span>
                <div className="flex items-center gap-2">
                  <Moon size={16} className={`${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
                  <Switch checked={!isDarkMode} onCheckedChange={toggleTheme} className="data-[state=checked]:bg-primary" />
                  <Sun size={16} className={`${!isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
              </div>
              <a
                href="https://buglens.io/docs"
                className="px-3 py-2 text-sm rounded-md text-muted-foreground hover:text-foreground hover:bg-muted flex items-center gap-2"
              >
                Docs
              </a>
              <a
                href="https://buglens.io/signup"
                onClick={() => onCta('header_mobile_start_trial')}
                className="px-3 py-2 text-sm rounded-md bg-primary text-primary-foreground text-center"
              >
                Start free trial
              </a>
            </div>
          </div>
        )}
        
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://buglens.io/docs"
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2"
          >
            Docs
          </a>
          {/* Theme toggle for desktop */}
          <div className="flex items-center gap-2 rounded-full px-3 py-2">
            <Moon size={18} className={`${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
            <Switch checked={!isDarkMode} onCheckedChange={toggleTheme} className="data-[state=checked]:bg-primary" />
            <Sun size={18} className={`${!isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
          </div>
          <div className="rounded-2xl">
            <Button onClick={() => onCta('header_start_trial')} asChild>
              <a href="https://buglens.io/signup" className="font-semibold">Start free trial</a>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

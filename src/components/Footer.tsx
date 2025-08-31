import { Copyright, ShieldUser, QrCode } from "lucide-react";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={`bg-background border-t border-border ${className}`}>
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left: Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">JL</span>
              </div>
              <span className="font-heading font-semibold text-lg">JusticeLink</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Bridging justice through technology, ensuring equal access to legal resources for all.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="grid grid-cols-2 gap-8 md:col-span-1">
            <div className="space-y-3">
              <h4 className="font-heading font-semibold text-sm text-foreground">Product</h4>
              <nav className="space-y-2">
                <a href="/" className="block text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">
                  Home
                </a>
                <a href="/incident-report" className="block text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">
                  Incident Report
                </a>
                <a href="/advocates" className="block text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">
                  Advocates
                </a>
                <a href="/judicial-dashboard" className="block text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">
                  Judicial Dashboard
                </a>
              </nav>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-heading font-semibold text-sm text-foreground">Resources</h4>
              <nav className="space-y-2">
                <a href="/features" className="block text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">
                  Features
                </a>
                <a href="/help" className="block text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">
                  Help Center
                </a>
                <a href="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">
                  Contact
                </a>
              </nav>
            </div>
          </div>

          {/* Right: Privacy/Security & Language */}
          <div className="space-y-4">
            <div className="space-y-3">
              <h4 className="font-heading font-semibold text-sm text-foreground">Security & Privacy</h4>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 px-3 py-2 bg-card rounded-md border border-border">
                  <ShieldUser className="w-4 h-4 text-accent" />
                  <span className="text-xs text-muted-foreground">End-to-End Encrypted</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Data retained for 90 days • <a href="/privacy" className="text-primary hover:text-primary/80 transition-colors">Privacy Policy</a>
              </p>
            </div>

            {/* Language Switcher Mirror */}
            <div className="space-y-2">
              <h4 className="font-heading font-semibold text-sm text-foreground">Language</h4>
              <div className="flex items-center space-x-2">
                <select className="text-xs bg-card border border-border rounded px-2 py-1 text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="en">English</option>
                  <option value="hi">हिन्दी</option>
                  <option value="bn">বাংলা</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Copyright className="w-3 h-3" />
                <span>2024 JusticeLink</span>
              </div>
              <span>•</span>
              <a href="/terms" className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">
                Terms
              </a>
              <span>•</span>
              <a href="/privacy" className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">
                Privacy
              </a>
            </div>

            <div className="text-xs text-muted-foreground text-center md:text-right">
              <p>Built for Hackathon 2024</p>
              <p className="mt-1">Team: Innovation & Justice</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
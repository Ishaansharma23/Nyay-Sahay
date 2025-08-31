"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Globe, Scale, User } from "lucide-react";

interface NavigationItem {
  label: string;
  href: string;
}

interface Language {
  code: string;
  label: string;
}

export default function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>({ code: "EN", label: "English" });
  const [isLoading, setIsLoading] = useState(true);
  const [activeItem, setActiveItem] = useState("Home");

  const navigationItems: NavigationItem[] = [
    { label: "Home", href: "/" },
    { label: "Problem", href: "/problem" },
    { label: "Solution", href: "/solution" },
    { label: "Features", href: "/features" },
    { label: "Incident Report", href: "/incident-report" },
    { label: "Judicial Dashboard", href: "/judicial-dashboard" },
    { label: "Advocates", href: "/advocates" },
  ];

  const languages: Language[] = [
    { code: "EN", label: "English" },
    { code: "HI", label: "हिंदी" },
    { code: "MR", label: "मराठी" },
    { code: "BN", label: "বাংলা" },
  ];

  useEffect(() => {
    // Simulate loading nav metadata
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Close mobile menu on escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsLanguageDropdownOpen(false);
        setIsAccountMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    // Close dropdowns when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      if (!target.closest("[data-language-dropdown]")) {
        setIsLanguageDropdownOpen(false);
      }
      if (!target.closest("[data-account-menu]")) {
        setIsAccountMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  const SkeletonPill = () => (
    <div className="h-9 w-20 bg-muted animate-pulse rounded-full" />
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Area - Logo & Brand */}
          <div className="flex items-center space-x-3">
            <Link 
              href="/" 
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg"
              aria-label="JusticeLink Home"
            >
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                <Scale className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight">JusticeLink</span>
                <span className="text-xs text-muted-foreground leading-tight">Legal Tech Platform</span>
              </div>
            </Link>
          </div>

          {/* Center Area - Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation">
            {isLoading ? (
              <div className="flex items-center space-x-2">
                {[...Array(7)].map((_, i) => (
                  <SkeletonPill key={i} />
                ))}
              </div>
            ) : (
              navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                    activeItem === item.label
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                  onClick={() => setActiveItem(item.label)}
                >
                  {item.label}
                </Link>
              ))
            )}
          </nav>

          {/* Right Area - Language, Badge, Account */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative" data-language-dropdown>
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-lg hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                aria-label="Select language"
                aria-expanded={isLanguageDropdownOpen}
                aria-haspopup="listbox"
              >
                <Globe className="w-4 h-4" />
                <span>{currentLanguage.code}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isLanguageDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-popover border border-border rounded-lg shadow-lg z-50 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2">
                  <div className="py-1" role="listbox">
                    {languages.length === 0 ? (
                      <div className="px-3 py-2 text-sm text-muted-foreground">No languages available</div>
                    ) : (
                      languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => handleLanguageChange(language)}
                          className={`w-full text-left px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none ${
                            currentLanguage.code === language.code ? "bg-accent text-accent-foreground" : "text-popover-foreground"
                          }`}
                          role="option"
                          aria-selected={currentLanguage.code === language.code}
                        >
                          <div className="flex justify-between items-center">
                            <span>{language.label}</span>
                            <span className="text-xs text-muted-foreground">{language.code}</span>
                          </div>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Team Badge */}
            <div className="hidden sm:flex items-center px-3 py-1 bg-accent/20 border border-accent/30 rounded-full">
              <span className="text-xs font-medium text-accent-foreground">Team Alpha</span>
            </div>

            {/* Account Menu */}
            <div className="relative" data-account-menu>
              <button
                onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium border border-border rounded-lg hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                aria-label="Account menu"
                aria-expanded={isAccountMenuOpen}
                aria-haspopup="menu"
              >
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <User className="w-3 h-3 text-primary-foreground" />
                </div>
                <span className="hidden sm:inline text-foreground">TeamName</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isAccountMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {isAccountMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-lg z-50 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2">
                  <div className="py-1" role="menu">
                    <Link
                      href="/profile"
                      className="block px-3 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                      role="menuitem"
                    >
                      Profile
                    </Link>
                    <Link
                      href="/settings"
                      className="block px-3 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                      role="menuitem"
                    >
                      Settings
                    </Link>
                    <hr className="my-1 border-border" />
                    <button
                      className="w-full text-left px-3 py-2 text-sm text-destructive hover:bg-destructive/10 focus:bg-destructive/10 focus:outline-none"
                      role="menuitem"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-in slide-in-from-top-2 fade-in-20">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-2" aria-label="Mobile navigation">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                    activeItem === item.label
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                  onClick={() => {
                    setActiveItem(item.label);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Quick Actions */}
              <hr className="my-2 border-border" />
              <Link
                href="/incident-report"
                className="px-4 py-3 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Quick Report Incident
              </Link>
              <button
                className="px-4 py-3 border border-border rounded-lg text-sm font-medium hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Open Chatbot
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
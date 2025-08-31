"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe, MessageCircle, ChevronDown, Scale, Shield, Users, FileText, Calendar, Gavel, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

interface SharedLayoutProps {
  children: React.ReactNode;
}

const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [language, setLanguage] = useState('EN');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const navigationItems = [
    { name: 'Home', href: '/', icon: Scale },
    { name: 'Problem', href: '/problem', icon: AlertCircle },
    { name: 'Solution', href: '/solution', icon: Shield },
    { name: 'Features', href: '/features', icon: FileText },
    { name: 'Report Incident', href: '/report', icon: AlertCircle },
    { name: 'Judicial Dashboard', href: '/dashboard', icon: Calendar },
    { name: 'Advocates', href: '/advocates', icon: Users },
  ];

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'HI', name: 'हिंदी' },
    { code: 'BN', name: 'বাংলা' },
    { code: 'TA', name: 'தமிழ்' },
    { code: 'TE', name: 'తెలుగు' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-black/10 dark:border-white/10'
          : 'bg-white dark:bg-black'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-black dark:bg-white rounded-lg transition-colors duration-200">
              <Scale className="w-6 h-6 text-white dark:text-black" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold text-black dark:text-white tracking-tight">
                JusticeLink
              </span>
              <span className="text-xs text-black/60 dark:text-white/60 font-medium">
                Legal Tech Platform
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black"
                  aria-label={`Navigate to ${item.name}`}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center space-x-2 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                  aria-label="Select language"
                >
                  <Globe className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm font-medium">{language}</span>
                  <ChevronDown className="w-3 h-3" aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white dark:bg-black border-black/10 dark:border-white/10">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 focus:bg-black/5 dark:focus:bg-white/5"
                  >
                    {lang.name} ({lang.code})
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" aria-hidden="true" />
              ) : (
                <Sun className="w-4 h-4" aria-hidden="true" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-black dark:text-white"
                  aria-label="Open mobile menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Menu className="w-6 h-6" aria-hidden="true" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white dark:bg-black border-black/10 dark:border-white/10 w-80">
                <SheetHeader>
                  <SheetTitle className="text-black dark:text-white text-left">Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-2 mt-6" role="navigation" aria-label="Mobile navigation">
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center space-x-3 px-4 py-3 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black"
                        aria-label={`Navigate to ${item.name}`}
                      >
                        <Icon className="w-5 h-5" aria-hidden="true" />
                        <span className="font-medium">{item.name}</span>
                      </a>
                    );
                  })}
                  
                  <div className="pt-4 mt-4 border-t border-black/10 dark:border-white/10">
                    <div className="flex items-center justify-between px-4 py-2">
                      <span className="text-sm font-medium text-black dark:text-white">Theme</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={toggleTheme}
                        className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
                        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
                      >
                        {theme === 'light' ? (
                          <Moon className="w-4 h-4" aria-hidden="true" />
                        ) : (
                          <Sun className="w-4 h-4" aria-hidden="true" />
                        )}
                      </Button>
                    </div>
                    
                    <div className="px-4 py-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className="w-full justify-between text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5"
                            aria-label="Select language"
                          >
                            <div className="flex items-center space-x-2">
                              <Globe className="w-4 h-4" aria-hidden="true" />
                              <span>Language: {language}</span>
                            </div>
                            <ChevronDown className="w-4 h-4" aria-hidden="true" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-white dark:bg-black border-black/10 dark:border-white/10">
                          {languages.map((lang) => (
                            <DropdownMenuItem
                              key={lang.code}
                              onClick={() => setLanguage(lang.code)}
                              className="text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5"
                            >
                              {lang.name} ({lang.code})
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

const LegalChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm here to help you with legal guidance and platform navigation. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickActions = [
    { label: 'Report Incident', action: 'report' },
    { label: 'Find Advocate', action: 'advocate' },
    { label: 'Track Case', action: 'track' },
    { label: 'Legal Rights', action: 'rights' }
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user' as const,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "I understand your concern. Let me help you with that. For specific legal advice, I recommend consulting with one of our verified advocates through the platform.",
        sender: 'bot' as const,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickAction = (action: string) => {
    const actionMessages = {
      report: "I'll help you report an incident. Click the 'Report Incident' button in the navigation to start the secure reporting process.",
      advocate: "Let me connect you with qualified advocates. You can browse our verified advocate directory and book consultations.",
      track: "You can track your case status through the Judicial Dashboard. I'll guide you through accessing your case information.",
      rights: "I can provide information about your legal rights. What specific area of law are you interested in learning about?"
    };

    const message = actionMessages[action as keyof typeof actionMessages] || "How can I help you with that?";
    
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      text: message,
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
  };

  return (
    <>
      {/* Desktop Chatbot */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 w-96 h-96 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center">
                  <Scale className="w-4 h-4 text-white dark:text-black" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-black dark:text-white text-sm">Legal Assistant</h3>
                  <p className="text-xs text-black/60 dark:text-white/60">Always here to help</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto h-60">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      message.sender === 'user'
                        ? 'bg-black dark:bg-white text-white dark:text-black'
                        : 'bg-black/5 dark:bg-white/5 text-black dark:text-white border border-black/10 dark:border-white/10'
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' 
                        ? 'text-white/70 dark:text-black/70' 
                        : 'text-black/50 dark:text-white/50'
                    }`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-black/60 dark:bg-white/60 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-black/60 dark:bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-black/60 dark:bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-2 border-t border-black/10 dark:border-white/10">
              <div className="flex flex-wrap gap-1">
                {quickActions.map((action) => (
                  <Button
                    key={action.action}
                    variant="ghost"
                    size="sm"
                    onClick={() => handleQuickAction(action.action)}
                    className="text-xs text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 h-6 px-2"
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-black/10 dark:border-white/10">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-3 py-2 text-sm bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black"
                  aria-label="Type your message"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80"
                  aria-label="Send message"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Chat Toggle Button */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 shadow-2xl transition-all duration-300 hover:scale-110"
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {isOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <MessageCircle className="w-6 h-6" aria-hidden="true" />
          )}
        </Button>
      </div>

      {/* Mobile Chatbot */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        {isOpen && (
          <div className="h-96 bg-white dark:bg-black border-t border-black/10 dark:border-white/10 animate-in slide-in-from-bottom-4 duration-300">
            {/* Same chat content as desktop but full width */}
            <div className="flex items-center justify-between p-4 border-b border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center">
                  <Scale className="w-4 h-4 text-white dark:text-black" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-black dark:text-white text-sm">Legal Assistant</h3>
                  <p className="text-xs text-black/60 dark:text-white/60">Always here to help</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>

            <div className="flex-1 p-4 space-y-3 overflow-y-auto h-48">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      message.sender === 'user'
                        ? 'bg-black dark:bg-white text-white dark:text-black'
                        : 'bg-black/5 dark:bg-white/5 text-black dark:text-white border border-black/10 dark:border-white/10'
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' 
                        ? 'text-white/70 dark:text-black/70' 
                        : 'text-black/50 dark:text-white/50'
                    }`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-black/60 dark:bg-white/60 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-black/60 dark:bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-black/60 dark:bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="px-4 pb-2 border-t border-black/10 dark:border-white/10">
              <div className="flex flex-wrap gap-1 mb-2">
                {quickActions.map((action) => (
                  <Button
                    key={action.action}
                    variant="ghost"
                    size="sm"
                    onClick={() => handleQuickAction(action.action)}
                    className="text-xs text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 h-6 px-2"
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-3 py-2 text-sm bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                  aria-label="Type your message"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80"
                  aria-label="Send message"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Chat Toggle Bar */}
        {!isOpen && (
          <div className="bg-white dark:bg-black border-t border-black/10 dark:border-white/10 p-4">
            <Button
              onClick={() => setIsOpen(true)}
              className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 flex items-center justify-center space-x-2"
              aria-label="Open chat"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              <span>Chat with Legal Assistant</span>
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: 'Report Incident', href: '/report' },
      { name: 'Find Advocates', href: '/advocates' },
      { name: 'Track Cases', href: '/dashboard' },
      { name: 'Legal Resources', href: '/resources' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Emergency Contacts', href: '/emergency' },
      { name: 'Technical Support', href: '/support' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Data Security', href: '/security' },
      { name: 'Compliance', href: '/compliance' }
    ]
  };

  return (
    <footer className="bg-white dark:bg-black border-t border-black/10 dark:border-white/10 mt-auto" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-black dark:bg-white rounded-lg">
                <Scale className="w-6 h-6 text-white dark:text-black" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-black dark:text-white">JusticeLink</h3>
                <p className="text-sm text-black/60 dark:text-white/60">Legal Tech Platform</p>
              </div>
            </div>
            <p className="text-sm text-black/70 dark:text-white/70 mb-4">
              Empowering justice through technology. Secure, accessible, and transparent legal solutions for everyone.
            </p>
            
            {/* Security Badges */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1 px-2 py-1 bg-black/5 dark:bg-white/5 rounded border border-black/10 dark:border-white/10">
                <Shield className="w-3 h-3 text-black dark:text-white" aria-hidden="true" />
                <span className="text-xs font-medium text-black dark:text-white">SSL Secured</span>
              </div>
              <div className="flex items-center space-x-1 px-2 py-1 bg-black/5 dark:bg-white/5 rounded border border-black/10 dark:border-white/10">
                <Gavel className="w-3 h-3 text-black dark:text-white" aria-hidden="true" />
                <span className="text-xs font-medium text-black dark:text-white">Legal Compliant</span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-sm font-semibold text-black dark:text-white mb-4 uppercase tracking-wider">Platform</h4>
            <nav className="space-y-3" role="navigation" aria-label="Platform links">
              {footerLinks.platform.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black rounded"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-sm font-semibold text-black dark:text-white mb-4 uppercase tracking-wider">Support</h4>
            <nav className="space-y-3" role="navigation" aria-label="Support links">
              {footerLinks.support.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black rounded"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="text-sm font-semibold text-black dark:text-white mb-4 uppercase tracking-wider">Legal & Contact</h4>
            <nav className="space-y-3 mb-6" role="navigation" aria-label="Legal links">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black rounded"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            <div className="space-y-2">
              <p className="text-sm text-black/70 dark:text-white/70">
                <strong>24/7 Helpline:</strong><br />
                <a href="tel:+911234567890" className="text-black dark:text-white hover:underline">+91 123 456 7890</a>
              </p>
              <p className="text-sm text-black/70 dark:text-white/70">
                <strong>Email:</strong><br />
                <a href="mailto:help@justicelink.in" className="text-black dark:text-white hover:underline">help@justicelink.in</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-black/10 dark:border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-black/60 dark:text-white/60">
              © {currentYear} JusticeLink. All rights reserved. Built for legal empowerment.
            </div>
            
            {/* Hackathon Credit */}
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2 px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full border border-black/10 dark:border-white/10">
                <div className="w-2 h-2 bg-black dark:bg-white rounded-full animate-pulse"></div>
                <span className="text-black/70 dark:text-white/70">Built for Justice Hackathon 2024</span>
              </div>
              <div className="text-black/50 dark:text-white/50">
                Team: <span className="text-black dark:text-white font-medium">LegalTech Innovators</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const SharedLayout: React.FC<SharedLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white">
      <SiteHeader />
      
      <main 
        className="flex-1 pt-16 lg:pt-20" 
        role="main" 
        id="main-content"
        aria-label="Main content"
      >
        {children}
      </main>
      
      <Footer />
      <LegalChatbot />
    </div>
  );
};
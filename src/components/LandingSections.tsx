"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  ArrowRight, 
  ChevronUp, 
  SquareChevronRight, 
  Section,
  PanelsTopLeft,
  LayoutPanelLeft,
  LayoutPanelTop,
  PanelBottom
} from "lucide-react";

interface FeatureTile {
  id: string;
  title: string;
  description: string;
  highlights: string[];
}

export default function LandingSections() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showDemo, setShowDemo] = useState(false);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenChatbot = () => {
    window.dispatchEvent(new CustomEvent('openChatbot'));
  };

  const scrollToSolution = () => {
    const solutionSection = document.getElementById('solution-overview');
    solutionSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewDemo = () => {
    setShowDemo(true);
    setTimeout(() => setShowDemo(false), 5000);
  };

  const features: FeatureTile[] = [
    {
      id: 'ai-guidance',
      title: 'AI Legal Guidance',
      description: 'Intelligent legal assistance powered by advanced AI',
      highlights: ['24/7 legal consultation', 'Multi-language support', 'Case precedent analysis']
    },
    {
      id: 'secure-reporting',
      title: 'Secure Evidence Reporting',
      description: 'End-to-end encrypted evidence submission',
      highlights: ['Blockchain verification', 'Anonymous reporting options', 'Tamper-proof storage']
    },
    {
      id: 'case-tracking',
      title: 'End-to-End Case Tracking',
      description: 'Real-time case status and progress monitoring',
      highlights: ['Live status updates', 'Hearing notifications', 'Document management']
    },
    {
      id: 'advocate-marketplace',
      title: 'Advocate Marketplace',
      description: 'Connect with verified legal professionals',
      highlights: ['Verified advocate profiles', 'Rating & review system', 'Secure communication']
    },
    {
      id: 'multilingual',
      title: 'Multilingual Support',
      description: 'Accessible in multiple regional languages',
      highlights: ['10+ Indian languages', 'Voice input support', 'Cultural context awareness']
    },
    {
      id: 'privacy-first',
      title: 'Cybersecurity & Privacy First',
      description: 'Industry-leading security and privacy protection',
      highlights: ['End-to-end encryption', 'Zero-knowledge architecture', 'GDPR compliant']
    }
  ];

  return (
    <div className="w-full space-y-0">
      {/* Hero Section */}
      <HeroSection onOpenChatbot={handleOpenChatbot} />
      
      {/* Problem Overview */}
      <ProblemSection isLoading={isLoading} onScrollToSolution={scrollToSolution} />
      
      {/* Solution Overview */}
      <SolutionSection />
      
      {/* Key Features */}
      <FeaturesSection 
        features={features}
        expandedFeature={expandedFeature}
        onToggleFeature={setExpandedFeature}
        showDemo={showDemo}
        onViewDemo={handleViewDemo}
      />
    </div>
  );
}

function HeroSection({ onOpenChatbot }: { onOpenChatbot: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex flex-col justify-center items-center px-4 py-16 bg-gradient-to-b from-background to-card"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
            JusticeLink: Bridging Citizens with{" "}
            <span className="text-primary">Justice</span> Through{" "}
            <span className="text-accent">AI & Technology</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Empowering Citizens. Enabling Justice.
          </p>
        </div>

        {/* Supporting Statement */}
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-foreground/80 leading-relaxed">
            A comprehensive platform democratizing access to justice through AI-powered legal assistance, 
            secure incident reporting, and transparent case tracking.
          </p>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button 
            size="lg" 
            className="px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          >
            Report an Incident
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={onOpenChatbot}
            className="px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          >
            Open Chatbot
            <SquareChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Partner Strip */}
        <div className="pt-12 border-t border-border/50">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="font-medium">
                Hackathon 2024
              </Badge>
              <span>•</span>
              <span className="font-medium">Team JusticeLink</span>
            </div>
            <div className="flex items-center gap-3">
              <span>•</span>
              <span>Powered by AI & Blockchain</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function ProblemSection({ isLoading, onScrollToSolution }: { 
  isLoading: boolean; 
  onScrollToSolution: () => void; 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    {
      icon: Section,
      title: "Corruption & Misuse of Authority",
      description: "Power abuse undermines public trust in institutions",
      statistic: "68% of citizens report experiencing corruption in legal processes"
    },
    {
      icon: LayoutPanelLeft,
      title: "Lack of Legal Awareness",
      description: "Citizens unaware of their rights and legal procedures",
      statistic: "Only 23% understand basic legal processes and rights"
    },
    {
      icon: PanelsTopLeft,
      title: "Access Gap in Legal Aid",
      description: "Limited availability of affordable legal assistance",
      statistic: "Rural areas have 1 lawyer per 10,000 citizens"
    },
    {
      icon: LayoutPanelTop,
      title: "Limited Judicial Transparency",
      description: "Opaque processes create barriers to justice",
      statistic: "Average case takes 5+ years with minimal visibility"
    }
  ];

  if (isLoading) {
    return (
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-8 w-8 mb-2" />
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-8 w-24" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 px-4 bg-card/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            The Justice Gap We're Closing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Critical challenges in India's justice system that demand immediate technological intervention
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader>
                  <problem.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{problem.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {problem.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm font-medium text-accent">
                    {problem.statistic}
                  </p>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={onScrollToSolution}
                    className="w-full group-hover:bg-primary/10 transition-colors"
                  >
                    Explore Fix
                    <ChevronUp className="ml-2 h-4 w-4 rotate-180" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pillars = [
    {
      title: "Incident Reporting Portal",
      description: "Secure, anonymous reporting with blockchain verification",
      route: "/incident-report"
    },
    {
      title: "Legal Chatbot",
      description: "AI-powered 24/7 legal guidance and case assistance",
      action: "chatbot"
    },
    {
      title: "Advocate Connect",
      description: "Verified lawyer marketplace with transparent ratings",
      route: "/advocates"
    },
    {
      title: "Judicial Dashboard",
      description: "Real-time case tracking and court proceedings visibility",
      route: "/judicial-dashboard"
    }
  ];

  const workflowSteps = [
    { icon: Section, title: "Report", description: "Submit incident securely" },
    { icon: LayoutPanelLeft, title: "Connect", description: "Match with advocates" },
    { icon: PanelBottom, title: "Track", description: "Monitor case progress" }
  ];

  return (
    <motion.section 
      ref={ref}
      id="solution-overview"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Our Comprehensive Solution
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four integrated pillars working together to democratize access to justice
          </p>
        </div>

        {/* Solution Pillars */}
        <Card className="mb-12 bg-gradient-to-r from-card to-card/50">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Section className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-2">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{pillar.description}</p>
                    <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* How It Works */}
        <div className="text-center">
          <h3 className="text-xl font-heading font-semibold mb-8">How It Works</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center space-y-3 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <step.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold">{step.title}</h4>
                  <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    {step.description}
                  </p>
                </div>
                {index < workflowSteps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute translate-x-16 h-4 w-4 text-muted-foreground" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function FeaturesSection({ 
  features, 
  expandedFeature, 
  onToggleFeature, 
  showDemo, 
  onViewDemo 
}: {
  features: FeatureTile[];
  expandedFeature: string | null;
  onToggleFeature: (id: string | null) => void;
  showDemo: boolean;
  onViewDemo: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 px-4 bg-card/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Key Features & Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced features designed to transform the justice experience for every citizen
          </p>
        </div>

        {/* Demo Banner */}
        {showDemo && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-8 p-6 bg-primary/10 border border-primary/20 rounded-lg text-center"
          >
            <h3 className="font-semibold text-primary mb-2">Demo Simulation Active</h3>
            <p className="text-sm text-muted-foreground">
              Simulating incident filing: "Corruption complaint filed → Evidence uploaded → Advocate matched → Case tracking initiated"
            </p>
          </motion.div>
        )}

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedFeature === feature.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => onToggleFeature(expandedFeature === feature.id ? null : feature.id)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <ChevronUp 
                      className={`h-5 w-5 transition-transform ${
                        expandedFeature === feature.id ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                
                {expandedFeature === feature.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent className="pt-0">
                      <ul className="space-y-2">
                        {feature.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 transition-all duration-300 hover:scale-105"
          >
            Download Deck
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg"
            onClick={onViewDemo}
            disabled={showDemo}
            className="px-8 transition-all duration-300 hover:scale-105"
          >
            {showDemo ? 'Demo Running...' : 'View Demo'}
            <SquareChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
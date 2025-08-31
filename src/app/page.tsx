"use client";

import { SharedLayout } from '@/components/SharedLayout';
import { ArrowRight, Shield, MessageSquare, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const features = [
    {
      icon: MessageSquare,
      title: "AI Legal Chatbot", 
      description: "Instant legal guidance powered by AI"
    },
    {
      icon: Shield,
      title: "Secure Incident Reporting",
      description: "Report with encrypted video evidence"
    },
    {
      icon: Users,
      title: "Verified Advocates",
      description: "Connect with qualified legal professionals"
    },
    {
      icon: Calendar,
      title: "Case Tracking",
      description: "Monitor your legal cases in real-time"
    }
  ];

  return (
    <SharedLayout>
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-black">
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full px-4 py-1 mb-6">
              <div className="w-2 h-2 bg-black dark:bg-white rounded-full"></div>
              <span className="text-sm text-black/70 dark:text-white/70">
                Justice Hackathon 2024
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-black dark:text-white mb-4">
              Bridging Citizens with{' '}
              <span className="relative">
                Justice
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-black dark:bg-white"></div>
              </span>
            </h1>

            <p className="text-xl text-black/70 dark:text-white/70 mb-2">
              Through AI & Technology
            </p>

            <p className="text-lg text-black/60 dark:text-white/60 mb-8 max-w-2xl mx-auto">
              AI-powered legal platform for incident reporting, guidance, and case tracking.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg"
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 px-6 py-3"
                onClick={() => window.location.href = '/report'}
              >
                Report Incident
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-black dark:border-white text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 px-6 py-3"
                onClick={() => window.location.href = '/advocates'}
              >
                Find Advocates
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Simplified */}
      <section className="py-16 bg-black/5 dark:bg-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-6"
                >
                  <div className="w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white dark:text-black" />
                  </div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-black/60 dark:text-white/60 text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-16 bg-black dark:bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-white dark:text-black mb-4">
            Ready to Access Justice?
          </h2>
          <p className="text-white/80 dark:text-black/80 mb-6 max-w-xl mx-auto">
            Join thousands using JusticeLink to protect their rights.
          </p>
          
          <Button 
            size="lg"
            className="bg-white dark:bg-black text-black dark:text-white hover:bg-white/90 dark:hover:bg-black/90 px-6 py-3"
            onClick={() => window.location.href = '/dashboard'}
          >
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </SharedLayout>
  );
}
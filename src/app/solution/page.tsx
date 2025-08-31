"use client";

import { SharedLayout } from '@/components/SharedLayout';
import { MessageSquare, Shield, Users, Calendar, Globe, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SolutionPage() {
  const solutions = [
    {
      icon: Shield,
      title: "Incident Reporting Portal", 
      description: "Upload video evidence with auto-forwarding to authorities"
    },
    {
      icon: MessageSquare,
      title: "Legal Chatbot",
      description: "AI-powered assistant for instant legal guidance"
    },
    {
      icon: Users,
      title: "Advocate Connect",
      description: "Directory of verified lawyers for consultation"
    },
    {
      icon: Calendar,
      title: "Judicial Dashboard",
      description: "Real-time case tracking and hearing updates"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Access in Hindi, English, Bengali, Tamil, and more"
    },
    {
      icon: Zap,
      title: "Quick Resolution",
      description: "Automated routing to relevant authorities"
    }
  ];

  return (
    <SharedLayout>
      <div className="min-h-screen bg-white dark:bg-black py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-heading font-bold text-black dark:text-white mb-4">
              The Solution
            </h1>
            <p className="text-lg text-black/60 dark:text-white/60 max-w-2xl mx-auto">
             न्याय Sahay: A comprehensive AI-powered legal-tech platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card key={index} className="border-black/10 dark:border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white dark:text-black" />
                      </div>
                      <span className="text-lg">{solution.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black/60 dark:text-white/60">
                      {solution.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </SharedLayout>
  );
}
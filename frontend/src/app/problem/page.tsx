"use client";

import { SharedLayout } from '@/components/SharedLayout';
import { AlertTriangle, Users, Scale, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProblemPage() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Corruption & Misconduct", 
      description: "Citizens face misconduct but lack proper redressal mechanisms"
    },
    {
      icon: Scale,
      title: "Legal Rights Awareness",
      description: "Most citizens don't know their constitutional rights"
    },
    {
      icon: Users,
      title: "Access to Legal Aid",
      description: "Finding and affording advocates remains challenging"
    },
    {
      icon: Clock,
      title: "Limited Transparency",
      description: "Tracking cases and hearings is complex and opaque"
    }
  ];

  return (
    <SharedLayout>
      <div className="min-h-screen bg-white dark:bg-black py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-heading font-bold text-black dark:text-white mb-4">
              The Problem
            </h1>
            <p className="text-lg text-black/60 dark:text-white/60 max-w-2xl mx-auto">
              Citizens struggle with awareness, accessibility, and accountability in the legal ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <Card key={index} className="border-black/10 dark:border-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white dark:text-black" />
                      </div>
                      {problem.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black/60 dark:text-white/60">
                      {problem.description}
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
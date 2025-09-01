"use client";

import { SharedLayout } from '@/components/SharedLayout';
import { Zap, Shield, Globe, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FeaturesPage() {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Guidance", 
      description: "Interactive chatbot for simplified legal knowledge"
    },
    {
      icon: Shield,
      title: "Secure Evidence Upload",
      description: "Video submission with encryption and tracking"
    },
    {
      icon: Globe,
      title: "Multilingual Access",
      description: "Available in 8+ Indian languages"
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "End-to-end encryption and role-based access"
    }
  ];

  return (
    <SharedLayout>
      <div className="min-h-screen bg-white dark:bg-black py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-heading font-bold text-black dark:text-white mb-4">
              Key Features
            </h1>
            <p className="text-lg text-black/60 dark:text-white/60 max-w-2xl mx-auto">
              Everything you need for legal transparency and justice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-black/10 dark:border-white/10 p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white dark:text-black" />
                      </div>
                      <span className="text-xl">{feature.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black/60 dark:text-white/60 text-lg leading-relaxed">
                      {feature.description}
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
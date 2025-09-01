"use client";

import { SharedLayout } from '@/components/SharedLayout';
import { FileText, Clock, Calendar, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  const cases = [
    {
      id: "JL-2024-001",
      title: "Public Corruption Report", 
      status: "Under Review",
      date: "2024-01-15",
      progress: 60
    },
    {
      id: "JL-2024-002",
      title: "Traffic Violation Case",
      status: "Resolved", 
      date: "2024-01-10",
      progress: 100
    }
  ];

  const hearings = [
    {
      case: "Civil Case #123",
      date: "2024-02-15",
      time: "10:30 AM",
      court: "District Court"
    },
    {
      case: "FIR #456",
      date: "2024-02-20", 
      time: "2:00 PM",
      court: "Sessions Court"
    }
  ];

  return (
    <SharedLayout>
      <div className="min-h-screen bg-white dark:bg-black py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold text-black dark:text-white mb-4">
              Dashboard
            </h1>
            <p className="text-lg text-black/60 dark:text-white/60">
              Track your cases and upcoming hearings
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Active Cases */}
            <Card className="border-black/10 dark:border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Your Cases
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cases.map((case_item) => (
                  <div key={case_item.id} className="p-4 border border-black/10 dark:border-white/10 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-black dark:text-white">
                        {case_item.title}
                      </h3>
                      <Badge variant={case_item.status === 'Resolved' ? 'default' : 'secondary'}>
                        {case_item.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-black/60 dark:text-white/60 mb-2">
                      Case ID: {case_item.id}
                    </p>
                    <p className="text-sm text-black/60 dark:text-white/60">
                      Filed: {case_item.date}
                    </p>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full border-black/20 dark:border-white/20">
                  View All Cases
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Hearings */}
            <Card className="border-black/10 dark:border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Hearings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {hearings.map((hearing, index) => (
                  <div key={index} className="p-4 border border-black/10 dark:border-white/10 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-black dark:text-white">
                        {hearing.case}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-black/60 dark:text-white/60">
                        <Clock className="h-4 w-4" />
                        {hearing.time}
                      </div>
                    </div>
                    <p className="text-sm text-black/60 dark:text-white/60 mb-1">
                      {hearing.date} • {hearing.court}
                    </p>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full border-black/20 dark:border-white/20">
                  View Calendar
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80"
                onClick={() => window.location.href = '/report'}
              >
                <FileText className="h-4 w-4 mr-2" />
                New Report
              </Button>
              <Button 
                variant="outline"
                className="border-black dark:border-white text-black dark:text-white"
                onClick={() => window.location.href = '/advocates'}
              >
                Find Advocate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SharedLayout>
  );
}
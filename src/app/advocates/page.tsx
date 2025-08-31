"use client";

import { SharedLayout } from '@/components/SharedLayout';
import { Search, Star, MessageCircle, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState } from 'react';

export default function AdvocatesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const advocates = [
    {
      id: 1,
      name: "Advocate Ishaan Sharma",
      specialization: "Criminal Law",
      experience: "15 years",
      rating: 4.9,
      location: "Mumbai",
      fee: "₹5,000",
      verified: true
    },
    {
      id: 2,
      name: "Advocate Vikash Chor", 
      specialization: "Civil Rights",
      experience: "12 years",
      rating: 4.8,
      location: "Delhi",
      fee: "₹4,500",
      verified: true
    },
    {
      id: 3,
      name: "Advocate Lalit Singh",
      specialization: "Corporate Law", 
      experience: "18 years",
      rating: 4.7,
      location: "Bangalore",
      fee: "₹6,000",
      verified: true
    },
    {
      id: 4,
      name: "Advocate Harsh Yadav JI",
      specialization: "Family Law",
      experience: "10 years", 
      rating: 4.6,
      location: "Chennai",
      fee: "₹3,500",
      verified: true
    }
  ];

  const filteredAdvocates = advocates.filter(advocate =>
    advocate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    advocate.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SharedLayout>
      <div className="min-h-screen bg-white dark:bg-black py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold text-black dark:text-white mb-4">
              Find Advocates
            </h1>
            <p className="text-lg text-black/60 dark:text-white/60">
              Connect with verified legal professionals
            </p>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black/40 dark:text-white/40" />
              <Input
                placeholder="Search by name or specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-black/20 dark:border-white/20"
              />
            </div>
          </div>

          {/* Advocates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredAdvocates.map((advocate) => (
              <Card key={advocate.id} className="border-black/10 dark:border-white/10">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={`/placeholder-avatar-${advocate.id}.jpg`} />
                      <AvatarFallback className="bg-black/10 dark:bg-white/10">
                        {advocate.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-black dark:text-white">
                          {advocate.name}
                        </h3>
                        {advocate.verified && (
                          <Badge variant="secondary" className="text-xs">
                            Verified
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-black/60 dark:text-white/60 mb-2">
                        {advocate.specialization}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-black/60 dark:text-white/60">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-current text-yellow-500" />
                          <span>{advocate.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{advocate.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-black/60 dark:text-white/60">
                        {advocate.experience} experience
                      </p>
                      <p className="font-semibold text-black dark:text-white">
                        {advocate.fee} consultation
                      </p>
                    </div>
                    
                    <Button 
                      className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80"
                      size="sm"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Consult
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredAdvocates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-black/60 dark:text-white/60">
                No advocates found matching your search.
              </p>
            </div>
          )}
        </div>
      </div>
    </SharedLayout>
  );
}
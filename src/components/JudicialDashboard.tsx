"use client";

import React, { useState, useCallback, useEffect } from 'react';
import { Calendar, CalendarSearch, FileClock, Grid2x2Check, PanelRight, Forward, LayoutDashboard } from 'lucide-react';
import { toast } from 'sonner';

interface Case {
  id: string;
  caseNumber: string;
  parties: string;
  nextHearing: string;
  status: 'Pending' | 'Active' | 'Disposed' | 'Adjourned';
  court: string;
  type: string;
  registeredDate: string;
  isTracked?: boolean;
}

interface FIRData {
  firNumber: string;
  status: 'Registered' | 'Under Investigation' | 'Charge Sheet Filed' | 'Closed';
  investigatingOfficer: string;
  registrationDate: string;
  lastUpdate: string;
}

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  status: 'completed' | 'pending' | 'upcoming';
  expandable?: boolean;
  notes?: string;
}

const mockCases: Case[] = [
  {
    id: '1',
    caseNumber: 'CRL/2024/001234',
    parties: 'State vs. Rajesh Kumar',
    nextHearing: '2024-12-15',
    status: 'Active',
    court: 'District Court Delhi',
    type: 'Criminal',
    registeredDate: '2024-01-15'
  },
  {
    id: '2',
    caseNumber: 'CIV/2024/005678',
    parties: 'Priya Sharma vs. Housing Society',
    nextHearing: '2024-12-20',
    status: 'Pending',
    court: 'High Court Mumbai',
    type: 'Civil',
    registeredDate: '2024-03-10'
  },
  {
    id: '3',
    caseNumber: 'FAM/2024/009876',
    parties: 'Anita vs. Suresh',
    nextHearing: '2024-12-18',
    status: 'Adjourned',
    court: 'Family Court Bangalore',
    type: 'Family',
    registeredDate: '2024-02-28'
  }
];

const mockFIRData: FIRData = {
  firNumber: 'FIR/2024/001234',
  status: 'Under Investigation',
  investigatingOfficer: 'Inspector Ramesh Singh',
  registrationDate: '2024-11-01',
  lastUpdate: '2024-12-10'
};

const mockTimelineEvents: TimelineEvent[] = [
  {
    id: '1',
    date: '2024-01-15',
    title: 'FIR Filed',
    description: 'First Information Report registered',
    status: 'completed',
    expandable: true,
    notes: 'FIR filed at local police station. Case assigned to investigating officer.'
  },
  {
    id: '2',
    date: '2024-03-20',
    title: 'Charge Sheet Filed',
    description: 'Investigation completed, charges filed',
    status: 'completed',
    expandable: true,
    notes: 'Charge sheet submitted to magistrate court after thorough investigation.'
  },
  {
    id: '3',
    date: '2024-05-10',
    title: 'Pre-trial Conference',
    description: 'Initial court appearance scheduled',
    status: 'completed'
  },
  {
    id: '4',
    date: '2024-12-15',
    title: 'Next Hearing Scheduled',
    description: 'Arguments and evidence presentation',
    status: 'upcoming',
    expandable: true,
    notes: 'Both parties required to present evidence and witnesses.'
  }
];

export default function JudicialDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    court: '',
    caseType: '',
    dateRange: ''
  });
  const [cases, setCases] = useState<Case[]>(mockCases);
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);
  const [showCaseDetail, setShowCaseDetail] = useState(false);
  const [trackedCases, setTrackedCases] = useState<Case[]>([]);
  const [showAddCaseModal, setShowAddCaseModal] = useState(false);
  const [firNumber, setFirNumber] = useState('');
  const [firData, setFirData] = useState<FIRData | null>(null);
  const [loading, setLoading] = useState(false);
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>(mockTimelineEvents);
  const [expandedEvents, setExpandedEvents] = useState<Set<string>>(new Set());
  const [viewMode, setViewMode] = useState<'public' | 'internal'>('public');
  const [userRole, setUserRole] = useState<'citizen' | 'official'>('citizen');

  const handleSearch = useCallback(async () => {
    if (!searchQuery.trim()) return;
    
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const filteredCases = mockCases.filter(c => 
      c.caseNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.parties.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setCases(filteredCases);
    setLoading(false);
    
    if (filteredCases.length === 0) {
      toast.info('No cases found matching your search criteria');
    }
  }, [searchQuery]);

  const handleCaseClick = useCallback((caseItem: Case) => {
    setSelectedCase(caseItem);
    setShowCaseDetail(true);
  }, []);

  const handleTrackCase = useCallback((caseItem: Case) => {
    const isAlreadyTracked = trackedCases.some(c => c.id === caseItem.id);
    
    if (isAlreadyTracked) {
      setTrackedCases(prev => prev.filter(c => c.id !== caseItem.id));
      toast.success('Case removed from tracking');
    } else {
      setTrackedCases(prev => [...prev, { ...caseItem, isTracked: true }]);
      toast.success('Case added to tracking');
    }
  }, [trackedCases]);

  const handleAddCase = useCallback(async () => {
    setLoading(true);
    // Simulate adding a new case
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const newCase: Case = {
      id: Date.now().toString(),
      caseNumber: `NEW/2024/${Math.floor(Math.random() * 10000)}`,
      parties: 'Your Case vs. Defendant',
      nextHearing: '2024-12-25',
      status: 'Pending',
      court: 'Local Court',
      type: 'Civil',
      registeredDate: new Date().toISOString().split('T')[0],
      isTracked: true
    };
    
    setTrackedCases(prev => [...prev, newCase]);
    setShowAddCaseModal(false);
    setLoading(false);
    toast.success('Case added successfully and is now being tracked');
  }, []);

  const handleFIRSearch = useCallback(async () => {
    if (!firNumber.trim()) return;
    
    setLoading(true);
    // Simulate FIR lookup
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setFirData(mockFIRData);
    setLoading(false);
    toast.success('FIR details retrieved successfully');
  }, [firNumber]);

  const handleSubscribeToUpdates = useCallback(() => {
    toast.success('Subscribed to case updates! You will receive notifications for any status changes.');
    // Simulate a status change notification after 3 seconds
    setTimeout(() => {
      toast.info('📧 Case Update: Next hearing date has been confirmed for CRL/2024/001234');
    }, 3000);
  }, []);

  const handleExportCase = useCallback((caseItem: Case) => {
    // Simulate PDF export
    const element = document.createElement('a');
    const file = new Blob([`Case Details Export\n\nCase Number: ${caseItem.caseNumber}\nParties: ${caseItem.parties}\nStatus: ${caseItem.status}\nCourt: ${caseItem.court}\nNext Hearing: ${caseItem.nextHearing}`], {
      type: 'text/plain'
    });
    element.href = URL.createObjectURL(file);
    element.download = `${caseItem.caseNumber}-export.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success('Case details exported successfully');
  }, []);

  const handleScheduleReminder = useCallback((caseItem: Case) => {
    // Simulate ICS calendar file download
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//JusticeLink//Court Reminder//EN
BEGIN:VEVENT
UID:${caseItem.id}@justicelink.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${caseItem.nextHearing.replace(/-/g, '')}T100000Z
SUMMARY:Court Hearing - ${caseItem.caseNumber}
DESCRIPTION:Case: ${caseItem.parties}\\nCourt: ${caseItem.court}
END:VEVENT
END:VCALENDAR`;

    const element = document.createElement('a');
    const file = new Blob([icsContent], { type: 'text/calendar' });
    element.href = URL.createObjectURL(file);
    element.download = `${caseItem.caseNumber}-reminder.ics`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success('Calendar reminder downloaded');
  }, []);

  const handleRequestUpdate = useCallback((eventId: string) => {
    toast.success('Update request sent to court officials');
    // Simulate adding a note to timeline
    setTimeout(() => {
      setTimelineEvents(prev => prev.map(event => 
        event.id === eventId
          ? { ...event, notes: (event.notes || '') + '\n\nUpdate requested by citizen on ' + new Date().toLocaleDateString() }
          : event
      ));
    }, 1000);
  }, []);

  const toggleEventExpansion = useCallback((eventId: string) => {
    setExpandedEvents(prev => {
      const newSet = new Set(prev);
      if (newSet.has(eventId)) {
        newSet.delete(eventId);
      } else {
        newSet.add(eventId);
      }
      return newSet;
    });
  }, []);

  const getStatusColor = useCallback((status: string) => {
    switch (status) {
      case 'Active': return 'text-accent';
      case 'Pending': return 'text-chart-2';
      case 'Disposed': return 'text-chart-3';
      case 'Adjourned': return 'text-chart-5';
      default: return 'text-muted-foreground';
    }
  }, []);

  const getTimelineStatusColor = useCallback((status: string) => {
    switch (status) {
      case 'completed': return 'border-chart-3 bg-chart-3';
      case 'pending': return 'border-chart-2 bg-chart-2';
      case 'upcoming': return 'border-primary bg-primary';
      default: return 'border-muted bg-muted';
    }
  }, []);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-heading font-bold">Judicial Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">View:</label>
              <select 
                value={viewMode} 
                onChange={(e) => setViewMode(e.target.value as 'public' | 'internal')}
                className="bg-card border border-border rounded-md px-3 py-1 text-sm"
              >
                <option value="public">Public</option>
                <option value="internal">Internal</option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">Role:</label>
              <select 
                value={userRole} 
                onChange={(e) => setUserRole(e.target.value as 'citizen' | 'official')}
                className="bg-card border border-border rounded-md px-3 py-1 text-sm"
              >
                <option value="citizen">Citizen</option>
                <option value="official">Official</option>
              </select>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-card rounded-lg p-6 border border-border">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search by case number, party name, FIR number, or mobile/email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-background border border-border rounded-md px-4 py-2 focus:ring-2 focus:ring-ring focus:border-transparent"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <button
                onClick={handleSearch}
                disabled={loading}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium hover:bg-primary/90 disabled:opacity-50 transition-colors"
              >
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>

            {/* Advanced Filters */}
            <div className="flex gap-4">
              <select
                value={selectedFilters.court}
                onChange={(e) => setSelectedFilters(prev => ({ ...prev, court: e.target.value }))}
                className="bg-background border border-border rounded-md px-3 py-2"
              >
                <option value="">All Courts</option>
                <option value="district">District Court</option>
                <option value="high">High Court</option>
                <option value="family">Family Court</option>
              </select>

              <select
                value={selectedFilters.caseType}
                onChange={(e) => setSelectedFilters(prev => ({ ...prev, caseType: e.target.value }))}
                className="bg-background border border-border rounded-md px-3 py-2"
              >
                <option value="">All Types</option>
                <option value="criminal">Criminal</option>
                <option value="civil">Civil</option>
                <option value="family">Family</option>
              </select>

              <input
                type="date"
                value={selectedFilters.dateRange}
                onChange={(e) => setSelectedFilters(prev => ({ ...prev, dateRange: e.target.value }))}
                className="bg-background border border-border rounded-md px-3 py-2"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Case Results */}
            <div className="bg-card rounded-lg border border-border">
              <div className="p-6 border-b border-border">
                <h2 className="text-xl font-heading font-semibold">Search Results</h2>
              </div>
              
              <div className="p-6">
                {loading ? (
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="animate-pulse">
                        <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-muted rounded w-1/2 mb-2"></div>
                        <div className="h-3 bg-muted rounded w-2/3"></div>
                      </div>
                    ))}
                  </div>
                ) : cases.length === 0 ? (
                  <div className="text-center py-12">
                    <CalendarSearch className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">No cases found</h3>
                    <p className="text-muted-foreground mb-4">Try adjusting your search criteria or add a case to track</p>
                    <button
                      onClick={() => setShowAddCaseModal(true)}
                      className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors"
                    >
                      Add a Case
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cases.map((caseItem) => (
                      <div
                        key={caseItem.id}
                        className="border border-border rounded-lg p-4 hover:bg-muted/20 cursor-pointer transition-colors"
                        onClick={() => handleCaseClick(caseItem)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-medium">{caseItem.caseNumber}</h3>
                            <p className="text-muted-foreground">{caseItem.parties}</p>
                            <div className="flex items-center gap-4 mt-2 text-sm">
                              <span>Next Hearing: {caseItem.nextHearing}</span>
                              <span className={`font-medium ${getStatusColor(caseItem.status)}`}>
                                {caseItem.status}
                              </span>
                              <span className="text-muted-foreground">{caseItem.court}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleTrackCase(caseItem);
                              }}
                              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                                trackedCases.some(c => c.id === caseItem.id)
                                  ? 'bg-accent text-accent-foreground'
                                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                              }`}
                            >
                              {trackedCases.some(c => c.id === caseItem.id) ? 'Tracked' : 'Track'}
                            </button>
                            
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleExportCase(caseItem);
                              }}
                              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium hover:bg-secondary/80 transition-colors"
                            >
                              Export
                            </button>
                            
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleScheduleReminder(caseItem);
                              }}
                              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium hover:bg-secondary/80 transition-colors"
                            >
                              <Calendar className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* FIR Tracking */}
            <div className="bg-card rounded-lg border border-border">
              <div className="p-6 border-b border-border">
                <h2 className="text-xl font-heading font-semibold">FIR Tracking</h2>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Enter FIR Number (e.g., FIR/2024/001234)"
                    value={firNumber}
                    onChange={(e) => setFirNumber(e.target.value)}
                    className="flex-1 bg-background border border-border rounded-md px-4 py-2 focus:ring-2 focus:ring-ring focus:border-transparent"
                  />
                  <button
                    onClick={handleFIRSearch}
                    disabled={loading}
                    className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium hover:bg-primary/90 disabled:opacity-50 transition-colors"
                  >
                    {loading ? 'Searching...' : 'Search FIR'}
                  </button>
                </div>

                {firData && (
                  <div className="bg-background border border-border rounded-lg p-4 animate-in slide-in-from-top-2 duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium">FIR Details</h3>
                      <button
                        onClick={handleSubscribeToUpdates}
                        className="bg-accent text-accent-foreground px-3 py-1 rounded-md text-sm font-medium hover:bg-accent/90 transition-colors"
                      >
                        Subscribe to Updates
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">FIR Number</p>
                        <p className="font-medium">{firData.firNumber}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Status</p>
                        <p className={`font-medium ${getStatusColor(firData.status)}`}>{firData.status}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Investigating Officer</p>
                        <p className="font-medium">{firData.investigatingOfficer}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Last Update</p>
                        <p className="font-medium">{firData.lastUpdate}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* My Cases */}
            <div className="bg-card rounded-lg border border-border">
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-heading font-semibold">My Cases</h2>
                  <button
                    onClick={() => setShowAddCaseModal(true)}
                    className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    Add Case
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                {trackedCases.length === 0 ? (
                  <div className="text-center py-8">
                    <Grid2x2Check className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                    <p className="text-muted-foreground text-sm">No tracked cases yet</p>
                    <button
                      onClick={() => setShowAddCaseModal(true)}
                      className="text-primary text-sm mt-2 hover:underline"
                    >
                      Add your first case
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {trackedCases.map((caseItem) => (
                      <div
                        key={caseItem.id}
                        className="border border-border rounded-lg p-3 hover:bg-muted/20 cursor-pointer transition-colors"
                        onClick={() => handleCaseClick(caseItem)}
                      >
                        <div className="text-sm font-medium">{caseItem.caseNumber}</div>
                        <div className="text-xs text-muted-foreground">{caseItem.parties}</div>
                        <div className="text-xs mt-1">
                          Next: {caseItem.nextHearing}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Calendar View */}
            <div className="bg-card rounded-lg border border-border">
              <div className="p-6 border-b border-border">
                <h2 className="text-xl font-heading font-semibold flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Hearings
                </h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-3">
                  {trackedCases.filter(c => new Date(c.nextHearing) >= new Date()).map((caseItem) => (
                    <div key={caseItem.id} className="flex items-center gap-3 p-2 bg-background rounded-md">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{caseItem.caseNumber}</div>
                        <div className="text-xs text-muted-foreground">{caseItem.nextHearing}</div>
                      </div>
                    </div>
                  ))}
                  
                  {trackedCases.filter(c => new Date(c.nextHearing) >= new Date()).length === 0 && (
                    <p className="text-center text-muted-foreground text-sm py-4">
                      No upcoming hearings
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Detail Panel */}
        {showCaseDetail && selectedCase && (
          <div className="fixed inset-y-0 right-0 w-96 bg-card border-l border-border shadow-lg z-50 animate-in slide-in-from-right-2 duration-300">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-heading font-semibold">Case Details</h2>
                <button
                  onClick={() => setShowCaseDetail(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <PanelRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6 overflow-y-auto h-full">
              <div>
                <h3 className="font-medium text-lg">{selectedCase.caseNumber}</h3>
                <p className="text-muted-foreground">{selectedCase.parties}</p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Status:</span>
                    <span className={`text-sm font-medium ${getStatusColor(selectedCase.status)}`}>
                      {selectedCase.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Court:</span>
                    <span className="text-sm">{selectedCase.court}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Next Hearing:</span>
                    <span className="text-sm">{selectedCase.nextHearing}</span>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h4 className="font-medium mb-4 flex items-center gap-2">
                  <FileClock className="h-4 w-4" />
                  Case Timeline
                </h4>
                
                <div className="space-y-4">
                  {timelineEvents.map((event, index) => (
                    <div key={event.id} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className={`w-3 h-3 rounded-full border-2 ${getTimelineStatusColor(event.status)}`}></div>
                        {index < timelineEvents.length - 1 && (
                          <div className="w-px h-8 bg-border mt-2"></div>
                        )}
                      </div>
                      
                      <div className="flex-1 pb-4">
                        <div className="flex items-center justify-between">
                          <h5 className="font-medium text-sm">{event.title}</h5>
                          <span className="text-xs text-muted-foreground">{event.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                        
                        {event.expandable && (
                          <div className="mt-2 space-y-2">
                            <button
                              onClick={() => toggleEventExpansion(event.id)}
                              className="text-xs text-primary hover:underline"
                            >
                              {expandedEvents.has(event.id) ? 'Show Less' : 'Show More'}
                            </button>
                            
                            {expandedEvents.has(event.id) && event.notes && (
                              <div className="text-xs text-muted-foreground bg-background p-2 rounded animate-in slide-in-from-top-1 duration-200">
                                {event.notes}
                              </div>
                            )}
                            
                            {event.status === 'upcoming' && (
                              <button
                                onClick={() => handleRequestUpdate(event.id)}
                                className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded hover:bg-secondary/80 transition-colors"
                              >
                                Request Update
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents */}
              <div>
                <h4 className="font-medium mb-4">Documents</h4>
                <div className="space-y-2">
                  {['Case Registration', 'Evidence List', 'Previous Orders', 'Hearing Notes'].map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-background rounded">
                      <span className="text-sm">{doc}</span>
                      <button className="text-xs text-primary hover:underline">
                        {userRole === 'official' || viewMode === 'internal' ? 'Download' : 'Request Access'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <button
                  onClick={() => handleExportCase(selectedCase)}
                  className="w-full bg-primary text-primary-foreground py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Export Case Packet
                </button>
                
                <button
                  onClick={() => handleScheduleReminder(selectedCase)}
                  className="w-full bg-secondary text-secondary-foreground py-2 rounded-md text-sm font-medium hover:bg-secondary/80 transition-colors"
                >
                  Schedule Reminder
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add Case Modal */}
        {showAddCaseModal && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card border border-border rounded-lg p-6 w-full max-w-md animate-in zoom-in-95 duration-200">
              <h3 className="text-lg font-heading font-semibold mb-4">Add Case to Track</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Case Number</label>
                  <input
                    type="text"
                    placeholder="Enter case number"
                    className="w-full bg-background border border-border rounded-md px-3 py-2 focus:ring-2 focus:ring-ring focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Your Role</label>
                  <select className="w-full bg-background border border-border rounded-md px-3 py-2">
                    <option value="">Select your role</option>
                    <option value="plaintiff">Plaintiff</option>
                    <option value="defendant">Defendant</option>
                    <option value="lawyer">Lawyer</option>
                    <option value="witness">Witness</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="For case updates"
                    className="w-full bg-background border border-border rounded-md px-3 py-2 focus:ring-2 focus:ring-ring focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowAddCaseModal(false)}
                  className="flex-1 bg-secondary text-secondary-foreground py-2 rounded-md text-sm font-medium hover:bg-secondary/80 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddCase}
                  disabled={loading}
                  className="flex-1 bg-primary text-primary-foreground py-2 rounded-md text-sm font-medium hover:bg-primary/90 disabled:opacity-50 transition-colors"
                >
                  {loading ? 'Adding...' : 'Add Case'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
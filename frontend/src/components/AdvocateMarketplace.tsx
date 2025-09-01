"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  UserSearch, 
  ListFilter, 
  Calendar, 
  IdCard, 
  PanelRight, 
  SearchCheck, 
  UserCheck,
  CalendarSearch,
  PanelRightOpen 
} from "lucide-react";
import { toast } from "sonner";

// Types
interface Advocate {
  id: string;
  name: string;
  avatar: string;
  verified: boolean;
  specializations: string[];
  rating: number;
  reviewCount: number;
  location: string;
  languages: string[];
  feeRange: string;
  bio: string;
  credentials: string[];
  firm?: string;
  experience: string;
  availability: string[];
  sampleCases: string[];
}

interface Booking {
  id: string;
  advocateId: string;
  advocateName: string;
  date: string;
  time: string;
  description: string;
  status: "requested" | "confirmed" | "completed";
  createdAt: string;
}

interface Filters {
  specializations: string[];
  location: string;
  feeRange: string;
  languages: string[];
}

// Mock data
const mockAdvocates: Advocate[] = [
  {
    id: "1",
    name: "Priya Sharma",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    verified: true,
    specializations: ["Criminal Law", "Human Rights"],
    rating: 4.8,
    reviewCount: 124,
    location: "Mumbai",
    languages: ["Hindi", "English", "Marathi"],
    feeRange: "₹2,000-5,000",
    bio: "Experienced criminal defense attorney with 15+ years in high-profile cases.",
    credentials: ["LLB Delhi University", "Member of Bar Council", "Specialized in Criminal Defense"],
    firm: "Sharma & Associates",
    experience: "15+ years",
    availability: ["Today 2:00 PM", "Tomorrow 10:00 AM", "Tomorrow 4:00 PM"],
    sampleCases: ["State vs. Kumar (2023)", "Corporate Fraud Case (2022)", "Bail Application Success (2023)"]
  },
  {
    id: "2",
    name: "Rajesh Gupta",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    verified: true,
    specializations: ["Corporate Law", "Contract Disputes"],
    rating: 4.6,
    reviewCount: 89,
    location: "Delhi",
    languages: ["Hindi", "English"],
    feeRange: "₹3,000-8,000",
    bio: "Corporate law specialist with expertise in contract negotiations and business disputes.",
    credentials: ["LLM Corporate Law", "Senior Advocate", "20+ Years Experience"],
    firm: "Legal Partners LLP",
    experience: "20+ years",
    availability: ["Today 5:00 PM", "Tomorrow 11:00 AM", "Day after 9:00 AM"],
    sampleCases: ["Microsoft vs. Local Vendor", "Startup Acquisition Deal", "Patent Dispute Resolution"]
  },
  {
    id: "3",
    name: "Anjali Reddy",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    verified: true,
    specializations: ["Family Law", "Domestic Violence"],
    rating: 4.9,
    reviewCount: 156,
    location: "Bangalore",
    languages: ["English", "Telugu", "Kannada"],
    feeRange: "₹1,500-4,000",
    bio: "Compassionate family law advocate specializing in domestic violence cases.",
    credentials: ["LLB Bangalore University", "Family Court Specialist", "Domestic Violence Expert"],
    experience: "12+ years",
    availability: ["Today 3:00 PM", "Tomorrow 2:00 PM", "Tomorrow 6:00 PM"],
    sampleCases: ["Child Custody Case (2023)", "Divorce Settlement", "Domestic Violence Protection Order"]
  }
];

const specializations = ["Criminal Law", "Corporate Law", "Family Law", "Human Rights", "Contract Disputes", "Domestic Violence"];
const languages = ["Hindi", "English", "Marathi", "Telugu", "Kannada", "Tamil", "Bengali"];

export default function AdvocateMarketplace() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<Filters>({
    specializations: [],
    location: "",
    feeRange: "",
    languages: []
  });
  const [sortBy, setSortBy] = useState("best-match");
  const [selectedAdvocate, setSelectedAdvocate] = useState<Advocate | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [bookingForm, setBookingForm] = useState({
    date: "",
    time: "",
    description: ""
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [lastBookingId, setLastBookingId] = useState("");
  const [chatMessages, setChatMessages] = useState<Array<{id: string, text: string, sender: "user" | "advocate", timestamp: string}>>([]);
  const [newMessage, setNewMessage] = useState("");

  // Filtered and sorted advocates
  const filteredAdvocates = useMemo(() => {
    let filtered = mockAdvocates.filter(advocate => {
      const matchesSearch = searchQuery === "" || 
        advocate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        advocate.specializations.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesSpecialization = filters.specializations.length === 0 ||
        filters.specializations.some(spec => advocate.specializations.includes(spec));
      
      const matchesLocation = filters.location === "" ||
        advocate.location.toLowerCase().includes(filters.location.toLowerCase());
      
      const matchesLanguages = filters.languages.length === 0 ||
        filters.languages.some(lang => advocate.languages.includes(lang));

      return matchesSearch && matchesSpecialization && matchesLocation && matchesLanguages;
    });

    // Sort
    switch (sortBy) {
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "fee-low":
        filtered.sort((a, b) => {
          const aMin = parseInt(a.feeRange.split('-')[0].replace(/[^\d]/g, ''));
          const bMin = parseInt(b.feeRange.split('-')[0].replace(/[^\d]/g, ''));
          return aMin - bMin;
        });
        break;
      default:
        // Best match - by rating and review count
        filtered.sort((a, b) => (b.rating * b.reviewCount) - (a.rating * a.reviewCount));
    }

    return filtered;
  }, [searchQuery, filters, sortBy]);

  const handleFilterChange = useCallback((key: keyof Filters, value: string | string[]) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  const toggleSpecialization = useCallback((spec: string) => {
    setFilters(prev => ({
      ...prev,
      specializations: prev.specializations.includes(spec)
        ? prev.specializations.filter(s => s !== spec)
        : [...prev.specializations, spec]
    }));
  }, []);

  const toggleLanguage = useCallback((lang: string) => {
    setFilters(prev => ({
      ...prev,
      languages: prev.languages.includes(lang)
        ? prev.languages.filter(l => l !== lang)
        : [...prev.languages, lang]
    }));
  }, []);

  const handleBooking = useCallback(() => {
    if (!selectedAdvocate || !bookingForm.date || !bookingForm.time) {
      toast.error("Please fill in all required fields");
      return;
    }

    const bookingId = `BK-${Date.now()}`;
    const newBooking: Booking = {
      id: bookingId,
      advocateId: selectedAdvocate.id,
      advocateName: selectedAdvocate.name,
      date: bookingForm.date,
      time: bookingForm.time,
      description: bookingForm.description,
      status: "requested",
      createdAt: new Date().toISOString()
    };

    setBookings(prev => [...prev, newBooking]);
    setLastBookingId(bookingId);
    setShowBookingModal(false);
    setShowConfirmation(true);
    setBookingForm({ date: "", time: "", description: "" });

    toast.success("Consultation request submitted successfully!");

    // Auto-hide confirmation after 5 seconds
    setTimeout(() => setShowConfirmation(false), 5000);
  }, [selectedAdvocate, bookingForm]);

  const sendMessage = useCallback(() => {
    if (!newMessage.trim() || !selectedAdvocate) return;

    const messageId = Date.now().toString();
    setChatMessages(prev => [...prev, {
      id: messageId,
      text: newMessage,
      sender: "user",
      timestamp: new Date().toLocaleTimeString()
    }]);
    setNewMessage("");

    // Simulate advocate response
    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: "Thank you for your message. I'll review your case and get back to you shortly.",
        sender: "advocate",
        timestamp: new Date().toLocaleTimeString()
      }]);
    }, 1000);
  }, [newMessage, selectedAdvocate]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold">Advocate Marketplace</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{filteredAdvocates.length} advocates available</span>
              {bookings.length > 0 && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{bookings.length} consultations</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Left Panel - Search & Filters */}
          <div className="w-80 space-y-6">
            {/* Search */}
            <div className="space-y-3">
              <div className="relative">
                <UserSearch className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search advocates, specializations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>

            {/* Sort */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">Sort by</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
              >
                <option value="best-match">Best Match</option>
                <option value="rating">Highest Rated</option>
                <option value="fee-low">Fee: Low to High</option>
              </select>
            </div>

            {/* Specializations */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <ListFilter className="h-4 w-4 text-muted-foreground" />
                <label className="text-sm font-medium text-foreground">Specializations</label>
              </div>
              <div className="space-y-2">
                {specializations.map(spec => (
                  <label key={spec} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.specializations.includes(spec)}
                      onChange={() => toggleSpecialization(spec)}
                      className="rounded border-border text-primary focus:ring-ring"
                    />
                    <span className="text-sm text-foreground">{spec}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">Location</label>
              <input
                type="text"
                placeholder="Enter city..."
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Languages */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">Languages</label>
              <div className="space-y-2">
                {languages.slice(0, 5).map(lang => (
                  <label key={lang} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.languages.includes(lang)}
                      onChange={() => toggleLanguage(lang)}
                      className="rounded border-border text-primary focus:ring-ring"
                    />
                    <span className="text-sm text-foreground">{lang}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Center - Results Grid */}
          <div className="flex-1 space-y-6">
            {filteredAdvocates.length === 0 ? (
              <div className="text-center py-12">
                <UserSearch className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No advocates found</h3>
                <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
              </div>
            ) : (
              <div className="grid gap-4">
                <AnimatePresence mode="popLayout">
                  {filteredAdvocates.map((advocate, index) => (
                    <motion.div
                      key={advocate.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: index * 0.05 }}
                      className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-200 cursor-pointer"
                      onClick={() => setSelectedAdvocate(advocate)}
                      whileHover={{ y: -2 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="relative">
                          <img
                            src={advocate.avatar}
                            alt={advocate.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          {advocate.verified && (
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                              <UserCheck className="h-3 w-3 text-primary-foreground" />
                            </div>
                          )}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                {advocate.name}
                              </h3>
                              {advocate.firm && (
                                <p className="text-sm text-muted-foreground">{advocate.firm}</p>
                              )}
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-1">
                                <span className="text-sm font-medium text-foreground">{advocate.rating}</span>
                                <span className="text-accent">★</span>
                              </div>
                              <p className="text-xs text-muted-foreground">({advocate.reviewCount} reviews)</p>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-3">
                            {advocate.specializations.map(spec => (
                              <span
                                key={spec}
                                className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="text-sm text-muted-foreground">
                              <span>{advocate.location}</span> • <span>{advocate.feeRange}</span>
                            </div>
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button className="px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                                Consult
                              </button>
                              <button className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium hover:bg-secondary/80 transition-colors">
                                Message
                              </button>
                            </div>
                          </div>

                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ 
                              opacity: 1, 
                              height: "auto"
                            }}
                            className="mt-3 pt-3 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <p className="text-sm text-muted-foreground">{advocate.bio}</p>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Profile Drawer */}
      <AnimatePresence>
        {selectedAdvocate && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setSelectedAdvocate(null)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-96 bg-card border-l border-border shadow-xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={selectedAdvocate.avatar}
                      alt={selectedAdvocate.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-foreground">{selectedAdvocate.name}</h2>
                      {selectedAdvocate.firm && (
                        <p className="text-sm text-muted-foreground">{selectedAdvocate.firm}</p>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedAdvocate(null)}
                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                  >
                    <PanelRight className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>

                {/* Bio */}
                <div className="mb-6">
                  <h3 className="font-medium text-foreground mb-2">About</h3>
                  <p className="text-sm text-muted-foreground">{selectedAdvocate.bio}</p>
                </div>

                {/* Credentials */}
                <div className="mb-6">
                  <h3 className="font-medium text-foreground mb-2">Credentials</h3>
                  <div className="space-y-2">
                    {selectedAdvocate.credentials.map((cred, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <IdCard className="h-4 w-4 text-primary" />
                        <span className="text-sm text-foreground">{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages & Location */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Languages</h3>
                    <div className="flex flex-wrap gap-1">
                      {selectedAdvocate.languages.map(lang => (
                        <span
                          key={lang}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Location</h3>
                    <p className="text-sm text-muted-foreground">{selectedAdvocate.location}</p>
                  </div>
                </div>

                {/* Availability */}
                <div className="mb-6">
                  <h3 className="font-medium text-foreground mb-2">Next Available</h3>
                  <div className="space-y-2">
                    {selectedAdvocate.availability.map((slot, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm text-foreground">{slot}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sample Cases */}
                <div className="mb-6">
                  <h3 className="font-medium text-foreground mb-2">Recent Cases</h3>
                  <div className="space-y-2">
                    {selectedAdvocate.sampleCases.map((case_, index) => (
                      <div key={index} className="p-3 bg-secondary rounded-lg">
                        <p className="text-sm text-foreground">{case_}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Chat */}
                <div className="mb-6">
                  <h3 className="font-medium text-foreground mb-2">Quick Message</h3>
                  <div className="space-y-3">
                    <div className="max-h-32 overflow-y-auto space-y-2">
                      {chatMessages.map(msg => (
                        <div
                          key={msg.id}
                          className={`p-2 rounded-lg text-sm ${
                            msg.sender === "user"
                              ? "bg-primary text-primary-foreground ml-4"
                              : "bg-secondary text-secondary-foreground mr-4"
                          }`}
                        >
                          <p>{msg.text}</p>
                          <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                        className="flex-1 px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder:text-muted-foreground text-sm"
                      />
                      <button
                        onClick={sendMessage}
                        className="px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => setShowBookingModal(true)}
                    className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <CalendarSearch className="h-4 w-4" />
                    Book Consultation
                  </button>
                  <button className="w-full px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors">
                    Start Chat
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Booking Modal */}
      <AnimatePresence>
        {showBookingModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setShowBookingModal(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-card border border-border rounded-lg p-6 w-full max-w-md"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">Book Consultation</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Date</label>
                    <input
                      type="date"
                      value={bookingForm.date}
                      onChange={(e) => setBookingForm(prev => ({ ...prev, date: e.target.value }))}
                      className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Preferred Time</label>
                    <select
                      value={bookingForm.time}
                      onChange={(e) => setBookingForm(prev => ({ ...prev, time: e.target.value }))}
                      className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                    >
                      <option value="">Select time</option>
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                      <option value="05:00 PM">05:00 PM</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Case Description</label>
                    <textarea
                      value={bookingForm.description}
                      onChange={(e) => setBookingForm(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Brief description of your legal matter..."
                      rows={3}
                      className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder:text-muted-foreground resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Attach Evidence (Optional)</label>
                    <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                      <p className="text-sm text-muted-foreground">Drag & drop files or click to select</p>
                      <p className="text-xs text-muted-foreground mt-1">PDF, DOC, JPG up to 10MB</p>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={() => setShowBookingModal(false)}
                      className="flex-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleBooking}
                      className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                      Request Consultation
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Booking Confirmation */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-card border border-border rounded-lg p-4 shadow-lg z-50 max-w-sm"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <SearchCheck className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Consultation Requested!</h4>
                <p className="text-sm text-muted-foreground">Booking ID: {lastBookingId}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
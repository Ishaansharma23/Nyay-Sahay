"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { MessageCircle, X, Send, Download, Globe, Shield, ChevronUp, ChevronDown, Bot, User, Paperclip, Clock, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
  language?: string;
}

interface QuickAction {
  id: string;
  label: string;
  action: () => void;
}

interface LegalKnowledge {
  id: string;
  topic: string;
  statute: string;
  explanation: string;
  nextSteps: string[];
}

const legalKnowledgeBase: LegalKnowledge[] = [
  {
    id: "police-misconduct",
    topic: "police misconduct",
    statute: "Section 197 IPC - Public servant framing an incorrect document with intent to cause injury",
    explanation: "Police officers who fabricate evidence or file false reports can be prosecuted under this section. You have the right to file a complaint with the local police station or approach the courts directly.",
    nextSteps: [
      "Document the incident with photos/videos if safe",
      "File an FIR at the nearest police station",
      "Contact a legal advocate for representation",
      "Preserve all evidence including witness statements"
    ]
  },
  {
    id: "false-imprisonment",
    topic: "false imprisonment",
    statute: "Section 342 IPC - Punishment for wrongful confinement",
    explanation: "Wrongful detention or confinement by authorities without proper legal grounds is punishable. You have the right to habeas corpus and immediate legal assistance.",
    nextSteps: [
      "Immediately contact family/lawyer if detained",
      "Request to see the arrest warrant or detention order",
      "File a habeas corpus petition if detention is illegal",
      "Document the conditions and duration of confinement"
    ]
  },
  {
    id: "evidence-tampering",
    topic: "evidence tampering",
    statute: "Section 201 IPC - Causing disappearance of evidence of offence",

    explanation: "Destroying or tampering with evidence is a serious offense. If authorities are involved, it constitutes abuse of power and can be challenged in court.",
    nextSteps: [
      "Report tampering to higher authorities immediately",
      "Preserve copies of original evidence if possible",
      "File a complaint with the State Human Rights Commission",
      "Seek court intervention through appropriate legal channels"
    ]
  }
];

const advocates = [
  {
    id: "adv-1",
    name: "Priya Sharma",
    specialization: "Human Rights Law",
    experience: "12 years",
    bio: "Specialized in police misconduct cases with 85% success rate"
  },
  {
    id: "adv-2", 
    name: "Rajesh Kumar",
    specialization: "Criminal Defense",
    experience: "15 years",
    bio: "Expert in false imprisonment and evidence tampering cases"
  },
  {
    id: "adv-3",
    name: "Anjali Mehta",
    specialization: "Civil Rights",
    experience: "10 years",
    bio: "Focuses on systemic police reform and victim compensation"
  }
];

export default function LegalChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState<"small" | "medium" | "expanded">("medium");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [language, setLanguage] = useState<"en" | "hi">("en");
  const [ephemeralMode, setEphemeralMode] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showBookingDialog, setShowBookingDialog] = useState(false);
  const [selectedAdvocate, setSelectedAdvocate] = useState<typeof advocates[0] | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Load messages from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("legal-chat-messages");
      if (stored && !ephemeralMode) {
        try {
          const parsed = JSON.parse(stored);
          setMessages(parsed.map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp)
          })));
        } catch (e) {
          console.error("Failed to parse stored messages:", e);
        }
      }
    }
  }, [ephemeralMode]);

  // Save messages to localStorage
  useEffect(() => {
    if (typeof window !== "undefined" && !ephemeralMode) {
      localStorage.setItem("legal-chat-messages", JSON.stringify(messages));
    }
  }, [messages, ephemeralMode]);

  // Auto-scroll to bottom
  const scrollToBottom = useCallback(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Update unread count
  useEffect(() => {
    if (!isOpen) {
      const botMessages = messages.filter(msg => msg.type === "bot");
      setUnreadCount(Math.min(botMessages.length, 9));
    } else {
      setUnreadCount(0);
    }
  }, [messages, isOpen]);

  // Keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  // Online/offline detection
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const addMessage = useCallback((content: string, type: "user" | "bot", lang?: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
      language: lang
    };
    setMessages(prev => [...prev, newMessage]);
  }, []);

  const simulateTyping = useCallback(async (response: string) => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
    setIsTyping(false);
    addMessage(response, "bot", language);
  }, [addMessage, language]);

  const findLegalKnowledge = useCallback((query: string): LegalKnowledge | null => {
    const normalizedQuery = query.toLowerCase();
    return legalKnowledgeBase.find(item => 
      normalizedQuery.includes(item.topic) ||
      item.explanation.toLowerCase().includes(normalizedQuery) ||
      item.statute.toLowerCase().includes(normalizedQuery)
    ) || null;
  }, []);

  const generateActionPlan = useCallback((incidentDetails: string) => {
    const steps = [
      "Document everything: Take photos, screenshots, and written notes of the incident",
      "Gather witnesses: Collect contact information from anyone who saw what happened",
      "File an official complaint: Submit an FIR at the nearest police station",
      "Contact legal representation: Consult with a qualified advocate immediately",
      "Preserve evidence: Keep all materials safe and make backup copies"
    ];

    return {
      steps,
      nextAction: "I can help you prefill an incident report form. Would you like me to do that?"
    };
  }, []);

  const processUserMessage = useCallback(async (message: string) => {
    const normalizedMessage = message.toLowerCase();
    
    // Check for legal knowledge
    const knowledge = findLegalKnowledge(message);
    if (knowledge) {
      const response = language === "hi" 
        ? `कानूनी जानकारी: ${knowledge.explanation}\n\nसंबंधित कानून: ${knowledge.statute}\n\nअगले कदम:\n${knowledge.nextSteps.map((step, i) => `${i + 1}. ${step}`).join('\n')}`
        : `Legal Information: ${knowledge.explanation}\n\nRelevant Law: ${knowledge.statute}\n\nNext Steps:\n${knowledge.nextSteps.map((step, i) => `${i + 1}. ${step}`).join('\n')}`;
      
      await simulateTyping(response);
      return;
    }

    // Handle incident reporting
    if (normalizedMessage.includes("incident") || normalizedMessage.includes("report") || normalizedMessage.includes("happened")) {
      const actionPlan = generateActionPlan(message);
      const response = language === "hi"
        ? `मैं आपकी स्थिति समझ गया हूं। यहाँ एक कार्य योजना है:\n\n${actionPlan.steps.map((step, i) => `${i + 1}. ${step}`).join('\n')}\n\n${actionPlan.nextAction}`
        : `I understand your situation. Here's an action plan:\n\n${actionPlan.steps.map((step, i) => `${i + 1}. ${step}`).join('\n')}\n\n${actionPlan.nextAction}`;
      
      await simulateTyping(response);
      
      // Emit custom event for incident report prefill
      setTimeout(() => {
        const event = new CustomEvent("legal-chatbot-prefill-incident", {
          detail: { incidentDetails: message }
        });
        window.dispatchEvent(event);
        toast.success("Incident report form prefilled with your details");
      }, 2000);
      return;
    }

    // Handle advocate recommendations
    if (normalizedMessage.includes("advocate") || normalizedMessage.includes("lawyer") || normalizedMessage.includes("legal help")) {
      const response = language === "hi"
        ? "मैं आपके लिए योग्य वकीलों की सिफारिश कर सकता हूं। यहाँ कुछ विशेषज्ञ हैं:"
        : "I can recommend qualified advocates for you. Here are some specialists:";
      
      await simulateTyping(response);
      return;
    }

    // Handle case tracking
    if (normalizedMessage.includes("track") || normalizedMessage.includes("case") || normalizedMessage.includes("status")) {
      const response = language === "hi"
        ? "केस ट्रैकिंग के लिए, मैं आपको न्यायिक डैशबोर्ड पर भेज सकता हूं जहाँ आप अपने FIR और सुनवाई की स्थिति देख सकते हैं।"
        : "For case tracking, I can direct you to the Judicial Dashboard where you can monitor your FIR status and hearing schedules.";
      
      await simulateTyping(response);
      return;
    }

    // Handle rights explanation
    if (normalizedMessage.includes("rights") || normalizedMessage.includes("what can i do")) {
      const response = language === "hi"
        ? "आपके मौलिक अधिकार:\n\n1. गिरफ्तारी के समय अपने परिवार को सूचित करने का अधिकार\n2. कानूनी सहायता प्राप्त करने का अधिकार\n3. मौन रहने का अधिकार\n4. न्यायालय में उपस्थित होने का अधिकार\n5. निष्पक्ष सुनवाई का अधिकार"
        : "Your fundamental rights:\n\n1. Right to inform family upon arrest\n2. Right to legal assistance\n3. Right to remain silent\n4. Right to appear before a magistrate\n5. Right to fair hearing\n\nWould you like more specific information about any of these rights?";
      
      await simulateTyping(response);
      return;
    }

    // Default response
    const defaultResponse = language === "hi"
      ? "मैं आपकी कानूनी सहायता के लिए यहाँ हूँ। आप मुझसे पुलिस दुर्व्यवहार, गलत गिरफ्तारी, साक्ष्य छेड़छाड़, या अपने अधिकारों के बारे में पूछ सकते हैं। क्या आप कोई घटना रिपोर्ट करना चाहते हैं?"
      : "I'm here to help with legal assistance. You can ask me about police misconduct, false imprisonment, evidence tampering, or your rights. Would you like to report an incident?";
    
    await simulateTyping(defaultResponse);
  }, [language, findLegalKnowledge, generateActionPlan, simulateTyping]);

  const handleSend = useCallback(async () => {
    if (!inputValue.trim() || isTyping) return;
    
    const userMessage = inputValue.trim();
    setInputValue("");
    addMessage(userMessage, "user");
    
    await processUserMessage(userMessage);
  }, [inputValue, isTyping, addMessage, processUserMessage]);

  const quickActions: QuickAction[] = [
    {
      id: "report-incident",
      label: language === "hi" ? "घटना रिपोर्ट करें" : "Report Incident",
      action: () => {
        addMessage("I need to report a police misconduct incident", "user");
        processUserMessage("I need to report a police misconduct incident");
      }
    },
    {
      id: "find-advocate", 
      label: language === "hi" ? "वकील खोजें" : "Find Advocate",
      action: () => {
        addMessage("I need legal representation", "user");
        processUserMessage("I need legal representation and advocate recommendations");
      }
    },
    {
      id: "track-case",
      label: language === "hi" ? "केस ट्रैक करें" : "Track My Case", 
      action: () => {
        addMessage("How can I track my case status?", "user");
        processUserMessage("How can I track my case status and hearing dates?");
      }
    },
    {
      id: "explain-rights",
      label: language === "hi" ? "मेरे अधिकार" : "Explain My Rights",
      action: () => {
        addMessage("What are my rights during police interaction?", "user");
        processUserMessage("What are my rights during police interaction and arrest?");
      }
    }
  ];

  const exportTranscript = useCallback(() => {
    const transcript = messages.map(msg => {
      const timestamp = msg.timestamp.toLocaleString();
      const sender = msg.type === "user" ? "YOU" : "LEGAL ASSISTANT";
      return `[${timestamp}] ${sender}: ${msg.content}`;
    }).join('\n\n');

    const blob = new Blob([transcript], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `legal-chat-transcript-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success("Transcript downloaded successfully");
  }, [messages]);

  const clearChat = useCallback(() => {
    setMessages([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("legal-chat-messages");
    }
    toast.success("Chat history cleared");
  }, []);

  const getSizeStyles = useCallback(() => {
    switch (size) {
      case "small":
        return "h-96 w-80";
      case "medium": 
        return "h-[32rem] w-96";
      case "expanded":
        return "h-[40rem] w-[28rem]";
      default:
        return "h-[32rem] w-96";
    }
  }, [size]);

  const handleAdvocateBooking = useCallback((advocate: typeof advocates[0]) => {
    setSelectedAdvocate(advocate);
    setShowBookingDialog(true);
  }, []);

  const BookingDialog = () => {
    if (!showBookingDialog || !selectedAdvocate) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setShowBookingDialog(false)}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-card border border-border rounded-lg p-6 w-full max-w-md"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Book Consultation</h3>
            <button
              onClick={() => setShowBookingDialog(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">{selectedAdvocate.name}</h4>
              <p className="text-sm text-muted-foreground">{selectedAdvocate.specialization}</p>
              <p className="text-sm text-muted-foreground">{selectedAdvocate.experience} experience</p>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Preferred Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 bg-input border border-border rounded-md"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Brief Description</label>
              <textarea
                placeholder="Briefly describe your legal matter..."
                className="w-full px-3 py-2 bg-input border border-border rounded-md resize-none h-20"
              />
            </div>
            
            <button
              onClick={() => {
                setShowBookingDialog(false);
                toast.success(`Consultation request sent to ${selectedAdvocate.name}`);
                addMessage(`I've sent a consultation request to ${selectedAdvocate.name}. They will contact you within 24 hours to confirm the appointment.`, "bot");
              }}
              className="w-full bg-primary text-primary-foreground py-2 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Send Request
            </button>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`fixed bottom-20 right-4 md:bottom-4 ${getSizeStyles()} bg-card border border-border rounded-lg shadow-2xl z-40 flex flex-col overflow-hidden`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-muted/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Legal Assistant</h3>
                  <p className="text-xs text-muted-foreground">
                    {isOffline ? "Offline" : "Online"}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-1">
                {/* Size controls */}
                <button
                  onClick={() => setSize(prev => 
                    prev === "small" ? "medium" : 
                    prev === "medium" ? "expanded" : "small"
                  )}
                  className="p-1.5 hover:bg-secondary rounded-md transition-colors"
                  title="Resize"
                >
                  {size === "small" && <ChevronUp className="w-4 h-4" />}
                  {size === "medium" && <ChevronUp className="w-4 h-4" />}
                  {size === "expanded" && <ChevronDown className="w-4 h-4" />}
                </button>
                
                {/* Language toggle */}
                <button
                  onClick={() => setLanguage(prev => prev === "en" ? "hi" : "en")}
                  className="p-1.5 hover:bg-secondary rounded-md transition-colors text-xs font-medium"
                  title="Switch Language"
                >
                  {language.toUpperCase()}
                </button>
                
                {/* Privacy toggle */}
                <button
                  onClick={() => setEphemeralMode(!ephemeralMode)}
                  className={`p-1.5 rounded-md transition-colors ${ephemeralMode ? 'bg-accent text-accent-foreground' : 'hover:bg-secondary'}`}
                  title="Ephemeral Mode"
                >
                  <Shield className="w-4 h-4" />
                </button>
                
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-secondary rounded-md transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div 
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50"
            >
              {messages.length === 0 && (
                <div className="text-center text-muted-foreground text-sm space-y-2">
                  <Bot className="w-8 h-8 mx-auto text-primary" />
                  <p>Hello! I'm your legal assistant.</p>
                  <p>I can help with police misconduct, legal rights, and connecting you with advocates.</p>
                </div>
              )}

              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] rounded-lg px-3 py-2 ${
                    message.type === "user" 
                      ? "bg-primary text-primary-foreground ml-auto" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    <div className="flex items-start gap-2">
                      {message.type === "bot" && (
                        <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      )}
                      {message.type === "user" && (
                        <User className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm whitespace-pre-line leading-relaxed">
                          {message.content}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="w-3 h-3" />
                          <span className="text-xs opacity-70">
                            {message.timestamp.toLocaleTimeString([], { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Advocate recommendations */}
              {messages.some(msg => msg.content.includes("recommend qualified advocates")) && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2"
                >
                  {advocates.map((advocate) => (
                    <div key={advocate.id} className="bg-card border border-border rounded-lg p-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{advocate.name}</h4>
                          <p className="text-xs text-muted-foreground">{advocate.specialization}</p>
                          <p className="text-xs text-muted-foreground">{advocate.experience}</p>
                          <p className="text-xs mt-1">{advocate.bio}</p>
                        </div>
                        <button
                          onClick={() => handleAdvocateBooking(advocate)}
                          className="ml-2 px-3 py-1 bg-primary text-primary-foreground text-xs rounded-md hover:bg-primary/90 transition-colors"
                        >
                          Book
                        </button>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-muted text-muted-foreground rounded-lg px-3 py-2 flex items-center gap-2">
                    <Bot className="w-4 h-4" />
                    <div className="flex gap-1">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        className="w-1 h-1 bg-current rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        className="w-1 h-1 bg-current rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        className="w-1 h-1 bg-current rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {isOffline && (
                <div className="text-center p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <p className="text-sm text-destructive">You're offline. Some features may not work.</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="mt-2 text-xs text-destructive hover:underline flex items-center gap-1 mx-auto"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Retry
                  </button>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-1">
                {quickActions.map((action) => (
                  <motion.button
                    key={action.id}
                    whileTap={{ scale: 0.95 }}
                    onClick={action.action}
                    className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md hover:bg-secondary/80 transition-colors"
                  >
                    {action.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="border-t border-border p-4 bg-muted/30">
              <div className="flex gap-2 mb-2">
                <button
                  onClick={exportTranscript}
                  disabled={messages.length === 0}
                  className="p-1.5 hover:bg-secondary rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Export Transcript"
                >
                  <Download className="w-4 h-4" />
                </button>
                <button
                  onClick={clearChat}
                  disabled={messages.length === 0}
                  className="p-1.5 hover:bg-secondary rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Clear Chat"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <div className="flex-1" />
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  {ephemeralMode && <Shield className="w-3 h-3" />}
                  <Globe className="w-3 h-3" />
                  <span>{language === "hi" ? "हिंदी" : "English"}</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <textarea
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                    placeholder={language === "hi" ? "कानूनी सहायता के लिए पूछें..." : "Ask for legal assistance..."}
                    className="w-full px-3 py-2 bg-input border border-border rounded-md resize-none pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    rows={1}
                    disabled={isOffline}
                  />
                  <button className="absolute right-2 top-2 p-1 hover:bg-secondary rounded-md transition-colors">
                    <Paperclip className="w-3 h-3" />
                  </button>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isTyping || isOffline}
                  className="p-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>

              {ephemeralMode && (
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  {language === "hi" ? "अस्थायी मोड सक्रिय - चैट सहेजी नहीं जाएगी" : "Ephemeral mode active - chat won't be saved"}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center z-30 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <MessageCircle className="w-6 h-6" />
        {unreadCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-xs font-medium"
          >
            {unreadCount}
          </motion.div>
        )}
      </motion.button>

      <BookingDialog />
    </>
  );
}
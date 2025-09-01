"use client";

import React, { useState, useCallback, useRef } from 'react';
import { 
  Forward, 
  FileCheck, 
  FileInput, 
  File, 
  FileX2, 
  Lock, 
  Check, 
  FileLock2, 
  ArrowUpFromLine, 
  OctagonX, 
  EyeOff, 
  ClipboardX 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';

interface FileUpload {
  id: string;
  file: File;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
  preview?: string;
  metadata: {
    type: string;
    size: string;
    timestamp: string;
  };
  tags: string[];
}

interface TimelineEvent {
  id: string;
  status: 'submitted' | 'assigned' | 'under-review' | 'action-taken';
  timestamp: string;
  description: string;
  expanded: boolean;
  notes?: string;
  contact?: string;
}

interface FormData {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  privacyConsent: boolean;
  witnessContact: string;
  witnessEncrypted: boolean;
  role: 'citizen' | 'advocate' | 'official';
  dataRetention: '30' | '90' | '365';
  redactionEnabled: boolean;
  metadataScrub: boolean;
}

const IncidentReport: React.FC = () => {
  const [files, setFiles] = useState<FileUpload[]>([]);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().slice(0, 5),
    location: '',
    description: '',
    privacyConsent: false,
    witnessContact: '',
    witnessEncrypted: false,
    role: 'citizen',
    dataRetention: '90',
    redactionEnabled: false,
    metadataScrub: true
  });
  const [timeline, setTimeline] = useState<TimelineEvent[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [traceId, setTraceId] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const generateTraceId = (): string => {
    return 'JL-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substr(2, 4).toUpperCase();
  };

  const createFilePreview = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target?.result as string);
        reader.readAsDataURL(file);
      } else {
        resolve('');
      }
    });
  };

  const handleFileUpload = useCallback(async (selectedFiles: FileList) => {
    const newFiles: FileUpload[] = [];
    
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const preview = await createFilePreview(file);
      
      const fileUpload: FileUpload = {
        id: Date.now().toString() + i,
        file,
        progress: 0,
        status: 'uploading',
        preview,
        metadata: {
          type: file.type,
          size: formatFileSize(file.size),
          timestamp: new Date().toLocaleString()
        },
        tags: ['location-auto', 'timestamp-verified']
      };
      
      newFiles.push(fileUpload);
    }

    setFiles(prev => [...prev, ...newFiles]);

    // Simulate upload progress
    newFiles.forEach((fileUpload) => {
      const interval = setInterval(() => {
        setFiles(prev => prev.map(f => {
          if (f.id === fileUpload.id && f.progress < 100) {
            const newProgress = f.progress + Math.random() * 20;
            if (newProgress >= 100) {
              clearInterval(interval);
              return { ...f, progress: 100, status: 'completed' };
            }
            return { ...f, progress: newProgress };
          }
          return f;
        }));
      }, 200);
    });
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files) {
      handleFileUpload(e.dataTransfer.files);
    }
  }, [handleFileUpload]);

  const removeFile = (fileId: string) => {
    setFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.description || !formData.privacyConsent) {
      toast.error('Please fill in all required fields and accept privacy consent');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate encryption process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newTraceId = generateTraceId();
    setTraceId(newTraceId);
    
    // Add initial timeline event
    const initialEvent: TimelineEvent = {
      id: Date.now().toString(),
      status: 'submitted',
      timestamp: new Date().toLocaleString(),
      description: 'Incident report submitted and encrypted',
      expanded: false,
      notes: 'Report submitted with ' + files.length + ' evidence files'
    };
    
    setTimeline([initialEvent]);
    setIsSubmitting(false);
    setShowConfirmation(true);
    
    toast.success('Incident report submitted successfully');
  };

  const toggleTimelineExpanded = (eventId: string) => {
    setTimeline(prev => prev.map(event => 
      event.id === eventId 
        ? { ...event, expanded: !event.expanded }
        : event
    ));
  };

  const copyTraceId = () => {
    if (traceId) {
      navigator.clipboard.writeText(traceId);
      toast.success('Trace ID copied to clipboard');
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
            Incident Report Portal
          </h1>
          <p className="text-muted-foreground">
            Securely document and submit incident evidence with full traceability
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Form and Evidence */}
          <div className="space-y-6">
            {/* Evidence Upload Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileInput className="h-5 w-5" />
                  Evidence Upload
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Drag and Drop Zone */}
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    dragOver ? 'border-primary bg-primary/5' : 'border-border'
                  }`}
                  onDrop={handleDrop}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragOver(true);
                  }}
                  onDragLeave={() => setDragOver(false)}
                >
                  <ArrowUpFromLine className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-lg font-medium mb-2">Drop files here or click to upload</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Support for photos, videos, and audio files
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <FileInput className="h-4 w-4 mr-2" />
                    Select Files
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*,video/*,audio/*"
                    className="hidden"
                    onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
                  />
                </div>

                {/* File List */}
                {files.length > 0 && (
                  <div className="space-y-3">
                    {files.map((fileUpload) => (
                      <div key={fileUpload.id} className="border rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          {fileUpload.preview ? (
                            <img
                              src={fileUpload.preview}
                              alt="Preview"
                              className={`w-16 h-16 object-cover rounded ${
                                formData.redactionEnabled ? 'blur-sm' : ''
                              }`}
                            />
                          ) : (
                            <div className="w-16 h-16 bg-muted rounded flex items-center justify-center">
                              <File className="h-8 w-8 text-muted-foreground" />
                            </div>
                          )}
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-2">
                              <p className="font-medium truncate">{fileUpload.file.name}</p>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeFile(fileUpload.id)}
                              >
                                <FileX2 className="h-4 w-4" />
                              </Button>
                            </div>
                            
                            <div className="text-sm text-muted-foreground space-y-1">
                              <p>{fileUpload.metadata.size} • {fileUpload.metadata.timestamp}</p>
                              <div className="flex gap-1 flex-wrap">
                                {fileUpload.tags.map((tag, index) => (
                                  <Badge key={index} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            {fileUpload.status === 'uploading' && (
                              <div className="mt-2">
                                <Progress value={fileUpload.progress} className="h-2" />
                                <p className="text-xs text-muted-foreground mt-1">
                                  {Math.round(fileUpload.progress)}% uploaded
                                </p>
                              </div>
                            )}
                            
                            {fileUpload.status === 'completed' && (
                              <div className="flex items-center gap-1 mt-2 text-green-500">
                                <Check className="h-4 w-4" />
                                <span className="text-xs">Upload complete</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Privacy Controls */}
                <div className="border-t pt-4 space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="redaction"
                      checked={formData.redactionEnabled}
                      onCheckedChange={(checked) => 
                        setFormData(prev => ({ ...prev, redactionEnabled: !!checked }))
                      }
                    />
                    <label htmlFor="redaction" className="text-sm">
                      Enable face redaction (preview only)
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="metadata"
                      checked={formData.metadataScrub}
                      onCheckedChange={(checked) => 
                        setFormData(prev => ({ ...prev, metadataScrub: !!checked }))
                      }
                    />
                    <label htmlFor="metadata" className="text-sm">
                      Remove location metadata before sharing
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Incident Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="h-5 w-5" />
                  Incident Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Incident Title *
                  </label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Brief description of the incident"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Date *</label>
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Time *</label>
                    <Input
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Location *</label>
                  <Input
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    placeholder="Enter incident location"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Description *
                  </label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Detailed description of the incident..."
                    rows={6}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Witness Contact (Optional)
                  </label>
                  <div className="space-y-2">
                    <Input
                      value={formData.witnessContact}
                      onChange={(e) => setFormData(prev => ({ ...prev, witnessContact: e.target.value }))}
                      placeholder="Witness contact information"
                    />
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="encrypt-witness"
                        checked={formData.witnessEncrypted}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, witnessEncrypted: !!checked }))
                        }
                      />
                      <label htmlFor="encrypt-witness" className="text-xs text-muted-foreground">
                        Encrypt witness information
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Data Retention Period
                  </label>
                  <Select 
                    value={formData.dataRetention} 
                    onValueChange={(value: '30' | '90' | '365') => 
                      setFormData(prev => ({ ...prev, dataRetention: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="90">90 days</SelectItem>
                      <SelectItem value="365">365 days</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground mt-1">
                    Data will be automatically deleted after this period
                  </p>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Role Preview
                  </label>
                  <Select 
                    value={formData.role} 
                    onValueChange={(value: 'citizen' | 'advocate' | 'official') => 
                      setFormData(prev => ({ ...prev, role: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="citizen">Citizen View</SelectItem>
                      <SelectItem value="advocate">Advocate View</SelectItem>
                      <SelectItem value="official">Official View</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="privacy-consent"
                      checked={formData.privacyConsent}
                      onCheckedChange={(checked) => 
                        setFormData(prev => ({ ...prev, privacyConsent: !!checked }))
                      }
                    />
                    <label htmlFor="privacy-consent" className="text-sm leading-relaxed">
                      I consent to the secure processing of this incident report and understand 
                      that my data will be handled according to privacy regulations. *
                    </label>
                  </div>
                </div>

                <Button 
                  onClick={handleSubmit} 
                  disabled={isSubmitting || !formData.privacyConsent}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <Lock className="h-4 w-4 mr-2 animate-spin" />
                      Encrypting & Submitting...
                    </>
                  ) : (
                    <>
                      <FileLock2 className="h-4 w-4 mr-2" />
                      Secure Submit
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Timeline and Tracking */}
          <div className="space-y-6">
            {/* Action Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Report Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                {timeline.length === 0 ? (
                  <div className="text-center py-8">
                    <ClipboardX className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      No incidents reported yet. Submit your first report to begin tracking.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {timeline.map((event, index) => (
                      <div key={event.id} className="relative">
                        {index !== timeline.length - 1 && (
                          <div className="absolute left-4 top-8 w-0.5 h-full bg-border" />
                        )}
                        
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                            <Check className="h-4 w-4 text-primary-foreground" />
                          </div>
                          
                          <div className="flex-1">
                            <div 
                              className="cursor-pointer"
                              onClick={() => toggleTimelineExpanded(event.id)}
                            >
                              <div className="flex items-center justify-between">
                                <Badge variant="secondary">
                                  {event.status.replace('-', ' ').toUpperCase()}
                                </Badge>
                                <span className="text-xs text-muted-foreground">
                                  {event.timestamp}
                                </span>
                              </div>
                              <p className="mt-1 text-sm">{event.description}</p>
                            </div>
                            
                            {event.expanded && event.notes && (
                              <div className="mt-2 p-3 bg-muted rounded-lg">
                                <p className="text-sm">{event.notes}</p>
                                {event.contact && (
                                  <Button variant="outline" size="sm" className="mt-2">
                                    Request Update
                                  </Button>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Trace Information */}
            {traceId && (
              <Card>
                <CardHeader>
                  <CardTitle>Traceability</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Trace ID</label>
                    <div className="flex items-center gap-2">
                      <Input value={traceId} readOnly />
                      <Button variant="outline" size="sm" onClick={copyTraceId}>
                        Copy
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" size="sm">
                      <FileCheck className="h-4 w-4 mr-2" />
                      Save PDF
                    </Button>
                    <Button variant="outline" size="sm">
                      <Forward className="h-4 w-4 mr-2" />
                      Share Link
                    </Button>
                  </div>

                  <Button variant="outline" className="w-full">
                    Forward to Cyber Cell
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Auto-forwarding Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Auto-forwarding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  This report will be automatically forwarded to:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Local Police Station</span>
                    <Checkbox defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Cyber Crime Cell</span>
                    <Checkbox defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">District Collector</span>
                    <Checkbox />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Confirmation Modal */}
        <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                Report Submitted Successfully
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <p className="font-medium mb-2">Your Trace ID:</p>
                <p className="font-mono text-lg">{traceId}</p>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p>• Your report has been encrypted and securely submitted</p>
                <p>• You will receive updates as the case progresses</p>
                <p>• Save your Trace ID for future reference</p>
              </div>
              
              <div className="flex gap-2">
                <Button onClick={copyTraceId} className="flex-1">
                  Copy Trace ID
                </Button>
                <Button variant="outline" onClick={() => setShowConfirmation(false)}>
                  Close
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default IncidentReport;
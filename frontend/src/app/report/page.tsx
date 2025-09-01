"use client";

import { SharedLayout } from '@/components/SharedLayout';
import { Upload, Video, FileText, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { useState, useRef } from 'react';
import { toast } from 'sonner';

export default function ReportPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    videoFile: null as File | null,
    privacyConsent: false
  });
  const [uploading, setUploading] = useState(false);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      setFormData(prev => ({ ...prev, videoFile: file }));
      toast.success('Video selected successfully');
    } else {
      toast.error('Please select a valid video file');
    }
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.description || !formData.privacyConsent) {
      toast.error('Please fill all required fields');
      return;
    }

    setUploading(true);
    // Simulate upload
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const traceId = 'JL-' + Date.now().toString(36).toUpperCase();
    toast.success(`Report submitted! Trace ID: ${traceId}`);
    setUploading(false);
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      location: '',
      videoFile: null,
      privacyConsent: false
    });
  };

  return (
    <SharedLayout>
      <div className="min-h-screen bg-white dark:bg-black py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold text-black dark:text-white mb-4">
              Report Incident
            </h1>
            <p className="text-lg text-black/60 dark:text-white/60">
              Secure evidence submission with full traceability
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Video Upload Section */}
            <Card className="border-black/10 dark:border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5" />
                  Video Evidence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div 
                    className="border-2 border-dashed border-black/20 dark:border-white/20 rounded-lg p-8 text-center cursor-pointer hover:border-black/40 dark:hover:border-white/40 transition-colors"
                    onClick={() => videoInputRef.current?.click()}
                  >
                    {formData.videoFile ? (
                      <div className="space-y-2">
                        <Video className="h-12 w-12 mx-auto text-black dark:text-white" />
                        <p className="font-medium text-black dark:text-white">
                          {formData.videoFile.name}
                        </p>
                        <p className="text-sm text-black/60 dark:text-white/60">
                          {(formData.videoFile.size / (1024 * 1024)).toFixed(2)} MB
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Upload className="h-12 w-12 mx-auto text-black/40 dark:text-white/40" />
                        <p className="text-lg font-medium text-black dark:text-white">
                          Upload Video Evidence
                        </p>
                        <p className="text-sm text-black/60 dark:text-white/60">
                          Click to select video file (Max 100MB)
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <input
                    ref={videoInputRef}
                    type="file"
                    accept="video/*"
                    className="hidden"
                    onChange={handleVideoUpload}
                  />

                  <div className="flex items-center gap-2 text-sm text-black/60 dark:text-white/60">
                    <Shield className="h-4 w-4" />
                    <span>End-to-end encrypted upload</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Incident Details */}
            <Card className="border-black/10 dark:border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Incident Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Input
                    placeholder="Incident title *"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    className="border-black/20 dark:border-white/20"
                  />
                </div>

                <div>
                  <Input
                    placeholder="Location"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    className="border-black/20 dark:border-white/20"
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Describe the incident *"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    rows={6}
                    className="border-black/20 dark:border-white/20"
                  />
                </div>

                <div className="flex items-start space-x-3 pt-4 border-t border-black/10 dark:border-white/10">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacyConsent}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, privacyConsent: !!checked }))
                    }
                  />
                  <label htmlFor="privacy" className="text-sm text-black/80 dark:text-white/80 leading-relaxed">
                    I consent to secure processing of this report and evidence
                  </label>
                </div>

                <Button 
                  onClick={handleSubmit}
                  disabled={uploading || !formData.privacyConsent}
                  className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80"
                  size="lg"
                >
                  {uploading ? (
                    <>
                      <Clock className="h-4 w-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Shield className="h-4 w-4 mr-2" />
                      Submit Report
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Info */}
          <div className="mt-8 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-black/60 dark:text-white/60">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Encrypted Storage</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Real-time Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Legal Documentation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SharedLayout>
  );
}
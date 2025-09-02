"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast, Toaster } from "sonner";

interface FormData {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  privacyConsent: boolean;
  witnessContact: string;
  role: "citizen" | "advocate" | "official";
  dataRetention: "30" | "90" | "365";
  videoLink: string;
}

const IncidentReport: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    date: new Date().toISOString().split("T")[0],
    time: new Date().toTimeString().slice(0, 5),
    location: "",
    description: "",
    privacyConsent: false,
    witnessContact: "",
    role: "citizen",
    dataRetention: "90",
    videoLink: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [traceId, setTraceId] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    emailjs.init("");
  }, []);

  const generateTraceId = (): string =>
    "JL-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(36).substr(2, 4).toUpperCase();

  const handleSubmit = async () => {
    if (!formData.title || !formData.description || !formData.privacyConsent) {
      toast.error("Please fill all required fields and accept privacy terms");
      return;
    }

    if (!formData.videoLink) {
      toast.error("Please provide a video link");
      return;
    }

    setIsSubmitting(true);
    const newTraceId = generateTraceId();
    setTraceId(newTraceId);

    try {
      const emailParams = {
        trace_id: newTraceId,
        title: formData.title,
        date: formData.date,
        time: formData.time,
        location: formData.location,
        description: formData.description,
        witness_contact: formData.witnessContact,
        role: formData.role,
        data_retention: formData.dataRetention + " days",
        video_link: formData.videoLink,
      };

      await emailjs.send("", "", emailParams);
      toast.success("Email sent successfully!");
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send email");
    }

    setIsSubmitting(false);
    setShowConfirmation(true);
  };

  const copyTraceId = () => {
    if (traceId) {
      navigator.clipboard.writeText(traceId);
      toast.success("Trace ID copied!");
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <Toaster position="top-right" richColors />
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Incident Report Form */}
        <Card>
          <CardHeader>
            <CardTitle>Incident Report</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
            <Input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
            <Input type="time" value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} />
            <Input placeholder="Location" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
            <Textarea placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
            <Checkbox checked={formData.privacyConsent} onCheckedChange={(val) => setFormData({ ...formData, privacyConsent: !!val })}>I agree to privacy terms</Checkbox>
            <Select value={formData.role} onValueChange={(val) => setFormData({ ...formData, role: val as FormData["role"] })}>
              <SelectTrigger><SelectValue placeholder="Role" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="citizen">Citizen</SelectItem>
                <SelectItem value="advocate">Advocate</SelectItem>
                <SelectItem value="official">Official</SelectItem>
              </SelectContent>
            </Select>
            <Select value={formData.dataRetention} onValueChange={(val) => setFormData({ ...formData, dataRetention: val as FormData["dataRetention"] })}>
              <SelectTrigger><SelectValue placeholder="Data Retention (days)" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="30">30</SelectItem>
                <SelectItem value="90">90</SelectItem>
                <SelectItem value="365">365</SelectItem>
              </SelectContent>
            </Select>

            {/* Video Link Input */}
            <Input placeholder="Paste Video Link" value={formData.videoLink} onChange={(e) => setFormData({ ...formData, videoLink: e.target.value })} />

            <Button onClick={handleSubmit}>{isSubmitting ? "Submitting..." : "Submit Report"}</Button>
          </CardContent>
        </Card>

        {/* Trace ID */}
        {traceId && (
          <Card>
            <CardHeader>
              <CardTitle>Trace ID</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <span>{traceId}</span>
              <Button size="sm" onClick={copyTraceId}>Copy</Button>
            </CardContent>
          </Card>
        )}

        {/* Confirmation Dialog */}
        <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Submission Successful</DialogTitle>
            </DialogHeader>
            <p>Your incident report has been submitted successfully.</p>
            {traceId && <p>Trace ID: {traceId}</p>}
            <Button onClick={() => setShowConfirmation(false)}>Close</Button>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default IncidentReport;

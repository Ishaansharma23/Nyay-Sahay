"use client";

import React, { useState, useCallback, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";

interface FileUpload {
  id: string;
  file: File;
  progress: number;
  status: "uploading" | "completed" | "error";
  preview?: string;
  metadata: {
    type: string;
    size: string;
    timestamp: string;
  };
}

interface TimelineEvent {
  id: string;
  status: "submitted" | "assigned" | "under-review" | "action-taken";
  timestamp: string;
  description: string;
  expanded: boolean;
  notes?: string;
}

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
  const [files, setFiles] = useState<FileUpload[]>([]);
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
  const [timeline, setTimeline] = useState<TimelineEvent[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [traceId, setTraceId] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const generateTraceId = (): string => {
    return "JL-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(36).substr(2, 4).toUpperCase();
  };

  const createFilePreview = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target?.result as string);
        reader.readAsDataURL(file);
      } else {
        resolve("");
      }
    });
  };

  const handleFileUpload = useCallback(async (selectedFiles: FileList) => {
    const newFiles: FileUpload[] = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const preview = await createFilePreview(file);
      newFiles.push({
        id: Date.now().toString() + i,
        file,
        progress: 0,
        status: "uploading",
        preview,
        metadata: {
          type: file.type,
          size: formatFileSize(file.size),
          timestamp: new Date().toLocaleString(),
        },
      });
    }
    setFiles((prev) => [...prev, ...newFiles]);

    // Simulate upload progress
    newFiles.forEach((fileUpload) => {
      const interval = setInterval(() => {
        setFiles((prev) =>
          prev.map((f) => {
            if (f.id === fileUpload.id && f.progress < 100) {
              const newProgress = f.progress + Math.random() * 20;
              if (newProgress >= 100) {
                clearInterval(interval);
                return { ...f, progress: 100, status: "completed" };
              }
              return { ...f, progress: newProgress };
            }
            return f;
          })
        );
      }, 200);
    });
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      if (e.dataTransfer.files) {
        handleFileUpload(e.dataTransfer.files);
      }
    },
    [handleFileUpload]
  );

  const removeFile = (fileId: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== fileId));
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.description || !formData.privacyConsent) {
      toast.error("Please fill all required fields and accept privacy terms");
      return;
    }

    if (!formData.videoLink && files.length === 0) {
      toast.error("Provide a video link or upload at least one file");
      return;
    }

    setIsSubmitting(true);

    const newTraceId = generateTraceId();
    setTraceId(newTraceId);

    // Timeline
    setTimeline([
      {
        id: Date.now().toString(),
        status: "submitted",
        timestamp: new Date().toLocaleString(),
        description: "Incident report submitted",
        expanded: false,
        notes: `Report includes ${files.length} file(s) and video link.`,
      },
    ]);

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
        files_list: files.map((f) => f.file.name).join(", "),
        video_link: formData.videoLink,
      };

      await emailjs.send("service_pscxtvc", "template_sdmj8ip", emailParams, "42z0n9xicOJzfIpLW");

      toast.success("Email sent successfully!");
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send email");
    }

    setIsSubmitting(false);
    setShowConfirmation(true);
  };

  const toggleTimelineExpanded = (eventId: string) => {
    setTimeline((prev) =>
      prev.map((event) => (event.id === eventId ? { ...event, expanded: !event.expanded } : event))
    );
  };

  const copyTraceId = () => {
    if (traceId) {
      navigator.clipboard.writeText(traceId);
      toast.success("Trace ID copied!");
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
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
            <Checkbox checked={formData.privacyConsent} onCheckedChange={(val) => setFormData({ ...formData, privacyConsent: !!val })}>
              I agree to privacy terms
            </Checkbox>
            <Select value={formData.role} onValueChange={(val) => setFormData({ ...formData, role: val as FormData["role"] })}>
              <SelectTrigger>
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="citizen">Citizen</SelectItem>
                <SelectItem value="advocate">Advocate</SelectItem>
                <SelectItem value="official">Official</SelectItem>
              </SelectContent>
            </Select>
            <Select value={formData.dataRetention} onValueChange={(val) => setFormData({ ...formData, dataRetention: val as FormData["dataRetention"] })}>
              <SelectTrigger>
                <SelectValue placeholder="Data Retention (days)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">30</SelectItem>
                <SelectItem value="90">90</SelectItem>
                <SelectItem value="365">365</SelectItem>
              </SelectContent>
            </Select>

            {/* Video Link Input */}
            <Input placeholder="Paste Video Link" value={formData.videoLink} onChange={(e) => setFormData({ ...formData, videoLink: e.target.value })} />

            {/* File Upload */}
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              className={`border-dashed border-2 p-4 text-center cursor-pointer ${dragOver ? "border-blue-500" : "border-gray-300"}`}
              onClick={() => fileInputRef.current?.click()}
            >
              <p>Drag & drop files here or click to select</p>
              <input type="file" multiple ref={fileInputRef} className="hidden" onChange={(e) => e.target.files && handleFileUpload(e.target.files)} />
            </div>

            {/* Uploaded Files */}
            <div className="space-y-2">
              {files.map((f) => (
                <div key={f.id} className="flex items-center justify-between">
                  <span>{f.file.name} ({f.metadata.size})</span>
                  <Progress value={f.progress} className="flex-1 mx-2" />
                  <Button variant="destructive" size="sm" onClick={() => removeFile(f.id)}>Remove</Button>
                </div>
              ))}
            </div>

            <Button onClick={handleSubmit}>{isSubmitting ? "Submitting..." : "Submit Report"}</Button>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card>
          <CardHeader>
            <CardTitle>Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            {timeline.map((event) => (
              <div key={event.id} className="border p-2 mb-2 rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <Badge variant="secondary">{event.status}</Badge>
                    <span className="ml-2 text-sm text-gray-500">{event.timestamp}</span>
                  </div>
                  <Button size="sm" onClick={() => toggleTimelineExpanded(event.id)}>{event.expanded ? "Collapse" : "Expand"}</Button>
                </div>
                {event.expanded && <p className="mt-2">{event.description}</p>}
                {event.expanded && event.notes && <p className="mt-1 text-sm text-gray-600">{event.notes}</p>}
              </div>
            ))}
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


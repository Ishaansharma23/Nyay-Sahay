"use client";

import React, { useState, useCallback, useRef } from "react";
import emailjs from "@emailjs/browser";
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
  ClipboardX,
} from "lucide-react";
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
  tags: string[];
}

interface TimelineEvent {
  id: string;
  status: "submitted" | "assigned" | "under-review" | "action-taken";
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
  role: "citizen" | "advocate" | "official";
  dataRetention: "30" | "90" | "365";
  redactionEnabled: boolean;
  metadataScrub: boolean;
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
    witnessEncrypted: false,
    role: "citizen",
    dataRetention: "90",
    redactionEnabled: false,
    metadataScrub: true,
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
      const fileUpload: FileUpload = {
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
        tags: ["location-auto", "timestamp-verified"],
      };
      newFiles.push(fileUpload);
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
      toast.error("Please fill in all required fields and accept privacy consent");
      return;
    }

    setIsSubmitting(true);

    // Simulate encryption process
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const newTraceId = generateTraceId();
    setTraceId(newTraceId);

    // Add initial timeline event
    const initialEvent: TimelineEvent = {
      id: Date.now().toString(),
      status: "submitted",
      timestamp: new Date().toLocaleString(),
      description: "Incident report submitted and encrypted",
      expanded: false,
      notes: "Report submitted with " + files.length + " evidence files",
    };
    setTimeline([initialEvent]);

    // Send email via EmailJS
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
      };

      await emailjs.send(
        "service_pscxtvc", // your service ID
        "template_sdmj8ip", // your template ID
        emailParams,
        "42z0n9xicOJzfIpLW" // your public key
      );

      toast.success("Email sent successfully!");
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send email");
    }

    setIsSubmitting(false);
    setShowConfirmation(true);

    toast.success("Incident report submitted successfully");
  };

  const toggleTimelineExpanded = (eventId: string) => {
    setTimeline((prev) =>
      prev.map((event) => (event.id === eventId ? { ...event, expanded: !event.expanded } : event))
    );
  };

  const copyTraceId = () => {
    if (traceId) {
      navigator.clipboard.writeText(traceId);
      toast.success("Trace ID copied to clipboard");
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto">
        {/* Rest of your JSX remains unchanged */}
        {/* Form, File Upload, Timeline, Traceability, Confirmation Modal */}
        {/* Just make sure the handleSubmit now includes EmailJS */}
      </div>
    </div>
  );
};

export default IncidentReport;

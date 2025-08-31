import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "न्याय Sahay - Bridging Citizens with Justice Through AI & Technology",
  description: "Empowering Citizens. Enabling Justice. A comprehensive AI-powered legal-tech platform for incident reporting, legal guidance, advocate connections, and judicial tracking.",
  keywords: "legal tech, justice, AI chatbot, incident reporting, advocate marketplace, judicial dashboard, legal rights",
  authors: [{ name: "न्याय Sahay Team" }],
  creator: "न्याय Sahay",
  openGraph: {
    title: "न्याय Sahay - Bridging Citizens with Justice",
    description: "AI-powered legal platform empowering citizens with justice access",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "न्याय Sahay", "version": "1.0.0", "greeting": "Welcome to JusticeLink"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
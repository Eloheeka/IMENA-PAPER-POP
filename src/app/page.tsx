"use client";
import { useState } from "react";
import InvitationForm from "./components/ui/InvitationForm";
import { InvitationPreview } from "./components/ui/InvitationPreview";
import type { InvitationData } from "./types/index";
import "./globals.css";

export default function AdminPortal() {
  const [data, setData] = useState<InvitationData>({
    title: "",
    date: "",
    location: "",
  });

  const handleDownload = () => {
    console.log("Download invitation", data);
  };

  return (
    
  <div className="min-h-screen bg-gray-50 px-6 py-6">
    {/* Header */}
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-xl font-semibold">Family Portal</h1>

      <button
        onClick={handleDownload}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
      >
        Download PDF
      </button>
    </div>

    {/* Main Content */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* LEFT: Form */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <InvitationForm
          data={data}
          onChange={setData}
          onDownload={handleDownload}
        />
      </div>

      {/* RIGHT: Live Preview */}
      <div>
        <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
          👁 Live Preview
        </div>

        <InvitationPreview data={data} />
      </div>
    </div>
  </div>
);


}

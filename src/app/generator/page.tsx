"use client";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function GeneratorPage() {
  const downloadPDF = async () => {
    const element = document.getElementById("invitation-card");
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    // Center the image in the PDF
    pdf.addImage(imgData, "PNG", 10, 10, 190, 250);
    pdf.save("Imena-Invitation.pdf");
  };

  return (
    <div className="p-10">
      {/* This is the card that will be downloaded */}
      <div
        id="invitation-card"
        className="w-[600px] h-[800px] bg-white shadow-lg p-6"
      >
        <h1 className="text-3xl font-bold">Imena Invitation</h1>
        <p>You're invited!</p>
      </div>

      <button
        onClick={downloadPDF}
        className="mt-6 px-6 py-2 bg-black text-white rounded"
      >
        Download PDF
      </button>
    </div>
  );
}

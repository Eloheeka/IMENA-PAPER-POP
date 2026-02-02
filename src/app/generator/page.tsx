import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const downloadPDF = async () => {
  const element = document.getElementById('invitation-card');
  if (!element) return;

  const canvas = await html2canvas(element, { scale: 2 });
  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF('p', 'mm', 'a4');
  
  // Center the image in the PDF
  pdf.addImage(imgData, 'PNG', 10, 10, 190, 250);
  pdf.save('Imena-Invitation.pdf');
};
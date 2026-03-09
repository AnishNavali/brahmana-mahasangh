/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Download, Printer, CheckCircle2, ChevronDown, ImageIcon, FileJson, FileText } from "lucide-react";
import { toast } from "sonner";
import * as htmlToImage from "html-to-image";
import jsPDF from "jspdf";
import { useRef } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface MembershipCompleteData {
  membershipType: string;
  membershipPlan: string;
  membershipPrice: number;
  transactionId: string;
  paymentMethod: string;
  paymentDate: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  gotra?: string;
  photo?: string;
  address?: string;
}

export default function MembershipCard() {
  const router = useRouter();
  const [membershipData, setMembershipData] = useState<MembershipCompleteData | null>(null);
  const [membershipId, setMembershipId] = useState<string>("");
  const [showFullId, setShowFullId] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("membershipComplete");
    if (storedData) {
      const data = JSON.parse(storedData);
      setMembershipData(data);

      const timestamp = Date.now();
      const random = Math.random().toString(36).substring(2, 8).toUpperCase();
      const generatedId = `ABBM${timestamp}${random}`;
      setMembershipId(generatedId);
    } else {
      router.push("/");
    }
  }, [router]);

  const downloadFile = (dataUrl: string, filename: string) => {
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadImage = async (format: "png" | "jpeg") => {
    if (!cardRef.current) return;
    setIsDownloading(true);

    try {
      let dataUrl: string;
      if (format === "png") {
        dataUrl = await htmlToImage.toPng(cardRef.current, {
          backgroundColor: "#ffffff",
          pixelRatio: 2,
          cacheBust: true,
        });
      } else {
        dataUrl = await htmlToImage.toJpeg(cardRef.current, {
          backgroundColor: "#ffffff",
          pixelRatio: 2,
          quality: 0.95,
          cacheBust: true,
        });
      }

      downloadFile(dataUrl, `membership_${membershipId}.${format}`);
      toast.success(`Card downloaded as ${format.toUpperCase()}!`);
    } catch (error) {
      console.error("Image export error:", error);
      toast.error("Failed to download image");
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDownloadPDF = async () => {
    if (!cardRef.current) return;
    setIsDownloading(true);

    try {
      const dataUrl = await htmlToImage.toPng(cardRef.current, {
        backgroundColor: "#ffffff",
        pixelRatio: 2,
        cacheBust: true,
      });

      // Create an image to get dimensions
      const img = new window.Image();
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = dataUrl;
      });

      const imgWidth = img.width;
      const imgHeight = img.height;

      // A4 dimensions in points (72 DPI)
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "a4",
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 40;
      const contentWidth = pageWidth - margin * 2;

      // Scale image to fit page width
      const scale = contentWidth / imgWidth;
      const scaledHeight = imgHeight * scale;

      pdf.addImage(dataUrl, "PNG", margin, margin, contentWidth, scaledHeight);
      pdf.save(`membership_${membershipId}.pdf`);
      toast.success("Card downloaded as PDF!");
    } catch (error) {
      console.error("PDF export error:", error);
      toast.error("Failed to download PDF");
    } finally {
      setIsDownloading(false);
    }
  };



  const handlePrint = () => {
    window.print();
    toast.success("Print dialog opened");
  };

  if (!membershipData) {
    return (
      <div className=" flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto" />
          <p className="text-gray-600">Loading membership details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 print:bg-white print:py-0">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Success Header (Hidden on print) */}
        <div className="text-center mb-10 no-print">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-orange-500 p-4 text-white shadow-md">
              <CheckCircle2 className="h-10 w-10" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Registration Complete!
          </h1>
          <p className="text-gray-600">
            You can now download or print your membership card below
          </p>
        </div>

        {/* Simplified Membership Card - PAN Card Size (approx 400x252px) */}
        <div ref={cardRef} className="no-shadow print:shadow-none">
          <Card className="w-[500px] h-[302px] border-2 border-blue-800 bg-white overflow-hidden shadow-xl rounded-xl">
            <CardHeader className="bg-blue-800 text-white p-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full p-1 border border-blue-900">
                  <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <CardTitle className="text-[12px] font-bold leading-tight">
                    Akhila Bharatiya Brahmana Mahasangh
                  </CardTitle>
                  <p className="text-[10px] font-medium opacity-90 tracking-widest uppercase">
                    Membership ID Card
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-4 flex gap-4 h-[calc(252px-64px)]">
              {/* Photo Section */}
              <div className="flex-shrink-0">
                <div className="w-[90px] h-[110px] bg-gray-100 border-2 border-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                  {membershipData.photo ? (
                    <img
                      src={membershipData.photo}
                      alt="Member"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <ImageIcon className="w-8 h-8 text-gray-300" />
                  )}
                </div>
                <div className="mt-3 text-center">
                  <span className="inline-block px-3 py-0.5 rounded-full bg-orange-100 text-orange-700 text-[10px] font-bold uppercase border border-orange-200">
                    Active
                  </span>
                </div>
              </div>

              {/* Data Section */}
              <div className="flex-grow flex flex-col space-y-3.5 pt-1">
                <div>
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Member Name</p>
                  <p className="text-[16px] font-extrabold text-blue-900 leading-none truncate">
                    {membershipData.firstName || "Member"} {membershipData.lastName || ""}
                  </p>
                </div>

                <div>
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Membership ID</p>
                  <p className="text-[13px] font-mono font-bold text-gray-800 leading-none">
                    {membershipId}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Gotra</p>
                    <p className="text-[12px] font-bold text-gray-800 leading-none capitalize truncate">
                      {membershipData.gotra || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="text-[12px] font-bold text-gray-800 leading-none">
                      {membershipData.phone || "N/A"}
                    </p>
                  </div>
                </div>

                {/* Footer seal or logo watermark */}
                <div className="mt-auto flex justify-between items-end pb-1 border-t border-gray-100 pt-2">
                  <p className="text-[8px] text-gray-400 italic font-medium">Original Member Identification</p>
                  <CheckCircle2 className="h-4 w-4 text-blue-800/20" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Member Info (Reference Only) */}
        <div className="mt-8 w-full max-w-lg no-print">
          <Card className="bg-gray-50 border-dashed border-2">
            <CardContent className="p-5">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Registration Details</h3>
              <div className="grid grid-cols-2 gap-y-3 text-sm">
                <span className="text-gray-500">Email:</span>
                <span className="font-semibold text-gray-900">{membershipData.email || "N/A"}</span>

                <span className="text-gray-500">Address/Dist:</span>
                <span className="font-semibold text-gray-900">{membershipData.address || "N/A"}</span>

                <span className="text-gray-500">Plan:</span>
                <span className="font-semibold text-blue-700">{membershipData.membershipPlan}</span>

                <span className="text-gray-500">Amount:</span>
                <span className="font-semibold text-gray-900">₹{membershipData.membershipPrice.toLocaleString("en-IN")}</span>

                <span className="text-gray-500">Txn Date:</span>
                <span className="font-semibold text-gray-900">
                  {new Date(membershipData.paymentDate).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                  })}
                </span>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default" className="flex-1 bg-blue-800 hover:bg-blue-900" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download Card
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white">
                <DropdownMenuItem onClick={() => handleDownloadImage("png")}>
                  <ImageIcon className="mr-2 h-4 w-4" /> PNG Image
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleDownloadPDF}>
                  <FileText className="mr-2 h-4 w-4" /> PDF Document
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" className="flex-1 border-2 border-blue-800 text-blue-800" size="lg" onClick={handlePrint}>
              <Printer className="mr-2 h-4 w-4" />
              Print Card
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-400 no-print">
          <p>© {new Date().getFullYear()} Akhila Bharatiya Brahmana Mahasangh</p>
          <p className="mt-1">For support, please contact support@abbm.org</p>
        </div>
      </div>
    </div>
  );
}
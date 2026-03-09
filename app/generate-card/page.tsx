/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import MembershipCard from "../../components/membership/MembershipCard";

export default function GenerateCardPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    // Check if membership data exists in localStorage
    const storedData = localStorage.getItem("membershipComplete");

    if (storedData) {
      // Set state together to avoid cascading renders
      setHasData(true);
      setIsLoading(false);
    } else {
      // Redirect if no data found
      router.push("/");
    }
  }, [router]);

  // Show loading state during hydration and data check
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  // Only render MembershipCard if data exists
  if (!hasData) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="flex flex-col w-full pb-20 font-sans">
      <section className="bg-[#89151e] py-16 text-white text-center">
        <h1 className="text-4xl font-black uppercase tracking-widest leading-tight">Generate Card</h1>
        <div className="flex justify-center gap-2 mt-4 text-[11px] font-bold uppercase text-white/70 tracking-[0.2em]">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <span className="text-white">Generate Card</span>
        </div>
      </section>
      <div className="container mx-auto py-12 px-4">
        <MembershipCard />
      </div>
    </div>
  );
}
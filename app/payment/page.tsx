/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useEffect, useState } from 'react';
import PaymentScreen from '../../components/membership/PaymentScreen';
import { useRouter } from 'next/navigation';

export default function PaymentPage() {
  const router = useRouter();
  const [membershipData, setMembershipData] = useState<{
    membershipType: string;
    membershipPlan: string;
    membershipPrice: number;
  } | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem('selectedMembership');
    if (storedData) {
      setMembershipData(JSON.parse(storedData));
    } else {
      // Redirect back if no data
      router.push('/');
    }
  }, [router]);

  if (!membershipData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
          <p className="text-muted-foreground">Loading payment details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full pb-20 font-sans">
      <section className="bg-[#89151e] py-16 text-white text-center">
        <h1 className="text-4xl font-black uppercase tracking-widest leading-tight">Payment</h1>
        <div className="flex justify-center gap-2 mt-4 text-[11px] font-bold uppercase text-white/70 tracking-[0.2em]">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <span className="text-white">Payment</span>
        </div>
      </section>
      <div className="container mx-auto py-12 px-4">
        <PaymentScreen membershipData={membershipData} />
      </div>
    </div>
  );
}
"use client";

import RegistrationForm from "../../components/membership/RegistrationForm";

export default function RegistrationPage() {
  return (
    <div className="flex flex-col w-full pb-20 font-sans">
      {/* Page Header - Ditto BG Color #89151e */}
      <section className="bg-[#89151e] py-16 text-white text-center">
        <h1 className="text-4xl font-black uppercase tracking-widest leading-tight">Membership</h1>
        <div className="flex justify-center gap-2 mt-4 text-[11px] font-bold uppercase text-white/70 tracking-[0.2em]">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <span className="text-white">Membership</span>
        </div>
      </section>

      <div className="container mx-auto py-12 px-4">
        <RegistrationForm />
      </div>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events – Akhila Bharatiya Brahmana Mahasangha",
};

import { Calendar, MapPin, ChevronRight } from "lucide-react";

export default function EventsPage() {
  const events = [
    {
      title: "Viprostava 2026",
      date: "Aug 15, 2026",
      place: "Bangalore",
      desc: "Annual gathering for spiritual and social networking."
    },
    {
      title: "Vedic Rites Workshop",
      date: "Oct 10, 2026",
      place: "Hubli",
      desc: "Comprehensive session for Vedic learning."
    },
    {
      title: "Geeta Chanting Competition",
      date: "Dec 25, 2026",
      place: "Dharwad",
      desc: "Promoting traditional chanting among youth."
    }
  ];

  return (
    <div className="flex flex-col w-full pb-20 font-sans">
      <section className="bg-[#89151e] py-16 text-white text-center">
        <h1 className="text-4xl font-black uppercase tracking-widest leading-tight">Events</h1>
        <div className="flex justify-center gap-2 mt-4 text-[11px] font-bold uppercase text-white/70 tracking-[0.2em]">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <span className="text-white">Events</span>
        </div>
      </section>

      <div className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="p-10 bg-gray-50 border-l-8 border-[#89151e] italic font-bold text-gray-800 leading-relaxed shadow-sm">
              <p className="text-xl text-[#193a43]">
                "Tyāgo Guṇo Vittavatāṁ Vitaṁ Tyāgavatāṁ Guṇaḥ. Parasparaviyuktau Tu Vittatyāgau Vidambanā."
              </p>
              <p className="text-sm mt-4 text-gray-500 not-italic font-medium uppercase tracking-widest">
                Meaning: It is an ironical fact that wealth and generosity do not always go together.
              </p>
            </div>

            <div className="space-y-10">
              {events.map((event, i) => (
                <div key={i} className="group bg-white border border-gray-100 shadow-sm p-8 flex flex-col md:flex-row gap-10 items-center hover:shadow-2xl transition-all duration-400 rounded-sm">
                  <div className="w-full md:w-1/3 h-60 rounded-sm bg-gray-100 overflow-hidden relative shadow-lg">
                    <img
                      src={`https://images.unsplash.com/photo-1544928147-79a29bcbd890?q=80&w=600&auto=format&fit=crop`}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-0 right-0 bg-[#89151e] text-white px-6 py-3 font-black text-lg">
                      2026
                    </div>
                  </div>
                  <div className="flex-1 space-y-6">
                    <h3 className="text-3xl font-bold text-gray-900 group-hover:text-[#89151e] transition-colors tracking-tight">{event.title}</h3>
                    <div className="flex flex-wrap gap-6 text-sm text-[#89151e] font-bold uppercase tracking-widest">
                      <span className="flex items-center gap-2 bg-red-50 px-3 py-1 rounded-sm"><Calendar size={16} /> {event.date}</span>
                      <span className="flex items-center gap-2 bg-red-50 px-3 py-1 rounded-sm"><MapPin size={16} /> {event.place}</span>
                    </div>
                    <p className="text-[#193a43] leading-relaxed text-lg">
                      {event.desc}
                    </p>
                    <button className="inline-flex items-center gap-2 text-[#89151e] font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all">
                      View Event Details <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

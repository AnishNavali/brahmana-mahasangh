import Link from "next/link";
import { ChevronRight, Heart, Users, GraduationCap, Globe } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section - Exact Ditro Replica */}
      <section
        className="relative h-[700px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url("https://abbm.in/wp-content/uploads/2023/06/Banner-4-min.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >

        {/* Mandala Pattern Overlay (Left/Right) - Replicating the Screenshot */}
        <div className="absolute left-[-5%] sm:left-[-10%] top-1/2 -translate-y-1/2 h-[80%] opacity-30 pointer-events-none">
          <img src="https://abbm.in/wp-content/uploads/2023/04/mandala.png" className="h-full object-contain" alt="Mandala Left" />
        </div>
        <div className="absolute right-[-5%] sm:right-[-10%] top-1/2 -translate-y-1/2 h-[80%] opacity-30 pointer-events-none scale-x-[-1]">
          <img src="https://abbm.in/wp-content/uploads/2023/04/mandala.png" className="h-full object-contain" alt="Mandala Right" />
        </div>

        {/* Swamiji Center Image */}
        {/* <div className="relative z-10 w-full h-full flex items-end justify-center pt-20">
          <img
            src="https://abbm.in/wp-content/uploads/2023/04/1-1.png"
            alt="Swamiji"
            className="h-[90%] object-contain object-bottom drop-shadow-2xl"
          />
        </div> */}
      </section>

      {/* Welcome Section - Ditto Copy */}
      <section
        className="section-padding relative overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)), url("https://abbm.in/wp-content/uploads/2023/04/abbmpre.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Welcome To Akhila Bharathiya Brahamana Mahasanga
            </h2>
            <h2 className="text-xl font-medium tracking-[0.2em] uppercase text-yellow-400">
              Dharmo Rakshati Rakshitaha
            </h2>
            <div className="w-20 h-1 bg-[#89151e] mx-auto"></div>
            <p className="text-[#193a43] text-lg leading-relaxed font-medium italic">
              "Promoting community service, Vedic values, and spiritual growth through
              dedicated volunteerism and holistic messages."
            </p>
            <Link
              href="/about-us"
              className="inline-block border-2 border-[#89151e] text-[#89151e] hover:bg-[#89151e] hover:text-white font-bold px-10 py-3 transition-all rounded-sm"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section - Ditto Copy */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-[#89151e] uppercase tracking-wider">Mission Of ABBMS</h2>
              <div className="space-y-6 text-[#193a43] leading-relaxed text-lg text-justify">
                <p>
                  ABBMS serves as a main house to deliver inspirational and holistic messages through
                  Society speakers and promote community service by volunteerism of talent and skills.
                  The organization will aim at creating a healthy experience for the community.
                </p>
                <p>
                  The focus is for participants is to develop and enhance core human & Vedic values by
                  practicing kindness, tolerance, transparency and respect for all. To create a
                  suitable venue for Individual , Education for children and Youth, and to Serve
                  the Community & Society by providing Vedic Rites and spiritual Services.
                  Events like Yajnas ,Vedas, shloka/Geeta Chanting ,Training for children and
                  adults, Sanskrit Language Class, Yoga Classes promoting a healthy lifestyle, etc….
                </p>
              </div>

              {/* Traditional Quotes */}
              <div className="p-8 border-l-4 border-[#89151e] bg-red-50/50 space-y-4 font-bold italic text-gray-800">
                <p className="text-xl">"Acharaḥ Paramo Dharmaḥ Achāraḥ Paramaṁ Tapaḥ. Achāraḥ Paramaṁ Gyānaṁ Achārāktiṁ Na Sādhyate."</p>
                <p className="text-sm text-gray-600">
                  Following customs of a religion, is the best of all Dharma. Following customs of a religion,
                  is the best of all Meditation. Following customs of a religion, is the best of all Knowledge.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://abbm.in/wp-content/uploads/2022/05/3479479.jpg"
                alt="Mission ABBM"
                className="rounded-lg shadow-[30px_30px_0px_#89151e] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links / CTA Section */}
      <section className="py-16 bg-[#89151e] text-white">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold uppercase tracking-tighter">Let’s Keep In Touch!</h2>
            <p className="text-white/80 text-xl font-medium">Join us in promoting Brahmanya and traditional values.</p>
          </div>
          <Link
            href="/registrationForm"
            className="bg-white text-[#89151e] px-12 py-5 font-bold text-xl hover:scale-105 transition-transform rounded-sm shadow-xl"
          >
            MEMBERSHIP
          </Link>
        </div>
      </section>
    </div>
  );
}
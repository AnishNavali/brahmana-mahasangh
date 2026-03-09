import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gallery – Akhila Bharatiya Brahmana Mahasangha",
};

export default function GalleryPage() {
    const categories = ["VIPROSTAVA - 2026", "VIPROSTAVA - 2024", "SPIRITUALITY", "ACTIVITIES"];

    const images = [
        "https://abbm.in/wp-content/uploads/2024/09/event-banner-new.jpg",
        "https://abbm.in/wp-content/uploads/2021/11/aboutusnew.jpg",
        "https://abbm.in/wp-content/uploads/2021/11/headerbackgroundnew.jpg",
        "https://images.unsplash.com/photo-1544928147-79a29bcbd890?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1528605248644-14dd04cb11c1?q=80&w=800&auto=format&fit=crop",
    ];

    return (
        <div className="flex flex-col w-full pb-20 font-sans">
            <section className="bg-[#89151e] py-16 text-white text-center">
                <h1 className="text-4xl font-black uppercase tracking-widest leading-tight">Gallery</h1>
                <div className="flex justify-center gap-2 mt-4 text-[11px] font-bold uppercase text-white/70 tracking-[0.2em]">
                    <a href="/" className="hover:text-white transition-colors">Home</a>
                    <span>/</span>
                    <span className="text-white">Gallery</span>
                </div>
            </section>

            <div className="section-padding">
                <div className="container">
                    <div className="max-w-6xl mx-auto space-y-20">
                        <div className="p-12 bg-white border border-gray-100 italic font-bold text-gray-800 leading-relaxed text-center shadow-xl rounded-sm">
                            <p className="max-w-2xl mx-auto text-xl text-[#193a43]">
                                “Yathā Khanan Khanitreṇa Naro Vāyordhigacchati. Tatha Gurugatāṁ Vidyāṁ Śuśrūṣuradhigacchati.”
                            </p>
                            <div className="w-16 h-1 bg-[#89151e] mx-auto my-8"></div>
                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                                The more profound one burrows the earth, the more water he gets.
                                Likewise, the more an understudy serves the expert, the more he accomplishes information.
                            </p>
                        </div>

                        <div className="space-y-12">
                            <div className="flex gap-2 overflow-x-auto pb-6 justify-center">
                                {categories.map((cat, i) => (
                                    <button key={cat} className={`px-8 py-3 font-bold uppercase tracking-widest text-xs transition-all duration-400 rounded-sm ${i === 0 ? 'bg-[#89151e] text-white shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-[#89151e] hover:text-white'}`}>
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {images.map((img, i) => (
                                    <div key={i} className="group relative aspect-[4/3] overflow-hidden shadow-2xl rounded-sm">
                                        <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                        <div className="absolute inset-0 bg-[#89151e]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                                            <p className="text-white font-black uppercase tracking-[0.3em] text-sm border-b-2 border-white pb-2 px-4 whitespace-nowrap overflow-hidden text-ellipsis">Viprostava</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

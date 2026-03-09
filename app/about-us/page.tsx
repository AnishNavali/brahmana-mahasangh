import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About us – Akhila Bharatiya Brahmana Mahasangha",
};

export default function AboutUsPage() {
    return (
        <div className="flex flex-col w-full pb-20 font-sans">
            {/* Page Header - Ditto BG Color #89151e */}
            <section className="bg-[#89151e] py-16 text-white text-center">
                <h1 className="text-4xl font-black uppercase tracking-widest leading-tight">About Us</h1>
                <div className="flex justify-center gap-2 mt-4 text-[11px] font-bold uppercase text-white/70 tracking-[0.2em]">
                    <a href="/" className="hover:text-white transition-colors">Home</a>
                    <span>/</span>
                    <span className="text-white">About Us</span>
                </div>
            </section>

            {/* Content Section - Exact Copy */}
            <div className="section-padding">
                <div className="container">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold text-[#89151e] uppercase tracking-wider">Mission of ABBMS</h2>
                            <div className="space-y-6 text-[#193a43] leading-relaxed text-lg text-justify">
                                <p>
                                    ABBMS serves as a main house to deliver inspirational and holistic messages through Society speakers
                                    and promote community service by volunteerism of talent and skills. The organization will aim at
                                    creating a healthy experience for the community.
                                </p>
                                <p>
                                    The focus is for participants is to develop and enhance core human & Vedic values by practicing
                                    kindness, tolerance, transparency and respect for all. To create a suitable venue for Individual ,
                                    Education for children and Youth, and to Serve the Community & Society by providing Vedic Rites
                                    and spiritual Services. Events like Yajnas ,Vedas, shloka/Geeta Chanting ,Training for children
                                    and adults, Sanskrit Language Class, Yoga Classes promoting a healthy lifestyle, etc….
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://abbm.in/wp-content/uploads/2021/11/aboutusnew.jpg"
                                alt="About Us ABBM"
                                className="rounded-lg shadow-[30px_30px_0px_#89151e] w-full"
                            />
                        </div>
                    </div>

                    {/* Philosophy Quotes */}
                    <div className="max-w-5xl mx-auto mt-24 space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="text-4xl font-bold text-gray-900 leading-tight italic">
                                “Dharmo Rakshati Rakshitaha”
                            </h2>
                            <p className="text-[#193a43] text-lg max-w-3xl mx-auto">
                                Akhila Bharatiya Brahamana Mahasangha builds groups at four levels: Religion, Community, Youth, and Women Empowerment.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-50 p-12 rounded-lg border-l-8 border-[#89151e] italic font-bold text-gray-800 leading-relaxed shadow-sm">
                            <p className="text-xl text-[#193a43]">
                                “Dhanāni Jivitaṁ Chaiva Parārthe Prāñje Utsr̥jet. Tannimitto Varaṁ Tyago Vināśo Niyate Sati”
                            </p>
                            <div className="not-italic space-y-4">
                                <p className="text-sm font-medium text-gray-600 uppercase tracking-widest">Meaning:</p>
                                <p className="font-medium text-[#193a43]">
                                    A wise and wealthy person should always give away his wealth for saving the lives of needy people.
                                    It is preferable to spend it for such noble cause, because ultimately all wealth is destined to be destroyed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

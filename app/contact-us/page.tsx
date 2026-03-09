import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact – Akhila Bharatiya Brahmana Mahasangha",
};

import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="flex flex-col w-full pb-20 font-sans">
            <section className="bg-[#89151e] py-16 text-white text-center">
                <h1 className="text-4xl font-black uppercase tracking-widest leading-tight">Contact Us</h1>
                <div className="flex justify-center gap-2 mt-4 text-[11px] font-bold uppercase text-white/70 tracking-[0.2em]">
                    <a href="/" className="hover:text-white transition-colors">Home</a>
                    <span>/</span>
                    <span className="text-white">Contact Us</span>
                </div>
            </section>

            <div className="section-padding">
                <div className="container">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            {/* Contact Details */}
                            <div className="space-y-12">
                                <div className="space-y-4">
                                    <h2 className="text-4xl font-bold text-gray-900 uppercase tracking-tight">Get in Touch</h2>
                                    <div className="w-20 h-1 bg-[#89151e]"></div>
                                    <p className="text-[#193a43] text-lg leading-relaxed">
                                        Get in touch with us for any inquiries about ABBM activities, membership, or spiritual services.
                                    </p>
                                </div>

                                <div className="space-y-10">
                                    <div className="flex gap-8 items-start group">
                                        <div className="w-16 h-16 bg-[#89151e] text-white rounded-sm flex items-center justify-center shrink-0 shadow-2xl group-hover:rotate-6 transition-transform duration-400">
                                            <MapPin size={30} />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#89151e] transition-colors">Main Office</h4>
                                            <p className="text-[#193a43] leading-relaxed font-medium">
                                                1/8, Ahuja Chambers, Kumarakrupa road, Madhav nagar, Bangalore - 560001
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-8 items-start group">
                                        <div className="w-16 h-16 bg-[#89151e] text-white rounded-sm flex items-center justify-center shrink-0 shadow-2xl group-hover:rotate-6 transition-transform duration-400">
                                            <Phone size={30} />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#89151e] transition-colors">Call Us</h4>
                                            <p className="text-[#193a43] font-bold text-lg">
                                                +91 85538 71923
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-8 items-start group">
                                        <div className="w-16 h-16 bg-[#89151e] text-white rounded-sm flex items-center justify-center shrink-0 shadow-2xl group-hover:rotate-6 transition-transform duration-400">
                                            <Mail size={30} />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#89151e] transition-colors">Write Email</h4>
                                            <div className="space-y-1 font-bold text-[#193a43] italic opacity-80">
                                                <p>president@abbm.in</p>
                                                <p>secretary@abbm.in</p>
                                                <p>treasurer@abbm.in</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-gray-50 p-12 rounded-sm border-t-8 border-[#89151e] shadow-2xl">
                                <div className="space-y-10">
                                    <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-tight">Send a Message</h2>
                                    <form className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                className="bg-white border border-gray-100 p-5 rounded-sm outline-none focus:ring-2 focus:ring-[#89151e]/20 focus:border-[#89151e] transition-all font-bold placeholder:font-bold"
                                            />
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                className="bg-white border border-gray-100 p-5 rounded-sm outline-none focus:ring-2 focus:ring-[#89151e]/20 focus:border-[#89151e] transition-all font-bold placeholder:font-bold"
                                            />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Subject"
                                            className="w-full bg-white border border-gray-100 p-5 rounded-sm outline-none focus:ring-2 focus:ring-[#89151e]/20 focus:border-[#89151e] transition-all font-bold placeholder:font-bold"
                                        />
                                        <textarea
                                            placeholder="Your Message"
                                            rows={6}
                                            className="w-full bg-white border border-gray-100 p-5 rounded-sm outline-none focus:ring-2 focus:ring-[#89151e]/20 focus:border-[#89151e] transition-all font-bold placeholder:font-bold resize-none"
                                        ></textarea>

                                        <button className="w-full bg-[#89151e] text-white font-black uppercase tracking-widest p-6 rounded-sm shadow-xl hover:bg-red-950 transition-all flex items-center justify-center gap-3">
                                            Send Your Message <Send size={20} />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="mt-20 h-[500px] border-4 border-white shadow-2xl relative">
                            <div className="absolute inset-0 bg-gray-200">
                                <img
                                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200"
                                    className="w-full h-full object-cover grayscale opacity-60"
                                    alt="Bangalore Map"
                                />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-[#89151e] text-white p-6 rounded-sm shadow-2xl font-black uppercase tracking-widest animate-bounce">
                                    ABBM Head Office
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

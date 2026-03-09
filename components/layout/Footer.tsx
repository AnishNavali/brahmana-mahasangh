import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, ChevronRight } from "lucide-react";

export default function Footer() {
    const quickLinks = [
        { name: "MISSION & VISION", href: "/#mission" },
        { name: "ACTIVITIES", href: "/activities" },
        { name: "EVENTS", href: "/events" },
        { name: "GALLERY", href: "/gallery" },
        { name: "MEMBERSHIP", href: "/registrationForm" },
        { name: "TEAM OF ABBM", href: "/members" },
        { name: "CONTACT US", href: "/contact-us" },
    ];

    return (
        <footer className="relative bg-[#89151e] text-white pt-20 pb-10 overflow-hidden font-sans">
            {/* Background Pattern - Deepas/Lamps Pattern */}
            <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                    backgroundImage: 'url("https://abbm.in/wp-content/uploads/2021/08/footerbackgroundnew.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    mixBlendMode: 'overlay'
                }}
            ></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                    {/* Logo Section */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
                        <div className="bg-white p-3 rounded-full inline-block shadow-2xl">
                            <img
                                src="https://abbm.in/wp-content/uploads/2021/11/abbmlogof.png"
                                alt="ABBM Logo"
                                className="h-20 w-auto"
                            />
                        </div>
                        <div className="space-y-4 font-bold italic text-white/90 leading-relaxed text-[15px]">
                            <p>“Acharaḥ Paramo Dharmaḥ Achāraḥ Paramaṁ Tapaḥ.</p>
                            <p>Achāraḥ Paramaṁ Gyānaṁ Achārāktiṁ Na Sādhyate.”</p>
                        </div>
                        <div className="space-y-2 text-sm text-white/70">
                            <p>Following customs of a religion, is the best of all Dharma.</p>
                            <p>Following customs of a religion, is the best of all Meditation.</p>
                            <p>Following customs of a religion, is the best of all Knowledge</p>
                        </div>
                    </div>

                    {/* Quick Links - Exact Ditto Case */}
                    <div className="flex flex-col items-center lg:items-start space-y-8">
                        <h3 className="text-3xl font-bold border-b-2 border-yellow-400 pb-2 inline-block tracking-tight">Quick Links</h3>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white/80 hover:text-white flex items-center gap-3 text-sm font-bold tracking-widest transition-all hover:translate-x-2">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="flex flex-col items-center lg:items-start lg:col-span-2 space-y-8">
                        <h3 className="text-3xl font-bold border-b-2 border-yellow-400 pb-2 inline-block tracking-tight">Contact</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full">
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <MapPin size={28} className="text-yellow-400 shrink-0" />
                                    <p className="text-sm font-medium leading-relaxed">
                                        1/8, Ahuja Chambers, Kumarakrupa road, Madhav nagar, Bangalore - 560001
                                    </p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <Phone size={24} className="text-yellow-400 shrink-0" />
                                    <a href="tel:918553871923" className="text-sm font-bold hover:text-yellow-400 transition-colors">
                                        +91 85538 71923
                                    </a>
                                </div>
                            </div>
                            <div className="space-y-4 pt-1">
                                {[
                                    "president@abbm.in",
                                    "secretary@abbm.in",
                                    "treasurer@abbm.in"
                                ].map(email => (
                                    <div key={email} className="flex gap-4 items-center group">
                                        <div className="w-8 h-8 rounded-lg border border-white/20 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-[#8b0000] transition-all">
                                            <Mail size={16} />
                                        </div>
                                        <a href={`mailto:${email}`} className="text-sm font-medium hover:text-yellow-400 transition-colors">
                                            {email}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs font-medium text-white/60 text-center tracking-wide">
                        © 2026 Akhila Bharatiya Brahmana Mahasangha – All Rights Reserved. Powered by CreativeKatta & K G Media
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-yellow-400 transition-colors"><Facebook size={18} /></a>
                        <a href="#" className="hover:text-yellow-400 transition-colors"><Twitter size={18} /></a>
                        <a href="#" className="hover:text-yellow-400 transition-colors"><Instagram size={18} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

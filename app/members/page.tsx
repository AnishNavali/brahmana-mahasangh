import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Team Of ABBM – Akhila Bharatiya Brahmana Mahasangha",
};

export default function MembersPage() {
    const members = [
        { name: "Srinath", role: "President" },
        { name: "Girish Neelagund", role: "Secretary" },
        { name: "Trivikram Joshi", role: "Treasurer" },
        { name: "Aralumallige Parthasarathy", role: "Advisory" },
        { name: "Dr Subramanya Sharma", role: "Spiritual Leader" },
        { name: "Dr. Govind Kulkarni", role: "Advisory" },
        { name: "G R Pradeep", role: "Member" },
        { name: "Vishwanath Joshi", role: "Member" },
        { name: "Raghvendra Alur", role: "Member" },
        { name: "CA Anand Kulkarni", role: "Member" },
        { name: "Karthik Somayaji", role: "Member" },
        { name: "G V Yatiraju", role: "Member" },
        { name: "Mukund Kulkarni", role: "Member" },
        { name: "Pavan Kumar Kulkarni", role: "Member" },
        { name: "Dr Ravi Jahagirdar", role: "Member" },
    ];

    return (
        <div className="flex flex-col w-full pb-20 font-sans">
            <section className="bg-[#89151e] py-16 text-white text-center">
                <h1 className="text-4xl font-black uppercase tracking-widest leading-tight">Team Of ABBM</h1>
                <div className="flex justify-center gap-2 mt-4 text-[11px] font-bold uppercase text-white/70 tracking-[0.2em]">
                    <a href="/" className="hover:text-white transition-colors">Home</a>
                    <span>/</span>
                    <span className="text-white">Team Of ABBM</span>
                </div>
            </section>

            <div className="section-padding">
                <div className="container">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="text-4xl font-bold text-gray-900 leading-tight uppercase tracking-wider">Meet the Dedicated Team</h2>
                            <div className="w-20 h-1 bg-[#89151e] mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                            {members.map((member, i) => (
                                <div key={i} className="group bg-white border border-gray-100 p-8 text-center space-y-6 hover:shadow-2xl transition-all duration-400 rounded-sm">
                                    <div className="w-40 h-40 mx-auto rounded-full bg-gray-50 border-8 border-gray-50 overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-500">
                                        <img
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#89151e] transition-colors">{member.name}</h3>
                                        <p className="text-[#89151e] text-sm font-bold uppercase tracking-widest">{member.role}</p>
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

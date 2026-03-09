import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Activities – Akhila Bharatiya Brahmana Mahasangha",
};

export default function ActivitiesPage() {
    const activities = [
        {
            title: "Spiritual",
            desc: "Delivering holistic messages and traditional Vedic rites."
        },
        {
            title: "Social Connectivity",
            desc: "Building a strong network within the Brahmana community."
        },
        {
            title: "Education",
            desc: "Training for children and adults, Sanskrit language, and Vedic values."
        },
        {
            title: "Financial Adjustment",
            desc: "Leveraging financial services to address community challenges."
        },
        {
            title: "State Connectivity",
            desc: "Expanding the reach of ABBM across all states."
        }
    ];

    return (
        <div className="flex flex-col w-full pb-20 font-sans">
            <section className="bg-[#89151e] py-16 text-white text-center">
                <h1 className="text-4xl font-black uppercase tracking-widest leading-tight">Activities</h1>
                <div className="flex justify-center gap-2 mt-4 text-[11px] font-bold uppercase text-white/70 tracking-[0.2em]">
                    <a href="/" className="hover:text-white transition-colors">Home</a>
                    <span>/</span>
                    <span className="text-white">Activities</span>
                </div>
            </section>

            <div className="section-padding">
                <div className="container">
                    <div className="max-w-5xl mx-auto space-y-20">
                        <div className="text-center space-y-4 max-w-3xl mx-auto">
                            <h2 className="text-4xl font-bold text-gray-900 leading-tight uppercase tracking-wider">What We Do</h2>
                            <div className="w-20 h-1 bg-[#89151e] mx-auto"></div>
                            <p className="text-[#193a43] text-lg">
                                ABBMS is dedicated to a wide range of activities that foster spiritual growth,
                                social well-being, and educational empowerment.
                            </p>
                        </div>

                        {/* Activity Blocks */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {activities.map((act, i) => (
                                <div key={i} className="group p-12 bg-white border border-gray-100 hover:border-[#89151e] border-b-4 hover:border-b-4 transition-all duration-400 text-center space-y-4 shadow-sm hover:shadow-2xl hover:-translate-y-2 rounded-sm">
                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#89151e] transition-colors">{act.title}</h3>
                                    <p className="text-[#193a43] text-sm leading-relaxed opacity-80">{act.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Vision Section - Exact Ditto Text */}
                        <div className="bg-[#89151e] p-16 rounded-sm text-white space-y-8 shadow-2xl relative overflow-hidden">
                            <h3 className="text-4xl font-bold uppercase tracking-widest relative z-10">Vision of ABBMS</h3>
                            <p className="text-xl leading-relaxed italic font-medium relative z-10 opacity-90">
                                "Social finance serves as a middle ground between traditional business, whose main driver
                                is to achieve financial value and traditional charity, whose main driver is to achieve
                                social value. Social finance is a category of financial services which aims to
                                leverage & address community challenges."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

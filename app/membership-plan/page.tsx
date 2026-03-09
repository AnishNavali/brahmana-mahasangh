import { MembershipSelection } from "../../components/membership/membership-plan";

export default function MembershipPlanPage() {
    return (
        <div className="flex flex-col w-full pb-20 font-sans">
            <section className="bg-[#89151e] py-16 text-white text-center">
                <h1 className="text-4xl font-black uppercase tracking-widest leading-tight">Membership Plan</h1>
                <div className="flex justify-center gap-2 mt-4 text-[11px] font-bold uppercase text-white/70 tracking-[0.2em]">
                    <a href="/" className="hover:text-white transition-colors">Home</a>
                    <span>/</span>
                    <span className="text-white">Membership Plan</span>
                </div>
            </section>
            <div className="container mx-auto py-12 px-4">
                <MembershipSelection />
            </div>
        </div>
    );
}